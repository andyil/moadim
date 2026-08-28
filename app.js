(function () {
  "use strict";

  var days = CALENDAR.days;

  // Invert the "next" pointers built by unify.py so we can walk backward
  // without doing any date arithmetic in JS.
  var prev = {};
  Object.keys(days).forEach(function (d) {
    var n = days[d].next;
    if (n) prev[n] = d;
  });

  function stepper(direction) {
    return direction === "forward"
      ? function (d) { return days[d] && days[d].next; }
      : function (d) { return prev[d]; };
  }

  function isRecess(d) { return !!days[d].recess_name; }

  // When recess days are counted toward N (skipRecess=false), landing on a
  // recess day is fine — only weekend/shabaton can push the final day forward.
  function isClosedForRollover(d, skipRecess) {
    return (skipRecess && !!days[d].recess_name) || !!days[d].weekend || !!days[d].shabaton_name;
  }

  function closedReason(d, skipRecess) {
    var info = days[d];
    if (skipRecess && info.recess_name) return info.recess_name;
    if (info.shabaton_name) return info.shabaton_name;
    if (info.weekend) return "סוף שבוע";
    return null;
  }

  // Returns { end, adjustedFrom, adjustedReasons, recessRanges, recessDaysSkipped }
  // or throws a string error. skipRecess defaults to true.
  function computeDeadline(startDate, direction, n, skipRecess) {
    skipRecess = skipRecess !== false;

    if (!days[startDate]) {
      throw "התאריך שנבחר מחוץ לטווח הנתונים הנתמך (" + firstDate() + " עד " + lastDate() + ").";
    }

    var next = stepper(direction);
    var current = startDate;
    var counted = 0;
    var recessRanges = [];
    var recessDaysSkipped = 0;
    var inRecessRun = false;

    while (counted < n) {
      var candidate = next(current);
      if (!candidate) {
        throw "אין מספיק נתונים בטווח כדי לחשב מועד זה.";
      }
      current = candidate;
      if (skipRecess && isRecess(current)) {
        recessDaysSkipped += 1;
        if (inRecessRun) {
          recessRanges[recessRanges.length - 1].end = current;
        } else {
          recessRanges.push({ start: current, end: current, name: days[current].recess_name });
          inRecessRun = true;
        }
      } else {
        counted += 1;
        inRecessRun = false;
      }
    }

    var tentative = current;
    var reasons = [];

    while (isClosedForRollover(current, skipRecess)) {
      var reason = closedReason(current, skipRecess);
      if (reason && reasons.indexOf(reason) === -1) reasons.push(reason);
      var stepped = next(current);
      if (!stepped) {
        throw "אין מספיק נתונים בטווח כדי לחשב מועד זה.";
      }
      current = stepped;
    }

    return {
      end: current,
      adjustedFrom: current !== tentative ? tentative : null,
      adjustedReasons: reasons,
      recessRanges: recessRanges,
      recessDaysSkipped: recessDaysSkipped,
    };
  }

  function firstDate() { return Object.keys(days)[0]; }
  function lastDate() { return Object.keys(days)[Object.keys(days).length - 1]; }

  function formatDate(dateStr) {
    var parts = dateStr.split("-").map(Number);
    var d = new Date(parts[0], parts[1] - 1, parts[2]);
    return d.toLocaleDateString("he-IL", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  function formatDateShort(dateStr) {
    var parts = dateStr.split("-").map(Number);
    var d = new Date(parts[0], parts[1] - 1, parts[2]);
    return d.toLocaleDateString("he-IL", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  var RECESS_LABELS = {
    "pagrat pesach": "פגרת פסח",
    "pagrat sukot": "פגרת סוכות",
    "pagrat kaitz": "פגרת קיץ",
  };
  var SHABATON_LABELS = {
    "rosh hashana": "ראש השנה",
    "yom kipur": "יום כיפור",
    "shavuot": "שבועות",
    "yom haatzmaut": "יום העצמאות",
    "election day": "יום הבחירות",
  };

  function reasonLabel(reason) {
    return RECESS_LABELS[reason] || SHABATON_LABELS[reason] || reason;
  }

  var deadlineTypeGroup = document.getElementById("deadline-type-group");
  var select = document.getElementById("deadline-select");
  var customControls = document.getElementById("custom-controls");
  var customDaysInput = document.getElementById("custom-days");
  var customDaysSuffix = document.getElementById("custom-days-suffix");
  var customCountRecessInput = document.getElementById("custom-count-recess");
  var startDateInput = document.getElementById("start-date");
  var startDateLabel = document.getElementById("start-date-label");
  var computeBtn = document.getElementById("compute-btn");
  var resultBox = document.getElementById("result");
  var resultDate = document.getElementById("result-date");
  var resultParams = document.getElementById("result-params");
  var resultRecess = document.getElementById("result-recess");
  var resultAdjusted = document.getElementById("result-adjusted");
  var errorBox = document.getElementById("error");
  var creditEl = document.getElementById("credit");

  DEADLINES.forEach(function (d, idx) {
    var opt = document.createElement("option");
    opt.value = idx;
    opt.textContent = d.end_event.hebrew;
    select.appendChild(opt);
  });

  function todayIso() {
    var d = new Date();
    var mm = String(d.getMonth() + 1).padStart(2, "0");
    var dd = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + mm + "-" + dd;
  }
  startDateInput.value = todayIso();

  function updateDaysSuffix() {
    var v = parseInt(customDaysInput.value, 10);
    customDaysSuffix.textContent = v === 1 ? "יום" : "ימים";
  }
  customDaysInput.addEventListener("input", updateDaysSuffix);
  updateDaysSuffix();

  function isCustom() {
    return document.querySelector('input[name="calc-mode"]:checked').value === "days";
  }

  function renderControls() {
    deadlineTypeGroup.hidden = isCustom();
    customControls.hidden = !isCustom();
    startDateLabel.textContent = isCustom()
      ? "תאריך התחלה"
      : DEADLINES[select.value].start_event.hebrew;
  }

  select.addEventListener("change", renderControls);
  document.querySelectorAll('input[name="calc-mode"]').forEach(function (input) {
    input.addEventListener("change", renderControls);
  });
  renderControls();

  computeBtn.addEventListener("click", function () {
    errorBox.hidden = true;
    resultBox.hidden = true;

    var startDate = startDateInput.value;
    if (!startDate) {
      errorBox.textContent = "יש לבחור תאריך לאירוע הפתיחה.";
      errorBox.hidden = false;
      return;
    }

    var direction, n, skipRecess, isCustomDeadline = isCustom();

    if (isCustomDeadline) {
      n = parseInt(customDaysInput.value, 10);
      if (!(n > 0)) {
        errorBox.textContent = "יש להזין מספר ימים גדול מאפס.";
        errorBox.hidden = false;
        return;
      }
      direction = document.querySelector('input[name="custom-direction"]:checked').value;
      skipRecess = !customCountRecessInput.checked;
    } else {
      var d = DEADLINES[select.value];
      n = d.days;
      direction = d.direction;
      skipRecess = true;
    }

    try {
      var result = computeDeadline(startDate, direction, n, skipRecess);
      resultDate.textContent = formatDate(result.end);

      if (isCustomDeadline) {
        resultParams.hidden = true;
      } else {
        resultParams.textContent =
          n + " ימים " + (direction === "forward" ? "לעתיד" : "לעבר") + ", " +
          (skipRecess ? "הפגרה לא באה במניין הימים" : "ימי הפגרה באים במניין") + ".";
        resultParams.hidden = false;
      }

      if (result.recessDaysSkipped > 0) {
        var rangeTexts = result.recessRanges.map(function (r) {
          var chronoStart = direction === "forward" ? r.start : r.end;
          var chronoEnd = direction === "forward" ? r.end : r.start;
          var rangeLabel = reasonLabel(r.name);
          return chronoStart === chronoEnd
            ? formatDateShort(chronoStart) + " (" + rangeLabel + ")"
            : "בין " + formatDateShort(chronoStart) + " עד " + formatDateShort(chronoEnd) + " (" + rangeLabel + ")";
        });
        resultRecess.textContent =
          "התאריכים " + rangeTexts.join(", ") + " לא נספרו בשל פגרה. בסך הכול לא נספרו " +
          result.recessDaysSkipped + " ימים.";
        resultRecess.hidden = false;
      } else {
        resultRecess.hidden = true;
      }

      if (result.adjustedFrom) {
        var labels = result.adjustedReasons.map(reasonLabel).join(", ");
        resultAdjusted.textContent =
          "המועד המקורי (" + formatDate(result.adjustedFrom) + ") חל ב" + labels + ", ולכן נדחה.";
        resultAdjusted.hidden = false;
      } else {
        resultAdjusted.hidden = true;
      }
      resultBox.hidden = false;
    } catch (err) {
      errorBox.textContent = typeof err === "string" ? err : "אירעה שגיאה בחישוב המועד.";
      errorBox.hidden = false;
    }
  });

  if (CALENDAR.credit_link) {
    creditEl.href = CALENDAR.credit_link;
  }
})();
