const DEADLINES = [
  {
    "id": "statement-of-defense",
    "start_event": {
      "hebrew": "המצאת כתב התביעה לנתבע",
      "english": "service of the statement of claim on the defendant"
    },
    "direction": "forward",
    "days": 60,
    "end_event": {
      "hebrew": "הגשת כתב הגנה",
      "english": "filing of the statement of defense"
    }
  },
  {
    "id": "statement-of-reply",
    "start_event": {
      "hebrew": "הגשת כתב הגנה",
      "english": "filing of the statement of defense"
    },
    "direction": "forward",
    "days": 15,
    "end_event": {
      "hebrew": "הגשת כתב תשובה",
      "english": "filing of the statement of reply"
    }
  },
  {
    "id": "exchange-of-interrogatories",
    "start_event": {
      "hebrew": "הגשת כתב הטענות האחרון",
      "english": "filing of the last pleading"
    },
    "direction": "forward",
    "days": 30,
    "end_event": {
      "hebrew": "החלפת שאלונים",
      "english": "exchange of interrogatories"
    }
  },
  {
    "id": "preliminary-hearing",
    "start_event": {
      "hebrew": "הגשת כתב הטענות האחרון",
      "english": "filing of the last pleading"
    },
    "direction": "forward",
    "days": 30,
    "end_event": {
      "hebrew": "דיון מקדמי",
      "english": "preliminary hearing"
    }
  },
  {
    "id": "report-on-preliminary-hearing",
    "start_event": {
      "hebrew": "קדם המשפט הראשון",
      "english": "first pretrial hearing"
    },
    "direction": "backward",
    "days": 20,
    "end_event": {
      "hebrew": "דיווח על דיון מקדמי",
      "english": "report on the preliminary hearing"
    },
    "notes": {
      "hebrew": "יש להגיש בתום הדיון המקדמי, ולא יאוחר מ-20 ימים לפני קדם המשפט הראשון",
      "english": "Must be filed at the conclusion of the preliminary hearing, and no later than 20 days before the first pretrial hearing"
    }
  },
  {
    "id": "list-of-motions",
    "start_event": {
      "hebrew": "קדם משפט",
      "english": "pretrial hearing"
    },
    "direction": "backward",
    "days": 20,
    "end_event": {
      "hebrew": "הגשת רשימת בקשות",
      "english": "filing of the list of motions"
    }
  },
  {
    "id": "last-request-before-motions-list",
    "start_event": {
      "hebrew": "הגשת רשימת הבקשות",
      "english": "filing of the list of motions"
    },
    "direction": "backward",
    "days": 7,
    "end_event": {
      "hebrew": "פניה אחרונה לפני הגשת רשימת הבקשות",
      "english": "last request before filing the list of motions"
    }
  },
  {
    "id": "plaintiff-witness-list",
    "start_event": {
      "hebrew": "קדם משפט",
      "english": "pretrial hearing"
    },
    "direction": "backward",
    "days": 20,
    "end_event": {
      "hebrew": "הגשת רשימת עדי התובע",
      "english": "filing of the plaintiff's witness list"
    }
  },
  {
    "id": "defendant-witness-list",
    "start_event": {
      "hebrew": "הגשת רשימת עדי התובע",
      "english": "filing of the plaintiff's witness list"
    },
    "direction": "forward",
    "days": 14,
    "end_event": {
      "hebrew": "הגשת רשימת עדי הנתבע",
      "english": "filing of the defendant's witness list"
    }
  }
]
;
const CALENDAR = {
  "credit": "powered by hebcal.com CC BY 4.0",
  "credit_link": "https://www.hebcal.com/home/4289/giving-appropriate-credit-to-hebcal",
  "days": {
    "2025-01-01": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "טבת",
        "d": "א׳"
      },
      "titles": [
        "1st of Tevet, 5785",
        "Chanukah: 8 Candles"
      ],
      "next": "2025-01-02"
    },
    "2025-01-02": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "טבת",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Tevet",
        "Chanukah: 8th Day"
      ],
      "next": "2025-01-03"
    },
    "2025-01-03": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "טבת",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Tevet"
      ],
      "weekend": true,
      "next": "2025-01-04"
    },
    "2025-01-04": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "טבת",
        "d": "ד׳"
      },
      "titles": [
        "4th of Tevet"
      ],
      "weekend": true,
      "next": "2025-01-05"
    },
    "2025-01-05": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "טבת",
        "d": "ה׳"
      },
      "titles": [
        "5th of Tevet"
      ],
      "next": "2025-01-06"
    },
    "2025-01-06": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "טבת",
        "d": "ו׳"
      },
      "titles": [
        "6th of Tevet"
      ],
      "next": "2025-01-07"
    },
    "2025-01-07": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "טבת",
        "d": "ז׳"
      },
      "titles": [
        "7th of Tevet"
      ],
      "next": "2025-01-08"
    },
    "2025-01-08": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "טבת",
        "d": "ח׳"
      },
      "titles": [
        "8th of Tevet"
      ],
      "next": "2025-01-09"
    },
    "2025-01-09": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "טבת",
        "d": "ט׳"
      },
      "titles": [
        "9th of Tevet"
      ],
      "next": "2025-01-10"
    },
    "2025-01-10": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "טבת",
        "d": "י׳"
      },
      "titles": [
        "10th of Tevet"
      ],
      "weekend": true,
      "next": "2025-01-11"
    },
    "2025-01-11": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "טבת",
        "d": "י״א"
      },
      "titles": [
        "11th of Tevet"
      ],
      "weekend": true,
      "next": "2025-01-12"
    },
    "2025-01-12": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "טבת",
        "d": "י״ב"
      },
      "titles": [
        "12th of Tevet"
      ],
      "next": "2025-01-13"
    },
    "2025-01-13": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "טבת",
        "d": "י״ג"
      },
      "titles": [
        "13th of Tevet"
      ],
      "next": "2025-01-14"
    },
    "2025-01-14": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "טבת",
        "d": "י״ד"
      },
      "titles": [
        "14th of Tevet"
      ],
      "next": "2025-01-15"
    },
    "2025-01-15": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "טבת",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Tevet"
      ],
      "next": "2025-01-16"
    },
    "2025-01-16": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "טבת",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Tevet"
      ],
      "next": "2025-01-17"
    },
    "2025-01-17": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "טבת",
        "d": "י״ז"
      },
      "titles": [
        "17th of Tevet"
      ],
      "weekend": true,
      "next": "2025-01-18"
    },
    "2025-01-18": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "טבת",
        "d": "י״ח"
      },
      "titles": [
        "18th of Tevet"
      ],
      "weekend": true,
      "next": "2025-01-19"
    },
    "2025-01-19": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "טבת",
        "d": "י״ט"
      },
      "titles": [
        "19th of Tevet"
      ],
      "next": "2025-01-20"
    },
    "2025-01-20": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "טבת",
        "d": "כ׳"
      },
      "titles": [
        "20th of Tevet"
      ],
      "next": "2025-01-21"
    },
    "2025-01-21": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "טבת",
        "d": "כ״א"
      },
      "titles": [
        "21st of Tevet"
      ],
      "next": "2025-01-22"
    },
    "2025-01-22": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "טבת",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Tevet"
      ],
      "next": "2025-01-23"
    },
    "2025-01-23": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "טבת",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Tevet"
      ],
      "next": "2025-01-24"
    },
    "2025-01-24": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "טבת",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Tevet"
      ],
      "weekend": true,
      "next": "2025-01-25"
    },
    "2025-01-25": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "טבת",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Tevet"
      ],
      "weekend": true,
      "next": "2025-01-26"
    },
    "2025-01-26": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "טבת",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Tevet"
      ],
      "next": "2025-01-27"
    },
    "2025-01-27": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "טבת",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Tevet"
      ],
      "next": "2025-01-28"
    },
    "2025-01-28": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "טבת",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Tevet"
      ],
      "next": "2025-01-29"
    },
    "2025-01-29": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "טבת",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Tevet"
      ],
      "next": "2025-01-30"
    },
    "2025-01-30": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "שבט",
        "d": "א׳"
      },
      "titles": [
        "1st of Sh’vat, 5785"
      ],
      "next": "2025-01-31"
    },
    "2025-01-31": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "שבט",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Sh’vat"
      ],
      "weekend": true,
      "next": "2025-02-01"
    },
    "2025-02-01": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "שבט",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Sh’vat"
      ],
      "weekend": true,
      "next": "2025-02-02"
    },
    "2025-02-02": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "שבט",
        "d": "ד׳"
      },
      "titles": [
        "4th of Sh’vat"
      ],
      "next": "2025-02-03"
    },
    "2025-02-03": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "שבט",
        "d": "ה׳"
      },
      "titles": [
        "5th of Sh’vat"
      ],
      "next": "2025-02-04"
    },
    "2025-02-04": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "שבט",
        "d": "ו׳"
      },
      "titles": [
        "6th of Sh’vat"
      ],
      "next": "2025-02-05"
    },
    "2025-02-05": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "שבט",
        "d": "ז׳"
      },
      "titles": [
        "7th of Sh’vat"
      ],
      "next": "2025-02-06"
    },
    "2025-02-06": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "שבט",
        "d": "ח׳"
      },
      "titles": [
        "8th of Sh’vat"
      ],
      "next": "2025-02-07"
    },
    "2025-02-07": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "שבט",
        "d": "ט׳"
      },
      "titles": [
        "9th of Sh’vat"
      ],
      "weekend": true,
      "next": "2025-02-08"
    },
    "2025-02-08": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "שבט",
        "d": "י׳"
      },
      "titles": [
        "10th of Sh’vat"
      ],
      "weekend": true,
      "next": "2025-02-09"
    },
    "2025-02-09": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "שבט",
        "d": "י״א"
      },
      "titles": [
        "11th of Sh’vat"
      ],
      "next": "2025-02-10"
    },
    "2025-02-10": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "שבט",
        "d": "י״ב"
      },
      "titles": [
        "12th of Sh’vat"
      ],
      "next": "2025-02-11"
    },
    "2025-02-11": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "שבט",
        "d": "י״ג"
      },
      "titles": [
        "13th of Sh’vat"
      ],
      "next": "2025-02-12"
    },
    "2025-02-12": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "שבט",
        "d": "י״ד"
      },
      "titles": [
        "14th of Sh’vat"
      ],
      "next": "2025-02-13"
    },
    "2025-02-13": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "שבט",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Sh’vat",
        "Tu BiShvat"
      ],
      "next": "2025-02-14"
    },
    "2025-02-14": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "שבט",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Sh’vat"
      ],
      "weekend": true,
      "next": "2025-02-15"
    },
    "2025-02-15": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "שבט",
        "d": "י״ז"
      },
      "titles": [
        "17th of Sh’vat"
      ],
      "weekend": true,
      "next": "2025-02-16"
    },
    "2025-02-16": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "שבט",
        "d": "י״ח"
      },
      "titles": [
        "18th of Sh’vat"
      ],
      "next": "2025-02-17"
    },
    "2025-02-17": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "שבט",
        "d": "י״ט"
      },
      "titles": [
        "19th of Sh’vat"
      ],
      "next": "2025-02-18"
    },
    "2025-02-18": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "שבט",
        "d": "כ׳"
      },
      "titles": [
        "20th of Sh’vat"
      ],
      "next": "2025-02-19"
    },
    "2025-02-19": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "שבט",
        "d": "כ״א"
      },
      "titles": [
        "21st of Sh’vat"
      ],
      "next": "2025-02-20"
    },
    "2025-02-20": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "שבט",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Sh’vat"
      ],
      "next": "2025-02-21"
    },
    "2025-02-21": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "שבט",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Sh’vat"
      ],
      "weekend": true,
      "next": "2025-02-22"
    },
    "2025-02-22": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "שבט",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Sh’vat"
      ],
      "weekend": true,
      "next": "2025-02-23"
    },
    "2025-02-23": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "שבט",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Sh’vat"
      ],
      "next": "2025-02-24"
    },
    "2025-02-24": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "שבט",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Sh’vat"
      ],
      "next": "2025-02-25"
    },
    "2025-02-25": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "שבט",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Sh’vat"
      ],
      "next": "2025-02-26"
    },
    "2025-02-26": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "שבט",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Sh’vat"
      ],
      "next": "2025-02-27"
    },
    "2025-02-27": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "שבט",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Sh’vat"
      ],
      "next": "2025-02-28"
    },
    "2025-02-28": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "שבט",
        "d": "ל׳"
      },
      "titles": [
        "30th of Sh’vat"
      ],
      "weekend": true,
      "next": "2025-03-01"
    },
    "2025-03-01": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אדר",
        "d": "א׳"
      },
      "titles": [
        "1st of Adar, 5785"
      ],
      "weekend": true,
      "next": "2025-03-02"
    },
    "2025-03-02": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אדר",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Adar"
      ],
      "next": "2025-03-03"
    },
    "2025-03-03": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אדר",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Adar"
      ],
      "next": "2025-03-04"
    },
    "2025-03-04": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אדר",
        "d": "ד׳"
      },
      "titles": [
        "4th of Adar"
      ],
      "next": "2025-03-05"
    },
    "2025-03-05": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אדר",
        "d": "ה׳"
      },
      "titles": [
        "5th of Adar"
      ],
      "next": "2025-03-06"
    },
    "2025-03-06": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אדר",
        "d": "ו׳"
      },
      "titles": [
        "6th of Adar"
      ],
      "next": "2025-03-07"
    },
    "2025-03-07": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אדר",
        "d": "ז׳"
      },
      "titles": [
        "7th of Adar"
      ],
      "weekend": true,
      "next": "2025-03-08"
    },
    "2025-03-08": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אדר",
        "d": "ח׳"
      },
      "titles": [
        "8th of Adar"
      ],
      "weekend": true,
      "next": "2025-03-09"
    },
    "2025-03-09": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אדר",
        "d": "ט׳"
      },
      "titles": [
        "9th of Adar"
      ],
      "next": "2025-03-10"
    },
    "2025-03-10": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אדר",
        "d": "י׳"
      },
      "titles": [
        "10th of Adar"
      ],
      "next": "2025-03-11"
    },
    "2025-03-11": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אדר",
        "d": "י״א"
      },
      "titles": [
        "11th of Adar"
      ],
      "next": "2025-03-12"
    },
    "2025-03-12": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אדר",
        "d": "י״ב"
      },
      "titles": [
        "12th of Adar"
      ],
      "next": "2025-03-13"
    },
    "2025-03-13": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אדר",
        "d": "י״ג"
      },
      "titles": [
        "13th of Adar",
        "Erev Purim"
      ],
      "next": "2025-03-14"
    },
    "2025-03-14": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אדר",
        "d": "י״ד"
      },
      "titles": [
        "14th of Adar",
        "Purim"
      ],
      "weekend": true,
      "next": "2025-03-15"
    },
    "2025-03-15": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אדר",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Adar",
        "Shushan Purim"
      ],
      "weekend": true,
      "next": "2025-03-16"
    },
    "2025-03-16": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אדר",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Adar",
        "Purim Meshulash"
      ],
      "next": "2025-03-17"
    },
    "2025-03-17": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אדר",
        "d": "י״ז"
      },
      "titles": [
        "17th of Adar"
      ],
      "next": "2025-03-18"
    },
    "2025-03-18": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אדר",
        "d": "י״ח"
      },
      "titles": [
        "18th of Adar"
      ],
      "next": "2025-03-19"
    },
    "2025-03-19": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אדר",
        "d": "י״ט"
      },
      "titles": [
        "19th of Adar"
      ],
      "next": "2025-03-20"
    },
    "2025-03-20": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אדר",
        "d": "כ׳"
      },
      "titles": [
        "20th of Adar"
      ],
      "next": "2025-03-21"
    },
    "2025-03-21": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אדר",
        "d": "כ״א"
      },
      "titles": [
        "21st of Adar"
      ],
      "weekend": true,
      "next": "2025-03-22"
    },
    "2025-03-22": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אדר",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Adar"
      ],
      "weekend": true,
      "next": "2025-03-23"
    },
    "2025-03-23": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אדר",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Adar"
      ],
      "next": "2025-03-24"
    },
    "2025-03-24": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אדר",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Adar"
      ],
      "next": "2025-03-25"
    },
    "2025-03-25": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אדר",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Adar"
      ],
      "next": "2025-03-26"
    },
    "2025-03-26": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אדר",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Adar"
      ],
      "next": "2025-03-27"
    },
    "2025-03-27": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אדר",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Adar"
      ],
      "next": "2025-03-28"
    },
    "2025-03-28": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אדר",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Adar"
      ],
      "weekend": true,
      "next": "2025-03-29"
    },
    "2025-03-29": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אדר",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Adar"
      ],
      "weekend": true,
      "next": "2025-03-30"
    },
    "2025-03-30": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "ניסן",
        "d": "א׳"
      },
      "titles": [
        "1st of Nisan, 5785"
      ],
      "next": "2025-03-31"
    },
    "2025-03-31": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "ניסן",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Nisan"
      ],
      "next": "2025-04-01"
    },
    "2025-04-01": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "ניסן",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Nisan"
      ],
      "next": "2025-04-02"
    },
    "2025-04-02": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "ניסן",
        "d": "ד׳"
      },
      "titles": [
        "4th of Nisan"
      ],
      "next": "2025-04-03"
    },
    "2025-04-03": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "ניסן",
        "d": "ה׳"
      },
      "titles": [
        "5th of Nisan"
      ],
      "next": "2025-04-04"
    },
    "2025-04-04": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "ניסן",
        "d": "ו׳"
      },
      "titles": [
        "6th of Nisan"
      ],
      "weekend": true,
      "next": "2025-04-05"
    },
    "2025-04-05": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "ניסן",
        "d": "ז׳"
      },
      "titles": [
        "7th of Nisan"
      ],
      "weekend": true,
      "next": "2025-04-06"
    },
    "2025-04-06": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "ניסן",
        "d": "ח׳"
      },
      "titles": [
        "8th of Nisan"
      ],
      "next": "2025-04-07"
    },
    "2025-04-07": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "ניסן",
        "d": "ט׳"
      },
      "titles": [
        "9th of Nisan"
      ],
      "next": "2025-04-08"
    },
    "2025-04-08": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "ניסן",
        "d": "י׳"
      },
      "titles": [
        "10th of Nisan"
      ],
      "next": "2025-04-09"
    },
    "2025-04-09": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "ניסן",
        "d": "י״א"
      },
      "titles": [
        "11th of Nisan"
      ],
      "next": "2025-04-10"
    },
    "2025-04-10": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "ניסן",
        "d": "י״ב"
      },
      "titles": [
        "12th of Nisan"
      ],
      "next": "2025-04-11"
    },
    "2025-04-11": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "ניסן",
        "d": "י״ג"
      },
      "titles": [
        "13th of Nisan"
      ],
      "weekend": true,
      "next": "2025-04-12"
    },
    "2025-04-12": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "ניסן",
        "d": "י״ד"
      },
      "titles": [
        "14th of Nisan",
        "Erev Pesach"
      ],
      "recess_name": "pagrat pesach",
      "weekend": true,
      "next": "2025-04-13"
    },
    "2025-04-13": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "ניסן",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Nisan",
        "Pesach I"
      ],
      "recess_name": "pagrat pesach",
      "next": "2025-04-14"
    },
    "2025-04-14": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "ניסן",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Nisan",
        "Pesach II (CH’’M)"
      ],
      "recess_name": "pagrat pesach",
      "next": "2025-04-15"
    },
    "2025-04-15": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "ניסן",
        "d": "י״ז"
      },
      "titles": [
        "17th of Nisan",
        "Pesach III (CH’’M)"
      ],
      "recess_name": "pagrat pesach",
      "next": "2025-04-16"
    },
    "2025-04-16": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "ניסן",
        "d": "י״ח"
      },
      "titles": [
        "18th of Nisan",
        "Pesach IV (CH’’M)"
      ],
      "recess_name": "pagrat pesach",
      "next": "2025-04-17"
    },
    "2025-04-17": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "ניסן",
        "d": "י״ט"
      },
      "titles": [
        "19th of Nisan",
        "Pesach V (CH’’M)"
      ],
      "recess_name": "pagrat pesach",
      "next": "2025-04-18"
    },
    "2025-04-18": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "ניסן",
        "d": "כ׳"
      },
      "titles": [
        "20th of Nisan",
        "Pesach VI (CH’’M)"
      ],
      "recess_name": "pagrat pesach",
      "weekend": true,
      "next": "2025-04-19"
    },
    "2025-04-19": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "ניסן",
        "d": "כ״א"
      },
      "titles": [
        "21st of Nisan",
        "Pesach VII"
      ],
      "recess_name": "pagrat pesach",
      "weekend": true,
      "next": "2025-04-20"
    },
    "2025-04-20": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "ניסן",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Nisan"
      ],
      "next": "2025-04-21"
    },
    "2025-04-21": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "ניסן",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Nisan"
      ],
      "next": "2025-04-22"
    },
    "2025-04-22": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "ניסן",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Nisan"
      ],
      "next": "2025-04-23"
    },
    "2025-04-23": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "ניסן",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Nisan"
      ],
      "next": "2025-04-24"
    },
    "2025-04-24": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "ניסן",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Nisan"
      ],
      "next": "2025-04-25"
    },
    "2025-04-25": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "ניסן",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Nisan"
      ],
      "weekend": true,
      "next": "2025-04-26"
    },
    "2025-04-26": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "ניסן",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Nisan"
      ],
      "weekend": true,
      "next": "2025-04-27"
    },
    "2025-04-27": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "ניסן",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Nisan"
      ],
      "next": "2025-04-28"
    },
    "2025-04-28": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "ניסן",
        "d": "ל׳"
      },
      "titles": [
        "30th of Nisan"
      ],
      "next": "2025-04-29"
    },
    "2025-04-29": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אייר",
        "d": "א׳"
      },
      "titles": [
        "1st of Iyyar, 5785"
      ],
      "next": "2025-04-30"
    },
    "2025-04-30": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אייר",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Iyyar"
      ],
      "next": "2025-05-01"
    },
    "2025-05-01": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אייר",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Iyyar"
      ],
      "shabaton_name": "yom haatzmaut",
      "next": "2025-05-02"
    },
    "2025-05-02": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אייר",
        "d": "ד׳"
      },
      "titles": [
        "4th of Iyyar"
      ],
      "weekend": true,
      "next": "2025-05-03"
    },
    "2025-05-03": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אייר",
        "d": "ה׳"
      },
      "titles": [
        "5th of Iyyar"
      ],
      "weekend": true,
      "next": "2025-05-04"
    },
    "2025-05-04": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אייר",
        "d": "ו׳"
      },
      "titles": [
        "6th of Iyyar"
      ],
      "next": "2025-05-05"
    },
    "2025-05-05": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אייר",
        "d": "ז׳"
      },
      "titles": [
        "7th of Iyyar"
      ],
      "next": "2025-05-06"
    },
    "2025-05-06": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אייר",
        "d": "ח׳"
      },
      "titles": [
        "8th of Iyyar"
      ],
      "next": "2025-05-07"
    },
    "2025-05-07": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אייר",
        "d": "ט׳"
      },
      "titles": [
        "9th of Iyyar"
      ],
      "next": "2025-05-08"
    },
    "2025-05-08": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אייר",
        "d": "י׳"
      },
      "titles": [
        "10th of Iyyar"
      ],
      "next": "2025-05-09"
    },
    "2025-05-09": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אייר",
        "d": "י״א"
      },
      "titles": [
        "11th of Iyyar"
      ],
      "weekend": true,
      "next": "2025-05-10"
    },
    "2025-05-10": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אייר",
        "d": "י״ב"
      },
      "titles": [
        "12th of Iyyar"
      ],
      "weekend": true,
      "next": "2025-05-11"
    },
    "2025-05-11": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אייר",
        "d": "י״ג"
      },
      "titles": [
        "13th of Iyyar"
      ],
      "next": "2025-05-12"
    },
    "2025-05-12": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אייר",
        "d": "י״ד"
      },
      "titles": [
        "14th of Iyyar",
        "Pesach Sheni"
      ],
      "next": "2025-05-13"
    },
    "2025-05-13": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אייר",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Iyyar"
      ],
      "next": "2025-05-14"
    },
    "2025-05-14": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אייר",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Iyyar"
      ],
      "next": "2025-05-15"
    },
    "2025-05-15": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אייר",
        "d": "י״ז"
      },
      "titles": [
        "17th of Iyyar"
      ],
      "next": "2025-05-16"
    },
    "2025-05-16": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אייר",
        "d": "י״ח"
      },
      "titles": [
        "18th of Iyyar",
        "Lag BaOmer"
      ],
      "weekend": true,
      "next": "2025-05-17"
    },
    "2025-05-17": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אייר",
        "d": "י״ט"
      },
      "titles": [
        "19th of Iyyar"
      ],
      "weekend": true,
      "next": "2025-05-18"
    },
    "2025-05-18": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אייר",
        "d": "כ׳"
      },
      "titles": [
        "20th of Iyyar"
      ],
      "next": "2025-05-19"
    },
    "2025-05-19": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אייר",
        "d": "כ״א"
      },
      "titles": [
        "21st of Iyyar"
      ],
      "next": "2025-05-20"
    },
    "2025-05-20": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אייר",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Iyyar"
      ],
      "next": "2025-05-21"
    },
    "2025-05-21": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אייר",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Iyyar"
      ],
      "next": "2025-05-22"
    },
    "2025-05-22": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אייר",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Iyyar"
      ],
      "next": "2025-05-23"
    },
    "2025-05-23": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אייר",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Iyyar"
      ],
      "weekend": true,
      "next": "2025-05-24"
    },
    "2025-05-24": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אייר",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Iyyar"
      ],
      "weekend": true,
      "next": "2025-05-25"
    },
    "2025-05-25": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אייר",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Iyyar"
      ],
      "next": "2025-05-26"
    },
    "2025-05-26": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אייר",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Iyyar"
      ],
      "next": "2025-05-27"
    },
    "2025-05-27": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אייר",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Iyyar"
      ],
      "next": "2025-05-28"
    },
    "2025-05-28": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "סיון",
        "d": "א׳"
      },
      "titles": [
        "1st of Sivan, 5785"
      ],
      "next": "2025-05-29"
    },
    "2025-05-29": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "סיון",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Sivan"
      ],
      "next": "2025-05-30"
    },
    "2025-05-30": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "סיון",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Sivan"
      ],
      "weekend": true,
      "next": "2025-05-31"
    },
    "2025-05-31": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "סיון",
        "d": "ד׳"
      },
      "titles": [
        "4th of Sivan"
      ],
      "weekend": true,
      "next": "2025-06-01"
    },
    "2025-06-01": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "סיון",
        "d": "ה׳"
      },
      "titles": [
        "5th of Sivan",
        "Erev Shavuot"
      ],
      "next": "2025-06-02"
    },
    "2025-06-02": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "סיון",
        "d": "ו׳"
      },
      "titles": [
        "6th of Sivan",
        "Shavuot"
      ],
      "shabaton_name": "shavuot",
      "next": "2025-06-03"
    },
    "2025-06-03": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "סיון",
        "d": "ז׳"
      },
      "titles": [
        "7th of Sivan"
      ],
      "next": "2025-06-04"
    },
    "2025-06-04": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "סיון",
        "d": "ח׳"
      },
      "titles": [
        "8th of Sivan"
      ],
      "next": "2025-06-05"
    },
    "2025-06-05": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "סיון",
        "d": "ט׳"
      },
      "titles": [
        "9th of Sivan"
      ],
      "next": "2025-06-06"
    },
    "2025-06-06": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "סיון",
        "d": "י׳"
      },
      "titles": [
        "10th of Sivan"
      ],
      "weekend": true,
      "next": "2025-06-07"
    },
    "2025-06-07": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "סיון",
        "d": "י״א"
      },
      "titles": [
        "11th of Sivan"
      ],
      "weekend": true,
      "next": "2025-06-08"
    },
    "2025-06-08": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "סיון",
        "d": "י״ב"
      },
      "titles": [
        "12th of Sivan"
      ],
      "next": "2025-06-09"
    },
    "2025-06-09": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "סיון",
        "d": "י״ג"
      },
      "titles": [
        "13th of Sivan"
      ],
      "next": "2025-06-10"
    },
    "2025-06-10": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "סיון",
        "d": "י״ד"
      },
      "titles": [
        "14th of Sivan"
      ],
      "next": "2025-06-11"
    },
    "2025-06-11": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "סיון",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Sivan"
      ],
      "next": "2025-06-12"
    },
    "2025-06-12": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "סיון",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Sivan"
      ],
      "next": "2025-06-13"
    },
    "2025-06-13": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "סיון",
        "d": "י״ז"
      },
      "titles": [
        "17th of Sivan"
      ],
      "weekend": true,
      "next": "2025-06-14"
    },
    "2025-06-14": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "סיון",
        "d": "י״ח"
      },
      "titles": [
        "18th of Sivan"
      ],
      "weekend": true,
      "next": "2025-06-15"
    },
    "2025-06-15": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "סיון",
        "d": "י״ט"
      },
      "titles": [
        "19th of Sivan"
      ],
      "next": "2025-06-16"
    },
    "2025-06-16": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "סיון",
        "d": "כ׳"
      },
      "titles": [
        "20th of Sivan"
      ],
      "next": "2025-06-17"
    },
    "2025-06-17": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "סיון",
        "d": "כ״א"
      },
      "titles": [
        "21st of Sivan"
      ],
      "next": "2025-06-18"
    },
    "2025-06-18": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "סיון",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Sivan"
      ],
      "next": "2025-06-19"
    },
    "2025-06-19": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "סיון",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Sivan"
      ],
      "next": "2025-06-20"
    },
    "2025-06-20": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "סיון",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Sivan"
      ],
      "weekend": true,
      "next": "2025-06-21"
    },
    "2025-06-21": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "סיון",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Sivan"
      ],
      "weekend": true,
      "next": "2025-06-22"
    },
    "2025-06-22": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "סיון",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Sivan"
      ],
      "next": "2025-06-23"
    },
    "2025-06-23": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "סיון",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Sivan"
      ],
      "next": "2025-06-24"
    },
    "2025-06-24": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "סיון",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Sivan"
      ],
      "next": "2025-06-25"
    },
    "2025-06-25": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "סיון",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Sivan"
      ],
      "next": "2025-06-26"
    },
    "2025-06-26": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "סיון",
        "d": "ל׳"
      },
      "titles": [
        "30th of Sivan"
      ],
      "next": "2025-06-27"
    },
    "2025-06-27": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "תמוז",
        "d": "א׳"
      },
      "titles": [
        "1st of Tamuz, 5785"
      ],
      "weekend": true,
      "next": "2025-06-28"
    },
    "2025-06-28": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "תמוז",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Tamuz"
      ],
      "weekend": true,
      "next": "2025-06-29"
    },
    "2025-06-29": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "תמוז",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Tamuz"
      ],
      "next": "2025-06-30"
    },
    "2025-06-30": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "תמוז",
        "d": "ד׳"
      },
      "titles": [
        "4th of Tamuz"
      ],
      "next": "2025-07-01"
    },
    "2025-07-01": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "תמוז",
        "d": "ה׳"
      },
      "titles": [
        "5th of Tamuz"
      ],
      "next": "2025-07-02"
    },
    "2025-07-02": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "תמוז",
        "d": "ו׳"
      },
      "titles": [
        "6th of Tamuz"
      ],
      "next": "2025-07-03"
    },
    "2025-07-03": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "תמוז",
        "d": "ז׳"
      },
      "titles": [
        "7th of Tamuz"
      ],
      "next": "2025-07-04"
    },
    "2025-07-04": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "תמוז",
        "d": "ח׳"
      },
      "titles": [
        "8th of Tamuz"
      ],
      "weekend": true,
      "next": "2025-07-05"
    },
    "2025-07-05": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "תמוז",
        "d": "ט׳"
      },
      "titles": [
        "9th of Tamuz"
      ],
      "weekend": true,
      "next": "2025-07-06"
    },
    "2025-07-06": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "תמוז",
        "d": "י׳"
      },
      "titles": [
        "10th of Tamuz"
      ],
      "next": "2025-07-07"
    },
    "2025-07-07": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "תמוז",
        "d": "י״א"
      },
      "titles": [
        "11th of Tamuz"
      ],
      "next": "2025-07-08"
    },
    "2025-07-08": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "תמוז",
        "d": "י״ב"
      },
      "titles": [
        "12th of Tamuz"
      ],
      "next": "2025-07-09"
    },
    "2025-07-09": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "תמוז",
        "d": "י״ג"
      },
      "titles": [
        "13th of Tamuz"
      ],
      "next": "2025-07-10"
    },
    "2025-07-10": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "תמוז",
        "d": "י״ד"
      },
      "titles": [
        "14th of Tamuz"
      ],
      "next": "2025-07-11"
    },
    "2025-07-11": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "תמוז",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Tamuz"
      ],
      "weekend": true,
      "next": "2025-07-12"
    },
    "2025-07-12": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "תמוז",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Tamuz"
      ],
      "weekend": true,
      "next": "2025-07-13"
    },
    "2025-07-13": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "תמוז",
        "d": "י״ז"
      },
      "titles": [
        "17th of Tamuz"
      ],
      "next": "2025-07-14"
    },
    "2025-07-14": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "תמוז",
        "d": "י״ח"
      },
      "titles": [
        "18th of Tamuz"
      ],
      "next": "2025-07-15"
    },
    "2025-07-15": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "תמוז",
        "d": "י״ט"
      },
      "titles": [
        "19th of Tamuz"
      ],
      "next": "2025-07-16"
    },
    "2025-07-16": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "תמוז",
        "d": "כ׳"
      },
      "titles": [
        "20th of Tamuz"
      ],
      "next": "2025-07-17"
    },
    "2025-07-17": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "תמוז",
        "d": "כ״א"
      },
      "titles": [
        "21st of Tamuz"
      ],
      "next": "2025-07-18"
    },
    "2025-07-18": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "תמוז",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Tamuz"
      ],
      "weekend": true,
      "next": "2025-07-19"
    },
    "2025-07-19": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "תמוז",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Tamuz"
      ],
      "weekend": true,
      "next": "2025-07-20"
    },
    "2025-07-20": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "תמוז",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Tamuz"
      ],
      "next": "2025-07-21"
    },
    "2025-07-21": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "תמוז",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-07-22"
    },
    "2025-07-22": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "תמוז",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-07-23"
    },
    "2025-07-23": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "תמוז",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-07-24"
    },
    "2025-07-24": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "תמוז",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-07-25"
    },
    "2025-07-25": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "תמוז",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2025-07-26"
    },
    "2025-07-26": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אב",
        "d": "א׳"
      },
      "titles": [
        "1st of Av, 5785"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2025-07-27"
    },
    "2025-07-27": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אב",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-07-28"
    },
    "2025-07-28": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אב",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-07-29"
    },
    "2025-07-29": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אב",
        "d": "ד׳"
      },
      "titles": [
        "4th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-07-30"
    },
    "2025-07-30": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אב",
        "d": "ה׳"
      },
      "titles": [
        "5th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-07-31"
    },
    "2025-07-31": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אב",
        "d": "ו׳"
      },
      "titles": [
        "6th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-08-01"
    },
    "2025-08-01": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אב",
        "d": "ז׳"
      },
      "titles": [
        "7th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2025-08-02"
    },
    "2025-08-02": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אב",
        "d": "ח׳"
      },
      "titles": [
        "8th of Av",
        "Erev Tish’a B’Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2025-08-03"
    },
    "2025-08-03": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אב",
        "d": "ט׳"
      },
      "titles": [
        "9th of Av",
        "Tish’a B’Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-08-04"
    },
    "2025-08-04": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אב",
        "d": "י׳"
      },
      "titles": [
        "10th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-08-05"
    },
    "2025-08-05": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אב",
        "d": "י״א"
      },
      "titles": [
        "11th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-08-06"
    },
    "2025-08-06": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אב",
        "d": "י״ב"
      },
      "titles": [
        "12th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-08-07"
    },
    "2025-08-07": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אב",
        "d": "י״ג"
      },
      "titles": [
        "13th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-08-08"
    },
    "2025-08-08": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אב",
        "d": "י״ד"
      },
      "titles": [
        "14th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2025-08-09"
    },
    "2025-08-09": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אב",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Av",
        "Tu B’Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2025-08-10"
    },
    "2025-08-10": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אב",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-08-11"
    },
    "2025-08-11": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אב",
        "d": "י״ז"
      },
      "titles": [
        "17th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-08-12"
    },
    "2025-08-12": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אב",
        "d": "י״ח"
      },
      "titles": [
        "18th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-08-13"
    },
    "2025-08-13": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אב",
        "d": "י״ט"
      },
      "titles": [
        "19th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-08-14"
    },
    "2025-08-14": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אב",
        "d": "כ׳"
      },
      "titles": [
        "20th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-08-15"
    },
    "2025-08-15": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אב",
        "d": "כ״א"
      },
      "titles": [
        "21st of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2025-08-16"
    },
    "2025-08-16": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אב",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2025-08-17"
    },
    "2025-08-17": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אב",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-08-18"
    },
    "2025-08-18": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אב",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-08-19"
    },
    "2025-08-19": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אב",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-08-20"
    },
    "2025-08-20": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אב",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-08-21"
    },
    "2025-08-21": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אב",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-08-22"
    },
    "2025-08-22": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אב",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2025-08-23"
    },
    "2025-08-23": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אב",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2025-08-24"
    },
    "2025-08-24": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אב",
        "d": "ל׳"
      },
      "titles": [
        "30th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-08-25"
    },
    "2025-08-25": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אלול",
        "d": "א׳"
      },
      "titles": [
        "1st of Elul, 5785",
        "Rosh Hashana LaBehemot"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-08-26"
    },
    "2025-08-26": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אלול",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-08-27"
    },
    "2025-08-27": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אלול",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-08-28"
    },
    "2025-08-28": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אלול",
        "d": "ד׳"
      },
      "titles": [
        "4th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-08-29"
    },
    "2025-08-29": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אלול",
        "d": "ה׳"
      },
      "titles": [
        "5th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2025-08-30"
    },
    "2025-08-30": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אלול",
        "d": "ו׳"
      },
      "titles": [
        "6th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2025-08-31"
    },
    "2025-08-31": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אלול",
        "d": "ז׳"
      },
      "titles": [
        "7th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-09-01"
    },
    "2025-09-01": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אלול",
        "d": "ח׳"
      },
      "titles": [
        "8th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-09-02"
    },
    "2025-09-02": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אלול",
        "d": "ט׳"
      },
      "titles": [
        "9th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-09-03"
    },
    "2025-09-03": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אלול",
        "d": "י׳"
      },
      "titles": [
        "10th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-09-04"
    },
    "2025-09-04": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אלול",
        "d": "י״א"
      },
      "titles": [
        "11th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2025-09-05"
    },
    "2025-09-05": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אלול",
        "d": "י״ב"
      },
      "titles": [
        "12th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2025-09-06"
    },
    "2025-09-06": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אלול",
        "d": "י״ג"
      },
      "titles": [
        "13th of Elul"
      ],
      "weekend": true,
      "next": "2025-09-07"
    },
    "2025-09-07": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אלול",
        "d": "י״ד"
      },
      "titles": [
        "14th of Elul"
      ],
      "next": "2025-09-08"
    },
    "2025-09-08": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אלול",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Elul"
      ],
      "next": "2025-09-09"
    },
    "2025-09-09": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אלול",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Elul"
      ],
      "next": "2025-09-10"
    },
    "2025-09-10": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אלול",
        "d": "י״ז"
      },
      "titles": [
        "17th of Elul"
      ],
      "next": "2025-09-11"
    },
    "2025-09-11": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אלול",
        "d": "י״ח"
      },
      "titles": [
        "18th of Elul"
      ],
      "next": "2025-09-12"
    },
    "2025-09-12": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אלול",
        "d": "י״ט"
      },
      "titles": [
        "19th of Elul"
      ],
      "weekend": true,
      "next": "2025-09-13"
    },
    "2025-09-13": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אלול",
        "d": "כ׳"
      },
      "titles": [
        "20th of Elul",
        "Leil Selichot"
      ],
      "weekend": true,
      "next": "2025-09-14"
    },
    "2025-09-14": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אלול",
        "d": "כ״א"
      },
      "titles": [
        "21st of Elul"
      ],
      "next": "2025-09-15"
    },
    "2025-09-15": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אלול",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Elul"
      ],
      "next": "2025-09-16"
    },
    "2025-09-16": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אלול",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Elul"
      ],
      "next": "2025-09-17"
    },
    "2025-09-17": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אלול",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Elul"
      ],
      "next": "2025-09-18"
    },
    "2025-09-18": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אלול",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Elul"
      ],
      "next": "2025-09-19"
    },
    "2025-09-19": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אלול",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Elul"
      ],
      "weekend": true,
      "next": "2025-09-20"
    },
    "2025-09-20": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אלול",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Elul"
      ],
      "weekend": true,
      "next": "2025-09-21"
    },
    "2025-09-21": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אלול",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Elul"
      ],
      "next": "2025-09-22"
    },
    "2025-09-22": {
      "heDateParts": {
        "y": "תשפ״ה",
        "m": "אלול",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Elul",
        "Erev Rosh Hashana"
      ],
      "next": "2025-09-23"
    },
    "2025-09-23": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תשרי",
        "d": "א׳"
      },
      "titles": [
        "1st of Tishrei, 5786",
        "Rosh Hashana 5786"
      ],
      "shabaton_name": "rosh hashana",
      "next": "2025-09-24"
    },
    "2025-09-24": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תשרי",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Tishrei",
        "Rosh Hashana II"
      ],
      "shabaton_name": "rosh hashana",
      "next": "2025-09-25"
    },
    "2025-09-25": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תשרי",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Tishrei"
      ],
      "next": "2025-09-26"
    },
    "2025-09-26": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תשרי",
        "d": "ד׳"
      },
      "titles": [
        "4th of Tishrei"
      ],
      "weekend": true,
      "next": "2025-09-27"
    },
    "2025-09-27": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תשרי",
        "d": "ה׳"
      },
      "titles": [
        "5th of Tishrei"
      ],
      "weekend": true,
      "next": "2025-09-28"
    },
    "2025-09-28": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תשרי",
        "d": "ו׳"
      },
      "titles": [
        "6th of Tishrei"
      ],
      "next": "2025-09-29"
    },
    "2025-09-29": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תשרי",
        "d": "ז׳"
      },
      "titles": [
        "7th of Tishrei"
      ],
      "next": "2025-09-30"
    },
    "2025-09-30": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תשרי",
        "d": "ח׳"
      },
      "titles": [
        "8th of Tishrei"
      ],
      "next": "2025-10-01"
    },
    "2025-10-01": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תשרי",
        "d": "ט׳"
      },
      "titles": [
        "9th of Tishrei",
        "Erev Yom Kippur"
      ],
      "next": "2025-10-02"
    },
    "2025-10-02": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תשרי",
        "d": "י׳"
      },
      "titles": [
        "10th of Tishrei",
        "Yom Kippur"
      ],
      "shabaton_name": "yom kipur",
      "next": "2025-10-03"
    },
    "2025-10-03": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תשרי",
        "d": "י״א"
      },
      "titles": [
        "11th of Tishrei"
      ],
      "weekend": true,
      "next": "2025-10-04"
    },
    "2025-10-04": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תשרי",
        "d": "י״ב"
      },
      "titles": [
        "12th of Tishrei"
      ],
      "weekend": true,
      "next": "2025-10-05"
    },
    "2025-10-05": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תשרי",
        "d": "י״ג"
      },
      "titles": [
        "13th of Tishrei"
      ],
      "next": "2025-10-06"
    },
    "2025-10-06": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תשרי",
        "d": "י״ד"
      },
      "titles": [
        "14th of Tishrei",
        "Erev Sukkot"
      ],
      "recess_name": "pagrat sukot",
      "next": "2025-10-07"
    },
    "2025-10-07": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תשרי",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Tishrei",
        "Sukkot I"
      ],
      "recess_name": "pagrat sukot",
      "next": "2025-10-08"
    },
    "2025-10-08": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תשרי",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Tishrei",
        "Sukkot II (CH’’M)"
      ],
      "recess_name": "pagrat sukot",
      "next": "2025-10-09"
    },
    "2025-10-09": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תשרי",
        "d": "י״ז"
      },
      "titles": [
        "17th of Tishrei",
        "Sukkot III (CH’’M)"
      ],
      "recess_name": "pagrat sukot",
      "next": "2025-10-10"
    },
    "2025-10-10": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תשרי",
        "d": "י״ח"
      },
      "titles": [
        "18th of Tishrei",
        "Sukkot IV (CH’’M)"
      ],
      "recess_name": "pagrat sukot",
      "weekend": true,
      "next": "2025-10-11"
    },
    "2025-10-11": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תשרי",
        "d": "י״ט"
      },
      "titles": [
        "19th of Tishrei",
        "Sukkot V (CH’’M)"
      ],
      "recess_name": "pagrat sukot",
      "weekend": true,
      "next": "2025-10-12"
    },
    "2025-10-12": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תשרי",
        "d": "כ׳"
      },
      "titles": [
        "20th of Tishrei",
        "Sukkot VI (CH’’M)"
      ],
      "recess_name": "pagrat sukot",
      "next": "2025-10-13"
    },
    "2025-10-13": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תשרי",
        "d": "כ״א"
      },
      "titles": [
        "21st of Tishrei",
        "Sukkot VII (Hoshana Raba)"
      ],
      "recess_name": "pagrat sukot",
      "next": "2025-10-14"
    },
    "2025-10-14": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תשרי",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Tishrei",
        "Shmini Atzeret"
      ],
      "recess_name": "pagrat sukot",
      "next": "2025-10-15"
    },
    "2025-10-15": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תשרי",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Tishrei"
      ],
      "next": "2025-10-16"
    },
    "2025-10-16": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תשרי",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Tishrei"
      ],
      "next": "2025-10-17"
    },
    "2025-10-17": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תשרי",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Tishrei"
      ],
      "weekend": true,
      "next": "2025-10-18"
    },
    "2025-10-18": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תשרי",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Tishrei"
      ],
      "weekend": true,
      "next": "2025-10-19"
    },
    "2025-10-19": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תשרי",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Tishrei"
      ],
      "next": "2025-10-20"
    },
    "2025-10-20": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תשרי",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Tishrei"
      ],
      "next": "2025-10-21"
    },
    "2025-10-21": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תשרי",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Tishrei"
      ],
      "next": "2025-10-22"
    },
    "2025-10-22": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תשרי",
        "d": "ל׳"
      },
      "titles": [
        "30th of Tishrei"
      ],
      "next": "2025-10-23"
    },
    "2025-10-23": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "חשון",
        "d": "א׳"
      },
      "titles": [
        "1st of Cheshvan, 5786"
      ],
      "next": "2025-10-24"
    },
    "2025-10-24": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "חשון",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Cheshvan"
      ],
      "weekend": true,
      "next": "2025-10-25"
    },
    "2025-10-25": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "חשון",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Cheshvan"
      ],
      "weekend": true,
      "next": "2025-10-26"
    },
    "2025-10-26": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "חשון",
        "d": "ד׳"
      },
      "titles": [
        "4th of Cheshvan"
      ],
      "next": "2025-10-27"
    },
    "2025-10-27": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "חשון",
        "d": "ה׳"
      },
      "titles": [
        "5th of Cheshvan"
      ],
      "next": "2025-10-28"
    },
    "2025-10-28": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "חשון",
        "d": "ו׳"
      },
      "titles": [
        "6th of Cheshvan"
      ],
      "next": "2025-10-29"
    },
    "2025-10-29": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "חשון",
        "d": "ז׳"
      },
      "titles": [
        "7th of Cheshvan"
      ],
      "next": "2025-10-30"
    },
    "2025-10-30": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "חשון",
        "d": "ח׳"
      },
      "titles": [
        "8th of Cheshvan"
      ],
      "next": "2025-10-31"
    },
    "2025-10-31": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "חשון",
        "d": "ט׳"
      },
      "titles": [
        "9th of Cheshvan"
      ],
      "weekend": true,
      "next": "2025-11-01"
    },
    "2025-11-01": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "חשון",
        "d": "י׳"
      },
      "titles": [
        "10th of Cheshvan"
      ],
      "weekend": true,
      "next": "2025-11-02"
    },
    "2025-11-02": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "חשון",
        "d": "י״א"
      },
      "titles": [
        "11th of Cheshvan"
      ],
      "next": "2025-11-03"
    },
    "2025-11-03": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "חשון",
        "d": "י״ב"
      },
      "titles": [
        "12th of Cheshvan"
      ],
      "next": "2025-11-04"
    },
    "2025-11-04": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "חשון",
        "d": "י״ג"
      },
      "titles": [
        "13th of Cheshvan"
      ],
      "next": "2025-11-05"
    },
    "2025-11-05": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "חשון",
        "d": "י״ד"
      },
      "titles": [
        "14th of Cheshvan"
      ],
      "next": "2025-11-06"
    },
    "2025-11-06": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "חשון",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Cheshvan"
      ],
      "next": "2025-11-07"
    },
    "2025-11-07": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "חשון",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Cheshvan"
      ],
      "weekend": true,
      "next": "2025-11-08"
    },
    "2025-11-08": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "חשון",
        "d": "י״ז"
      },
      "titles": [
        "17th of Cheshvan"
      ],
      "weekend": true,
      "next": "2025-11-09"
    },
    "2025-11-09": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "חשון",
        "d": "י״ח"
      },
      "titles": [
        "18th of Cheshvan"
      ],
      "next": "2025-11-10"
    },
    "2025-11-10": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "חשון",
        "d": "י״ט"
      },
      "titles": [
        "19th of Cheshvan"
      ],
      "next": "2025-11-11"
    },
    "2025-11-11": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "חשון",
        "d": "כ׳"
      },
      "titles": [
        "20th of Cheshvan"
      ],
      "next": "2025-11-12"
    },
    "2025-11-12": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "חשון",
        "d": "כ״א"
      },
      "titles": [
        "21st of Cheshvan"
      ],
      "next": "2025-11-13"
    },
    "2025-11-13": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "חשון",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Cheshvan"
      ],
      "next": "2025-11-14"
    },
    "2025-11-14": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "חשון",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Cheshvan"
      ],
      "weekend": true,
      "next": "2025-11-15"
    },
    "2025-11-15": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "חשון",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Cheshvan"
      ],
      "weekend": true,
      "next": "2025-11-16"
    },
    "2025-11-16": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "חשון",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Cheshvan"
      ],
      "next": "2025-11-17"
    },
    "2025-11-17": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "חשון",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Cheshvan"
      ],
      "next": "2025-11-18"
    },
    "2025-11-18": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "חשון",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Cheshvan"
      ],
      "next": "2025-11-19"
    },
    "2025-11-19": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "חשון",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Cheshvan"
      ],
      "next": "2025-11-20"
    },
    "2025-11-20": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "חשון",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Cheshvan"
      ],
      "next": "2025-11-21"
    },
    "2025-11-21": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "כסלו",
        "d": "א׳"
      },
      "titles": [
        "1st of Kislev, 5786"
      ],
      "weekend": true,
      "next": "2025-11-22"
    },
    "2025-11-22": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "כסלו",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Kislev"
      ],
      "weekend": true,
      "next": "2025-11-23"
    },
    "2025-11-23": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "כסלו",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Kislev"
      ],
      "next": "2025-11-24"
    },
    "2025-11-24": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "כסלו",
        "d": "ד׳"
      },
      "titles": [
        "4th of Kislev"
      ],
      "next": "2025-11-25"
    },
    "2025-11-25": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "כסלו",
        "d": "ה׳"
      },
      "titles": [
        "5th of Kislev"
      ],
      "next": "2025-11-26"
    },
    "2025-11-26": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "כסלו",
        "d": "ו׳"
      },
      "titles": [
        "6th of Kislev"
      ],
      "next": "2025-11-27"
    },
    "2025-11-27": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "כסלו",
        "d": "ז׳"
      },
      "titles": [
        "7th of Kislev"
      ],
      "next": "2025-11-28"
    },
    "2025-11-28": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "כסלו",
        "d": "ח׳"
      },
      "titles": [
        "8th of Kislev"
      ],
      "weekend": true,
      "next": "2025-11-29"
    },
    "2025-11-29": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "כסלו",
        "d": "ט׳"
      },
      "titles": [
        "9th of Kislev"
      ],
      "weekend": true,
      "next": "2025-11-30"
    },
    "2025-11-30": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "כסלו",
        "d": "י׳"
      },
      "titles": [
        "10th of Kislev"
      ],
      "next": "2025-12-01"
    },
    "2025-12-01": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "כסלו",
        "d": "י״א"
      },
      "titles": [
        "11th of Kislev"
      ],
      "next": "2025-12-02"
    },
    "2025-12-02": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "כסלו",
        "d": "י״ב"
      },
      "titles": [
        "12th of Kislev"
      ],
      "next": "2025-12-03"
    },
    "2025-12-03": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "כסלו",
        "d": "י״ג"
      },
      "titles": [
        "13th of Kislev"
      ],
      "next": "2025-12-04"
    },
    "2025-12-04": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "כסלו",
        "d": "י״ד"
      },
      "titles": [
        "14th of Kislev"
      ],
      "next": "2025-12-05"
    },
    "2025-12-05": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "כסלו",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Kislev"
      ],
      "weekend": true,
      "next": "2025-12-06"
    },
    "2025-12-06": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "כסלו",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Kislev"
      ],
      "weekend": true,
      "next": "2025-12-07"
    },
    "2025-12-07": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "כסלו",
        "d": "י״ז"
      },
      "titles": [
        "17th of Kislev"
      ],
      "next": "2025-12-08"
    },
    "2025-12-08": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "כסלו",
        "d": "י״ח"
      },
      "titles": [
        "18th of Kislev"
      ],
      "next": "2025-12-09"
    },
    "2025-12-09": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "כסלו",
        "d": "י״ט"
      },
      "titles": [
        "19th of Kislev"
      ],
      "next": "2025-12-10"
    },
    "2025-12-10": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "כסלו",
        "d": "כ׳"
      },
      "titles": [
        "20th of Kislev"
      ],
      "next": "2025-12-11"
    },
    "2025-12-11": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "כסלו",
        "d": "כ״א"
      },
      "titles": [
        "21st of Kislev"
      ],
      "next": "2025-12-12"
    },
    "2025-12-12": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "כסלו",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Kislev"
      ],
      "weekend": true,
      "next": "2025-12-13"
    },
    "2025-12-13": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "כסלו",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Kislev"
      ],
      "weekend": true,
      "next": "2025-12-14"
    },
    "2025-12-14": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "כסלו",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Kislev",
        "Chanukah: 1 Candle"
      ],
      "next": "2025-12-15"
    },
    "2025-12-15": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "כסלו",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Kislev",
        "Chanukah: 2 Candles"
      ],
      "next": "2025-12-16"
    },
    "2025-12-16": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "כסלו",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Kislev",
        "Chanukah: 3 Candles"
      ],
      "next": "2025-12-17"
    },
    "2025-12-17": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "כסלו",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Kislev",
        "Chanukah: 4 Candles"
      ],
      "next": "2025-12-18"
    },
    "2025-12-18": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "כסלו",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Kislev",
        "Chanukah: 5 Candles"
      ],
      "next": "2025-12-19"
    },
    "2025-12-19": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "כסלו",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Kislev",
        "Chanukah: 6 Candles"
      ],
      "weekend": true,
      "next": "2025-12-20"
    },
    "2025-12-20": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "כסלו",
        "d": "ל׳"
      },
      "titles": [
        "30th of Kislev",
        "Chag HaBanot",
        "Chanukah: 7 Candles"
      ],
      "weekend": true,
      "next": "2025-12-21"
    },
    "2025-12-21": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "טבת",
        "d": "א׳"
      },
      "titles": [
        "1st of Tevet, 5786",
        "Chanukah: 8 Candles"
      ],
      "next": "2025-12-22"
    },
    "2025-12-22": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "טבת",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Tevet",
        "Chanukah: 8th Day"
      ],
      "next": "2025-12-23"
    },
    "2025-12-23": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "טבת",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Tevet"
      ],
      "next": "2025-12-24"
    },
    "2025-12-24": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "טבת",
        "d": "ד׳"
      },
      "titles": [
        "4th of Tevet"
      ],
      "next": "2025-12-25"
    },
    "2025-12-25": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "טבת",
        "d": "ה׳"
      },
      "titles": [
        "5th of Tevet"
      ],
      "next": "2025-12-26"
    },
    "2025-12-26": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "טבת",
        "d": "ו׳"
      },
      "titles": [
        "6th of Tevet"
      ],
      "weekend": true,
      "next": "2025-12-27"
    },
    "2025-12-27": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "טבת",
        "d": "ז׳"
      },
      "titles": [
        "7th of Tevet"
      ],
      "weekend": true,
      "next": "2025-12-28"
    },
    "2025-12-28": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "טבת",
        "d": "ח׳"
      },
      "titles": [
        "8th of Tevet"
      ],
      "next": "2025-12-29"
    },
    "2025-12-29": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "טבת",
        "d": "ט׳"
      },
      "titles": [
        "9th of Tevet"
      ],
      "next": "2025-12-30"
    },
    "2025-12-30": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "טבת",
        "d": "י׳"
      },
      "titles": [
        "10th of Tevet"
      ],
      "next": "2025-12-31"
    },
    "2025-12-31": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "טבת",
        "d": "י״א"
      },
      "titles": [
        "11th of Tevet"
      ],
      "next": "2026-01-01"
    },
    "2026-01-01": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "טבת",
        "d": "י״ב"
      },
      "titles": [
        "12th of Tevet"
      ],
      "next": "2026-01-02"
    },
    "2026-01-02": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "טבת",
        "d": "י״ג"
      },
      "titles": [
        "13th of Tevet"
      ],
      "weekend": true,
      "next": "2026-01-03"
    },
    "2026-01-03": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "טבת",
        "d": "י״ד"
      },
      "titles": [
        "14th of Tevet"
      ],
      "weekend": true,
      "next": "2026-01-04"
    },
    "2026-01-04": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "טבת",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Tevet"
      ],
      "next": "2026-01-05"
    },
    "2026-01-05": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "טבת",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Tevet"
      ],
      "next": "2026-01-06"
    },
    "2026-01-06": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "טבת",
        "d": "י״ז"
      },
      "titles": [
        "17th of Tevet"
      ],
      "next": "2026-01-07"
    },
    "2026-01-07": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "טבת",
        "d": "י״ח"
      },
      "titles": [
        "18th of Tevet"
      ],
      "next": "2026-01-08"
    },
    "2026-01-08": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "טבת",
        "d": "י״ט"
      },
      "titles": [
        "19th of Tevet"
      ],
      "next": "2026-01-09"
    },
    "2026-01-09": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "טבת",
        "d": "כ׳"
      },
      "titles": [
        "20th of Tevet"
      ],
      "weekend": true,
      "next": "2026-01-10"
    },
    "2026-01-10": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "טבת",
        "d": "כ״א"
      },
      "titles": [
        "21st of Tevet"
      ],
      "weekend": true,
      "next": "2026-01-11"
    },
    "2026-01-11": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "טבת",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Tevet"
      ],
      "next": "2026-01-12"
    },
    "2026-01-12": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "טבת",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Tevet"
      ],
      "next": "2026-01-13"
    },
    "2026-01-13": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "טבת",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Tevet"
      ],
      "next": "2026-01-14"
    },
    "2026-01-14": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "טבת",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Tevet"
      ],
      "next": "2026-01-15"
    },
    "2026-01-15": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "טבת",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Tevet"
      ],
      "next": "2026-01-16"
    },
    "2026-01-16": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "טבת",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Tevet"
      ],
      "weekend": true,
      "next": "2026-01-17"
    },
    "2026-01-17": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "טבת",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Tevet"
      ],
      "weekend": true,
      "next": "2026-01-18"
    },
    "2026-01-18": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "טבת",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Tevet"
      ],
      "next": "2026-01-19"
    },
    "2026-01-19": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "שבט",
        "d": "א׳"
      },
      "titles": [
        "1st of Sh’vat, 5786"
      ],
      "next": "2026-01-20"
    },
    "2026-01-20": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "שבט",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Sh’vat"
      ],
      "next": "2026-01-21"
    },
    "2026-01-21": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "שבט",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Sh’vat"
      ],
      "next": "2026-01-22"
    },
    "2026-01-22": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "שבט",
        "d": "ד׳"
      },
      "titles": [
        "4th of Sh’vat"
      ],
      "next": "2026-01-23"
    },
    "2026-01-23": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "שבט",
        "d": "ה׳"
      },
      "titles": [
        "5th of Sh’vat"
      ],
      "weekend": true,
      "next": "2026-01-24"
    },
    "2026-01-24": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "שבט",
        "d": "ו׳"
      },
      "titles": [
        "6th of Sh’vat"
      ],
      "weekend": true,
      "next": "2026-01-25"
    },
    "2026-01-25": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "שבט",
        "d": "ז׳"
      },
      "titles": [
        "7th of Sh’vat"
      ],
      "next": "2026-01-26"
    },
    "2026-01-26": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "שבט",
        "d": "ח׳"
      },
      "titles": [
        "8th of Sh’vat"
      ],
      "next": "2026-01-27"
    },
    "2026-01-27": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "שבט",
        "d": "ט׳"
      },
      "titles": [
        "9th of Sh’vat"
      ],
      "next": "2026-01-28"
    },
    "2026-01-28": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "שבט",
        "d": "י׳"
      },
      "titles": [
        "10th of Sh’vat"
      ],
      "next": "2026-01-29"
    },
    "2026-01-29": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "שבט",
        "d": "י״א"
      },
      "titles": [
        "11th of Sh’vat"
      ],
      "next": "2026-01-30"
    },
    "2026-01-30": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "שבט",
        "d": "י״ב"
      },
      "titles": [
        "12th of Sh’vat"
      ],
      "weekend": true,
      "next": "2026-01-31"
    },
    "2026-01-31": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "שבט",
        "d": "י״ג"
      },
      "titles": [
        "13th of Sh’vat"
      ],
      "weekend": true,
      "next": "2026-02-01"
    },
    "2026-02-01": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "שבט",
        "d": "י״ד"
      },
      "titles": [
        "14th of Sh’vat"
      ],
      "next": "2026-02-02"
    },
    "2026-02-02": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "שבט",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Sh’vat",
        "Tu BiShvat"
      ],
      "next": "2026-02-03"
    },
    "2026-02-03": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "שבט",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Sh’vat"
      ],
      "next": "2026-02-04"
    },
    "2026-02-04": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "שבט",
        "d": "י״ז"
      },
      "titles": [
        "17th of Sh’vat"
      ],
      "next": "2026-02-05"
    },
    "2026-02-05": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "שבט",
        "d": "י״ח"
      },
      "titles": [
        "18th of Sh’vat"
      ],
      "next": "2026-02-06"
    },
    "2026-02-06": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "שבט",
        "d": "י״ט"
      },
      "titles": [
        "19th of Sh’vat"
      ],
      "weekend": true,
      "next": "2026-02-07"
    },
    "2026-02-07": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "שבט",
        "d": "כ׳"
      },
      "titles": [
        "20th of Sh’vat"
      ],
      "weekend": true,
      "next": "2026-02-08"
    },
    "2026-02-08": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "שבט",
        "d": "כ״א"
      },
      "titles": [
        "21st of Sh’vat"
      ],
      "next": "2026-02-09"
    },
    "2026-02-09": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "שבט",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Sh’vat"
      ],
      "next": "2026-02-10"
    },
    "2026-02-10": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "שבט",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Sh’vat"
      ],
      "next": "2026-02-11"
    },
    "2026-02-11": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "שבט",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Sh’vat"
      ],
      "next": "2026-02-12"
    },
    "2026-02-12": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "שבט",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Sh’vat"
      ],
      "next": "2026-02-13"
    },
    "2026-02-13": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "שבט",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Sh’vat"
      ],
      "weekend": true,
      "next": "2026-02-14"
    },
    "2026-02-14": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "שבט",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Sh’vat"
      ],
      "weekend": true,
      "next": "2026-02-15"
    },
    "2026-02-15": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "שבט",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Sh’vat"
      ],
      "next": "2026-02-16"
    },
    "2026-02-16": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "שבט",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Sh’vat"
      ],
      "next": "2026-02-17"
    },
    "2026-02-17": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "שבט",
        "d": "ל׳"
      },
      "titles": [
        "30th of Sh’vat"
      ],
      "next": "2026-02-18"
    },
    "2026-02-18": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אדר",
        "d": "א׳"
      },
      "titles": [
        "1st of Adar, 5786"
      ],
      "next": "2026-02-19"
    },
    "2026-02-19": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אדר",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Adar"
      ],
      "next": "2026-02-20"
    },
    "2026-02-20": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אדר",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Adar"
      ],
      "weekend": true,
      "next": "2026-02-21"
    },
    "2026-02-21": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אדר",
        "d": "ד׳"
      },
      "titles": [
        "4th of Adar"
      ],
      "weekend": true,
      "next": "2026-02-22"
    },
    "2026-02-22": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אדר",
        "d": "ה׳"
      },
      "titles": [
        "5th of Adar"
      ],
      "next": "2026-02-23"
    },
    "2026-02-23": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אדר",
        "d": "ו׳"
      },
      "titles": [
        "6th of Adar"
      ],
      "next": "2026-02-24"
    },
    "2026-02-24": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אדר",
        "d": "ז׳"
      },
      "titles": [
        "7th of Adar"
      ],
      "next": "2026-02-25"
    },
    "2026-02-25": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אדר",
        "d": "ח׳"
      },
      "titles": [
        "8th of Adar"
      ],
      "next": "2026-02-26"
    },
    "2026-02-26": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אדר",
        "d": "ט׳"
      },
      "titles": [
        "9th of Adar"
      ],
      "next": "2026-02-27"
    },
    "2026-02-27": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אדר",
        "d": "י׳"
      },
      "titles": [
        "10th of Adar"
      ],
      "weekend": true,
      "next": "2026-02-28"
    },
    "2026-02-28": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אדר",
        "d": "י״א"
      },
      "titles": [
        "11th of Adar"
      ],
      "weekend": true,
      "next": "2026-03-01"
    },
    "2026-03-01": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אדר",
        "d": "י״ב"
      },
      "titles": [
        "12th of Adar"
      ],
      "next": "2026-03-02"
    },
    "2026-03-02": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אדר",
        "d": "י״ג"
      },
      "titles": [
        "13th of Adar",
        "Erev Purim"
      ],
      "next": "2026-03-03"
    },
    "2026-03-03": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אדר",
        "d": "י״ד"
      },
      "titles": [
        "14th of Adar",
        "Purim"
      ],
      "next": "2026-03-04"
    },
    "2026-03-04": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אדר",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Adar",
        "Shushan Purim"
      ],
      "next": "2026-03-05"
    },
    "2026-03-05": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אדר",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Adar"
      ],
      "next": "2026-03-06"
    },
    "2026-03-06": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אדר",
        "d": "י״ז"
      },
      "titles": [
        "17th of Adar"
      ],
      "weekend": true,
      "next": "2026-03-07"
    },
    "2026-03-07": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אדר",
        "d": "י״ח"
      },
      "titles": [
        "18th of Adar"
      ],
      "weekend": true,
      "next": "2026-03-08"
    },
    "2026-03-08": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אדר",
        "d": "י״ט"
      },
      "titles": [
        "19th of Adar"
      ],
      "next": "2026-03-09"
    },
    "2026-03-09": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אדר",
        "d": "כ׳"
      },
      "titles": [
        "20th of Adar"
      ],
      "next": "2026-03-10"
    },
    "2026-03-10": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אדר",
        "d": "כ״א"
      },
      "titles": [
        "21st of Adar"
      ],
      "next": "2026-03-11"
    },
    "2026-03-11": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אדר",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Adar"
      ],
      "next": "2026-03-12"
    },
    "2026-03-12": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אדר",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Adar"
      ],
      "next": "2026-03-13"
    },
    "2026-03-13": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אדר",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Adar"
      ],
      "weekend": true,
      "next": "2026-03-14"
    },
    "2026-03-14": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אדר",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Adar"
      ],
      "weekend": true,
      "next": "2026-03-15"
    },
    "2026-03-15": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אדר",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Adar"
      ],
      "next": "2026-03-16"
    },
    "2026-03-16": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אדר",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Adar"
      ],
      "next": "2026-03-17"
    },
    "2026-03-17": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אדר",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Adar"
      ],
      "next": "2026-03-18"
    },
    "2026-03-18": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אדר",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Adar"
      ],
      "next": "2026-03-19"
    },
    "2026-03-19": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "ניסן",
        "d": "א׳"
      },
      "titles": [
        "1st of Nisan, 5786"
      ],
      "next": "2026-03-20"
    },
    "2026-03-20": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "ניסן",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Nisan"
      ],
      "weekend": true,
      "next": "2026-03-21"
    },
    "2026-03-21": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "ניסן",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Nisan"
      ],
      "weekend": true,
      "next": "2026-03-22"
    },
    "2026-03-22": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "ניסן",
        "d": "ד׳"
      },
      "titles": [
        "4th of Nisan"
      ],
      "next": "2026-03-23"
    },
    "2026-03-23": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "ניסן",
        "d": "ה׳"
      },
      "titles": [
        "5th of Nisan"
      ],
      "next": "2026-03-24"
    },
    "2026-03-24": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "ניסן",
        "d": "ו׳"
      },
      "titles": [
        "6th of Nisan"
      ],
      "next": "2026-03-25"
    },
    "2026-03-25": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "ניסן",
        "d": "ז׳"
      },
      "titles": [
        "7th of Nisan"
      ],
      "next": "2026-03-26"
    },
    "2026-03-26": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "ניסן",
        "d": "ח׳"
      },
      "titles": [
        "8th of Nisan"
      ],
      "next": "2026-03-27"
    },
    "2026-03-27": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "ניסן",
        "d": "ט׳"
      },
      "titles": [
        "9th of Nisan"
      ],
      "weekend": true,
      "next": "2026-03-28"
    },
    "2026-03-28": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "ניסן",
        "d": "י׳"
      },
      "titles": [
        "10th of Nisan"
      ],
      "weekend": true,
      "next": "2026-03-29"
    },
    "2026-03-29": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "ניסן",
        "d": "י״א"
      },
      "titles": [
        "11th of Nisan"
      ],
      "next": "2026-03-30"
    },
    "2026-03-30": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "ניסן",
        "d": "י״ב"
      },
      "titles": [
        "12th of Nisan"
      ],
      "next": "2026-03-31"
    },
    "2026-03-31": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "ניסן",
        "d": "י״ג"
      },
      "titles": [
        "13th of Nisan"
      ],
      "next": "2026-04-01"
    },
    "2026-04-01": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "ניסן",
        "d": "י״ד"
      },
      "titles": [
        "14th of Nisan",
        "Erev Pesach"
      ],
      "recess_name": "pagrat pesach",
      "next": "2026-04-02"
    },
    "2026-04-02": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "ניסן",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Nisan",
        "Pesach I"
      ],
      "recess_name": "pagrat pesach",
      "next": "2026-04-03"
    },
    "2026-04-03": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "ניסן",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Nisan",
        "Pesach II (CH’’M)"
      ],
      "recess_name": "pagrat pesach",
      "weekend": true,
      "next": "2026-04-04"
    },
    "2026-04-04": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "ניסן",
        "d": "י״ז"
      },
      "titles": [
        "17th of Nisan",
        "Pesach III (CH’’M)"
      ],
      "recess_name": "pagrat pesach",
      "weekend": true,
      "next": "2026-04-05"
    },
    "2026-04-05": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "ניסן",
        "d": "י״ח"
      },
      "titles": [
        "18th of Nisan",
        "Pesach IV (CH’’M)"
      ],
      "recess_name": "pagrat pesach",
      "next": "2026-04-06"
    },
    "2026-04-06": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "ניסן",
        "d": "י״ט"
      },
      "titles": [
        "19th of Nisan",
        "Pesach V (CH’’M)"
      ],
      "recess_name": "pagrat pesach",
      "next": "2026-04-07"
    },
    "2026-04-07": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "ניסן",
        "d": "כ׳"
      },
      "titles": [
        "20th of Nisan",
        "Pesach VI (CH’’M)"
      ],
      "recess_name": "pagrat pesach",
      "next": "2026-04-08"
    },
    "2026-04-08": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "ניסן",
        "d": "כ״א"
      },
      "titles": [
        "21st of Nisan",
        "Pesach VII"
      ],
      "recess_name": "pagrat pesach",
      "next": "2026-04-09"
    },
    "2026-04-09": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "ניסן",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Nisan"
      ],
      "next": "2026-04-10"
    },
    "2026-04-10": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "ניסן",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Nisan"
      ],
      "weekend": true,
      "next": "2026-04-11"
    },
    "2026-04-11": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "ניסן",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Nisan"
      ],
      "weekend": true,
      "next": "2026-04-12"
    },
    "2026-04-12": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "ניסן",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Nisan"
      ],
      "next": "2026-04-13"
    },
    "2026-04-13": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "ניסן",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Nisan"
      ],
      "next": "2026-04-14"
    },
    "2026-04-14": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "ניסן",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Nisan"
      ],
      "next": "2026-04-15"
    },
    "2026-04-15": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "ניסן",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Nisan"
      ],
      "next": "2026-04-16"
    },
    "2026-04-16": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "ניסן",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Nisan"
      ],
      "next": "2026-04-17"
    },
    "2026-04-17": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "ניסן",
        "d": "ל׳"
      },
      "titles": [
        "30th of Nisan"
      ],
      "weekend": true,
      "next": "2026-04-18"
    },
    "2026-04-18": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אייר",
        "d": "א׳"
      },
      "titles": [
        "1st of Iyyar, 5786"
      ],
      "weekend": true,
      "next": "2026-04-19"
    },
    "2026-04-19": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אייר",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Iyyar"
      ],
      "next": "2026-04-20"
    },
    "2026-04-20": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אייר",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Iyyar"
      ],
      "next": "2026-04-21"
    },
    "2026-04-21": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אייר",
        "d": "ד׳"
      },
      "titles": [
        "4th of Iyyar"
      ],
      "next": "2026-04-22"
    },
    "2026-04-22": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אייר",
        "d": "ה׳"
      },
      "titles": [
        "5th of Iyyar"
      ],
      "shabaton_name": "yom haatzmaut",
      "next": "2026-04-23"
    },
    "2026-04-23": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אייר",
        "d": "ו׳"
      },
      "titles": [
        "6th of Iyyar"
      ],
      "next": "2026-04-24"
    },
    "2026-04-24": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אייר",
        "d": "ז׳"
      },
      "titles": [
        "7th of Iyyar"
      ],
      "weekend": true,
      "next": "2026-04-25"
    },
    "2026-04-25": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אייר",
        "d": "ח׳"
      },
      "titles": [
        "8th of Iyyar"
      ],
      "weekend": true,
      "next": "2026-04-26"
    },
    "2026-04-26": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אייר",
        "d": "ט׳"
      },
      "titles": [
        "9th of Iyyar"
      ],
      "next": "2026-04-27"
    },
    "2026-04-27": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אייר",
        "d": "י׳"
      },
      "titles": [
        "10th of Iyyar"
      ],
      "next": "2026-04-28"
    },
    "2026-04-28": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אייר",
        "d": "י״א"
      },
      "titles": [
        "11th of Iyyar"
      ],
      "next": "2026-04-29"
    },
    "2026-04-29": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אייר",
        "d": "י״ב"
      },
      "titles": [
        "12th of Iyyar"
      ],
      "next": "2026-04-30"
    },
    "2026-04-30": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אייר",
        "d": "י״ג"
      },
      "titles": [
        "13th of Iyyar"
      ],
      "next": "2026-05-01"
    },
    "2026-05-01": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אייר",
        "d": "י״ד"
      },
      "titles": [
        "14th of Iyyar",
        "Pesach Sheni"
      ],
      "weekend": true,
      "next": "2026-05-02"
    },
    "2026-05-02": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אייר",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Iyyar"
      ],
      "weekend": true,
      "next": "2026-05-03"
    },
    "2026-05-03": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אייר",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Iyyar"
      ],
      "next": "2026-05-04"
    },
    "2026-05-04": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אייר",
        "d": "י״ז"
      },
      "titles": [
        "17th of Iyyar"
      ],
      "next": "2026-05-05"
    },
    "2026-05-05": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אייר",
        "d": "י״ח"
      },
      "titles": [
        "18th of Iyyar",
        "Lag BaOmer"
      ],
      "next": "2026-05-06"
    },
    "2026-05-06": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אייר",
        "d": "י״ט"
      },
      "titles": [
        "19th of Iyyar"
      ],
      "next": "2026-05-07"
    },
    "2026-05-07": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אייר",
        "d": "כ׳"
      },
      "titles": [
        "20th of Iyyar"
      ],
      "next": "2026-05-08"
    },
    "2026-05-08": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אייר",
        "d": "כ״א"
      },
      "titles": [
        "21st of Iyyar"
      ],
      "weekend": true,
      "next": "2026-05-09"
    },
    "2026-05-09": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אייר",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Iyyar"
      ],
      "weekend": true,
      "next": "2026-05-10"
    },
    "2026-05-10": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אייר",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Iyyar"
      ],
      "next": "2026-05-11"
    },
    "2026-05-11": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אייר",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Iyyar"
      ],
      "next": "2026-05-12"
    },
    "2026-05-12": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אייר",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Iyyar"
      ],
      "next": "2026-05-13"
    },
    "2026-05-13": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אייר",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Iyyar"
      ],
      "next": "2026-05-14"
    },
    "2026-05-14": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אייר",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Iyyar"
      ],
      "next": "2026-05-15"
    },
    "2026-05-15": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אייר",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Iyyar"
      ],
      "weekend": true,
      "next": "2026-05-16"
    },
    "2026-05-16": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אייר",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Iyyar"
      ],
      "weekend": true,
      "next": "2026-05-17"
    },
    "2026-05-17": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "סיון",
        "d": "א׳"
      },
      "titles": [
        "1st of Sivan, 5786"
      ],
      "next": "2026-05-18"
    },
    "2026-05-18": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "סיון",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Sivan"
      ],
      "next": "2026-05-19"
    },
    "2026-05-19": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "סיון",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Sivan"
      ],
      "next": "2026-05-20"
    },
    "2026-05-20": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "סיון",
        "d": "ד׳"
      },
      "titles": [
        "4th of Sivan"
      ],
      "next": "2026-05-21"
    },
    "2026-05-21": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "סיון",
        "d": "ה׳"
      },
      "titles": [
        "5th of Sivan",
        "Erev Shavuot"
      ],
      "next": "2026-05-22"
    },
    "2026-05-22": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "סיון",
        "d": "ו׳"
      },
      "titles": [
        "6th of Sivan",
        "Shavuot"
      ],
      "shabaton_name": "shavuot",
      "weekend": true,
      "next": "2026-05-23"
    },
    "2026-05-23": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "סיון",
        "d": "ז׳"
      },
      "titles": [
        "7th of Sivan"
      ],
      "weekend": true,
      "next": "2026-05-24"
    },
    "2026-05-24": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "סיון",
        "d": "ח׳"
      },
      "titles": [
        "8th of Sivan"
      ],
      "next": "2026-05-25"
    },
    "2026-05-25": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "סיון",
        "d": "ט׳"
      },
      "titles": [
        "9th of Sivan"
      ],
      "next": "2026-05-26"
    },
    "2026-05-26": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "סיון",
        "d": "י׳"
      },
      "titles": [
        "10th of Sivan"
      ],
      "next": "2026-05-27"
    },
    "2026-05-27": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "סיון",
        "d": "י״א"
      },
      "titles": [
        "11th of Sivan"
      ],
      "next": "2026-05-28"
    },
    "2026-05-28": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "סיון",
        "d": "י״ב"
      },
      "titles": [
        "12th of Sivan"
      ],
      "next": "2026-05-29"
    },
    "2026-05-29": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "סיון",
        "d": "י״ג"
      },
      "titles": [
        "13th of Sivan"
      ],
      "weekend": true,
      "next": "2026-05-30"
    },
    "2026-05-30": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "סיון",
        "d": "י״ד"
      },
      "titles": [
        "14th of Sivan"
      ],
      "weekend": true,
      "next": "2026-05-31"
    },
    "2026-05-31": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "סיון",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Sivan"
      ],
      "next": "2026-06-01"
    },
    "2026-06-01": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "סיון",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Sivan"
      ],
      "next": "2026-06-02"
    },
    "2026-06-02": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "סיון",
        "d": "י״ז"
      },
      "titles": [
        "17th of Sivan"
      ],
      "next": "2026-06-03"
    },
    "2026-06-03": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "סיון",
        "d": "י״ח"
      },
      "titles": [
        "18th of Sivan"
      ],
      "next": "2026-06-04"
    },
    "2026-06-04": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "סיון",
        "d": "י״ט"
      },
      "titles": [
        "19th of Sivan"
      ],
      "next": "2026-06-05"
    },
    "2026-06-05": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "סיון",
        "d": "כ׳"
      },
      "titles": [
        "20th of Sivan"
      ],
      "weekend": true,
      "next": "2026-06-06"
    },
    "2026-06-06": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "סיון",
        "d": "כ״א"
      },
      "titles": [
        "21st of Sivan"
      ],
      "weekend": true,
      "next": "2026-06-07"
    },
    "2026-06-07": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "סיון",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Sivan"
      ],
      "next": "2026-06-08"
    },
    "2026-06-08": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "סיון",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Sivan"
      ],
      "next": "2026-06-09"
    },
    "2026-06-09": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "סיון",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Sivan"
      ],
      "next": "2026-06-10"
    },
    "2026-06-10": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "סיון",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Sivan"
      ],
      "next": "2026-06-11"
    },
    "2026-06-11": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "סיון",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Sivan"
      ],
      "next": "2026-06-12"
    },
    "2026-06-12": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "סיון",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Sivan"
      ],
      "weekend": true,
      "next": "2026-06-13"
    },
    "2026-06-13": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "סיון",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Sivan"
      ],
      "weekend": true,
      "next": "2026-06-14"
    },
    "2026-06-14": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "סיון",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Sivan"
      ],
      "next": "2026-06-15"
    },
    "2026-06-15": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "סיון",
        "d": "ל׳"
      },
      "titles": [
        "30th of Sivan"
      ],
      "next": "2026-06-16"
    },
    "2026-06-16": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תמוז",
        "d": "א׳"
      },
      "titles": [
        "1st of Tamuz, 5786"
      ],
      "next": "2026-06-17"
    },
    "2026-06-17": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תמוז",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Tamuz"
      ],
      "next": "2026-06-18"
    },
    "2026-06-18": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תמוז",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Tamuz"
      ],
      "next": "2026-06-19"
    },
    "2026-06-19": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תמוז",
        "d": "ד׳"
      },
      "titles": [
        "4th of Tamuz"
      ],
      "weekend": true,
      "next": "2026-06-20"
    },
    "2026-06-20": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תמוז",
        "d": "ה׳"
      },
      "titles": [
        "5th of Tamuz"
      ],
      "weekend": true,
      "next": "2026-06-21"
    },
    "2026-06-21": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תמוז",
        "d": "ו׳"
      },
      "titles": [
        "6th of Tamuz"
      ],
      "next": "2026-06-22"
    },
    "2026-06-22": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תמוז",
        "d": "ז׳"
      },
      "titles": [
        "7th of Tamuz"
      ],
      "next": "2026-06-23"
    },
    "2026-06-23": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תמוז",
        "d": "ח׳"
      },
      "titles": [
        "8th of Tamuz"
      ],
      "next": "2026-06-24"
    },
    "2026-06-24": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תמוז",
        "d": "ט׳"
      },
      "titles": [
        "9th of Tamuz"
      ],
      "next": "2026-06-25"
    },
    "2026-06-25": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תמוז",
        "d": "י׳"
      },
      "titles": [
        "10th of Tamuz"
      ],
      "next": "2026-06-26"
    },
    "2026-06-26": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תמוז",
        "d": "י״א"
      },
      "titles": [
        "11th of Tamuz"
      ],
      "weekend": true,
      "next": "2026-06-27"
    },
    "2026-06-27": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תמוז",
        "d": "י״ב"
      },
      "titles": [
        "12th of Tamuz"
      ],
      "weekend": true,
      "next": "2026-06-28"
    },
    "2026-06-28": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תמוז",
        "d": "י״ג"
      },
      "titles": [
        "13th of Tamuz"
      ],
      "next": "2026-06-29"
    },
    "2026-06-29": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תמוז",
        "d": "י״ד"
      },
      "titles": [
        "14th of Tamuz"
      ],
      "next": "2026-06-30"
    },
    "2026-06-30": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תמוז",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Tamuz"
      ],
      "next": "2026-07-01"
    },
    "2026-07-01": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תמוז",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Tamuz"
      ],
      "next": "2026-07-02"
    },
    "2026-07-02": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תמוז",
        "d": "י״ז"
      },
      "titles": [
        "17th of Tamuz"
      ],
      "next": "2026-07-03"
    },
    "2026-07-03": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תמוז",
        "d": "י״ח"
      },
      "titles": [
        "18th of Tamuz"
      ],
      "weekend": true,
      "next": "2026-07-04"
    },
    "2026-07-04": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תמוז",
        "d": "י״ט"
      },
      "titles": [
        "19th of Tamuz"
      ],
      "weekend": true,
      "next": "2026-07-05"
    },
    "2026-07-05": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תמוז",
        "d": "כ׳"
      },
      "titles": [
        "20th of Tamuz"
      ],
      "next": "2026-07-06"
    },
    "2026-07-06": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תמוז",
        "d": "כ״א"
      },
      "titles": [
        "21st of Tamuz"
      ],
      "next": "2026-07-07"
    },
    "2026-07-07": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תמוז",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Tamuz"
      ],
      "next": "2026-07-08"
    },
    "2026-07-08": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תמוז",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Tamuz"
      ],
      "next": "2026-07-09"
    },
    "2026-07-09": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תמוז",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Tamuz"
      ],
      "next": "2026-07-10"
    },
    "2026-07-10": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תמוז",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Tamuz"
      ],
      "weekend": true,
      "next": "2026-07-11"
    },
    "2026-07-11": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תמוז",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Tamuz"
      ],
      "weekend": true,
      "next": "2026-07-12"
    },
    "2026-07-12": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תמוז",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Tamuz"
      ],
      "next": "2026-07-13"
    },
    "2026-07-13": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תמוז",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Tamuz"
      ],
      "next": "2026-07-14"
    },
    "2026-07-14": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "תמוז",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Tamuz"
      ],
      "next": "2026-07-15"
    },
    "2026-07-15": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אב",
        "d": "א׳"
      },
      "titles": [
        "1st of Av, 5786"
      ],
      "next": "2026-07-16"
    },
    "2026-07-16": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אב",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Av"
      ],
      "next": "2026-07-17"
    },
    "2026-07-17": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אב",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Av"
      ],
      "weekend": true,
      "next": "2026-07-18"
    },
    "2026-07-18": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אב",
        "d": "ד׳"
      },
      "titles": [
        "4th of Av"
      ],
      "weekend": true,
      "next": "2026-07-19"
    },
    "2026-07-19": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אב",
        "d": "ה׳"
      },
      "titles": [
        "5th of Av"
      ],
      "next": "2026-07-20"
    },
    "2026-07-20": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אב",
        "d": "ו׳"
      },
      "titles": [
        "6th of Av"
      ],
      "next": "2026-07-21"
    },
    "2026-07-21": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אב",
        "d": "ז׳"
      },
      "titles": [
        "7th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-07-22"
    },
    "2026-07-22": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אב",
        "d": "ח׳"
      },
      "titles": [
        "8th of Av",
        "Erev Tish’a B’Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-07-23"
    },
    "2026-07-23": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אב",
        "d": "ט׳"
      },
      "titles": [
        "9th of Av",
        "Tish’a B’Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-07-24"
    },
    "2026-07-24": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אב",
        "d": "י׳"
      },
      "titles": [
        "10th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2026-07-25"
    },
    "2026-07-25": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אב",
        "d": "י״א"
      },
      "titles": [
        "11th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2026-07-26"
    },
    "2026-07-26": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אב",
        "d": "י״ב"
      },
      "titles": [
        "12th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-07-27"
    },
    "2026-07-27": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אב",
        "d": "י״ג"
      },
      "titles": [
        "13th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-07-28"
    },
    "2026-07-28": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אב",
        "d": "י״ד"
      },
      "titles": [
        "14th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-07-29"
    },
    "2026-07-29": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אב",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Av",
        "Tu B’Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-07-30"
    },
    "2026-07-30": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אב",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-07-31"
    },
    "2026-07-31": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אב",
        "d": "י״ז"
      },
      "titles": [
        "17th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2026-08-01"
    },
    "2026-08-01": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אב",
        "d": "י״ח"
      },
      "titles": [
        "18th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2026-08-02"
    },
    "2026-08-02": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אב",
        "d": "י״ט"
      },
      "titles": [
        "19th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-08-03"
    },
    "2026-08-03": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אב",
        "d": "כ׳"
      },
      "titles": [
        "20th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-08-04"
    },
    "2026-08-04": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אב",
        "d": "כ״א"
      },
      "titles": [
        "21st of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-08-05"
    },
    "2026-08-05": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אב",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-08-06"
    },
    "2026-08-06": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אב",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-08-07"
    },
    "2026-08-07": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אב",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2026-08-08"
    },
    "2026-08-08": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אב",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2026-08-09"
    },
    "2026-08-09": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אב",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-08-10"
    },
    "2026-08-10": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אב",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-08-11"
    },
    "2026-08-11": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אב",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-08-12"
    },
    "2026-08-12": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אב",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-08-13"
    },
    "2026-08-13": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אב",
        "d": "ל׳"
      },
      "titles": [
        "30th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-08-14"
    },
    "2026-08-14": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אלול",
        "d": "א׳"
      },
      "titles": [
        "1st of Elul, 5786",
        "Rosh Hashana LaBehemot"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2026-08-15"
    },
    "2026-08-15": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אלול",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2026-08-16"
    },
    "2026-08-16": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אלול",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-08-17"
    },
    "2026-08-17": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אלול",
        "d": "ד׳"
      },
      "titles": [
        "4th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-08-18"
    },
    "2026-08-18": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אלול",
        "d": "ה׳"
      },
      "titles": [
        "5th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-08-19"
    },
    "2026-08-19": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אלול",
        "d": "ו׳"
      },
      "titles": [
        "6th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-08-20"
    },
    "2026-08-20": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אלול",
        "d": "ז׳"
      },
      "titles": [
        "7th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-08-21"
    },
    "2026-08-21": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אלול",
        "d": "ח׳"
      },
      "titles": [
        "8th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2026-08-22"
    },
    "2026-08-22": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אלול",
        "d": "ט׳"
      },
      "titles": [
        "9th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2026-08-23"
    },
    "2026-08-23": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אלול",
        "d": "י׳"
      },
      "titles": [
        "10th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-08-24"
    },
    "2026-08-24": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אלול",
        "d": "י״א"
      },
      "titles": [
        "11th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-08-25"
    },
    "2026-08-25": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אלול",
        "d": "י״ב"
      },
      "titles": [
        "12th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-08-26"
    },
    "2026-08-26": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אלול",
        "d": "י״ג"
      },
      "titles": [
        "13th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-08-27"
    },
    "2026-08-27": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אלול",
        "d": "י״ד"
      },
      "titles": [
        "14th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-08-28"
    },
    "2026-08-28": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אלול",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2026-08-29"
    },
    "2026-08-29": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אלול",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2026-08-30"
    },
    "2026-08-30": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אלול",
        "d": "י״ז"
      },
      "titles": [
        "17th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-08-31"
    },
    "2026-08-31": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אלול",
        "d": "י״ח"
      },
      "titles": [
        "18th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-09-01"
    },
    "2026-09-01": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אלול",
        "d": "י״ט"
      },
      "titles": [
        "19th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-09-02"
    },
    "2026-09-02": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אלול",
        "d": "כ׳"
      },
      "titles": [
        "20th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-09-03"
    },
    "2026-09-03": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אלול",
        "d": "כ״א"
      },
      "titles": [
        "21st of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2026-09-04"
    },
    "2026-09-04": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אלול",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2026-09-05"
    },
    "2026-09-05": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אלול",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Elul",
        "Leil Selichot"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2026-09-06"
    },
    "2026-09-06": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אלול",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Elul"
      ],
      "next": "2026-09-07"
    },
    "2026-09-07": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אלול",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Elul"
      ],
      "next": "2026-09-08"
    },
    "2026-09-08": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אלול",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Elul"
      ],
      "next": "2026-09-09"
    },
    "2026-09-09": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אלול",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Elul"
      ],
      "next": "2026-09-10"
    },
    "2026-09-10": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אלול",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Elul"
      ],
      "next": "2026-09-11"
    },
    "2026-09-11": {
      "heDateParts": {
        "y": "תשפ״ו",
        "m": "אלול",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Elul",
        "Erev Rosh Hashana"
      ],
      "weekend": true,
      "next": "2026-09-12"
    },
    "2026-09-12": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תשרי",
        "d": "א׳"
      },
      "titles": [
        "1st of Tishrei, 5787",
        "Rosh Hashana 5787"
      ],
      "shabaton_name": "rosh hashana",
      "weekend": true,
      "next": "2026-09-13"
    },
    "2026-09-13": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תשרי",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Tishrei",
        "Rosh Hashana II"
      ],
      "shabaton_name": "rosh hashana",
      "next": "2026-09-14"
    },
    "2026-09-14": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תשרי",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Tishrei"
      ],
      "next": "2026-09-15"
    },
    "2026-09-15": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תשרי",
        "d": "ד׳"
      },
      "titles": [
        "4th of Tishrei"
      ],
      "next": "2026-09-16"
    },
    "2026-09-16": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תשרי",
        "d": "ה׳"
      },
      "titles": [
        "5th of Tishrei"
      ],
      "next": "2026-09-17"
    },
    "2026-09-17": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תשרי",
        "d": "ו׳"
      },
      "titles": [
        "6th of Tishrei"
      ],
      "next": "2026-09-18"
    },
    "2026-09-18": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תשרי",
        "d": "ז׳"
      },
      "titles": [
        "7th of Tishrei"
      ],
      "weekend": true,
      "next": "2026-09-19"
    },
    "2026-09-19": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תשרי",
        "d": "ח׳"
      },
      "titles": [
        "8th of Tishrei"
      ],
      "weekend": true,
      "next": "2026-09-20"
    },
    "2026-09-20": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תשרי",
        "d": "ט׳"
      },
      "titles": [
        "9th of Tishrei",
        "Erev Yom Kippur"
      ],
      "next": "2026-09-21"
    },
    "2026-09-21": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תשרי",
        "d": "י׳"
      },
      "titles": [
        "10th of Tishrei",
        "Yom Kippur"
      ],
      "shabaton_name": "yom kipur",
      "next": "2026-09-22"
    },
    "2026-09-22": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תשרי",
        "d": "י״א"
      },
      "titles": [
        "11th of Tishrei"
      ],
      "next": "2026-09-23"
    },
    "2026-09-23": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תשרי",
        "d": "י״ב"
      },
      "titles": [
        "12th of Tishrei"
      ],
      "next": "2026-09-24"
    },
    "2026-09-24": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תשרי",
        "d": "י״ג"
      },
      "titles": [
        "13th of Tishrei"
      ],
      "next": "2026-09-25"
    },
    "2026-09-25": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תשרי",
        "d": "י״ד"
      },
      "titles": [
        "14th of Tishrei",
        "Erev Sukkot"
      ],
      "recess_name": "pagrat sukot",
      "weekend": true,
      "next": "2026-09-26"
    },
    "2026-09-26": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תשרי",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Tishrei",
        "Sukkot I"
      ],
      "recess_name": "pagrat sukot",
      "weekend": true,
      "next": "2026-09-27"
    },
    "2026-09-27": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תשרי",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Tishrei",
        "Sukkot II (CH’’M)"
      ],
      "recess_name": "pagrat sukot",
      "next": "2026-09-28"
    },
    "2026-09-28": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תשרי",
        "d": "י״ז"
      },
      "titles": [
        "17th of Tishrei",
        "Sukkot III (CH’’M)"
      ],
      "recess_name": "pagrat sukot",
      "next": "2026-09-29"
    },
    "2026-09-29": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תשרי",
        "d": "י״ח"
      },
      "titles": [
        "18th of Tishrei",
        "Sukkot IV (CH’’M)"
      ],
      "recess_name": "pagrat sukot",
      "next": "2026-09-30"
    },
    "2026-09-30": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תשרי",
        "d": "י״ט"
      },
      "titles": [
        "19th of Tishrei",
        "Sukkot V (CH’’M)"
      ],
      "recess_name": "pagrat sukot",
      "next": "2026-10-01"
    },
    "2026-10-01": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תשרי",
        "d": "כ׳"
      },
      "titles": [
        "20th of Tishrei",
        "Sukkot VI (CH’’M)"
      ],
      "recess_name": "pagrat sukot",
      "next": "2026-10-02"
    },
    "2026-10-02": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תשרי",
        "d": "כ״א"
      },
      "titles": [
        "21st of Tishrei",
        "Sukkot VII (Hoshana Raba)"
      ],
      "recess_name": "pagrat sukot",
      "weekend": true,
      "next": "2026-10-03"
    },
    "2026-10-03": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תשרי",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Tishrei",
        "Shmini Atzeret"
      ],
      "recess_name": "pagrat sukot",
      "weekend": true,
      "next": "2026-10-04"
    },
    "2026-10-04": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תשרי",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Tishrei"
      ],
      "next": "2026-10-05"
    },
    "2026-10-05": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תשרי",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Tishrei"
      ],
      "next": "2026-10-06"
    },
    "2026-10-06": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תשרי",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Tishrei"
      ],
      "next": "2026-10-07"
    },
    "2026-10-07": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תשרי",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Tishrei"
      ],
      "next": "2026-10-08"
    },
    "2026-10-08": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תשרי",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Tishrei"
      ],
      "next": "2026-10-09"
    },
    "2026-10-09": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תשרי",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Tishrei"
      ],
      "weekend": true,
      "next": "2026-10-10"
    },
    "2026-10-10": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תשרי",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Tishrei"
      ],
      "weekend": true,
      "next": "2026-10-11"
    },
    "2026-10-11": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תשרי",
        "d": "ל׳"
      },
      "titles": [
        "30th of Tishrei"
      ],
      "next": "2026-10-12"
    },
    "2026-10-12": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "חשון",
        "d": "א׳"
      },
      "titles": [
        "1st of Cheshvan, 5787"
      ],
      "next": "2026-10-13"
    },
    "2026-10-13": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "חשון",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Cheshvan"
      ],
      "next": "2026-10-14"
    },
    "2026-10-14": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "חשון",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Cheshvan"
      ],
      "next": "2026-10-15"
    },
    "2026-10-15": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "חשון",
        "d": "ד׳"
      },
      "titles": [
        "4th of Cheshvan"
      ],
      "next": "2026-10-16"
    },
    "2026-10-16": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "חשון",
        "d": "ה׳"
      },
      "titles": [
        "5th of Cheshvan"
      ],
      "weekend": true,
      "next": "2026-10-17"
    },
    "2026-10-17": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "חשון",
        "d": "ו׳"
      },
      "titles": [
        "6th of Cheshvan"
      ],
      "weekend": true,
      "next": "2026-10-18"
    },
    "2026-10-18": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "חשון",
        "d": "ז׳"
      },
      "titles": [
        "7th of Cheshvan"
      ],
      "next": "2026-10-19"
    },
    "2026-10-19": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "חשון",
        "d": "ח׳"
      },
      "titles": [
        "8th of Cheshvan"
      ],
      "next": "2026-10-20"
    },
    "2026-10-20": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "חשון",
        "d": "ט׳"
      },
      "titles": [
        "9th of Cheshvan"
      ],
      "next": "2026-10-21"
    },
    "2026-10-21": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "חשון",
        "d": "י׳"
      },
      "titles": [
        "10th of Cheshvan"
      ],
      "next": "2026-10-22"
    },
    "2026-10-22": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "חשון",
        "d": "י״א"
      },
      "titles": [
        "11th of Cheshvan"
      ],
      "next": "2026-10-23"
    },
    "2026-10-23": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "חשון",
        "d": "י״ב"
      },
      "titles": [
        "12th of Cheshvan"
      ],
      "weekend": true,
      "next": "2026-10-24"
    },
    "2026-10-24": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "חשון",
        "d": "י״ג"
      },
      "titles": [
        "13th of Cheshvan"
      ],
      "weekend": true,
      "next": "2026-10-25"
    },
    "2026-10-25": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "חשון",
        "d": "י״ד"
      },
      "titles": [
        "14th of Cheshvan"
      ],
      "next": "2026-10-26"
    },
    "2026-10-26": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "חשון",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Cheshvan"
      ],
      "next": "2026-10-27"
    },
    "2026-10-27": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "חשון",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Cheshvan"
      ],
      "shabaton_name": "election day",
      "next": "2026-10-28"
    },
    "2026-10-28": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "חשון",
        "d": "י״ז"
      },
      "titles": [
        "17th of Cheshvan"
      ],
      "next": "2026-10-29"
    },
    "2026-10-29": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "חשון",
        "d": "י״ח"
      },
      "titles": [
        "18th of Cheshvan"
      ],
      "next": "2026-10-30"
    },
    "2026-10-30": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "חשון",
        "d": "י״ט"
      },
      "titles": [
        "19th of Cheshvan"
      ],
      "weekend": true,
      "next": "2026-10-31"
    },
    "2026-10-31": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "חשון",
        "d": "כ׳"
      },
      "titles": [
        "20th of Cheshvan"
      ],
      "weekend": true,
      "next": "2026-11-01"
    },
    "2026-11-01": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "חשון",
        "d": "כ״א"
      },
      "titles": [
        "21st of Cheshvan"
      ],
      "next": "2026-11-02"
    },
    "2026-11-02": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "חשון",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Cheshvan"
      ],
      "next": "2026-11-03"
    },
    "2026-11-03": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "חשון",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Cheshvan"
      ],
      "next": "2026-11-04"
    },
    "2026-11-04": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "חשון",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Cheshvan"
      ],
      "next": "2026-11-05"
    },
    "2026-11-05": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "חשון",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Cheshvan"
      ],
      "next": "2026-11-06"
    },
    "2026-11-06": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "חשון",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Cheshvan"
      ],
      "weekend": true,
      "next": "2026-11-07"
    },
    "2026-11-07": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "חשון",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Cheshvan"
      ],
      "weekend": true,
      "next": "2026-11-08"
    },
    "2026-11-08": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "חשון",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Cheshvan"
      ],
      "next": "2026-11-09"
    },
    "2026-11-09": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "חשון",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Cheshvan"
      ],
      "next": "2026-11-10"
    },
    "2026-11-10": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "חשון",
        "d": "ל׳"
      },
      "titles": [
        "30th of Cheshvan"
      ],
      "next": "2026-11-11"
    },
    "2026-11-11": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "כסלו",
        "d": "א׳"
      },
      "titles": [
        "1st of Kislev, 5787"
      ],
      "next": "2026-11-12"
    },
    "2026-11-12": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "כסלו",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Kislev"
      ],
      "next": "2026-11-13"
    },
    "2026-11-13": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "כסלו",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Kislev"
      ],
      "weekend": true,
      "next": "2026-11-14"
    },
    "2026-11-14": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "כסלו",
        "d": "ד׳"
      },
      "titles": [
        "4th of Kislev"
      ],
      "weekend": true,
      "next": "2026-11-15"
    },
    "2026-11-15": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "כסלו",
        "d": "ה׳"
      },
      "titles": [
        "5th of Kislev"
      ],
      "next": "2026-11-16"
    },
    "2026-11-16": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "כסלו",
        "d": "ו׳"
      },
      "titles": [
        "6th of Kislev"
      ],
      "next": "2026-11-17"
    },
    "2026-11-17": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "כסלו",
        "d": "ז׳"
      },
      "titles": [
        "7th of Kislev"
      ],
      "next": "2026-11-18"
    },
    "2026-11-18": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "כסלו",
        "d": "ח׳"
      },
      "titles": [
        "8th of Kislev"
      ],
      "next": "2026-11-19"
    },
    "2026-11-19": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "כסלו",
        "d": "ט׳"
      },
      "titles": [
        "9th of Kislev"
      ],
      "next": "2026-11-20"
    },
    "2026-11-20": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "כסלו",
        "d": "י׳"
      },
      "titles": [
        "10th of Kislev"
      ],
      "weekend": true,
      "next": "2026-11-21"
    },
    "2026-11-21": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "כסלו",
        "d": "י״א"
      },
      "titles": [
        "11th of Kislev"
      ],
      "weekend": true,
      "next": "2026-11-22"
    },
    "2026-11-22": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "כסלו",
        "d": "י״ב"
      },
      "titles": [
        "12th of Kislev"
      ],
      "next": "2026-11-23"
    },
    "2026-11-23": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "כסלו",
        "d": "י״ג"
      },
      "titles": [
        "13th of Kislev"
      ],
      "next": "2026-11-24"
    },
    "2026-11-24": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "כסלו",
        "d": "י״ד"
      },
      "titles": [
        "14th of Kislev"
      ],
      "next": "2026-11-25"
    },
    "2026-11-25": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "כסלו",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Kislev"
      ],
      "next": "2026-11-26"
    },
    "2026-11-26": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "כסלו",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Kislev"
      ],
      "next": "2026-11-27"
    },
    "2026-11-27": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "כסלו",
        "d": "י״ז"
      },
      "titles": [
        "17th of Kislev"
      ],
      "weekend": true,
      "next": "2026-11-28"
    },
    "2026-11-28": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "כסלו",
        "d": "י״ח"
      },
      "titles": [
        "18th of Kislev"
      ],
      "weekend": true,
      "next": "2026-11-29"
    },
    "2026-11-29": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "כסלו",
        "d": "י״ט"
      },
      "titles": [
        "19th of Kislev"
      ],
      "next": "2026-11-30"
    },
    "2026-11-30": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "כסלו",
        "d": "כ׳"
      },
      "titles": [
        "20th of Kislev"
      ],
      "next": "2026-12-01"
    },
    "2026-12-01": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "כסלו",
        "d": "כ״א"
      },
      "titles": [
        "21st of Kislev"
      ],
      "next": "2026-12-02"
    },
    "2026-12-02": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "כסלו",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Kislev"
      ],
      "next": "2026-12-03"
    },
    "2026-12-03": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "כסלו",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Kislev"
      ],
      "next": "2026-12-04"
    },
    "2026-12-04": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "כסלו",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Kislev",
        "Chanukah: 1 Candle"
      ],
      "weekend": true,
      "next": "2026-12-05"
    },
    "2026-12-05": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "כסלו",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Kislev",
        "Chanukah: 2 Candles"
      ],
      "weekend": true,
      "next": "2026-12-06"
    },
    "2026-12-06": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "כסלו",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Kislev",
        "Chanukah: 3 Candles"
      ],
      "next": "2026-12-07"
    },
    "2026-12-07": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "כסלו",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Kislev",
        "Chanukah: 4 Candles"
      ],
      "next": "2026-12-08"
    },
    "2026-12-08": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "כסלו",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Kislev",
        "Chanukah: 5 Candles"
      ],
      "next": "2026-12-09"
    },
    "2026-12-09": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "כסלו",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Kislev",
        "Chanukah: 6 Candles"
      ],
      "next": "2026-12-10"
    },
    "2026-12-10": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "כסלו",
        "d": "ל׳"
      },
      "titles": [
        "30th of Kislev",
        "Chag HaBanot",
        "Chanukah: 7 Candles"
      ],
      "next": "2026-12-11"
    },
    "2026-12-11": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "טבת",
        "d": "א׳"
      },
      "titles": [
        "1st of Tevet, 5787",
        "Chanukah: 8 Candles"
      ],
      "weekend": true,
      "next": "2026-12-12"
    },
    "2026-12-12": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "טבת",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Tevet",
        "Chanukah: 8th Day"
      ],
      "weekend": true,
      "next": "2026-12-13"
    },
    "2026-12-13": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "טבת",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Tevet"
      ],
      "next": "2026-12-14"
    },
    "2026-12-14": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "טבת",
        "d": "ד׳"
      },
      "titles": [
        "4th of Tevet"
      ],
      "next": "2026-12-15"
    },
    "2026-12-15": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "טבת",
        "d": "ה׳"
      },
      "titles": [
        "5th of Tevet"
      ],
      "next": "2026-12-16"
    },
    "2026-12-16": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "טבת",
        "d": "ו׳"
      },
      "titles": [
        "6th of Tevet"
      ],
      "next": "2026-12-17"
    },
    "2026-12-17": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "טבת",
        "d": "ז׳"
      },
      "titles": [
        "7th of Tevet"
      ],
      "next": "2026-12-18"
    },
    "2026-12-18": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "טבת",
        "d": "ח׳"
      },
      "titles": [
        "8th of Tevet"
      ],
      "weekend": true,
      "next": "2026-12-19"
    },
    "2026-12-19": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "טבת",
        "d": "ט׳"
      },
      "titles": [
        "9th of Tevet"
      ],
      "weekend": true,
      "next": "2026-12-20"
    },
    "2026-12-20": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "טבת",
        "d": "י׳"
      },
      "titles": [
        "10th of Tevet"
      ],
      "next": "2026-12-21"
    },
    "2026-12-21": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "טבת",
        "d": "י״א"
      },
      "titles": [
        "11th of Tevet"
      ],
      "next": "2026-12-22"
    },
    "2026-12-22": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "טבת",
        "d": "י״ב"
      },
      "titles": [
        "12th of Tevet"
      ],
      "next": "2026-12-23"
    },
    "2026-12-23": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "טבת",
        "d": "י״ג"
      },
      "titles": [
        "13th of Tevet"
      ],
      "next": "2026-12-24"
    },
    "2026-12-24": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "טבת",
        "d": "י״ד"
      },
      "titles": [
        "14th of Tevet"
      ],
      "next": "2026-12-25"
    },
    "2026-12-25": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "טבת",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Tevet"
      ],
      "weekend": true,
      "next": "2026-12-26"
    },
    "2026-12-26": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "טבת",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Tevet"
      ],
      "weekend": true,
      "next": "2026-12-27"
    },
    "2026-12-27": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "טבת",
        "d": "י״ז"
      },
      "titles": [
        "17th of Tevet"
      ],
      "next": "2026-12-28"
    },
    "2026-12-28": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "טבת",
        "d": "י״ח"
      },
      "titles": [
        "18th of Tevet"
      ],
      "next": "2026-12-29"
    },
    "2026-12-29": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "טבת",
        "d": "י״ט"
      },
      "titles": [
        "19th of Tevet"
      ],
      "next": "2026-12-30"
    },
    "2026-12-30": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "טבת",
        "d": "כ׳"
      },
      "titles": [
        "20th of Tevet"
      ],
      "next": "2026-12-31"
    },
    "2026-12-31": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "טבת",
        "d": "כ״א"
      },
      "titles": [
        "21st of Tevet"
      ],
      "next": "2027-01-01"
    },
    "2027-01-01": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "טבת",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Tevet"
      ],
      "weekend": true,
      "next": "2027-01-02"
    },
    "2027-01-02": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "טבת",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Tevet"
      ],
      "weekend": true,
      "next": "2027-01-03"
    },
    "2027-01-03": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "טבת",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Tevet"
      ],
      "next": "2027-01-04"
    },
    "2027-01-04": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "טבת",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Tevet"
      ],
      "next": "2027-01-05"
    },
    "2027-01-05": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "טבת",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Tevet"
      ],
      "next": "2027-01-06"
    },
    "2027-01-06": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "טבת",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Tevet"
      ],
      "next": "2027-01-07"
    },
    "2027-01-07": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "טבת",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Tevet"
      ],
      "next": "2027-01-08"
    },
    "2027-01-08": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "טבת",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Tevet"
      ],
      "weekend": true,
      "next": "2027-01-09"
    },
    "2027-01-09": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "שבט",
        "d": "א׳"
      },
      "titles": [
        "1st of Sh’vat, 5787"
      ],
      "weekend": true,
      "next": "2027-01-10"
    },
    "2027-01-10": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "שבט",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Sh’vat"
      ],
      "next": "2027-01-11"
    },
    "2027-01-11": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "שבט",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Sh’vat"
      ],
      "next": "2027-01-12"
    },
    "2027-01-12": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "שבט",
        "d": "ד׳"
      },
      "titles": [
        "4th of Sh’vat"
      ],
      "next": "2027-01-13"
    },
    "2027-01-13": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "שבט",
        "d": "ה׳"
      },
      "titles": [
        "5th of Sh’vat"
      ],
      "next": "2027-01-14"
    },
    "2027-01-14": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "שבט",
        "d": "ו׳"
      },
      "titles": [
        "6th of Sh’vat"
      ],
      "next": "2027-01-15"
    },
    "2027-01-15": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "שבט",
        "d": "ז׳"
      },
      "titles": [
        "7th of Sh’vat"
      ],
      "weekend": true,
      "next": "2027-01-16"
    },
    "2027-01-16": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "שבט",
        "d": "ח׳"
      },
      "titles": [
        "8th of Sh’vat"
      ],
      "weekend": true,
      "next": "2027-01-17"
    },
    "2027-01-17": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "שבט",
        "d": "ט׳"
      },
      "titles": [
        "9th of Sh’vat"
      ],
      "next": "2027-01-18"
    },
    "2027-01-18": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "שבט",
        "d": "י׳"
      },
      "titles": [
        "10th of Sh’vat"
      ],
      "next": "2027-01-19"
    },
    "2027-01-19": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "שבט",
        "d": "י״א"
      },
      "titles": [
        "11th of Sh’vat"
      ],
      "next": "2027-01-20"
    },
    "2027-01-20": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "שבט",
        "d": "י״ב"
      },
      "titles": [
        "12th of Sh’vat"
      ],
      "next": "2027-01-21"
    },
    "2027-01-21": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "שבט",
        "d": "י״ג"
      },
      "titles": [
        "13th of Sh’vat"
      ],
      "next": "2027-01-22"
    },
    "2027-01-22": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "שבט",
        "d": "י״ד"
      },
      "titles": [
        "14th of Sh’vat"
      ],
      "weekend": true,
      "next": "2027-01-23"
    },
    "2027-01-23": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "שבט",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Sh’vat",
        "Tu BiShvat"
      ],
      "weekend": true,
      "next": "2027-01-24"
    },
    "2027-01-24": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "שבט",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Sh’vat"
      ],
      "next": "2027-01-25"
    },
    "2027-01-25": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "שבט",
        "d": "י״ז"
      },
      "titles": [
        "17th of Sh’vat"
      ],
      "next": "2027-01-26"
    },
    "2027-01-26": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "שבט",
        "d": "י״ח"
      },
      "titles": [
        "18th of Sh’vat"
      ],
      "next": "2027-01-27"
    },
    "2027-01-27": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "שבט",
        "d": "י״ט"
      },
      "titles": [
        "19th of Sh’vat"
      ],
      "next": "2027-01-28"
    },
    "2027-01-28": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "שבט",
        "d": "כ׳"
      },
      "titles": [
        "20th of Sh’vat"
      ],
      "next": "2027-01-29"
    },
    "2027-01-29": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "שבט",
        "d": "כ״א"
      },
      "titles": [
        "21st of Sh’vat"
      ],
      "weekend": true,
      "next": "2027-01-30"
    },
    "2027-01-30": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "שבט",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Sh’vat"
      ],
      "weekend": true,
      "next": "2027-01-31"
    },
    "2027-01-31": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "שבט",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Sh’vat"
      ],
      "next": "2027-02-01"
    },
    "2027-02-01": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "שבט",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Sh’vat"
      ],
      "next": "2027-02-02"
    },
    "2027-02-02": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "שבט",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Sh’vat"
      ],
      "next": "2027-02-03"
    },
    "2027-02-03": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "שבט",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Sh’vat"
      ],
      "next": "2027-02-04"
    },
    "2027-02-04": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "שבט",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Sh’vat"
      ],
      "next": "2027-02-05"
    },
    "2027-02-05": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "שבט",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Sh’vat"
      ],
      "weekend": true,
      "next": "2027-02-06"
    },
    "2027-02-06": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "שבט",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Sh’vat"
      ],
      "weekend": true,
      "next": "2027-02-07"
    },
    "2027-02-07": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "שבט",
        "d": "ל׳"
      },
      "titles": [
        "30th of Sh’vat"
      ],
      "next": "2027-02-08"
    },
    "2027-02-08": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר א׳",
        "d": "א׳"
      },
      "titles": [
        "1st of Adar I, 5787"
      ],
      "next": "2027-02-09"
    },
    "2027-02-09": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר א׳",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Adar I"
      ],
      "next": "2027-02-10"
    },
    "2027-02-10": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר א׳",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Adar I"
      ],
      "next": "2027-02-11"
    },
    "2027-02-11": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר א׳",
        "d": "ד׳"
      },
      "titles": [
        "4th of Adar I"
      ],
      "next": "2027-02-12"
    },
    "2027-02-12": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר א׳",
        "d": "ה׳"
      },
      "titles": [
        "5th of Adar I"
      ],
      "weekend": true,
      "next": "2027-02-13"
    },
    "2027-02-13": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר א׳",
        "d": "ו׳"
      },
      "titles": [
        "6th of Adar I"
      ],
      "weekend": true,
      "next": "2027-02-14"
    },
    "2027-02-14": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר א׳",
        "d": "ז׳"
      },
      "titles": [
        "7th of Adar I"
      ],
      "next": "2027-02-15"
    },
    "2027-02-15": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר א׳",
        "d": "ח׳"
      },
      "titles": [
        "8th of Adar I"
      ],
      "next": "2027-02-16"
    },
    "2027-02-16": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר א׳",
        "d": "ט׳"
      },
      "titles": [
        "9th of Adar I"
      ],
      "next": "2027-02-17"
    },
    "2027-02-17": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר א׳",
        "d": "י׳"
      },
      "titles": [
        "10th of Adar I"
      ],
      "next": "2027-02-18"
    },
    "2027-02-18": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר א׳",
        "d": "י״א"
      },
      "titles": [
        "11th of Adar I"
      ],
      "next": "2027-02-19"
    },
    "2027-02-19": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר א׳",
        "d": "י״ב"
      },
      "titles": [
        "12th of Adar I"
      ],
      "weekend": true,
      "next": "2027-02-20"
    },
    "2027-02-20": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר א׳",
        "d": "י״ג"
      },
      "titles": [
        "13th of Adar I"
      ],
      "weekend": true,
      "next": "2027-02-21"
    },
    "2027-02-21": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר א׳",
        "d": "י״ד"
      },
      "titles": [
        "14th of Adar I",
        "Purim Katan"
      ],
      "next": "2027-02-22"
    },
    "2027-02-22": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר א׳",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Adar I",
        "Shushan Purim Katan"
      ],
      "next": "2027-02-23"
    },
    "2027-02-23": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר א׳",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Adar I"
      ],
      "next": "2027-02-24"
    },
    "2027-02-24": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר א׳",
        "d": "י״ז"
      },
      "titles": [
        "17th of Adar I"
      ],
      "next": "2027-02-25"
    },
    "2027-02-25": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר א׳",
        "d": "י״ח"
      },
      "titles": [
        "18th of Adar I"
      ],
      "next": "2027-02-26"
    },
    "2027-02-26": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר א׳",
        "d": "י״ט"
      },
      "titles": [
        "19th of Adar I"
      ],
      "weekend": true,
      "next": "2027-02-27"
    },
    "2027-02-27": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר א׳",
        "d": "כ׳"
      },
      "titles": [
        "20th of Adar I"
      ],
      "weekend": true,
      "next": "2027-02-28"
    },
    "2027-02-28": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר א׳",
        "d": "כ״א"
      },
      "titles": [
        "21st of Adar I"
      ],
      "next": "2027-03-01"
    },
    "2027-03-01": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר א׳",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Adar I"
      ],
      "next": "2027-03-02"
    },
    "2027-03-02": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר א׳",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Adar I"
      ],
      "next": "2027-03-03"
    },
    "2027-03-03": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר א׳",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Adar I"
      ],
      "next": "2027-03-04"
    },
    "2027-03-04": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר א׳",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Adar I"
      ],
      "next": "2027-03-05"
    },
    "2027-03-05": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר א׳",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Adar I"
      ],
      "weekend": true,
      "next": "2027-03-06"
    },
    "2027-03-06": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר א׳",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Adar I"
      ],
      "weekend": true,
      "next": "2027-03-07"
    },
    "2027-03-07": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר א׳",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Adar I"
      ],
      "next": "2027-03-08"
    },
    "2027-03-08": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר א׳",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Adar I"
      ],
      "next": "2027-03-09"
    },
    "2027-03-09": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר א׳",
        "d": "ל׳"
      },
      "titles": [
        "30th of Adar I"
      ],
      "next": "2027-03-10"
    },
    "2027-03-10": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר ב׳",
        "d": "א׳"
      },
      "titles": [
        "1st of Adar II, 5787"
      ],
      "next": "2027-03-11"
    },
    "2027-03-11": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר ב׳",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Adar II"
      ],
      "next": "2027-03-12"
    },
    "2027-03-12": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר ב׳",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Adar II"
      ],
      "weekend": true,
      "next": "2027-03-13"
    },
    "2027-03-13": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר ב׳",
        "d": "ד׳"
      },
      "titles": [
        "4th of Adar II"
      ],
      "weekend": true,
      "next": "2027-03-14"
    },
    "2027-03-14": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר ב׳",
        "d": "ה׳"
      },
      "titles": [
        "5th of Adar II"
      ],
      "next": "2027-03-15"
    },
    "2027-03-15": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר ב׳",
        "d": "ו׳"
      },
      "titles": [
        "6th of Adar II"
      ],
      "next": "2027-03-16"
    },
    "2027-03-16": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר ב׳",
        "d": "ז׳"
      },
      "titles": [
        "7th of Adar II"
      ],
      "next": "2027-03-17"
    },
    "2027-03-17": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר ב׳",
        "d": "ח׳"
      },
      "titles": [
        "8th of Adar II"
      ],
      "next": "2027-03-18"
    },
    "2027-03-18": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר ב׳",
        "d": "ט׳"
      },
      "titles": [
        "9th of Adar II"
      ],
      "next": "2027-03-19"
    },
    "2027-03-19": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר ב׳",
        "d": "י׳"
      },
      "titles": [
        "10th of Adar II"
      ],
      "weekend": true,
      "next": "2027-03-20"
    },
    "2027-03-20": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר ב׳",
        "d": "י״א"
      },
      "titles": [
        "11th of Adar II"
      ],
      "weekend": true,
      "next": "2027-03-21"
    },
    "2027-03-21": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר ב׳",
        "d": "י״ב"
      },
      "titles": [
        "12th of Adar II"
      ],
      "next": "2027-03-22"
    },
    "2027-03-22": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר ב׳",
        "d": "י״ג"
      },
      "titles": [
        "13th of Adar II",
        "Erev Purim"
      ],
      "next": "2027-03-23"
    },
    "2027-03-23": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר ב׳",
        "d": "י״ד"
      },
      "titles": [
        "14th of Adar II",
        "Purim"
      ],
      "next": "2027-03-24"
    },
    "2027-03-24": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר ב׳",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Adar II",
        "Shushan Purim"
      ],
      "next": "2027-03-25"
    },
    "2027-03-25": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר ב׳",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Adar II"
      ],
      "next": "2027-03-26"
    },
    "2027-03-26": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר ב׳",
        "d": "י״ז"
      },
      "titles": [
        "17th of Adar II"
      ],
      "weekend": true,
      "next": "2027-03-27"
    },
    "2027-03-27": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר ב׳",
        "d": "י״ח"
      },
      "titles": [
        "18th of Adar II"
      ],
      "weekend": true,
      "next": "2027-03-28"
    },
    "2027-03-28": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר ב׳",
        "d": "י״ט"
      },
      "titles": [
        "19th of Adar II"
      ],
      "next": "2027-03-29"
    },
    "2027-03-29": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר ב׳",
        "d": "כ׳"
      },
      "titles": [
        "20th of Adar II"
      ],
      "next": "2027-03-30"
    },
    "2027-03-30": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר ב׳",
        "d": "כ״א"
      },
      "titles": [
        "21st of Adar II"
      ],
      "next": "2027-03-31"
    },
    "2027-03-31": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר ב׳",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Adar II"
      ],
      "next": "2027-04-01"
    },
    "2027-04-01": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר ב׳",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Adar II"
      ],
      "next": "2027-04-02"
    },
    "2027-04-02": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר ב׳",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Adar II"
      ],
      "weekend": true,
      "next": "2027-04-03"
    },
    "2027-04-03": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר ב׳",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Adar II"
      ],
      "weekend": true,
      "next": "2027-04-04"
    },
    "2027-04-04": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר ב׳",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Adar II"
      ],
      "next": "2027-04-05"
    },
    "2027-04-05": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר ב׳",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Adar II"
      ],
      "next": "2027-04-06"
    },
    "2027-04-06": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר ב׳",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Adar II"
      ],
      "next": "2027-04-07"
    },
    "2027-04-07": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אדר ב׳",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Adar II"
      ],
      "next": "2027-04-08"
    },
    "2027-04-08": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "ניסן",
        "d": "א׳"
      },
      "titles": [
        "1st of Nisan, 5787"
      ],
      "next": "2027-04-09"
    },
    "2027-04-09": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "ניסן",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Nisan"
      ],
      "weekend": true,
      "next": "2027-04-10"
    },
    "2027-04-10": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "ניסן",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Nisan"
      ],
      "weekend": true,
      "next": "2027-04-11"
    },
    "2027-04-11": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "ניסן",
        "d": "ד׳"
      },
      "titles": [
        "4th of Nisan"
      ],
      "next": "2027-04-12"
    },
    "2027-04-12": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "ניסן",
        "d": "ה׳"
      },
      "titles": [
        "5th of Nisan"
      ],
      "next": "2027-04-13"
    },
    "2027-04-13": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "ניסן",
        "d": "ו׳"
      },
      "titles": [
        "6th of Nisan"
      ],
      "next": "2027-04-14"
    },
    "2027-04-14": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "ניסן",
        "d": "ז׳"
      },
      "titles": [
        "7th of Nisan"
      ],
      "next": "2027-04-15"
    },
    "2027-04-15": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "ניסן",
        "d": "ח׳"
      },
      "titles": [
        "8th of Nisan"
      ],
      "next": "2027-04-16"
    },
    "2027-04-16": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "ניסן",
        "d": "ט׳"
      },
      "titles": [
        "9th of Nisan"
      ],
      "weekend": true,
      "next": "2027-04-17"
    },
    "2027-04-17": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "ניסן",
        "d": "י׳"
      },
      "titles": [
        "10th of Nisan"
      ],
      "weekend": true,
      "next": "2027-04-18"
    },
    "2027-04-18": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "ניסן",
        "d": "י״א"
      },
      "titles": [
        "11th of Nisan"
      ],
      "next": "2027-04-19"
    },
    "2027-04-19": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "ניסן",
        "d": "י״ב"
      },
      "titles": [
        "12th of Nisan"
      ],
      "next": "2027-04-20"
    },
    "2027-04-20": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "ניסן",
        "d": "י״ג"
      },
      "titles": [
        "13th of Nisan"
      ],
      "next": "2027-04-21"
    },
    "2027-04-21": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "ניסן",
        "d": "י״ד"
      },
      "titles": [
        "14th of Nisan",
        "Erev Pesach"
      ],
      "recess_name": "pagrat pesach",
      "next": "2027-04-22"
    },
    "2027-04-22": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "ניסן",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Nisan",
        "Pesach I"
      ],
      "recess_name": "pagrat pesach",
      "next": "2027-04-23"
    },
    "2027-04-23": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "ניסן",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Nisan",
        "Pesach II (CH’’M)"
      ],
      "recess_name": "pagrat pesach",
      "weekend": true,
      "next": "2027-04-24"
    },
    "2027-04-24": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "ניסן",
        "d": "י״ז"
      },
      "titles": [
        "17th of Nisan",
        "Pesach III (CH’’M)"
      ],
      "recess_name": "pagrat pesach",
      "weekend": true,
      "next": "2027-04-25"
    },
    "2027-04-25": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "ניסן",
        "d": "י״ח"
      },
      "titles": [
        "18th of Nisan",
        "Pesach IV (CH’’M)"
      ],
      "recess_name": "pagrat pesach",
      "next": "2027-04-26"
    },
    "2027-04-26": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "ניסן",
        "d": "י״ט"
      },
      "titles": [
        "19th of Nisan",
        "Pesach V (CH’’M)"
      ],
      "recess_name": "pagrat pesach",
      "next": "2027-04-27"
    },
    "2027-04-27": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "ניסן",
        "d": "כ׳"
      },
      "titles": [
        "20th of Nisan",
        "Pesach VI (CH’’M)"
      ],
      "recess_name": "pagrat pesach",
      "next": "2027-04-28"
    },
    "2027-04-28": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "ניסן",
        "d": "כ״א"
      },
      "titles": [
        "21st of Nisan",
        "Pesach VII"
      ],
      "recess_name": "pagrat pesach",
      "next": "2027-04-29"
    },
    "2027-04-29": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "ניסן",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Nisan"
      ],
      "next": "2027-04-30"
    },
    "2027-04-30": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "ניסן",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Nisan"
      ],
      "weekend": true,
      "next": "2027-05-01"
    },
    "2027-05-01": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "ניסן",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Nisan"
      ],
      "weekend": true,
      "next": "2027-05-02"
    },
    "2027-05-02": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "ניסן",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Nisan"
      ],
      "next": "2027-05-03"
    },
    "2027-05-03": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "ניסן",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Nisan"
      ],
      "next": "2027-05-04"
    },
    "2027-05-04": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "ניסן",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Nisan"
      ],
      "next": "2027-05-05"
    },
    "2027-05-05": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "ניסן",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Nisan"
      ],
      "next": "2027-05-06"
    },
    "2027-05-06": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "ניסן",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Nisan"
      ],
      "next": "2027-05-07"
    },
    "2027-05-07": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "ניסן",
        "d": "ל׳"
      },
      "titles": [
        "30th of Nisan"
      ],
      "weekend": true,
      "next": "2027-05-08"
    },
    "2027-05-08": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אייר",
        "d": "א׳"
      },
      "titles": [
        "1st of Iyyar, 5787"
      ],
      "weekend": true,
      "next": "2027-05-09"
    },
    "2027-05-09": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אייר",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Iyyar"
      ],
      "next": "2027-05-10"
    },
    "2027-05-10": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אייר",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Iyyar"
      ],
      "next": "2027-05-11"
    },
    "2027-05-11": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אייר",
        "d": "ד׳"
      },
      "titles": [
        "4th of Iyyar"
      ],
      "next": "2027-05-12"
    },
    "2027-05-12": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אייר",
        "d": "ה׳"
      },
      "titles": [
        "5th of Iyyar"
      ],
      "shabaton_name": "yom haatzmaut",
      "next": "2027-05-13"
    },
    "2027-05-13": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אייר",
        "d": "ו׳"
      },
      "titles": [
        "6th of Iyyar"
      ],
      "next": "2027-05-14"
    },
    "2027-05-14": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אייר",
        "d": "ז׳"
      },
      "titles": [
        "7th of Iyyar"
      ],
      "weekend": true,
      "next": "2027-05-15"
    },
    "2027-05-15": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אייר",
        "d": "ח׳"
      },
      "titles": [
        "8th of Iyyar"
      ],
      "weekend": true,
      "next": "2027-05-16"
    },
    "2027-05-16": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אייר",
        "d": "ט׳"
      },
      "titles": [
        "9th of Iyyar"
      ],
      "next": "2027-05-17"
    },
    "2027-05-17": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אייר",
        "d": "י׳"
      },
      "titles": [
        "10th of Iyyar"
      ],
      "next": "2027-05-18"
    },
    "2027-05-18": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אייר",
        "d": "י״א"
      },
      "titles": [
        "11th of Iyyar"
      ],
      "next": "2027-05-19"
    },
    "2027-05-19": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אייר",
        "d": "י״ב"
      },
      "titles": [
        "12th of Iyyar"
      ],
      "next": "2027-05-20"
    },
    "2027-05-20": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אייר",
        "d": "י״ג"
      },
      "titles": [
        "13th of Iyyar"
      ],
      "next": "2027-05-21"
    },
    "2027-05-21": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אייר",
        "d": "י״ד"
      },
      "titles": [
        "14th of Iyyar",
        "Pesach Sheni"
      ],
      "weekend": true,
      "next": "2027-05-22"
    },
    "2027-05-22": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אייר",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Iyyar"
      ],
      "weekend": true,
      "next": "2027-05-23"
    },
    "2027-05-23": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אייר",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Iyyar"
      ],
      "next": "2027-05-24"
    },
    "2027-05-24": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אייר",
        "d": "י״ז"
      },
      "titles": [
        "17th of Iyyar"
      ],
      "next": "2027-05-25"
    },
    "2027-05-25": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אייר",
        "d": "י״ח"
      },
      "titles": [
        "18th of Iyyar",
        "Lag BaOmer"
      ],
      "next": "2027-05-26"
    },
    "2027-05-26": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אייר",
        "d": "י״ט"
      },
      "titles": [
        "19th of Iyyar"
      ],
      "next": "2027-05-27"
    },
    "2027-05-27": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אייר",
        "d": "כ׳"
      },
      "titles": [
        "20th of Iyyar"
      ],
      "next": "2027-05-28"
    },
    "2027-05-28": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אייר",
        "d": "כ״א"
      },
      "titles": [
        "21st of Iyyar"
      ],
      "weekend": true,
      "next": "2027-05-29"
    },
    "2027-05-29": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אייר",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Iyyar"
      ],
      "weekend": true,
      "next": "2027-05-30"
    },
    "2027-05-30": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אייר",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Iyyar"
      ],
      "next": "2027-05-31"
    },
    "2027-05-31": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אייר",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Iyyar"
      ],
      "next": "2027-06-01"
    },
    "2027-06-01": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אייר",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Iyyar"
      ],
      "next": "2027-06-02"
    },
    "2027-06-02": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אייר",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Iyyar"
      ],
      "next": "2027-06-03"
    },
    "2027-06-03": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אייר",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Iyyar"
      ],
      "next": "2027-06-04"
    },
    "2027-06-04": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אייר",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Iyyar"
      ],
      "weekend": true,
      "next": "2027-06-05"
    },
    "2027-06-05": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אייר",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Iyyar"
      ],
      "weekend": true,
      "next": "2027-06-06"
    },
    "2027-06-06": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "סיון",
        "d": "א׳"
      },
      "titles": [
        "1st of Sivan, 5787"
      ],
      "next": "2027-06-07"
    },
    "2027-06-07": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "סיון",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Sivan"
      ],
      "next": "2027-06-08"
    },
    "2027-06-08": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "סיון",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Sivan"
      ],
      "next": "2027-06-09"
    },
    "2027-06-09": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "סיון",
        "d": "ד׳"
      },
      "titles": [
        "4th of Sivan"
      ],
      "next": "2027-06-10"
    },
    "2027-06-10": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "סיון",
        "d": "ה׳"
      },
      "titles": [
        "5th of Sivan",
        "Erev Shavuot"
      ],
      "next": "2027-06-11"
    },
    "2027-06-11": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "סיון",
        "d": "ו׳"
      },
      "titles": [
        "6th of Sivan",
        "Shavuot"
      ],
      "shabaton_name": "shavuot",
      "weekend": true,
      "next": "2027-06-12"
    },
    "2027-06-12": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "סיון",
        "d": "ז׳"
      },
      "titles": [
        "7th of Sivan"
      ],
      "weekend": true,
      "next": "2027-06-13"
    },
    "2027-06-13": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "סיון",
        "d": "ח׳"
      },
      "titles": [
        "8th of Sivan"
      ],
      "next": "2027-06-14"
    },
    "2027-06-14": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "סיון",
        "d": "ט׳"
      },
      "titles": [
        "9th of Sivan"
      ],
      "next": "2027-06-15"
    },
    "2027-06-15": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "סיון",
        "d": "י׳"
      },
      "titles": [
        "10th of Sivan"
      ],
      "next": "2027-06-16"
    },
    "2027-06-16": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "סיון",
        "d": "י״א"
      },
      "titles": [
        "11th of Sivan"
      ],
      "next": "2027-06-17"
    },
    "2027-06-17": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "סיון",
        "d": "י״ב"
      },
      "titles": [
        "12th of Sivan"
      ],
      "next": "2027-06-18"
    },
    "2027-06-18": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "סיון",
        "d": "י״ג"
      },
      "titles": [
        "13th of Sivan"
      ],
      "weekend": true,
      "next": "2027-06-19"
    },
    "2027-06-19": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "סיון",
        "d": "י״ד"
      },
      "titles": [
        "14th of Sivan"
      ],
      "weekend": true,
      "next": "2027-06-20"
    },
    "2027-06-20": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "סיון",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Sivan"
      ],
      "next": "2027-06-21"
    },
    "2027-06-21": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "סיון",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Sivan"
      ],
      "next": "2027-06-22"
    },
    "2027-06-22": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "סיון",
        "d": "י״ז"
      },
      "titles": [
        "17th of Sivan"
      ],
      "next": "2027-06-23"
    },
    "2027-06-23": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "סיון",
        "d": "י״ח"
      },
      "titles": [
        "18th of Sivan"
      ],
      "next": "2027-06-24"
    },
    "2027-06-24": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "סיון",
        "d": "י״ט"
      },
      "titles": [
        "19th of Sivan"
      ],
      "next": "2027-06-25"
    },
    "2027-06-25": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "סיון",
        "d": "כ׳"
      },
      "titles": [
        "20th of Sivan"
      ],
      "weekend": true,
      "next": "2027-06-26"
    },
    "2027-06-26": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "סיון",
        "d": "כ״א"
      },
      "titles": [
        "21st of Sivan"
      ],
      "weekend": true,
      "next": "2027-06-27"
    },
    "2027-06-27": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "סיון",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Sivan"
      ],
      "next": "2027-06-28"
    },
    "2027-06-28": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "סיון",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Sivan"
      ],
      "next": "2027-06-29"
    },
    "2027-06-29": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "סיון",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Sivan"
      ],
      "next": "2027-06-30"
    },
    "2027-06-30": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "סיון",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Sivan"
      ],
      "next": "2027-07-01"
    },
    "2027-07-01": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "סיון",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Sivan"
      ],
      "next": "2027-07-02"
    },
    "2027-07-02": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "סיון",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Sivan"
      ],
      "weekend": true,
      "next": "2027-07-03"
    },
    "2027-07-03": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "סיון",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Sivan"
      ],
      "weekend": true,
      "next": "2027-07-04"
    },
    "2027-07-04": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "סיון",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Sivan"
      ],
      "next": "2027-07-05"
    },
    "2027-07-05": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "סיון",
        "d": "ל׳"
      },
      "titles": [
        "30th of Sivan"
      ],
      "next": "2027-07-06"
    },
    "2027-07-06": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תמוז",
        "d": "א׳"
      },
      "titles": [
        "1st of Tamuz, 5787"
      ],
      "next": "2027-07-07"
    },
    "2027-07-07": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תמוז",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Tamuz"
      ],
      "next": "2027-07-08"
    },
    "2027-07-08": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תמוז",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Tamuz"
      ],
      "next": "2027-07-09"
    },
    "2027-07-09": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תמוז",
        "d": "ד׳"
      },
      "titles": [
        "4th of Tamuz"
      ],
      "weekend": true,
      "next": "2027-07-10"
    },
    "2027-07-10": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תמוז",
        "d": "ה׳"
      },
      "titles": [
        "5th of Tamuz"
      ],
      "weekend": true,
      "next": "2027-07-11"
    },
    "2027-07-11": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תמוז",
        "d": "ו׳"
      },
      "titles": [
        "6th of Tamuz"
      ],
      "next": "2027-07-12"
    },
    "2027-07-12": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תמוז",
        "d": "ז׳"
      },
      "titles": [
        "7th of Tamuz"
      ],
      "next": "2027-07-13"
    },
    "2027-07-13": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תמוז",
        "d": "ח׳"
      },
      "titles": [
        "8th of Tamuz"
      ],
      "next": "2027-07-14"
    },
    "2027-07-14": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תמוז",
        "d": "ט׳"
      },
      "titles": [
        "9th of Tamuz"
      ],
      "next": "2027-07-15"
    },
    "2027-07-15": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תמוז",
        "d": "י׳"
      },
      "titles": [
        "10th of Tamuz"
      ],
      "next": "2027-07-16"
    },
    "2027-07-16": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תמוז",
        "d": "י״א"
      },
      "titles": [
        "11th of Tamuz"
      ],
      "weekend": true,
      "next": "2027-07-17"
    },
    "2027-07-17": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תמוז",
        "d": "י״ב"
      },
      "titles": [
        "12th of Tamuz"
      ],
      "weekend": true,
      "next": "2027-07-18"
    },
    "2027-07-18": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תמוז",
        "d": "י״ג"
      },
      "titles": [
        "13th of Tamuz"
      ],
      "next": "2027-07-19"
    },
    "2027-07-19": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תמוז",
        "d": "י״ד"
      },
      "titles": [
        "14th of Tamuz"
      ],
      "next": "2027-07-20"
    },
    "2027-07-20": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תמוז",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Tamuz"
      ],
      "next": "2027-07-21"
    },
    "2027-07-21": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תמוז",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-07-22"
    },
    "2027-07-22": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תמוז",
        "d": "י״ז"
      },
      "titles": [
        "17th of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-07-23"
    },
    "2027-07-23": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תמוז",
        "d": "י״ח"
      },
      "titles": [
        "18th of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2027-07-24"
    },
    "2027-07-24": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תמוז",
        "d": "י״ט"
      },
      "titles": [
        "19th of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2027-07-25"
    },
    "2027-07-25": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תמוז",
        "d": "כ׳"
      },
      "titles": [
        "20th of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-07-26"
    },
    "2027-07-26": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תמוז",
        "d": "כ״א"
      },
      "titles": [
        "21st of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-07-27"
    },
    "2027-07-27": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תמוז",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-07-28"
    },
    "2027-07-28": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תמוז",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-07-29"
    },
    "2027-07-29": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תמוז",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-07-30"
    },
    "2027-07-30": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תמוז",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2027-07-31"
    },
    "2027-07-31": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תמוז",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2027-08-01"
    },
    "2027-08-01": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תמוז",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-08-02"
    },
    "2027-08-02": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תמוז",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-08-03"
    },
    "2027-08-03": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "תמוז",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-08-04"
    },
    "2027-08-04": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אב",
        "d": "א׳"
      },
      "titles": [
        "1st of Av, 5787"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-08-05"
    },
    "2027-08-05": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אב",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-08-06"
    },
    "2027-08-06": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אב",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2027-08-07"
    },
    "2027-08-07": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אב",
        "d": "ד׳"
      },
      "titles": [
        "4th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2027-08-08"
    },
    "2027-08-08": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אב",
        "d": "ה׳"
      },
      "titles": [
        "5th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-08-09"
    },
    "2027-08-09": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אב",
        "d": "ו׳"
      },
      "titles": [
        "6th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-08-10"
    },
    "2027-08-10": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אב",
        "d": "ז׳"
      },
      "titles": [
        "7th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-08-11"
    },
    "2027-08-11": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אב",
        "d": "ח׳"
      },
      "titles": [
        "8th of Av",
        "Erev Tish’a B’Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-08-12"
    },
    "2027-08-12": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אב",
        "d": "ט׳"
      },
      "titles": [
        "9th of Av",
        "Tish’a B’Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-08-13"
    },
    "2027-08-13": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אב",
        "d": "י׳"
      },
      "titles": [
        "10th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2027-08-14"
    },
    "2027-08-14": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אב",
        "d": "י״א"
      },
      "titles": [
        "11th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2027-08-15"
    },
    "2027-08-15": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אב",
        "d": "י״ב"
      },
      "titles": [
        "12th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-08-16"
    },
    "2027-08-16": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אב",
        "d": "י״ג"
      },
      "titles": [
        "13th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-08-17"
    },
    "2027-08-17": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אב",
        "d": "י״ד"
      },
      "titles": [
        "14th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-08-18"
    },
    "2027-08-18": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אב",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Av",
        "Tu B’Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-08-19"
    },
    "2027-08-19": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אב",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-08-20"
    },
    "2027-08-20": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אב",
        "d": "י״ז"
      },
      "titles": [
        "17th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2027-08-21"
    },
    "2027-08-21": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אב",
        "d": "י״ח"
      },
      "titles": [
        "18th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2027-08-22"
    },
    "2027-08-22": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אב",
        "d": "י״ט"
      },
      "titles": [
        "19th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-08-23"
    },
    "2027-08-23": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אב",
        "d": "כ׳"
      },
      "titles": [
        "20th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-08-24"
    },
    "2027-08-24": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אב",
        "d": "כ״א"
      },
      "titles": [
        "21st of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-08-25"
    },
    "2027-08-25": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אב",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-08-26"
    },
    "2027-08-26": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אב",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-08-27"
    },
    "2027-08-27": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אב",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2027-08-28"
    },
    "2027-08-28": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אב",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2027-08-29"
    },
    "2027-08-29": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אב",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-08-30"
    },
    "2027-08-30": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אב",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-08-31"
    },
    "2027-08-31": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אב",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-09-01"
    },
    "2027-09-01": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אב",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-09-02"
    },
    "2027-09-02": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אב",
        "d": "ל׳"
      },
      "titles": [
        "30th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-09-03"
    },
    "2027-09-03": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אלול",
        "d": "א׳"
      },
      "titles": [
        "1st of Elul, 5787",
        "Rosh Hashana LaBehemot"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2027-09-04"
    },
    "2027-09-04": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אלול",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2027-09-05"
    },
    "2027-09-05": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אלול",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2027-09-06"
    },
    "2027-09-06": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אלול",
        "d": "ד׳"
      },
      "titles": [
        "4th of Elul"
      ],
      "next": "2027-09-07"
    },
    "2027-09-07": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אלול",
        "d": "ה׳"
      },
      "titles": [
        "5th of Elul"
      ],
      "next": "2027-09-08"
    },
    "2027-09-08": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אלול",
        "d": "ו׳"
      },
      "titles": [
        "6th of Elul"
      ],
      "next": "2027-09-09"
    },
    "2027-09-09": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אלול",
        "d": "ז׳"
      },
      "titles": [
        "7th of Elul"
      ],
      "next": "2027-09-10"
    },
    "2027-09-10": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אלול",
        "d": "ח׳"
      },
      "titles": [
        "8th of Elul"
      ],
      "weekend": true,
      "next": "2027-09-11"
    },
    "2027-09-11": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אלול",
        "d": "ט׳"
      },
      "titles": [
        "9th of Elul"
      ],
      "weekend": true,
      "next": "2027-09-12"
    },
    "2027-09-12": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אלול",
        "d": "י׳"
      },
      "titles": [
        "10th of Elul"
      ],
      "next": "2027-09-13"
    },
    "2027-09-13": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אלול",
        "d": "י״א"
      },
      "titles": [
        "11th of Elul"
      ],
      "next": "2027-09-14"
    },
    "2027-09-14": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אלול",
        "d": "י״ב"
      },
      "titles": [
        "12th of Elul"
      ],
      "next": "2027-09-15"
    },
    "2027-09-15": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אלול",
        "d": "י״ג"
      },
      "titles": [
        "13th of Elul"
      ],
      "next": "2027-09-16"
    },
    "2027-09-16": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אלול",
        "d": "י״ד"
      },
      "titles": [
        "14th of Elul"
      ],
      "next": "2027-09-17"
    },
    "2027-09-17": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אלול",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Elul"
      ],
      "weekend": true,
      "next": "2027-09-18"
    },
    "2027-09-18": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אלול",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Elul"
      ],
      "weekend": true,
      "next": "2027-09-19"
    },
    "2027-09-19": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אלול",
        "d": "י״ז"
      },
      "titles": [
        "17th of Elul"
      ],
      "next": "2027-09-20"
    },
    "2027-09-20": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אלול",
        "d": "י״ח"
      },
      "titles": [
        "18th of Elul"
      ],
      "next": "2027-09-21"
    },
    "2027-09-21": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אלול",
        "d": "י״ט"
      },
      "titles": [
        "19th of Elul"
      ],
      "next": "2027-09-22"
    },
    "2027-09-22": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אלול",
        "d": "כ׳"
      },
      "titles": [
        "20th of Elul"
      ],
      "next": "2027-09-23"
    },
    "2027-09-23": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אלול",
        "d": "כ״א"
      },
      "titles": [
        "21st of Elul"
      ],
      "next": "2027-09-24"
    },
    "2027-09-24": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אלול",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Elul"
      ],
      "weekend": true,
      "next": "2027-09-25"
    },
    "2027-09-25": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אלול",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Elul",
        "Leil Selichot"
      ],
      "weekend": true,
      "next": "2027-09-26"
    },
    "2027-09-26": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אלול",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Elul"
      ],
      "next": "2027-09-27"
    },
    "2027-09-27": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אלול",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Elul"
      ],
      "next": "2027-09-28"
    },
    "2027-09-28": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אלול",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Elul"
      ],
      "next": "2027-09-29"
    },
    "2027-09-29": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אלול",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Elul"
      ],
      "next": "2027-09-30"
    },
    "2027-09-30": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אלול",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Elul"
      ],
      "next": "2027-10-01"
    },
    "2027-10-01": {
      "heDateParts": {
        "y": "תשפ״ז",
        "m": "אלול",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Elul",
        "Erev Rosh Hashana"
      ],
      "weekend": true,
      "next": "2027-10-02"
    },
    "2027-10-02": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תשרי",
        "d": "א׳"
      },
      "titles": [
        "1st of Tishrei, 5788",
        "Rosh Hashana 5788"
      ],
      "shabaton_name": "rosh hashana",
      "weekend": true,
      "next": "2027-10-03"
    },
    "2027-10-03": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תשרי",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Tishrei",
        "Rosh Hashana II"
      ],
      "shabaton_name": "rosh hashana",
      "next": "2027-10-04"
    },
    "2027-10-04": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תשרי",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Tishrei"
      ],
      "next": "2027-10-05"
    },
    "2027-10-05": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תשרי",
        "d": "ד׳"
      },
      "titles": [
        "4th of Tishrei"
      ],
      "next": "2027-10-06"
    },
    "2027-10-06": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תשרי",
        "d": "ה׳"
      },
      "titles": [
        "5th of Tishrei"
      ],
      "next": "2027-10-07"
    },
    "2027-10-07": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תשרי",
        "d": "ו׳"
      },
      "titles": [
        "6th of Tishrei"
      ],
      "next": "2027-10-08"
    },
    "2027-10-08": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תשרי",
        "d": "ז׳"
      },
      "titles": [
        "7th of Tishrei"
      ],
      "weekend": true,
      "next": "2027-10-09"
    },
    "2027-10-09": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תשרי",
        "d": "ח׳"
      },
      "titles": [
        "8th of Tishrei"
      ],
      "weekend": true,
      "next": "2027-10-10"
    },
    "2027-10-10": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תשרי",
        "d": "ט׳"
      },
      "titles": [
        "9th of Tishrei",
        "Erev Yom Kippur"
      ],
      "next": "2027-10-11"
    },
    "2027-10-11": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תשרי",
        "d": "י׳"
      },
      "titles": [
        "10th of Tishrei",
        "Yom Kippur"
      ],
      "shabaton_name": "yom kipur",
      "next": "2027-10-12"
    },
    "2027-10-12": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תשרי",
        "d": "י״א"
      },
      "titles": [
        "11th of Tishrei"
      ],
      "next": "2027-10-13"
    },
    "2027-10-13": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תשרי",
        "d": "י״ב"
      },
      "titles": [
        "12th of Tishrei"
      ],
      "next": "2027-10-14"
    },
    "2027-10-14": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תשרי",
        "d": "י״ג"
      },
      "titles": [
        "13th of Tishrei"
      ],
      "next": "2027-10-15"
    },
    "2027-10-15": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תשרי",
        "d": "י״ד"
      },
      "titles": [
        "14th of Tishrei",
        "Erev Sukkot"
      ],
      "recess_name": "pagrat sukot",
      "weekend": true,
      "next": "2027-10-16"
    },
    "2027-10-16": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תשרי",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Tishrei",
        "Sukkot I"
      ],
      "recess_name": "pagrat sukot",
      "weekend": true,
      "next": "2027-10-17"
    },
    "2027-10-17": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תשרי",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Tishrei",
        "Sukkot II (CH’’M)"
      ],
      "recess_name": "pagrat sukot",
      "next": "2027-10-18"
    },
    "2027-10-18": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תשרי",
        "d": "י״ז"
      },
      "titles": [
        "17th of Tishrei",
        "Sukkot III (CH’’M)"
      ],
      "recess_name": "pagrat sukot",
      "next": "2027-10-19"
    },
    "2027-10-19": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תשרי",
        "d": "י״ח"
      },
      "titles": [
        "18th of Tishrei",
        "Sukkot IV (CH’’M)"
      ],
      "recess_name": "pagrat sukot",
      "next": "2027-10-20"
    },
    "2027-10-20": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תשרי",
        "d": "י״ט"
      },
      "titles": [
        "19th of Tishrei",
        "Sukkot V (CH’’M)"
      ],
      "recess_name": "pagrat sukot",
      "next": "2027-10-21"
    },
    "2027-10-21": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תשרי",
        "d": "כ׳"
      },
      "titles": [
        "20th of Tishrei",
        "Sukkot VI (CH’’M)"
      ],
      "recess_name": "pagrat sukot",
      "next": "2027-10-22"
    },
    "2027-10-22": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תשרי",
        "d": "כ״א"
      },
      "titles": [
        "21st of Tishrei",
        "Sukkot VII (Hoshana Raba)"
      ],
      "recess_name": "pagrat sukot",
      "weekend": true,
      "next": "2027-10-23"
    },
    "2027-10-23": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תשרי",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Tishrei",
        "Shmini Atzeret"
      ],
      "recess_name": "pagrat sukot",
      "weekend": true,
      "next": "2027-10-24"
    },
    "2027-10-24": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תשרי",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Tishrei"
      ],
      "next": "2027-10-25"
    },
    "2027-10-25": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תשרי",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Tishrei"
      ],
      "next": "2027-10-26"
    },
    "2027-10-26": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תשרי",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Tishrei"
      ],
      "next": "2027-10-27"
    },
    "2027-10-27": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תשרי",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Tishrei"
      ],
      "next": "2027-10-28"
    },
    "2027-10-28": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תשרי",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Tishrei"
      ],
      "next": "2027-10-29"
    },
    "2027-10-29": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תשרי",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Tishrei"
      ],
      "weekend": true,
      "next": "2027-10-30"
    },
    "2027-10-30": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תשרי",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Tishrei"
      ],
      "weekend": true,
      "next": "2027-10-31"
    },
    "2027-10-31": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תשרי",
        "d": "ל׳"
      },
      "titles": [
        "30th of Tishrei"
      ],
      "next": "2027-11-01"
    },
    "2027-11-01": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "חשון",
        "d": "א׳"
      },
      "titles": [
        "1st of Cheshvan, 5788"
      ],
      "next": "2027-11-02"
    },
    "2027-11-02": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "חשון",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Cheshvan"
      ],
      "next": "2027-11-03"
    },
    "2027-11-03": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "חשון",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Cheshvan"
      ],
      "next": "2027-11-04"
    },
    "2027-11-04": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "חשון",
        "d": "ד׳"
      },
      "titles": [
        "4th of Cheshvan"
      ],
      "next": "2027-11-05"
    },
    "2027-11-05": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "חשון",
        "d": "ה׳"
      },
      "titles": [
        "5th of Cheshvan"
      ],
      "weekend": true,
      "next": "2027-11-06"
    },
    "2027-11-06": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "חשון",
        "d": "ו׳"
      },
      "titles": [
        "6th of Cheshvan"
      ],
      "weekend": true,
      "next": "2027-11-07"
    },
    "2027-11-07": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "חשון",
        "d": "ז׳"
      },
      "titles": [
        "7th of Cheshvan"
      ],
      "next": "2027-11-08"
    },
    "2027-11-08": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "חשון",
        "d": "ח׳"
      },
      "titles": [
        "8th of Cheshvan"
      ],
      "next": "2027-11-09"
    },
    "2027-11-09": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "חשון",
        "d": "ט׳"
      },
      "titles": [
        "9th of Cheshvan"
      ],
      "next": "2027-11-10"
    },
    "2027-11-10": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "חשון",
        "d": "י׳"
      },
      "titles": [
        "10th of Cheshvan"
      ],
      "next": "2027-11-11"
    },
    "2027-11-11": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "חשון",
        "d": "י״א"
      },
      "titles": [
        "11th of Cheshvan"
      ],
      "next": "2027-11-12"
    },
    "2027-11-12": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "חשון",
        "d": "י״ב"
      },
      "titles": [
        "12th of Cheshvan"
      ],
      "weekend": true,
      "next": "2027-11-13"
    },
    "2027-11-13": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "חשון",
        "d": "י״ג"
      },
      "titles": [
        "13th of Cheshvan"
      ],
      "weekend": true,
      "next": "2027-11-14"
    },
    "2027-11-14": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "חשון",
        "d": "י״ד"
      },
      "titles": [
        "14th of Cheshvan"
      ],
      "next": "2027-11-15"
    },
    "2027-11-15": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "חשון",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Cheshvan"
      ],
      "next": "2027-11-16"
    },
    "2027-11-16": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "חשון",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Cheshvan"
      ],
      "next": "2027-11-17"
    },
    "2027-11-17": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "חשון",
        "d": "י״ז"
      },
      "titles": [
        "17th of Cheshvan"
      ],
      "next": "2027-11-18"
    },
    "2027-11-18": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "חשון",
        "d": "י״ח"
      },
      "titles": [
        "18th of Cheshvan"
      ],
      "next": "2027-11-19"
    },
    "2027-11-19": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "חשון",
        "d": "י״ט"
      },
      "titles": [
        "19th of Cheshvan"
      ],
      "weekend": true,
      "next": "2027-11-20"
    },
    "2027-11-20": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "חשון",
        "d": "כ׳"
      },
      "titles": [
        "20th of Cheshvan"
      ],
      "weekend": true,
      "next": "2027-11-21"
    },
    "2027-11-21": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "חשון",
        "d": "כ״א"
      },
      "titles": [
        "21st of Cheshvan"
      ],
      "next": "2027-11-22"
    },
    "2027-11-22": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "חשון",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Cheshvan"
      ],
      "next": "2027-11-23"
    },
    "2027-11-23": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "חשון",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Cheshvan"
      ],
      "next": "2027-11-24"
    },
    "2027-11-24": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "חשון",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Cheshvan"
      ],
      "next": "2027-11-25"
    },
    "2027-11-25": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "חשון",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Cheshvan"
      ],
      "next": "2027-11-26"
    },
    "2027-11-26": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "חשון",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Cheshvan"
      ],
      "weekend": true,
      "next": "2027-11-27"
    },
    "2027-11-27": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "חשון",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Cheshvan"
      ],
      "weekend": true,
      "next": "2027-11-28"
    },
    "2027-11-28": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "חשון",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Cheshvan"
      ],
      "next": "2027-11-29"
    },
    "2027-11-29": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "חשון",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Cheshvan"
      ],
      "next": "2027-11-30"
    },
    "2027-11-30": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "חשון",
        "d": "ל׳"
      },
      "titles": [
        "30th of Cheshvan"
      ],
      "next": "2027-12-01"
    },
    "2027-12-01": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "כסלו",
        "d": "א׳"
      },
      "titles": [
        "1st of Kislev, 5788"
      ],
      "next": "2027-12-02"
    },
    "2027-12-02": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "כסלו",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Kislev"
      ],
      "next": "2027-12-03"
    },
    "2027-12-03": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "כסלו",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Kislev"
      ],
      "weekend": true,
      "next": "2027-12-04"
    },
    "2027-12-04": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "כסלו",
        "d": "ד׳"
      },
      "titles": [
        "4th of Kislev"
      ],
      "weekend": true,
      "next": "2027-12-05"
    },
    "2027-12-05": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "כסלו",
        "d": "ה׳"
      },
      "titles": [
        "5th of Kislev"
      ],
      "next": "2027-12-06"
    },
    "2027-12-06": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "כסלו",
        "d": "ו׳"
      },
      "titles": [
        "6th of Kislev"
      ],
      "next": "2027-12-07"
    },
    "2027-12-07": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "כסלו",
        "d": "ז׳"
      },
      "titles": [
        "7th of Kislev"
      ],
      "next": "2027-12-08"
    },
    "2027-12-08": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "כסלו",
        "d": "ח׳"
      },
      "titles": [
        "8th of Kislev"
      ],
      "next": "2027-12-09"
    },
    "2027-12-09": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "כסלו",
        "d": "ט׳"
      },
      "titles": [
        "9th of Kislev"
      ],
      "next": "2027-12-10"
    },
    "2027-12-10": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "כסלו",
        "d": "י׳"
      },
      "titles": [
        "10th of Kislev"
      ],
      "weekend": true,
      "next": "2027-12-11"
    },
    "2027-12-11": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "כסלו",
        "d": "י״א"
      },
      "titles": [
        "11th of Kislev"
      ],
      "weekend": true,
      "next": "2027-12-12"
    },
    "2027-12-12": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "כסלו",
        "d": "י״ב"
      },
      "titles": [
        "12th of Kislev"
      ],
      "next": "2027-12-13"
    },
    "2027-12-13": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "כסלו",
        "d": "י״ג"
      },
      "titles": [
        "13th of Kislev"
      ],
      "next": "2027-12-14"
    },
    "2027-12-14": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "כסלו",
        "d": "י״ד"
      },
      "titles": [
        "14th of Kislev"
      ],
      "next": "2027-12-15"
    },
    "2027-12-15": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "כסלו",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Kislev"
      ],
      "next": "2027-12-16"
    },
    "2027-12-16": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "כסלו",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Kislev"
      ],
      "next": "2027-12-17"
    },
    "2027-12-17": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "כסלו",
        "d": "י״ז"
      },
      "titles": [
        "17th of Kislev"
      ],
      "weekend": true,
      "next": "2027-12-18"
    },
    "2027-12-18": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "כסלו",
        "d": "י״ח"
      },
      "titles": [
        "18th of Kislev"
      ],
      "weekend": true,
      "next": "2027-12-19"
    },
    "2027-12-19": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "כסלו",
        "d": "י״ט"
      },
      "titles": [
        "19th of Kislev"
      ],
      "next": "2027-12-20"
    },
    "2027-12-20": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "כסלו",
        "d": "כ׳"
      },
      "titles": [
        "20th of Kislev"
      ],
      "next": "2027-12-21"
    },
    "2027-12-21": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "כסלו",
        "d": "כ״א"
      },
      "titles": [
        "21st of Kislev"
      ],
      "next": "2027-12-22"
    },
    "2027-12-22": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "כסלו",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Kislev"
      ],
      "next": "2027-12-23"
    },
    "2027-12-23": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "כסלו",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Kislev"
      ],
      "next": "2027-12-24"
    },
    "2027-12-24": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "כסלו",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Kislev",
        "Chanukah: 1 Candle"
      ],
      "weekend": true,
      "next": "2027-12-25"
    },
    "2027-12-25": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "כסלו",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Kislev",
        "Chanukah: 2 Candles"
      ],
      "weekend": true,
      "next": "2027-12-26"
    },
    "2027-12-26": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "כסלו",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Kislev",
        "Chanukah: 3 Candles"
      ],
      "next": "2027-12-27"
    },
    "2027-12-27": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "כסלו",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Kislev",
        "Chanukah: 4 Candles"
      ],
      "next": "2027-12-28"
    },
    "2027-12-28": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "כסלו",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Kislev",
        "Chanukah: 5 Candles"
      ],
      "next": "2027-12-29"
    },
    "2027-12-29": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "כסלו",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Kislev",
        "Chanukah: 6 Candles"
      ],
      "next": "2027-12-30"
    },
    "2027-12-30": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "כסלו",
        "d": "ל׳"
      },
      "titles": [
        "30th of Kislev",
        "Chag HaBanot",
        "Chanukah: 7 Candles"
      ],
      "next": "2027-12-31"
    },
    "2027-12-31": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "טבת",
        "d": "א׳"
      },
      "titles": [
        "1st of Tevet, 5788",
        "Chanukah: 8 Candles"
      ],
      "weekend": true,
      "next": "2028-01-01"
    },
    "2028-01-01": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "טבת",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Tevet",
        "Chanukah: 8th Day"
      ],
      "weekend": true,
      "next": "2028-01-02"
    },
    "2028-01-02": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "טבת",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Tevet"
      ],
      "next": "2028-01-03"
    },
    "2028-01-03": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "טבת",
        "d": "ד׳"
      },
      "titles": [
        "4th of Tevet"
      ],
      "next": "2028-01-04"
    },
    "2028-01-04": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "טבת",
        "d": "ה׳"
      },
      "titles": [
        "5th of Tevet"
      ],
      "next": "2028-01-05"
    },
    "2028-01-05": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "טבת",
        "d": "ו׳"
      },
      "titles": [
        "6th of Tevet"
      ],
      "next": "2028-01-06"
    },
    "2028-01-06": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "טבת",
        "d": "ז׳"
      },
      "titles": [
        "7th of Tevet"
      ],
      "next": "2028-01-07"
    },
    "2028-01-07": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "טבת",
        "d": "ח׳"
      },
      "titles": [
        "8th of Tevet"
      ],
      "weekend": true,
      "next": "2028-01-08"
    },
    "2028-01-08": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "טבת",
        "d": "ט׳"
      },
      "titles": [
        "9th of Tevet"
      ],
      "weekend": true,
      "next": "2028-01-09"
    },
    "2028-01-09": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "טבת",
        "d": "י׳"
      },
      "titles": [
        "10th of Tevet"
      ],
      "next": "2028-01-10"
    },
    "2028-01-10": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "טבת",
        "d": "י״א"
      },
      "titles": [
        "11th of Tevet"
      ],
      "next": "2028-01-11"
    },
    "2028-01-11": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "טבת",
        "d": "י״ב"
      },
      "titles": [
        "12th of Tevet"
      ],
      "next": "2028-01-12"
    },
    "2028-01-12": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "טבת",
        "d": "י״ג"
      },
      "titles": [
        "13th of Tevet"
      ],
      "next": "2028-01-13"
    },
    "2028-01-13": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "טבת",
        "d": "י״ד"
      },
      "titles": [
        "14th of Tevet"
      ],
      "next": "2028-01-14"
    },
    "2028-01-14": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "טבת",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Tevet"
      ],
      "weekend": true,
      "next": "2028-01-15"
    },
    "2028-01-15": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "טבת",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Tevet"
      ],
      "weekend": true,
      "next": "2028-01-16"
    },
    "2028-01-16": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "טבת",
        "d": "י״ז"
      },
      "titles": [
        "17th of Tevet"
      ],
      "next": "2028-01-17"
    },
    "2028-01-17": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "טבת",
        "d": "י״ח"
      },
      "titles": [
        "18th of Tevet"
      ],
      "next": "2028-01-18"
    },
    "2028-01-18": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "טבת",
        "d": "י״ט"
      },
      "titles": [
        "19th of Tevet"
      ],
      "next": "2028-01-19"
    },
    "2028-01-19": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "טבת",
        "d": "כ׳"
      },
      "titles": [
        "20th of Tevet"
      ],
      "next": "2028-01-20"
    },
    "2028-01-20": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "טבת",
        "d": "כ״א"
      },
      "titles": [
        "21st of Tevet"
      ],
      "next": "2028-01-21"
    },
    "2028-01-21": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "טבת",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Tevet"
      ],
      "weekend": true,
      "next": "2028-01-22"
    },
    "2028-01-22": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "טבת",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Tevet"
      ],
      "weekend": true,
      "next": "2028-01-23"
    },
    "2028-01-23": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "טבת",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Tevet"
      ],
      "next": "2028-01-24"
    },
    "2028-01-24": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "טבת",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Tevet"
      ],
      "next": "2028-01-25"
    },
    "2028-01-25": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "טבת",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Tevet"
      ],
      "next": "2028-01-26"
    },
    "2028-01-26": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "טבת",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Tevet"
      ],
      "next": "2028-01-27"
    },
    "2028-01-27": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "טבת",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Tevet"
      ],
      "next": "2028-01-28"
    },
    "2028-01-28": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "טבת",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Tevet"
      ],
      "weekend": true,
      "next": "2028-01-29"
    },
    "2028-01-29": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "שבט",
        "d": "א׳"
      },
      "titles": [
        "1st of Sh’vat, 5788"
      ],
      "weekend": true,
      "next": "2028-01-30"
    },
    "2028-01-30": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "שבט",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Sh’vat"
      ],
      "next": "2028-01-31"
    },
    "2028-01-31": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "שבט",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Sh’vat"
      ],
      "next": "2028-02-01"
    },
    "2028-02-01": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "שבט",
        "d": "ד׳"
      },
      "titles": [
        "4th of Sh’vat"
      ],
      "next": "2028-02-02"
    },
    "2028-02-02": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "שבט",
        "d": "ה׳"
      },
      "titles": [
        "5th of Sh’vat"
      ],
      "next": "2028-02-03"
    },
    "2028-02-03": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "שבט",
        "d": "ו׳"
      },
      "titles": [
        "6th of Sh’vat"
      ],
      "next": "2028-02-04"
    },
    "2028-02-04": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "שבט",
        "d": "ז׳"
      },
      "titles": [
        "7th of Sh’vat"
      ],
      "weekend": true,
      "next": "2028-02-05"
    },
    "2028-02-05": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "שבט",
        "d": "ח׳"
      },
      "titles": [
        "8th of Sh’vat"
      ],
      "weekend": true,
      "next": "2028-02-06"
    },
    "2028-02-06": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "שבט",
        "d": "ט׳"
      },
      "titles": [
        "9th of Sh’vat"
      ],
      "next": "2028-02-07"
    },
    "2028-02-07": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "שבט",
        "d": "י׳"
      },
      "titles": [
        "10th of Sh’vat"
      ],
      "next": "2028-02-08"
    },
    "2028-02-08": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "שבט",
        "d": "י״א"
      },
      "titles": [
        "11th of Sh’vat"
      ],
      "next": "2028-02-09"
    },
    "2028-02-09": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "שבט",
        "d": "י״ב"
      },
      "titles": [
        "12th of Sh’vat"
      ],
      "next": "2028-02-10"
    },
    "2028-02-10": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "שבט",
        "d": "י״ג"
      },
      "titles": [
        "13th of Sh’vat"
      ],
      "next": "2028-02-11"
    },
    "2028-02-11": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "שבט",
        "d": "י״ד"
      },
      "titles": [
        "14th of Sh’vat"
      ],
      "weekend": true,
      "next": "2028-02-12"
    },
    "2028-02-12": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "שבט",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Sh’vat",
        "Tu BiShvat"
      ],
      "weekend": true,
      "next": "2028-02-13"
    },
    "2028-02-13": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "שבט",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Sh’vat"
      ],
      "next": "2028-02-14"
    },
    "2028-02-14": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "שבט",
        "d": "י״ז"
      },
      "titles": [
        "17th of Sh’vat"
      ],
      "next": "2028-02-15"
    },
    "2028-02-15": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "שבט",
        "d": "י״ח"
      },
      "titles": [
        "18th of Sh’vat"
      ],
      "next": "2028-02-16"
    },
    "2028-02-16": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "שבט",
        "d": "י״ט"
      },
      "titles": [
        "19th of Sh’vat"
      ],
      "next": "2028-02-17"
    },
    "2028-02-17": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "שבט",
        "d": "כ׳"
      },
      "titles": [
        "20th of Sh’vat"
      ],
      "next": "2028-02-18"
    },
    "2028-02-18": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "שבט",
        "d": "כ״א"
      },
      "titles": [
        "21st of Sh’vat"
      ],
      "weekend": true,
      "next": "2028-02-19"
    },
    "2028-02-19": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "שבט",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Sh’vat"
      ],
      "weekend": true,
      "next": "2028-02-20"
    },
    "2028-02-20": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "שבט",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Sh’vat"
      ],
      "next": "2028-02-21"
    },
    "2028-02-21": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "שבט",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Sh’vat"
      ],
      "next": "2028-02-22"
    },
    "2028-02-22": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "שבט",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Sh’vat"
      ],
      "next": "2028-02-23"
    },
    "2028-02-23": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "שבט",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Sh’vat"
      ],
      "next": "2028-02-24"
    },
    "2028-02-24": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "שבט",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Sh’vat"
      ],
      "next": "2028-02-25"
    },
    "2028-02-25": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "שבט",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Sh’vat"
      ],
      "weekend": true,
      "next": "2028-02-26"
    },
    "2028-02-26": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "שבט",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Sh’vat"
      ],
      "weekend": true,
      "next": "2028-02-27"
    },
    "2028-02-27": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "שבט",
        "d": "ל׳"
      },
      "titles": [
        "30th of Sh’vat"
      ],
      "next": "2028-02-28"
    },
    "2028-02-28": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אדר",
        "d": "א׳"
      },
      "titles": [
        "1st of Adar, 5788"
      ],
      "next": "2028-02-29"
    },
    "2028-02-29": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אדר",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Adar"
      ],
      "next": "2028-03-01"
    },
    "2028-03-01": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אדר",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Adar"
      ],
      "next": "2028-03-02"
    },
    "2028-03-02": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אדר",
        "d": "ד׳"
      },
      "titles": [
        "4th of Adar"
      ],
      "next": "2028-03-03"
    },
    "2028-03-03": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אדר",
        "d": "ה׳"
      },
      "titles": [
        "5th of Adar"
      ],
      "weekend": true,
      "next": "2028-03-04"
    },
    "2028-03-04": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אדר",
        "d": "ו׳"
      },
      "titles": [
        "6th of Adar"
      ],
      "weekend": true,
      "next": "2028-03-05"
    },
    "2028-03-05": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אדר",
        "d": "ז׳"
      },
      "titles": [
        "7th of Adar"
      ],
      "next": "2028-03-06"
    },
    "2028-03-06": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אדר",
        "d": "ח׳"
      },
      "titles": [
        "8th of Adar"
      ],
      "next": "2028-03-07"
    },
    "2028-03-07": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אדר",
        "d": "ט׳"
      },
      "titles": [
        "9th of Adar"
      ],
      "next": "2028-03-08"
    },
    "2028-03-08": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אדר",
        "d": "י׳"
      },
      "titles": [
        "10th of Adar"
      ],
      "next": "2028-03-09"
    },
    "2028-03-09": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אדר",
        "d": "י״א"
      },
      "titles": [
        "11th of Adar"
      ],
      "next": "2028-03-10"
    },
    "2028-03-10": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אדר",
        "d": "י״ב"
      },
      "titles": [
        "12th of Adar"
      ],
      "weekend": true,
      "next": "2028-03-11"
    },
    "2028-03-11": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אדר",
        "d": "י״ג"
      },
      "titles": [
        "13th of Adar",
        "Erev Purim"
      ],
      "weekend": true,
      "next": "2028-03-12"
    },
    "2028-03-12": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אדר",
        "d": "י״ד"
      },
      "titles": [
        "14th of Adar",
        "Purim"
      ],
      "next": "2028-03-13"
    },
    "2028-03-13": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אדר",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Adar",
        "Shushan Purim"
      ],
      "next": "2028-03-14"
    },
    "2028-03-14": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אדר",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Adar"
      ],
      "next": "2028-03-15"
    },
    "2028-03-15": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אדר",
        "d": "י״ז"
      },
      "titles": [
        "17th of Adar"
      ],
      "next": "2028-03-16"
    },
    "2028-03-16": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אדר",
        "d": "י״ח"
      },
      "titles": [
        "18th of Adar"
      ],
      "next": "2028-03-17"
    },
    "2028-03-17": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אדר",
        "d": "י״ט"
      },
      "titles": [
        "19th of Adar"
      ],
      "weekend": true,
      "next": "2028-03-18"
    },
    "2028-03-18": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אדר",
        "d": "כ׳"
      },
      "titles": [
        "20th of Adar"
      ],
      "weekend": true,
      "next": "2028-03-19"
    },
    "2028-03-19": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אדר",
        "d": "כ״א"
      },
      "titles": [
        "21st of Adar"
      ],
      "next": "2028-03-20"
    },
    "2028-03-20": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אדר",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Adar"
      ],
      "next": "2028-03-21"
    },
    "2028-03-21": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אדר",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Adar"
      ],
      "next": "2028-03-22"
    },
    "2028-03-22": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אדר",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Adar"
      ],
      "next": "2028-03-23"
    },
    "2028-03-23": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אדר",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Adar"
      ],
      "next": "2028-03-24"
    },
    "2028-03-24": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אדר",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Adar"
      ],
      "weekend": true,
      "next": "2028-03-25"
    },
    "2028-03-25": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אדר",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Adar"
      ],
      "weekend": true,
      "next": "2028-03-26"
    },
    "2028-03-26": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אדר",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Adar"
      ],
      "next": "2028-03-27"
    },
    "2028-03-27": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אדר",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Adar"
      ],
      "next": "2028-03-28"
    },
    "2028-03-28": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "ניסן",
        "d": "א׳"
      },
      "titles": [
        "1st of Nisan, 5788"
      ],
      "next": "2028-03-29"
    },
    "2028-03-29": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "ניסן",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Nisan"
      ],
      "next": "2028-03-30"
    },
    "2028-03-30": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "ניסן",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Nisan"
      ],
      "next": "2028-03-31"
    },
    "2028-03-31": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "ניסן",
        "d": "ד׳"
      },
      "titles": [
        "4th of Nisan"
      ],
      "weekend": true,
      "next": "2028-04-01"
    },
    "2028-04-01": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "ניסן",
        "d": "ה׳"
      },
      "titles": [
        "5th of Nisan"
      ],
      "weekend": true,
      "next": "2028-04-02"
    },
    "2028-04-02": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "ניסן",
        "d": "ו׳"
      },
      "titles": [
        "6th of Nisan"
      ],
      "next": "2028-04-03"
    },
    "2028-04-03": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "ניסן",
        "d": "ז׳"
      },
      "titles": [
        "7th of Nisan"
      ],
      "next": "2028-04-04"
    },
    "2028-04-04": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "ניסן",
        "d": "ח׳"
      },
      "titles": [
        "8th of Nisan"
      ],
      "next": "2028-04-05"
    },
    "2028-04-05": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "ניסן",
        "d": "ט׳"
      },
      "titles": [
        "9th of Nisan"
      ],
      "next": "2028-04-06"
    },
    "2028-04-06": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "ניסן",
        "d": "י׳"
      },
      "titles": [
        "10th of Nisan"
      ],
      "next": "2028-04-07"
    },
    "2028-04-07": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "ניסן",
        "d": "י״א"
      },
      "titles": [
        "11th of Nisan"
      ],
      "weekend": true,
      "next": "2028-04-08"
    },
    "2028-04-08": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "ניסן",
        "d": "י״ב"
      },
      "titles": [
        "12th of Nisan"
      ],
      "weekend": true,
      "next": "2028-04-09"
    },
    "2028-04-09": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "ניסן",
        "d": "י״ג"
      },
      "titles": [
        "13th of Nisan"
      ],
      "next": "2028-04-10"
    },
    "2028-04-10": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "ניסן",
        "d": "י״ד"
      },
      "titles": [
        "14th of Nisan",
        "Erev Pesach"
      ],
      "recess_name": "pagrat pesach",
      "next": "2028-04-11"
    },
    "2028-04-11": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "ניסן",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Nisan",
        "Pesach I"
      ],
      "recess_name": "pagrat pesach",
      "next": "2028-04-12"
    },
    "2028-04-12": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "ניסן",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Nisan",
        "Pesach II (CH’’M)"
      ],
      "recess_name": "pagrat pesach",
      "next": "2028-04-13"
    },
    "2028-04-13": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "ניסן",
        "d": "י״ז"
      },
      "titles": [
        "17th of Nisan",
        "Pesach III (CH’’M)"
      ],
      "recess_name": "pagrat pesach",
      "next": "2028-04-14"
    },
    "2028-04-14": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "ניסן",
        "d": "י״ח"
      },
      "titles": [
        "18th of Nisan",
        "Pesach IV (CH’’M)"
      ],
      "recess_name": "pagrat pesach",
      "weekend": true,
      "next": "2028-04-15"
    },
    "2028-04-15": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "ניסן",
        "d": "י״ט"
      },
      "titles": [
        "19th of Nisan",
        "Pesach V (CH’’M)"
      ],
      "recess_name": "pagrat pesach",
      "weekend": true,
      "next": "2028-04-16"
    },
    "2028-04-16": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "ניסן",
        "d": "כ׳"
      },
      "titles": [
        "20th of Nisan",
        "Pesach VI (CH’’M)"
      ],
      "recess_name": "pagrat pesach",
      "next": "2028-04-17"
    },
    "2028-04-17": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "ניסן",
        "d": "כ״א"
      },
      "titles": [
        "21st of Nisan",
        "Pesach VII"
      ],
      "recess_name": "pagrat pesach",
      "next": "2028-04-18"
    },
    "2028-04-18": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "ניסן",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Nisan"
      ],
      "next": "2028-04-19"
    },
    "2028-04-19": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "ניסן",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Nisan"
      ],
      "next": "2028-04-20"
    },
    "2028-04-20": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "ניסן",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Nisan"
      ],
      "next": "2028-04-21"
    },
    "2028-04-21": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "ניסן",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Nisan"
      ],
      "weekend": true,
      "next": "2028-04-22"
    },
    "2028-04-22": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "ניסן",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Nisan"
      ],
      "weekend": true,
      "next": "2028-04-23"
    },
    "2028-04-23": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "ניסן",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Nisan"
      ],
      "next": "2028-04-24"
    },
    "2028-04-24": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "ניסן",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Nisan"
      ],
      "next": "2028-04-25"
    },
    "2028-04-25": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "ניסן",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Nisan"
      ],
      "next": "2028-04-26"
    },
    "2028-04-26": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "ניסן",
        "d": "ל׳"
      },
      "titles": [
        "30th of Nisan"
      ],
      "next": "2028-04-27"
    },
    "2028-04-27": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אייר",
        "d": "א׳"
      },
      "titles": [
        "1st of Iyyar, 5788"
      ],
      "next": "2028-04-28"
    },
    "2028-04-28": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אייר",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Iyyar"
      ],
      "weekend": true,
      "next": "2028-04-29"
    },
    "2028-04-29": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אייר",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Iyyar"
      ],
      "weekend": true,
      "next": "2028-04-30"
    },
    "2028-04-30": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אייר",
        "d": "ד׳"
      },
      "titles": [
        "4th of Iyyar"
      ],
      "next": "2028-05-01"
    },
    "2028-05-01": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אייר",
        "d": "ה׳"
      },
      "titles": [
        "5th of Iyyar"
      ],
      "next": "2028-05-02"
    },
    "2028-05-02": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אייר",
        "d": "ו׳"
      },
      "titles": [
        "6th of Iyyar"
      ],
      "shabaton_name": "yom haatzmaut",
      "next": "2028-05-03"
    },
    "2028-05-03": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אייר",
        "d": "ז׳"
      },
      "titles": [
        "7th of Iyyar"
      ],
      "next": "2028-05-04"
    },
    "2028-05-04": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אייר",
        "d": "ח׳"
      },
      "titles": [
        "8th of Iyyar"
      ],
      "next": "2028-05-05"
    },
    "2028-05-05": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אייר",
        "d": "ט׳"
      },
      "titles": [
        "9th of Iyyar"
      ],
      "weekend": true,
      "next": "2028-05-06"
    },
    "2028-05-06": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אייר",
        "d": "י׳"
      },
      "titles": [
        "10th of Iyyar"
      ],
      "weekend": true,
      "next": "2028-05-07"
    },
    "2028-05-07": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אייר",
        "d": "י״א"
      },
      "titles": [
        "11th of Iyyar"
      ],
      "next": "2028-05-08"
    },
    "2028-05-08": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אייר",
        "d": "י״ב"
      },
      "titles": [
        "12th of Iyyar"
      ],
      "next": "2028-05-09"
    },
    "2028-05-09": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אייר",
        "d": "י״ג"
      },
      "titles": [
        "13th of Iyyar"
      ],
      "next": "2028-05-10"
    },
    "2028-05-10": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אייר",
        "d": "י״ד"
      },
      "titles": [
        "14th of Iyyar",
        "Pesach Sheni"
      ],
      "next": "2028-05-11"
    },
    "2028-05-11": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אייר",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Iyyar"
      ],
      "next": "2028-05-12"
    },
    "2028-05-12": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אייר",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Iyyar"
      ],
      "weekend": true,
      "next": "2028-05-13"
    },
    "2028-05-13": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אייר",
        "d": "י״ז"
      },
      "titles": [
        "17th of Iyyar"
      ],
      "weekend": true,
      "next": "2028-05-14"
    },
    "2028-05-14": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אייר",
        "d": "י״ח"
      },
      "titles": [
        "18th of Iyyar",
        "Lag BaOmer"
      ],
      "next": "2028-05-15"
    },
    "2028-05-15": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אייר",
        "d": "י״ט"
      },
      "titles": [
        "19th of Iyyar"
      ],
      "next": "2028-05-16"
    },
    "2028-05-16": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אייר",
        "d": "כ׳"
      },
      "titles": [
        "20th of Iyyar"
      ],
      "next": "2028-05-17"
    },
    "2028-05-17": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אייר",
        "d": "כ״א"
      },
      "titles": [
        "21st of Iyyar"
      ],
      "next": "2028-05-18"
    },
    "2028-05-18": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אייר",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Iyyar"
      ],
      "next": "2028-05-19"
    },
    "2028-05-19": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אייר",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Iyyar"
      ],
      "weekend": true,
      "next": "2028-05-20"
    },
    "2028-05-20": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אייר",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Iyyar"
      ],
      "weekend": true,
      "next": "2028-05-21"
    },
    "2028-05-21": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אייר",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Iyyar"
      ],
      "next": "2028-05-22"
    },
    "2028-05-22": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אייר",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Iyyar"
      ],
      "next": "2028-05-23"
    },
    "2028-05-23": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אייר",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Iyyar"
      ],
      "next": "2028-05-24"
    },
    "2028-05-24": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אייר",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Iyyar"
      ],
      "next": "2028-05-25"
    },
    "2028-05-25": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אייר",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Iyyar"
      ],
      "next": "2028-05-26"
    },
    "2028-05-26": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "סיון",
        "d": "א׳"
      },
      "titles": [
        "1st of Sivan, 5788"
      ],
      "weekend": true,
      "next": "2028-05-27"
    },
    "2028-05-27": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "סיון",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Sivan"
      ],
      "weekend": true,
      "next": "2028-05-28"
    },
    "2028-05-28": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "סיון",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Sivan"
      ],
      "next": "2028-05-29"
    },
    "2028-05-29": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "סיון",
        "d": "ד׳"
      },
      "titles": [
        "4th of Sivan"
      ],
      "next": "2028-05-30"
    },
    "2028-05-30": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "סיון",
        "d": "ה׳"
      },
      "titles": [
        "5th of Sivan",
        "Erev Shavuot"
      ],
      "next": "2028-05-31"
    },
    "2028-05-31": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "סיון",
        "d": "ו׳"
      },
      "titles": [
        "6th of Sivan",
        "Shavuot"
      ],
      "shabaton_name": "shavuot",
      "next": "2028-06-01"
    },
    "2028-06-01": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "סיון",
        "d": "ז׳"
      },
      "titles": [
        "7th of Sivan"
      ],
      "next": "2028-06-02"
    },
    "2028-06-02": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "סיון",
        "d": "ח׳"
      },
      "titles": [
        "8th of Sivan"
      ],
      "weekend": true,
      "next": "2028-06-03"
    },
    "2028-06-03": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "סיון",
        "d": "ט׳"
      },
      "titles": [
        "9th of Sivan"
      ],
      "weekend": true,
      "next": "2028-06-04"
    },
    "2028-06-04": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "סיון",
        "d": "י׳"
      },
      "titles": [
        "10th of Sivan"
      ],
      "next": "2028-06-05"
    },
    "2028-06-05": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "סיון",
        "d": "י״א"
      },
      "titles": [
        "11th of Sivan"
      ],
      "next": "2028-06-06"
    },
    "2028-06-06": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "סיון",
        "d": "י״ב"
      },
      "titles": [
        "12th of Sivan"
      ],
      "next": "2028-06-07"
    },
    "2028-06-07": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "סיון",
        "d": "י״ג"
      },
      "titles": [
        "13th of Sivan"
      ],
      "next": "2028-06-08"
    },
    "2028-06-08": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "סיון",
        "d": "י״ד"
      },
      "titles": [
        "14th of Sivan"
      ],
      "next": "2028-06-09"
    },
    "2028-06-09": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "סיון",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Sivan"
      ],
      "weekend": true,
      "next": "2028-06-10"
    },
    "2028-06-10": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "סיון",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Sivan"
      ],
      "weekend": true,
      "next": "2028-06-11"
    },
    "2028-06-11": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "סיון",
        "d": "י״ז"
      },
      "titles": [
        "17th of Sivan"
      ],
      "next": "2028-06-12"
    },
    "2028-06-12": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "סיון",
        "d": "י״ח"
      },
      "titles": [
        "18th of Sivan"
      ],
      "next": "2028-06-13"
    },
    "2028-06-13": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "סיון",
        "d": "י״ט"
      },
      "titles": [
        "19th of Sivan"
      ],
      "next": "2028-06-14"
    },
    "2028-06-14": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "סיון",
        "d": "כ׳"
      },
      "titles": [
        "20th of Sivan"
      ],
      "next": "2028-06-15"
    },
    "2028-06-15": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "סיון",
        "d": "כ״א"
      },
      "titles": [
        "21st of Sivan"
      ],
      "next": "2028-06-16"
    },
    "2028-06-16": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "סיון",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Sivan"
      ],
      "weekend": true,
      "next": "2028-06-17"
    },
    "2028-06-17": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "סיון",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Sivan"
      ],
      "weekend": true,
      "next": "2028-06-18"
    },
    "2028-06-18": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "סיון",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Sivan"
      ],
      "next": "2028-06-19"
    },
    "2028-06-19": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "סיון",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Sivan"
      ],
      "next": "2028-06-20"
    },
    "2028-06-20": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "סיון",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Sivan"
      ],
      "next": "2028-06-21"
    },
    "2028-06-21": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "סיון",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Sivan"
      ],
      "next": "2028-06-22"
    },
    "2028-06-22": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "סיון",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Sivan"
      ],
      "next": "2028-06-23"
    },
    "2028-06-23": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "סיון",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Sivan"
      ],
      "weekend": true,
      "next": "2028-06-24"
    },
    "2028-06-24": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "סיון",
        "d": "ל׳"
      },
      "titles": [
        "30th of Sivan"
      ],
      "weekend": true,
      "next": "2028-06-25"
    },
    "2028-06-25": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תמוז",
        "d": "א׳"
      },
      "titles": [
        "1st of Tamuz, 5788"
      ],
      "next": "2028-06-26"
    },
    "2028-06-26": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תמוז",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Tamuz"
      ],
      "next": "2028-06-27"
    },
    "2028-06-27": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תמוז",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Tamuz"
      ],
      "next": "2028-06-28"
    },
    "2028-06-28": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תמוז",
        "d": "ד׳"
      },
      "titles": [
        "4th of Tamuz"
      ],
      "next": "2028-06-29"
    },
    "2028-06-29": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תמוז",
        "d": "ה׳"
      },
      "titles": [
        "5th of Tamuz"
      ],
      "next": "2028-06-30"
    },
    "2028-06-30": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תמוז",
        "d": "ו׳"
      },
      "titles": [
        "6th of Tamuz"
      ],
      "weekend": true,
      "next": "2028-07-01"
    },
    "2028-07-01": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תמוז",
        "d": "ז׳"
      },
      "titles": [
        "7th of Tamuz"
      ],
      "weekend": true,
      "next": "2028-07-02"
    },
    "2028-07-02": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תמוז",
        "d": "ח׳"
      },
      "titles": [
        "8th of Tamuz"
      ],
      "next": "2028-07-03"
    },
    "2028-07-03": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תמוז",
        "d": "ט׳"
      },
      "titles": [
        "9th of Tamuz"
      ],
      "next": "2028-07-04"
    },
    "2028-07-04": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תמוז",
        "d": "י׳"
      },
      "titles": [
        "10th of Tamuz"
      ],
      "next": "2028-07-05"
    },
    "2028-07-05": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תמוז",
        "d": "י״א"
      },
      "titles": [
        "11th of Tamuz"
      ],
      "next": "2028-07-06"
    },
    "2028-07-06": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תמוז",
        "d": "י״ב"
      },
      "titles": [
        "12th of Tamuz"
      ],
      "next": "2028-07-07"
    },
    "2028-07-07": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תמוז",
        "d": "י״ג"
      },
      "titles": [
        "13th of Tamuz"
      ],
      "weekend": true,
      "next": "2028-07-08"
    },
    "2028-07-08": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תמוז",
        "d": "י״ד"
      },
      "titles": [
        "14th of Tamuz"
      ],
      "weekend": true,
      "next": "2028-07-09"
    },
    "2028-07-09": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תמוז",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Tamuz"
      ],
      "next": "2028-07-10"
    },
    "2028-07-10": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תמוז",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Tamuz"
      ],
      "next": "2028-07-11"
    },
    "2028-07-11": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תמוז",
        "d": "י״ז"
      },
      "titles": [
        "17th of Tamuz"
      ],
      "next": "2028-07-12"
    },
    "2028-07-12": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תמוז",
        "d": "י״ח"
      },
      "titles": [
        "18th of Tamuz"
      ],
      "next": "2028-07-13"
    },
    "2028-07-13": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תמוז",
        "d": "י״ט"
      },
      "titles": [
        "19th of Tamuz"
      ],
      "next": "2028-07-14"
    },
    "2028-07-14": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תמוז",
        "d": "כ׳"
      },
      "titles": [
        "20th of Tamuz"
      ],
      "weekend": true,
      "next": "2028-07-15"
    },
    "2028-07-15": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תמוז",
        "d": "כ״א"
      },
      "titles": [
        "21st of Tamuz"
      ],
      "weekend": true,
      "next": "2028-07-16"
    },
    "2028-07-16": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תמוז",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Tamuz"
      ],
      "next": "2028-07-17"
    },
    "2028-07-17": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תמוז",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Tamuz"
      ],
      "next": "2028-07-18"
    },
    "2028-07-18": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תמוז",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Tamuz"
      ],
      "next": "2028-07-19"
    },
    "2028-07-19": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תמוז",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Tamuz"
      ],
      "next": "2028-07-20"
    },
    "2028-07-20": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תמוז",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Tamuz"
      ],
      "next": "2028-07-21"
    },
    "2028-07-21": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תמוז",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2028-07-22"
    },
    "2028-07-22": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תמוז",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2028-07-23"
    },
    "2028-07-23": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "תמוז",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-07-24"
    },
    "2028-07-24": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אב",
        "d": "א׳"
      },
      "titles": [
        "1st of Av, 5788"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-07-25"
    },
    "2028-07-25": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אב",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-07-26"
    },
    "2028-07-26": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אב",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-07-27"
    },
    "2028-07-27": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אב",
        "d": "ד׳"
      },
      "titles": [
        "4th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-07-28"
    },
    "2028-07-28": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אב",
        "d": "ה׳"
      },
      "titles": [
        "5th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2028-07-29"
    },
    "2028-07-29": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אב",
        "d": "ו׳"
      },
      "titles": [
        "6th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2028-07-30"
    },
    "2028-07-30": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אב",
        "d": "ז׳"
      },
      "titles": [
        "7th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-07-31"
    },
    "2028-07-31": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אב",
        "d": "ח׳"
      },
      "titles": [
        "8th of Av",
        "Erev Tish’a B’Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-08-01"
    },
    "2028-08-01": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אב",
        "d": "ט׳"
      },
      "titles": [
        "9th of Av",
        "Tish’a B’Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-08-02"
    },
    "2028-08-02": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אב",
        "d": "י׳"
      },
      "titles": [
        "10th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-08-03"
    },
    "2028-08-03": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אב",
        "d": "י״א"
      },
      "titles": [
        "11th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-08-04"
    },
    "2028-08-04": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אב",
        "d": "י״ב"
      },
      "titles": [
        "12th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2028-08-05"
    },
    "2028-08-05": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אב",
        "d": "י״ג"
      },
      "titles": [
        "13th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2028-08-06"
    },
    "2028-08-06": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אב",
        "d": "י״ד"
      },
      "titles": [
        "14th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-08-07"
    },
    "2028-08-07": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אב",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Av",
        "Tu B’Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-08-08"
    },
    "2028-08-08": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אב",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-08-09"
    },
    "2028-08-09": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אב",
        "d": "י״ז"
      },
      "titles": [
        "17th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-08-10"
    },
    "2028-08-10": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אב",
        "d": "י״ח"
      },
      "titles": [
        "18th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-08-11"
    },
    "2028-08-11": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אב",
        "d": "י״ט"
      },
      "titles": [
        "19th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2028-08-12"
    },
    "2028-08-12": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אב",
        "d": "כ׳"
      },
      "titles": [
        "20th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2028-08-13"
    },
    "2028-08-13": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אב",
        "d": "כ״א"
      },
      "titles": [
        "21st of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-08-14"
    },
    "2028-08-14": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אב",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-08-15"
    },
    "2028-08-15": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אב",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-08-16"
    },
    "2028-08-16": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אב",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-08-17"
    },
    "2028-08-17": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אב",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-08-18"
    },
    "2028-08-18": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אב",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2028-08-19"
    },
    "2028-08-19": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אב",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2028-08-20"
    },
    "2028-08-20": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אב",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-08-21"
    },
    "2028-08-21": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אב",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-08-22"
    },
    "2028-08-22": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אב",
        "d": "ל׳"
      },
      "titles": [
        "30th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-08-23"
    },
    "2028-08-23": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אלול",
        "d": "א׳"
      },
      "titles": [
        "1st of Elul, 5788",
        "Rosh Hashana LaBehemot"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-08-24"
    },
    "2028-08-24": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אלול",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-08-25"
    },
    "2028-08-25": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אלול",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2028-08-26"
    },
    "2028-08-26": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אלול",
        "d": "ד׳"
      },
      "titles": [
        "4th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2028-08-27"
    },
    "2028-08-27": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אלול",
        "d": "ה׳"
      },
      "titles": [
        "5th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-08-28"
    },
    "2028-08-28": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אלול",
        "d": "ו׳"
      },
      "titles": [
        "6th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-08-29"
    },
    "2028-08-29": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אלול",
        "d": "ז׳"
      },
      "titles": [
        "7th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-08-30"
    },
    "2028-08-30": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אלול",
        "d": "ח׳"
      },
      "titles": [
        "8th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-08-31"
    },
    "2028-08-31": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אלול",
        "d": "ט׳"
      },
      "titles": [
        "9th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-09-01"
    },
    "2028-09-01": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אלול",
        "d": "י׳"
      },
      "titles": [
        "10th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2028-09-02"
    },
    "2028-09-02": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אלול",
        "d": "י״א"
      },
      "titles": [
        "11th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2028-09-03"
    },
    "2028-09-03": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אלול",
        "d": "י״ב"
      },
      "titles": [
        "12th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-09-04"
    },
    "2028-09-04": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אלול",
        "d": "י״ג"
      },
      "titles": [
        "13th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-09-05"
    },
    "2028-09-05": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אלול",
        "d": "י״ד"
      },
      "titles": [
        "14th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2028-09-06"
    },
    "2028-09-06": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אלול",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Elul"
      ],
      "next": "2028-09-07"
    },
    "2028-09-07": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אלול",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Elul"
      ],
      "next": "2028-09-08"
    },
    "2028-09-08": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אלול",
        "d": "י״ז"
      },
      "titles": [
        "17th of Elul"
      ],
      "weekend": true,
      "next": "2028-09-09"
    },
    "2028-09-09": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אלול",
        "d": "י״ח"
      },
      "titles": [
        "18th of Elul"
      ],
      "weekend": true,
      "next": "2028-09-10"
    },
    "2028-09-10": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אלול",
        "d": "י״ט"
      },
      "titles": [
        "19th of Elul"
      ],
      "next": "2028-09-11"
    },
    "2028-09-11": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אלול",
        "d": "כ׳"
      },
      "titles": [
        "20th of Elul"
      ],
      "next": "2028-09-12"
    },
    "2028-09-12": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אלול",
        "d": "כ״א"
      },
      "titles": [
        "21st of Elul"
      ],
      "next": "2028-09-13"
    },
    "2028-09-13": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אלול",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Elul"
      ],
      "next": "2028-09-14"
    },
    "2028-09-14": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אלול",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Elul"
      ],
      "next": "2028-09-15"
    },
    "2028-09-15": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אלול",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Elul"
      ],
      "weekend": true,
      "next": "2028-09-16"
    },
    "2028-09-16": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אלול",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Elul",
        "Leil Selichot"
      ],
      "weekend": true,
      "next": "2028-09-17"
    },
    "2028-09-17": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אלול",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Elul"
      ],
      "next": "2028-09-18"
    },
    "2028-09-18": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אלול",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Elul"
      ],
      "next": "2028-09-19"
    },
    "2028-09-19": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אלול",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Elul"
      ],
      "next": "2028-09-20"
    },
    "2028-09-20": {
      "heDateParts": {
        "y": "תשפ״ח",
        "m": "אלול",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Elul",
        "Erev Rosh Hashana"
      ],
      "next": "2028-09-21"
    },
    "2028-09-21": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תשרי",
        "d": "א׳"
      },
      "titles": [
        "1st of Tishrei, 5789",
        "Rosh Hashana 5789"
      ],
      "shabaton_name": "rosh hashana",
      "next": "2028-09-22"
    },
    "2028-09-22": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תשרי",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Tishrei",
        "Rosh Hashana II"
      ],
      "shabaton_name": "rosh hashana",
      "weekend": true,
      "next": "2028-09-23"
    },
    "2028-09-23": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תשרי",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Tishrei"
      ],
      "weekend": true,
      "next": "2028-09-24"
    },
    "2028-09-24": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תשרי",
        "d": "ד׳"
      },
      "titles": [
        "4th of Tishrei"
      ],
      "next": "2028-09-25"
    },
    "2028-09-25": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תשרי",
        "d": "ה׳"
      },
      "titles": [
        "5th of Tishrei"
      ],
      "next": "2028-09-26"
    },
    "2028-09-26": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תשרי",
        "d": "ו׳"
      },
      "titles": [
        "6th of Tishrei"
      ],
      "next": "2028-09-27"
    },
    "2028-09-27": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תשרי",
        "d": "ז׳"
      },
      "titles": [
        "7th of Tishrei"
      ],
      "next": "2028-09-28"
    },
    "2028-09-28": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תשרי",
        "d": "ח׳"
      },
      "titles": [
        "8th of Tishrei"
      ],
      "next": "2028-09-29"
    },
    "2028-09-29": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תשרי",
        "d": "ט׳"
      },
      "titles": [
        "9th of Tishrei",
        "Erev Yom Kippur"
      ],
      "weekend": true,
      "next": "2028-09-30"
    },
    "2028-09-30": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תשרי",
        "d": "י׳"
      },
      "titles": [
        "10th of Tishrei",
        "Yom Kippur"
      ],
      "shabaton_name": "yom kipur",
      "weekend": true,
      "next": "2028-10-01"
    },
    "2028-10-01": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תשרי",
        "d": "י״א"
      },
      "titles": [
        "11th of Tishrei"
      ],
      "next": "2028-10-02"
    },
    "2028-10-02": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תשרי",
        "d": "י״ב"
      },
      "titles": [
        "12th of Tishrei"
      ],
      "next": "2028-10-03"
    },
    "2028-10-03": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תשרי",
        "d": "י״ג"
      },
      "titles": [
        "13th of Tishrei"
      ],
      "next": "2028-10-04"
    },
    "2028-10-04": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תשרי",
        "d": "י״ד"
      },
      "titles": [
        "14th of Tishrei",
        "Erev Sukkot"
      ],
      "recess_name": "pagrat sukot",
      "next": "2028-10-05"
    },
    "2028-10-05": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תשרי",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Tishrei",
        "Sukkot I"
      ],
      "recess_name": "pagrat sukot",
      "next": "2028-10-06"
    },
    "2028-10-06": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תשרי",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Tishrei",
        "Sukkot II (CH’’M)"
      ],
      "recess_name": "pagrat sukot",
      "weekend": true,
      "next": "2028-10-07"
    },
    "2028-10-07": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תשרי",
        "d": "י״ז"
      },
      "titles": [
        "17th of Tishrei",
        "Sukkot III (CH’’M)"
      ],
      "recess_name": "pagrat sukot",
      "weekend": true,
      "next": "2028-10-08"
    },
    "2028-10-08": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תשרי",
        "d": "י״ח"
      },
      "titles": [
        "18th of Tishrei",
        "Sukkot IV (CH’’M)"
      ],
      "recess_name": "pagrat sukot",
      "next": "2028-10-09"
    },
    "2028-10-09": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תשרי",
        "d": "י״ט"
      },
      "titles": [
        "19th of Tishrei",
        "Sukkot V (CH’’M)"
      ],
      "recess_name": "pagrat sukot",
      "next": "2028-10-10"
    },
    "2028-10-10": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תשרי",
        "d": "כ׳"
      },
      "titles": [
        "20th of Tishrei",
        "Sukkot VI (CH’’M)"
      ],
      "recess_name": "pagrat sukot",
      "next": "2028-10-11"
    },
    "2028-10-11": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תשרי",
        "d": "כ״א"
      },
      "titles": [
        "21st of Tishrei",
        "Sukkot VII (Hoshana Raba)"
      ],
      "recess_name": "pagrat sukot",
      "next": "2028-10-12"
    },
    "2028-10-12": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תשרי",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Tishrei",
        "Shmini Atzeret"
      ],
      "recess_name": "pagrat sukot",
      "next": "2028-10-13"
    },
    "2028-10-13": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תשרי",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Tishrei"
      ],
      "weekend": true,
      "next": "2028-10-14"
    },
    "2028-10-14": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תשרי",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Tishrei"
      ],
      "weekend": true,
      "next": "2028-10-15"
    },
    "2028-10-15": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תשרי",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Tishrei"
      ],
      "next": "2028-10-16"
    },
    "2028-10-16": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תשרי",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Tishrei"
      ],
      "next": "2028-10-17"
    },
    "2028-10-17": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תשרי",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Tishrei"
      ],
      "next": "2028-10-18"
    },
    "2028-10-18": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תשרי",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Tishrei"
      ],
      "next": "2028-10-19"
    },
    "2028-10-19": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תשרי",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Tishrei"
      ],
      "next": "2028-10-20"
    },
    "2028-10-20": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תשרי",
        "d": "ל׳"
      },
      "titles": [
        "30th of Tishrei"
      ],
      "weekend": true,
      "next": "2028-10-21"
    },
    "2028-10-21": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "חשון",
        "d": "א׳"
      },
      "titles": [
        "1st of Cheshvan, 5789"
      ],
      "weekend": true,
      "next": "2028-10-22"
    },
    "2028-10-22": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "חשון",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Cheshvan"
      ],
      "next": "2028-10-23"
    },
    "2028-10-23": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "חשון",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Cheshvan"
      ],
      "next": "2028-10-24"
    },
    "2028-10-24": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "חשון",
        "d": "ד׳"
      },
      "titles": [
        "4th of Cheshvan"
      ],
      "next": "2028-10-25"
    },
    "2028-10-25": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "חשון",
        "d": "ה׳"
      },
      "titles": [
        "5th of Cheshvan"
      ],
      "next": "2028-10-26"
    },
    "2028-10-26": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "חשון",
        "d": "ו׳"
      },
      "titles": [
        "6th of Cheshvan"
      ],
      "next": "2028-10-27"
    },
    "2028-10-27": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "חשון",
        "d": "ז׳"
      },
      "titles": [
        "7th of Cheshvan"
      ],
      "weekend": true,
      "next": "2028-10-28"
    },
    "2028-10-28": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "חשון",
        "d": "ח׳"
      },
      "titles": [
        "8th of Cheshvan"
      ],
      "weekend": true,
      "next": "2028-10-29"
    },
    "2028-10-29": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "חשון",
        "d": "ט׳"
      },
      "titles": [
        "9th of Cheshvan"
      ],
      "next": "2028-10-30"
    },
    "2028-10-30": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "חשון",
        "d": "י׳"
      },
      "titles": [
        "10th of Cheshvan"
      ],
      "next": "2028-10-31"
    },
    "2028-10-31": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "חשון",
        "d": "י״א"
      },
      "titles": [
        "11th of Cheshvan"
      ],
      "next": "2028-11-01"
    },
    "2028-11-01": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "חשון",
        "d": "י״ב"
      },
      "titles": [
        "12th of Cheshvan"
      ],
      "next": "2028-11-02"
    },
    "2028-11-02": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "חשון",
        "d": "י״ג"
      },
      "titles": [
        "13th of Cheshvan"
      ],
      "next": "2028-11-03"
    },
    "2028-11-03": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "חשון",
        "d": "י״ד"
      },
      "titles": [
        "14th of Cheshvan"
      ],
      "weekend": true,
      "next": "2028-11-04"
    },
    "2028-11-04": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "חשון",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Cheshvan"
      ],
      "weekend": true,
      "next": "2028-11-05"
    },
    "2028-11-05": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "חשון",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Cheshvan"
      ],
      "next": "2028-11-06"
    },
    "2028-11-06": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "חשון",
        "d": "י״ז"
      },
      "titles": [
        "17th of Cheshvan"
      ],
      "next": "2028-11-07"
    },
    "2028-11-07": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "חשון",
        "d": "י״ח"
      },
      "titles": [
        "18th of Cheshvan"
      ],
      "next": "2028-11-08"
    },
    "2028-11-08": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "חשון",
        "d": "י״ט"
      },
      "titles": [
        "19th of Cheshvan"
      ],
      "next": "2028-11-09"
    },
    "2028-11-09": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "חשון",
        "d": "כ׳"
      },
      "titles": [
        "20th of Cheshvan"
      ],
      "next": "2028-11-10"
    },
    "2028-11-10": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "חשון",
        "d": "כ״א"
      },
      "titles": [
        "21st of Cheshvan"
      ],
      "weekend": true,
      "next": "2028-11-11"
    },
    "2028-11-11": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "חשון",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Cheshvan"
      ],
      "weekend": true,
      "next": "2028-11-12"
    },
    "2028-11-12": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "חשון",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Cheshvan"
      ],
      "next": "2028-11-13"
    },
    "2028-11-13": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "חשון",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Cheshvan"
      ],
      "next": "2028-11-14"
    },
    "2028-11-14": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "חשון",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Cheshvan"
      ],
      "next": "2028-11-15"
    },
    "2028-11-15": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "חשון",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Cheshvan"
      ],
      "next": "2028-11-16"
    },
    "2028-11-16": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "חשון",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Cheshvan"
      ],
      "next": "2028-11-17"
    },
    "2028-11-17": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "חשון",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Cheshvan"
      ],
      "weekend": true,
      "next": "2028-11-18"
    },
    "2028-11-18": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "חשון",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Cheshvan"
      ],
      "weekend": true,
      "next": "2028-11-19"
    },
    "2028-11-19": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "כסלו",
        "d": "א׳"
      },
      "titles": [
        "1st of Kislev, 5789"
      ],
      "next": "2028-11-20"
    },
    "2028-11-20": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "כסלו",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Kislev"
      ],
      "next": "2028-11-21"
    },
    "2028-11-21": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "כסלו",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Kislev"
      ],
      "next": "2028-11-22"
    },
    "2028-11-22": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "כסלו",
        "d": "ד׳"
      },
      "titles": [
        "4th of Kislev"
      ],
      "next": "2028-11-23"
    },
    "2028-11-23": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "כסלו",
        "d": "ה׳"
      },
      "titles": [
        "5th of Kislev"
      ],
      "next": "2028-11-24"
    },
    "2028-11-24": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "כסלו",
        "d": "ו׳"
      },
      "titles": [
        "6th of Kislev"
      ],
      "weekend": true,
      "next": "2028-11-25"
    },
    "2028-11-25": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "כסלו",
        "d": "ז׳"
      },
      "titles": [
        "7th of Kislev"
      ],
      "weekend": true,
      "next": "2028-11-26"
    },
    "2028-11-26": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "כסלו",
        "d": "ח׳"
      },
      "titles": [
        "8th of Kislev"
      ],
      "next": "2028-11-27"
    },
    "2028-11-27": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "כסלו",
        "d": "ט׳"
      },
      "titles": [
        "9th of Kislev"
      ],
      "next": "2028-11-28"
    },
    "2028-11-28": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "כסלו",
        "d": "י׳"
      },
      "titles": [
        "10th of Kislev"
      ],
      "next": "2028-11-29"
    },
    "2028-11-29": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "כסלו",
        "d": "י״א"
      },
      "titles": [
        "11th of Kislev"
      ],
      "next": "2028-11-30"
    },
    "2028-11-30": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "כסלו",
        "d": "י״ב"
      },
      "titles": [
        "12th of Kislev"
      ],
      "next": "2028-12-01"
    },
    "2028-12-01": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "כסלו",
        "d": "י״ג"
      },
      "titles": [
        "13th of Kislev"
      ],
      "weekend": true,
      "next": "2028-12-02"
    },
    "2028-12-02": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "כסלו",
        "d": "י״ד"
      },
      "titles": [
        "14th of Kislev"
      ],
      "weekend": true,
      "next": "2028-12-03"
    },
    "2028-12-03": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "כסלו",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Kislev"
      ],
      "next": "2028-12-04"
    },
    "2028-12-04": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "כסלו",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Kislev"
      ],
      "next": "2028-12-05"
    },
    "2028-12-05": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "כסלו",
        "d": "י״ז"
      },
      "titles": [
        "17th of Kislev"
      ],
      "next": "2028-12-06"
    },
    "2028-12-06": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "כסלו",
        "d": "י״ח"
      },
      "titles": [
        "18th of Kislev"
      ],
      "next": "2028-12-07"
    },
    "2028-12-07": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "כסלו",
        "d": "י״ט"
      },
      "titles": [
        "19th of Kislev"
      ],
      "next": "2028-12-08"
    },
    "2028-12-08": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "כסלו",
        "d": "כ׳"
      },
      "titles": [
        "20th of Kislev"
      ],
      "weekend": true,
      "next": "2028-12-09"
    },
    "2028-12-09": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "כסלו",
        "d": "כ״א"
      },
      "titles": [
        "21st of Kislev"
      ],
      "weekend": true,
      "next": "2028-12-10"
    },
    "2028-12-10": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "כסלו",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Kislev"
      ],
      "next": "2028-12-11"
    },
    "2028-12-11": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "כסלו",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Kislev"
      ],
      "next": "2028-12-12"
    },
    "2028-12-12": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "כסלו",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Kislev",
        "Chanukah: 1 Candle"
      ],
      "next": "2028-12-13"
    },
    "2028-12-13": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "כסלו",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Kislev",
        "Chanukah: 2 Candles"
      ],
      "next": "2028-12-14"
    },
    "2028-12-14": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "כסלו",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Kislev",
        "Chanukah: 3 Candles"
      ],
      "next": "2028-12-15"
    },
    "2028-12-15": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "כסלו",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Kislev",
        "Chanukah: 4 Candles"
      ],
      "weekend": true,
      "next": "2028-12-16"
    },
    "2028-12-16": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "כסלו",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Kislev",
        "Chanukah: 5 Candles"
      ],
      "weekend": true,
      "next": "2028-12-17"
    },
    "2028-12-17": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "כסלו",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Kislev",
        "Chanukah: 6 Candles"
      ],
      "next": "2028-12-18"
    },
    "2028-12-18": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "כסלו",
        "d": "ל׳"
      },
      "titles": [
        "30th of Kislev",
        "Chag HaBanot",
        "Chanukah: 7 Candles"
      ],
      "next": "2028-12-19"
    },
    "2028-12-19": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "טבת",
        "d": "א׳"
      },
      "titles": [
        "1st of Tevet, 5789",
        "Chanukah: 8 Candles"
      ],
      "next": "2028-12-20"
    },
    "2028-12-20": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "טבת",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Tevet",
        "Chanukah: 8th Day"
      ],
      "next": "2028-12-21"
    },
    "2028-12-21": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "טבת",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Tevet"
      ],
      "next": "2028-12-22"
    },
    "2028-12-22": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "טבת",
        "d": "ד׳"
      },
      "titles": [
        "4th of Tevet"
      ],
      "weekend": true,
      "next": "2028-12-23"
    },
    "2028-12-23": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "טבת",
        "d": "ה׳"
      },
      "titles": [
        "5th of Tevet"
      ],
      "weekend": true,
      "next": "2028-12-24"
    },
    "2028-12-24": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "טבת",
        "d": "ו׳"
      },
      "titles": [
        "6th of Tevet"
      ],
      "next": "2028-12-25"
    },
    "2028-12-25": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "טבת",
        "d": "ז׳"
      },
      "titles": [
        "7th of Tevet"
      ],
      "next": "2028-12-26"
    },
    "2028-12-26": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "טבת",
        "d": "ח׳"
      },
      "titles": [
        "8th of Tevet"
      ],
      "next": "2028-12-27"
    },
    "2028-12-27": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "טבת",
        "d": "ט׳"
      },
      "titles": [
        "9th of Tevet"
      ],
      "next": "2028-12-28"
    },
    "2028-12-28": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "טבת",
        "d": "י׳"
      },
      "titles": [
        "10th of Tevet"
      ],
      "next": "2028-12-29"
    },
    "2028-12-29": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "טבת",
        "d": "י״א"
      },
      "titles": [
        "11th of Tevet"
      ],
      "weekend": true,
      "next": "2028-12-30"
    },
    "2028-12-30": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "טבת",
        "d": "י״ב"
      },
      "titles": [
        "12th of Tevet"
      ],
      "weekend": true,
      "next": "2028-12-31"
    },
    "2028-12-31": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "טבת",
        "d": "י״ג"
      },
      "titles": [
        "13th of Tevet"
      ],
      "next": "2029-01-01"
    },
    "2029-01-01": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "טבת",
        "d": "י״ד"
      },
      "titles": [
        "14th of Tevet"
      ],
      "next": "2029-01-02"
    },
    "2029-01-02": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "טבת",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Tevet"
      ],
      "next": "2029-01-03"
    },
    "2029-01-03": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "טבת",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Tevet"
      ],
      "next": "2029-01-04"
    },
    "2029-01-04": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "טבת",
        "d": "י״ז"
      },
      "titles": [
        "17th of Tevet"
      ],
      "next": "2029-01-05"
    },
    "2029-01-05": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "טבת",
        "d": "י״ח"
      },
      "titles": [
        "18th of Tevet"
      ],
      "weekend": true,
      "next": "2029-01-06"
    },
    "2029-01-06": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "טבת",
        "d": "י״ט"
      },
      "titles": [
        "19th of Tevet"
      ],
      "weekend": true,
      "next": "2029-01-07"
    },
    "2029-01-07": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "טבת",
        "d": "כ׳"
      },
      "titles": [
        "20th of Tevet"
      ],
      "next": "2029-01-08"
    },
    "2029-01-08": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "טבת",
        "d": "כ״א"
      },
      "titles": [
        "21st of Tevet"
      ],
      "next": "2029-01-09"
    },
    "2029-01-09": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "טבת",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Tevet"
      ],
      "next": "2029-01-10"
    },
    "2029-01-10": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "טבת",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Tevet"
      ],
      "next": "2029-01-11"
    },
    "2029-01-11": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "טבת",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Tevet"
      ],
      "next": "2029-01-12"
    },
    "2029-01-12": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "טבת",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Tevet"
      ],
      "weekend": true,
      "next": "2029-01-13"
    },
    "2029-01-13": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "טבת",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Tevet"
      ],
      "weekend": true,
      "next": "2029-01-14"
    },
    "2029-01-14": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "טבת",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Tevet"
      ],
      "next": "2029-01-15"
    },
    "2029-01-15": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "טבת",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Tevet"
      ],
      "next": "2029-01-16"
    },
    "2029-01-16": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "טבת",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Tevet"
      ],
      "next": "2029-01-17"
    },
    "2029-01-17": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "שבט",
        "d": "א׳"
      },
      "titles": [
        "1st of Sh’vat, 5789"
      ],
      "next": "2029-01-18"
    },
    "2029-01-18": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "שבט",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Sh’vat"
      ],
      "next": "2029-01-19"
    },
    "2029-01-19": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "שבט",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Sh’vat"
      ],
      "weekend": true,
      "next": "2029-01-20"
    },
    "2029-01-20": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "שבט",
        "d": "ד׳"
      },
      "titles": [
        "4th of Sh’vat"
      ],
      "weekend": true,
      "next": "2029-01-21"
    },
    "2029-01-21": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "שבט",
        "d": "ה׳"
      },
      "titles": [
        "5th of Sh’vat"
      ],
      "next": "2029-01-22"
    },
    "2029-01-22": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "שבט",
        "d": "ו׳"
      },
      "titles": [
        "6th of Sh’vat"
      ],
      "next": "2029-01-23"
    },
    "2029-01-23": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "שבט",
        "d": "ז׳"
      },
      "titles": [
        "7th of Sh’vat"
      ],
      "next": "2029-01-24"
    },
    "2029-01-24": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "שבט",
        "d": "ח׳"
      },
      "titles": [
        "8th of Sh’vat"
      ],
      "next": "2029-01-25"
    },
    "2029-01-25": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "שבט",
        "d": "ט׳"
      },
      "titles": [
        "9th of Sh’vat"
      ],
      "next": "2029-01-26"
    },
    "2029-01-26": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "שבט",
        "d": "י׳"
      },
      "titles": [
        "10th of Sh’vat"
      ],
      "weekend": true,
      "next": "2029-01-27"
    },
    "2029-01-27": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "שבט",
        "d": "י״א"
      },
      "titles": [
        "11th of Sh’vat"
      ],
      "weekend": true,
      "next": "2029-01-28"
    },
    "2029-01-28": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "שבט",
        "d": "י״ב"
      },
      "titles": [
        "12th of Sh’vat"
      ],
      "next": "2029-01-29"
    },
    "2029-01-29": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "שבט",
        "d": "י״ג"
      },
      "titles": [
        "13th of Sh’vat"
      ],
      "next": "2029-01-30"
    },
    "2029-01-30": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "שבט",
        "d": "י״ד"
      },
      "titles": [
        "14th of Sh’vat"
      ],
      "next": "2029-01-31"
    },
    "2029-01-31": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "שבט",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Sh’vat",
        "Tu BiShvat"
      ],
      "next": "2029-02-01"
    },
    "2029-02-01": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "שבט",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Sh’vat"
      ],
      "next": "2029-02-02"
    },
    "2029-02-02": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "שבט",
        "d": "י״ז"
      },
      "titles": [
        "17th of Sh’vat"
      ],
      "weekend": true,
      "next": "2029-02-03"
    },
    "2029-02-03": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "שבט",
        "d": "י״ח"
      },
      "titles": [
        "18th of Sh’vat"
      ],
      "weekend": true,
      "next": "2029-02-04"
    },
    "2029-02-04": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "שבט",
        "d": "י״ט"
      },
      "titles": [
        "19th of Sh’vat"
      ],
      "next": "2029-02-05"
    },
    "2029-02-05": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "שבט",
        "d": "כ׳"
      },
      "titles": [
        "20th of Sh’vat"
      ],
      "next": "2029-02-06"
    },
    "2029-02-06": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "שבט",
        "d": "כ״א"
      },
      "titles": [
        "21st of Sh’vat"
      ],
      "next": "2029-02-07"
    },
    "2029-02-07": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "שבט",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Sh’vat"
      ],
      "next": "2029-02-08"
    },
    "2029-02-08": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "שבט",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Sh’vat"
      ],
      "next": "2029-02-09"
    },
    "2029-02-09": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "שבט",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Sh’vat"
      ],
      "weekend": true,
      "next": "2029-02-10"
    },
    "2029-02-10": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "שבט",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Sh’vat"
      ],
      "weekend": true,
      "next": "2029-02-11"
    },
    "2029-02-11": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "שבט",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Sh’vat"
      ],
      "next": "2029-02-12"
    },
    "2029-02-12": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "שבט",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Sh’vat"
      ],
      "next": "2029-02-13"
    },
    "2029-02-13": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "שבט",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Sh’vat"
      ],
      "next": "2029-02-14"
    },
    "2029-02-14": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "שבט",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Sh’vat"
      ],
      "next": "2029-02-15"
    },
    "2029-02-15": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "שבט",
        "d": "ל׳"
      },
      "titles": [
        "30th of Sh’vat"
      ],
      "next": "2029-02-16"
    },
    "2029-02-16": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אדר",
        "d": "א׳"
      },
      "titles": [
        "1st of Adar, 5789"
      ],
      "weekend": true,
      "next": "2029-02-17"
    },
    "2029-02-17": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אדר",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Adar"
      ],
      "weekend": true,
      "next": "2029-02-18"
    },
    "2029-02-18": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אדר",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Adar"
      ],
      "next": "2029-02-19"
    },
    "2029-02-19": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אדר",
        "d": "ד׳"
      },
      "titles": [
        "4th of Adar"
      ],
      "next": "2029-02-20"
    },
    "2029-02-20": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אדר",
        "d": "ה׳"
      },
      "titles": [
        "5th of Adar"
      ],
      "next": "2029-02-21"
    },
    "2029-02-21": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אדר",
        "d": "ו׳"
      },
      "titles": [
        "6th of Adar"
      ],
      "next": "2029-02-22"
    },
    "2029-02-22": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אדר",
        "d": "ז׳"
      },
      "titles": [
        "7th of Adar"
      ],
      "next": "2029-02-23"
    },
    "2029-02-23": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אדר",
        "d": "ח׳"
      },
      "titles": [
        "8th of Adar"
      ],
      "weekend": true,
      "next": "2029-02-24"
    },
    "2029-02-24": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אדר",
        "d": "ט׳"
      },
      "titles": [
        "9th of Adar"
      ],
      "weekend": true,
      "next": "2029-02-25"
    },
    "2029-02-25": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אדר",
        "d": "י׳"
      },
      "titles": [
        "10th of Adar"
      ],
      "next": "2029-02-26"
    },
    "2029-02-26": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אדר",
        "d": "י״א"
      },
      "titles": [
        "11th of Adar"
      ],
      "next": "2029-02-27"
    },
    "2029-02-27": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אדר",
        "d": "י״ב"
      },
      "titles": [
        "12th of Adar"
      ],
      "next": "2029-02-28"
    },
    "2029-02-28": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אדר",
        "d": "י״ג"
      },
      "titles": [
        "13th of Adar",
        "Erev Purim"
      ],
      "next": "2029-03-01"
    },
    "2029-03-01": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אדר",
        "d": "י״ד"
      },
      "titles": [
        "14th of Adar",
        "Purim"
      ],
      "next": "2029-03-02"
    },
    "2029-03-02": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אדר",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Adar",
        "Shushan Purim"
      ],
      "weekend": true,
      "next": "2029-03-03"
    },
    "2029-03-03": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אדר",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Adar"
      ],
      "weekend": true,
      "next": "2029-03-04"
    },
    "2029-03-04": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אדר",
        "d": "י״ז"
      },
      "titles": [
        "17th of Adar"
      ],
      "next": "2029-03-05"
    },
    "2029-03-05": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אדר",
        "d": "י״ח"
      },
      "titles": [
        "18th of Adar"
      ],
      "next": "2029-03-06"
    },
    "2029-03-06": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אדר",
        "d": "י״ט"
      },
      "titles": [
        "19th of Adar"
      ],
      "next": "2029-03-07"
    },
    "2029-03-07": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אדר",
        "d": "כ׳"
      },
      "titles": [
        "20th of Adar"
      ],
      "next": "2029-03-08"
    },
    "2029-03-08": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אדר",
        "d": "כ״א"
      },
      "titles": [
        "21st of Adar"
      ],
      "next": "2029-03-09"
    },
    "2029-03-09": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אדר",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Adar"
      ],
      "weekend": true,
      "next": "2029-03-10"
    },
    "2029-03-10": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אדר",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Adar"
      ],
      "weekend": true,
      "next": "2029-03-11"
    },
    "2029-03-11": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אדר",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Adar"
      ],
      "next": "2029-03-12"
    },
    "2029-03-12": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אדר",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Adar"
      ],
      "next": "2029-03-13"
    },
    "2029-03-13": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אדר",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Adar"
      ],
      "next": "2029-03-14"
    },
    "2029-03-14": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אדר",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Adar"
      ],
      "next": "2029-03-15"
    },
    "2029-03-15": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אדר",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Adar"
      ],
      "next": "2029-03-16"
    },
    "2029-03-16": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אדר",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Adar"
      ],
      "weekend": true,
      "next": "2029-03-17"
    },
    "2029-03-17": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "ניסן",
        "d": "א׳"
      },
      "titles": [
        "1st of Nisan, 5789"
      ],
      "weekend": true,
      "next": "2029-03-18"
    },
    "2029-03-18": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "ניסן",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Nisan"
      ],
      "next": "2029-03-19"
    },
    "2029-03-19": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "ניסן",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Nisan"
      ],
      "next": "2029-03-20"
    },
    "2029-03-20": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "ניסן",
        "d": "ד׳"
      },
      "titles": [
        "4th of Nisan"
      ],
      "next": "2029-03-21"
    },
    "2029-03-21": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "ניסן",
        "d": "ה׳"
      },
      "titles": [
        "5th of Nisan"
      ],
      "next": "2029-03-22"
    },
    "2029-03-22": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "ניסן",
        "d": "ו׳"
      },
      "titles": [
        "6th of Nisan"
      ],
      "next": "2029-03-23"
    },
    "2029-03-23": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "ניסן",
        "d": "ז׳"
      },
      "titles": [
        "7th of Nisan"
      ],
      "weekend": true,
      "next": "2029-03-24"
    },
    "2029-03-24": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "ניסן",
        "d": "ח׳"
      },
      "titles": [
        "8th of Nisan"
      ],
      "weekend": true,
      "next": "2029-03-25"
    },
    "2029-03-25": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "ניסן",
        "d": "ט׳"
      },
      "titles": [
        "9th of Nisan"
      ],
      "next": "2029-03-26"
    },
    "2029-03-26": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "ניסן",
        "d": "י׳"
      },
      "titles": [
        "10th of Nisan"
      ],
      "next": "2029-03-27"
    },
    "2029-03-27": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "ניסן",
        "d": "י״א"
      },
      "titles": [
        "11th of Nisan"
      ],
      "next": "2029-03-28"
    },
    "2029-03-28": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "ניסן",
        "d": "י״ב"
      },
      "titles": [
        "12th of Nisan"
      ],
      "next": "2029-03-29"
    },
    "2029-03-29": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "ניסן",
        "d": "י״ג"
      },
      "titles": [
        "13th of Nisan"
      ],
      "next": "2029-03-30"
    },
    "2029-03-30": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "ניסן",
        "d": "י״ד"
      },
      "titles": [
        "14th of Nisan",
        "Erev Pesach"
      ],
      "recess_name": "pagrat pesach",
      "weekend": true,
      "next": "2029-03-31"
    },
    "2029-03-31": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "ניסן",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Nisan",
        "Pesach I"
      ],
      "recess_name": "pagrat pesach",
      "weekend": true,
      "next": "2029-04-01"
    },
    "2029-04-01": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "ניסן",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Nisan",
        "Pesach II (CH’’M)"
      ],
      "recess_name": "pagrat pesach",
      "next": "2029-04-02"
    },
    "2029-04-02": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "ניסן",
        "d": "י״ז"
      },
      "titles": [
        "17th of Nisan",
        "Pesach III (CH’’M)"
      ],
      "recess_name": "pagrat pesach",
      "next": "2029-04-03"
    },
    "2029-04-03": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "ניסן",
        "d": "י״ח"
      },
      "titles": [
        "18th of Nisan",
        "Pesach IV (CH’’M)"
      ],
      "recess_name": "pagrat pesach",
      "next": "2029-04-04"
    },
    "2029-04-04": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "ניסן",
        "d": "י״ט"
      },
      "titles": [
        "19th of Nisan",
        "Pesach V (CH’’M)"
      ],
      "recess_name": "pagrat pesach",
      "next": "2029-04-05"
    },
    "2029-04-05": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "ניסן",
        "d": "כ׳"
      },
      "titles": [
        "20th of Nisan",
        "Pesach VI (CH’’M)"
      ],
      "recess_name": "pagrat pesach",
      "next": "2029-04-06"
    },
    "2029-04-06": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "ניסן",
        "d": "כ״א"
      },
      "titles": [
        "21st of Nisan",
        "Pesach VII"
      ],
      "recess_name": "pagrat pesach",
      "weekend": true,
      "next": "2029-04-07"
    },
    "2029-04-07": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "ניסן",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Nisan"
      ],
      "weekend": true,
      "next": "2029-04-08"
    },
    "2029-04-08": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "ניסן",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Nisan"
      ],
      "next": "2029-04-09"
    },
    "2029-04-09": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "ניסן",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Nisan"
      ],
      "next": "2029-04-10"
    },
    "2029-04-10": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "ניסן",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Nisan"
      ],
      "next": "2029-04-11"
    },
    "2029-04-11": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "ניסן",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Nisan"
      ],
      "next": "2029-04-12"
    },
    "2029-04-12": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "ניסן",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Nisan"
      ],
      "next": "2029-04-13"
    },
    "2029-04-13": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "ניסן",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Nisan"
      ],
      "weekend": true,
      "next": "2029-04-14"
    },
    "2029-04-14": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "ניסן",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Nisan"
      ],
      "weekend": true,
      "next": "2029-04-15"
    },
    "2029-04-15": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "ניסן",
        "d": "ל׳"
      },
      "titles": [
        "30th of Nisan"
      ],
      "next": "2029-04-16"
    },
    "2029-04-16": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אייר",
        "d": "א׳"
      },
      "titles": [
        "1st of Iyyar, 5789"
      ],
      "next": "2029-04-17"
    },
    "2029-04-17": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אייר",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Iyyar"
      ],
      "next": "2029-04-18"
    },
    "2029-04-18": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אייר",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Iyyar"
      ],
      "next": "2029-04-19"
    },
    "2029-04-19": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אייר",
        "d": "ד׳"
      },
      "titles": [
        "4th of Iyyar"
      ],
      "shabaton_name": "yom haatzmaut",
      "next": "2029-04-20"
    },
    "2029-04-20": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אייר",
        "d": "ה׳"
      },
      "titles": [
        "5th of Iyyar"
      ],
      "weekend": true,
      "next": "2029-04-21"
    },
    "2029-04-21": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אייר",
        "d": "ו׳"
      },
      "titles": [
        "6th of Iyyar"
      ],
      "weekend": true,
      "next": "2029-04-22"
    },
    "2029-04-22": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אייר",
        "d": "ז׳"
      },
      "titles": [
        "7th of Iyyar"
      ],
      "next": "2029-04-23"
    },
    "2029-04-23": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אייר",
        "d": "ח׳"
      },
      "titles": [
        "8th of Iyyar"
      ],
      "next": "2029-04-24"
    },
    "2029-04-24": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אייר",
        "d": "ט׳"
      },
      "titles": [
        "9th of Iyyar"
      ],
      "next": "2029-04-25"
    },
    "2029-04-25": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אייר",
        "d": "י׳"
      },
      "titles": [
        "10th of Iyyar"
      ],
      "next": "2029-04-26"
    },
    "2029-04-26": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אייר",
        "d": "י״א"
      },
      "titles": [
        "11th of Iyyar"
      ],
      "next": "2029-04-27"
    },
    "2029-04-27": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אייר",
        "d": "י״ב"
      },
      "titles": [
        "12th of Iyyar"
      ],
      "weekend": true,
      "next": "2029-04-28"
    },
    "2029-04-28": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אייר",
        "d": "י״ג"
      },
      "titles": [
        "13th of Iyyar"
      ],
      "weekend": true,
      "next": "2029-04-29"
    },
    "2029-04-29": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אייר",
        "d": "י״ד"
      },
      "titles": [
        "14th of Iyyar",
        "Pesach Sheni"
      ],
      "next": "2029-04-30"
    },
    "2029-04-30": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אייר",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Iyyar"
      ],
      "next": "2029-05-01"
    },
    "2029-05-01": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אייר",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Iyyar"
      ],
      "next": "2029-05-02"
    },
    "2029-05-02": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אייר",
        "d": "י״ז"
      },
      "titles": [
        "17th of Iyyar"
      ],
      "next": "2029-05-03"
    },
    "2029-05-03": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אייר",
        "d": "י״ח"
      },
      "titles": [
        "18th of Iyyar",
        "Lag BaOmer"
      ],
      "next": "2029-05-04"
    },
    "2029-05-04": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אייר",
        "d": "י״ט"
      },
      "titles": [
        "19th of Iyyar"
      ],
      "weekend": true,
      "next": "2029-05-05"
    },
    "2029-05-05": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אייר",
        "d": "כ׳"
      },
      "titles": [
        "20th of Iyyar"
      ],
      "weekend": true,
      "next": "2029-05-06"
    },
    "2029-05-06": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אייר",
        "d": "כ״א"
      },
      "titles": [
        "21st of Iyyar"
      ],
      "next": "2029-05-07"
    },
    "2029-05-07": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אייר",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Iyyar"
      ],
      "next": "2029-05-08"
    },
    "2029-05-08": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אייר",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Iyyar"
      ],
      "next": "2029-05-09"
    },
    "2029-05-09": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אייר",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Iyyar"
      ],
      "next": "2029-05-10"
    },
    "2029-05-10": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אייר",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Iyyar"
      ],
      "next": "2029-05-11"
    },
    "2029-05-11": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אייר",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Iyyar"
      ],
      "weekend": true,
      "next": "2029-05-12"
    },
    "2029-05-12": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אייר",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Iyyar"
      ],
      "weekend": true,
      "next": "2029-05-13"
    },
    "2029-05-13": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אייר",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Iyyar"
      ],
      "next": "2029-05-14"
    },
    "2029-05-14": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אייר",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Iyyar"
      ],
      "next": "2029-05-15"
    },
    "2029-05-15": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "סיון",
        "d": "א׳"
      },
      "titles": [
        "1st of Sivan, 5789"
      ],
      "next": "2029-05-16"
    },
    "2029-05-16": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "סיון",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Sivan"
      ],
      "next": "2029-05-17"
    },
    "2029-05-17": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "סיון",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Sivan"
      ],
      "next": "2029-05-18"
    },
    "2029-05-18": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "סיון",
        "d": "ד׳"
      },
      "titles": [
        "4th of Sivan"
      ],
      "weekend": true,
      "next": "2029-05-19"
    },
    "2029-05-19": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "סיון",
        "d": "ה׳"
      },
      "titles": [
        "5th of Sivan",
        "Erev Shavuot"
      ],
      "weekend": true,
      "next": "2029-05-20"
    },
    "2029-05-20": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "סיון",
        "d": "ו׳"
      },
      "titles": [
        "6th of Sivan",
        "Shavuot"
      ],
      "shabaton_name": "shavuot",
      "next": "2029-05-21"
    },
    "2029-05-21": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "סיון",
        "d": "ז׳"
      },
      "titles": [
        "7th of Sivan"
      ],
      "next": "2029-05-22"
    },
    "2029-05-22": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "סיון",
        "d": "ח׳"
      },
      "titles": [
        "8th of Sivan"
      ],
      "next": "2029-05-23"
    },
    "2029-05-23": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "סיון",
        "d": "ט׳"
      },
      "titles": [
        "9th of Sivan"
      ],
      "next": "2029-05-24"
    },
    "2029-05-24": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "סיון",
        "d": "י׳"
      },
      "titles": [
        "10th of Sivan"
      ],
      "next": "2029-05-25"
    },
    "2029-05-25": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "סיון",
        "d": "י״א"
      },
      "titles": [
        "11th of Sivan"
      ],
      "weekend": true,
      "next": "2029-05-26"
    },
    "2029-05-26": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "סיון",
        "d": "י״ב"
      },
      "titles": [
        "12th of Sivan"
      ],
      "weekend": true,
      "next": "2029-05-27"
    },
    "2029-05-27": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "סיון",
        "d": "י״ג"
      },
      "titles": [
        "13th of Sivan"
      ],
      "next": "2029-05-28"
    },
    "2029-05-28": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "סיון",
        "d": "י״ד"
      },
      "titles": [
        "14th of Sivan"
      ],
      "next": "2029-05-29"
    },
    "2029-05-29": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "סיון",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Sivan"
      ],
      "next": "2029-05-30"
    },
    "2029-05-30": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "סיון",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Sivan"
      ],
      "next": "2029-05-31"
    },
    "2029-05-31": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "סיון",
        "d": "י״ז"
      },
      "titles": [
        "17th of Sivan"
      ],
      "next": "2029-06-01"
    },
    "2029-06-01": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "סיון",
        "d": "י״ח"
      },
      "titles": [
        "18th of Sivan"
      ],
      "weekend": true,
      "next": "2029-06-02"
    },
    "2029-06-02": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "סיון",
        "d": "י״ט"
      },
      "titles": [
        "19th of Sivan"
      ],
      "weekend": true,
      "next": "2029-06-03"
    },
    "2029-06-03": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "סיון",
        "d": "כ׳"
      },
      "titles": [
        "20th of Sivan"
      ],
      "next": "2029-06-04"
    },
    "2029-06-04": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "סיון",
        "d": "כ״א"
      },
      "titles": [
        "21st of Sivan"
      ],
      "next": "2029-06-05"
    },
    "2029-06-05": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "סיון",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Sivan"
      ],
      "next": "2029-06-06"
    },
    "2029-06-06": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "סיון",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Sivan"
      ],
      "next": "2029-06-07"
    },
    "2029-06-07": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "סיון",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Sivan"
      ],
      "next": "2029-06-08"
    },
    "2029-06-08": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "סיון",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Sivan"
      ],
      "weekend": true,
      "next": "2029-06-09"
    },
    "2029-06-09": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "סיון",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Sivan"
      ],
      "weekend": true,
      "next": "2029-06-10"
    },
    "2029-06-10": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "סיון",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Sivan"
      ],
      "next": "2029-06-11"
    },
    "2029-06-11": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "סיון",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Sivan"
      ],
      "next": "2029-06-12"
    },
    "2029-06-12": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "סיון",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Sivan"
      ],
      "next": "2029-06-13"
    },
    "2029-06-13": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "סיון",
        "d": "ל׳"
      },
      "titles": [
        "30th of Sivan"
      ],
      "next": "2029-06-14"
    },
    "2029-06-14": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תמוז",
        "d": "א׳"
      },
      "titles": [
        "1st of Tamuz, 5789"
      ],
      "next": "2029-06-15"
    },
    "2029-06-15": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תמוז",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Tamuz"
      ],
      "weekend": true,
      "next": "2029-06-16"
    },
    "2029-06-16": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תמוז",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Tamuz"
      ],
      "weekend": true,
      "next": "2029-06-17"
    },
    "2029-06-17": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תמוז",
        "d": "ד׳"
      },
      "titles": [
        "4th of Tamuz"
      ],
      "next": "2029-06-18"
    },
    "2029-06-18": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תמוז",
        "d": "ה׳"
      },
      "titles": [
        "5th of Tamuz"
      ],
      "next": "2029-06-19"
    },
    "2029-06-19": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תמוז",
        "d": "ו׳"
      },
      "titles": [
        "6th of Tamuz"
      ],
      "next": "2029-06-20"
    },
    "2029-06-20": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תמוז",
        "d": "ז׳"
      },
      "titles": [
        "7th of Tamuz"
      ],
      "next": "2029-06-21"
    },
    "2029-06-21": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תמוז",
        "d": "ח׳"
      },
      "titles": [
        "8th of Tamuz"
      ],
      "next": "2029-06-22"
    },
    "2029-06-22": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תמוז",
        "d": "ט׳"
      },
      "titles": [
        "9th of Tamuz"
      ],
      "weekend": true,
      "next": "2029-06-23"
    },
    "2029-06-23": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תמוז",
        "d": "י׳"
      },
      "titles": [
        "10th of Tamuz"
      ],
      "weekend": true,
      "next": "2029-06-24"
    },
    "2029-06-24": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תמוז",
        "d": "י״א"
      },
      "titles": [
        "11th of Tamuz"
      ],
      "next": "2029-06-25"
    },
    "2029-06-25": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תמוז",
        "d": "י״ב"
      },
      "titles": [
        "12th of Tamuz"
      ],
      "next": "2029-06-26"
    },
    "2029-06-26": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תמוז",
        "d": "י״ג"
      },
      "titles": [
        "13th of Tamuz"
      ],
      "next": "2029-06-27"
    },
    "2029-06-27": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תמוז",
        "d": "י״ד"
      },
      "titles": [
        "14th of Tamuz"
      ],
      "next": "2029-06-28"
    },
    "2029-06-28": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תמוז",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Tamuz"
      ],
      "next": "2029-06-29"
    },
    "2029-06-29": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תמוז",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Tamuz"
      ],
      "weekend": true,
      "next": "2029-06-30"
    },
    "2029-06-30": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תמוז",
        "d": "י״ז"
      },
      "titles": [
        "17th of Tamuz"
      ],
      "weekend": true,
      "next": "2029-07-01"
    },
    "2029-07-01": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תמוז",
        "d": "י״ח"
      },
      "titles": [
        "18th of Tamuz"
      ],
      "next": "2029-07-02"
    },
    "2029-07-02": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תמוז",
        "d": "י״ט"
      },
      "titles": [
        "19th of Tamuz"
      ],
      "next": "2029-07-03"
    },
    "2029-07-03": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תמוז",
        "d": "כ׳"
      },
      "titles": [
        "20th of Tamuz"
      ],
      "next": "2029-07-04"
    },
    "2029-07-04": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תמוז",
        "d": "כ״א"
      },
      "titles": [
        "21st of Tamuz"
      ],
      "next": "2029-07-05"
    },
    "2029-07-05": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תמוז",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Tamuz"
      ],
      "next": "2029-07-06"
    },
    "2029-07-06": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תמוז",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Tamuz"
      ],
      "weekend": true,
      "next": "2029-07-07"
    },
    "2029-07-07": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תמוז",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Tamuz"
      ],
      "weekend": true,
      "next": "2029-07-08"
    },
    "2029-07-08": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תמוז",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Tamuz"
      ],
      "next": "2029-07-09"
    },
    "2029-07-09": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תמוז",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Tamuz"
      ],
      "next": "2029-07-10"
    },
    "2029-07-10": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תמוז",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Tamuz"
      ],
      "next": "2029-07-11"
    },
    "2029-07-11": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תמוז",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Tamuz"
      ],
      "next": "2029-07-12"
    },
    "2029-07-12": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "תמוז",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Tamuz"
      ],
      "next": "2029-07-13"
    },
    "2029-07-13": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אב",
        "d": "א׳"
      },
      "titles": [
        "1st of Av, 5789"
      ],
      "weekend": true,
      "next": "2029-07-14"
    },
    "2029-07-14": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אב",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Av"
      ],
      "weekend": true,
      "next": "2029-07-15"
    },
    "2029-07-15": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אב",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Av"
      ],
      "next": "2029-07-16"
    },
    "2029-07-16": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אב",
        "d": "ד׳"
      },
      "titles": [
        "4th of Av"
      ],
      "next": "2029-07-17"
    },
    "2029-07-17": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אב",
        "d": "ה׳"
      },
      "titles": [
        "5th of Av"
      ],
      "next": "2029-07-18"
    },
    "2029-07-18": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אב",
        "d": "ו׳"
      },
      "titles": [
        "6th of Av"
      ],
      "next": "2029-07-19"
    },
    "2029-07-19": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אב",
        "d": "ז׳"
      },
      "titles": [
        "7th of Av"
      ],
      "next": "2029-07-20"
    },
    "2029-07-20": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אב",
        "d": "ח׳"
      },
      "titles": [
        "8th of Av"
      ],
      "weekend": true,
      "next": "2029-07-21"
    },
    "2029-07-21": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אב",
        "d": "ט׳"
      },
      "titles": [
        "9th of Av",
        "Erev Tish’a B’Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2029-07-22"
    },
    "2029-07-22": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אב",
        "d": "י׳"
      },
      "titles": [
        "10th of Av",
        "Tish’a B’Av (observed)"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-07-23"
    },
    "2029-07-23": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אב",
        "d": "י״א"
      },
      "titles": [
        "11th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-07-24"
    },
    "2029-07-24": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אב",
        "d": "י״ב"
      },
      "titles": [
        "12th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-07-25"
    },
    "2029-07-25": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אב",
        "d": "י״ג"
      },
      "titles": [
        "13th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-07-26"
    },
    "2029-07-26": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אב",
        "d": "י״ד"
      },
      "titles": [
        "14th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-07-27"
    },
    "2029-07-27": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אב",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Av",
        "Tu B’Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2029-07-28"
    },
    "2029-07-28": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אב",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2029-07-29"
    },
    "2029-07-29": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אב",
        "d": "י״ז"
      },
      "titles": [
        "17th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-07-30"
    },
    "2029-07-30": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אב",
        "d": "י״ח"
      },
      "titles": [
        "18th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-07-31"
    },
    "2029-07-31": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אב",
        "d": "י״ט"
      },
      "titles": [
        "19th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-08-01"
    },
    "2029-08-01": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אב",
        "d": "כ׳"
      },
      "titles": [
        "20th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-08-02"
    },
    "2029-08-02": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אב",
        "d": "כ״א"
      },
      "titles": [
        "21st of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-08-03"
    },
    "2029-08-03": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אב",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2029-08-04"
    },
    "2029-08-04": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אב",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2029-08-05"
    },
    "2029-08-05": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אב",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-08-06"
    },
    "2029-08-06": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אב",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-08-07"
    },
    "2029-08-07": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אב",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-08-08"
    },
    "2029-08-08": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אב",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-08-09"
    },
    "2029-08-09": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אב",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-08-10"
    },
    "2029-08-10": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אב",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2029-08-11"
    },
    "2029-08-11": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אב",
        "d": "ל׳"
      },
      "titles": [
        "30th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2029-08-12"
    },
    "2029-08-12": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אלול",
        "d": "א׳"
      },
      "titles": [
        "1st of Elul, 5789",
        "Rosh Hashana LaBehemot"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-08-13"
    },
    "2029-08-13": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אלול",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-08-14"
    },
    "2029-08-14": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אלול",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-08-15"
    },
    "2029-08-15": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אלול",
        "d": "ד׳"
      },
      "titles": [
        "4th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-08-16"
    },
    "2029-08-16": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אלול",
        "d": "ה׳"
      },
      "titles": [
        "5th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-08-17"
    },
    "2029-08-17": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אלול",
        "d": "ו׳"
      },
      "titles": [
        "6th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2029-08-18"
    },
    "2029-08-18": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אלול",
        "d": "ז׳"
      },
      "titles": [
        "7th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2029-08-19"
    },
    "2029-08-19": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אלול",
        "d": "ח׳"
      },
      "titles": [
        "8th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-08-20"
    },
    "2029-08-20": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אלול",
        "d": "ט׳"
      },
      "titles": [
        "9th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-08-21"
    },
    "2029-08-21": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אלול",
        "d": "י׳"
      },
      "titles": [
        "10th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-08-22"
    },
    "2029-08-22": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אלול",
        "d": "י״א"
      },
      "titles": [
        "11th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-08-23"
    },
    "2029-08-23": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אלול",
        "d": "י״ב"
      },
      "titles": [
        "12th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-08-24"
    },
    "2029-08-24": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אלול",
        "d": "י״ג"
      },
      "titles": [
        "13th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2029-08-25"
    },
    "2029-08-25": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אלול",
        "d": "י״ד"
      },
      "titles": [
        "14th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2029-08-26"
    },
    "2029-08-26": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אלול",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-08-27"
    },
    "2029-08-27": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אלול",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-08-28"
    },
    "2029-08-28": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אלול",
        "d": "י״ז"
      },
      "titles": [
        "17th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-08-29"
    },
    "2029-08-29": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אלול",
        "d": "י״ח"
      },
      "titles": [
        "18th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-08-30"
    },
    "2029-08-30": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אלול",
        "d": "י״ט"
      },
      "titles": [
        "19th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-08-31"
    },
    "2029-08-31": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אלול",
        "d": "כ׳"
      },
      "titles": [
        "20th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2029-09-01"
    },
    "2029-09-01": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אלול",
        "d": "כ״א"
      },
      "titles": [
        "21st of Elul",
        "Leil Selichot"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2029-09-02"
    },
    "2029-09-02": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אלול",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-09-03"
    },
    "2029-09-03": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אלול",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-09-04"
    },
    "2029-09-04": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אלול",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-09-05"
    },
    "2029-09-05": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אלול",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2029-09-06"
    },
    "2029-09-06": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אלול",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Elul"
      ],
      "next": "2029-09-07"
    },
    "2029-09-07": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אלול",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Elul"
      ],
      "weekend": true,
      "next": "2029-09-08"
    },
    "2029-09-08": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אלול",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Elul"
      ],
      "weekend": true,
      "next": "2029-09-09"
    },
    "2029-09-09": {
      "heDateParts": {
        "y": "תשפ״ט",
        "m": "אלול",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Elul",
        "Erev Rosh Hashana"
      ],
      "next": "2029-09-10"
    },
    "2029-09-10": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תשרי",
        "d": "א׳"
      },
      "titles": [
        "1st of Tishrei, 5790",
        "Rosh Hashana 5790"
      ],
      "shabaton_name": "rosh hashana",
      "next": "2029-09-11"
    },
    "2029-09-11": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תשרי",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Tishrei",
        "Rosh Hashana II"
      ],
      "shabaton_name": "rosh hashana",
      "next": "2029-09-12"
    },
    "2029-09-12": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תשרי",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Tishrei"
      ],
      "next": "2029-09-13"
    },
    "2029-09-13": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תשרי",
        "d": "ד׳"
      },
      "titles": [
        "4th of Tishrei"
      ],
      "next": "2029-09-14"
    },
    "2029-09-14": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תשרי",
        "d": "ה׳"
      },
      "titles": [
        "5th of Tishrei"
      ],
      "weekend": true,
      "next": "2029-09-15"
    },
    "2029-09-15": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תשרי",
        "d": "ו׳"
      },
      "titles": [
        "6th of Tishrei"
      ],
      "weekend": true,
      "next": "2029-09-16"
    },
    "2029-09-16": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תשרי",
        "d": "ז׳"
      },
      "titles": [
        "7th of Tishrei"
      ],
      "next": "2029-09-17"
    },
    "2029-09-17": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תשרי",
        "d": "ח׳"
      },
      "titles": [
        "8th of Tishrei"
      ],
      "next": "2029-09-18"
    },
    "2029-09-18": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תשרי",
        "d": "ט׳"
      },
      "titles": [
        "9th of Tishrei",
        "Erev Yom Kippur"
      ],
      "next": "2029-09-19"
    },
    "2029-09-19": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תשרי",
        "d": "י׳"
      },
      "titles": [
        "10th of Tishrei",
        "Yom Kippur"
      ],
      "shabaton_name": "yom kipur",
      "next": "2029-09-20"
    },
    "2029-09-20": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תשרי",
        "d": "י״א"
      },
      "titles": [
        "11th of Tishrei"
      ],
      "next": "2029-09-21"
    },
    "2029-09-21": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תשרי",
        "d": "י״ב"
      },
      "titles": [
        "12th of Tishrei"
      ],
      "weekend": true,
      "next": "2029-09-22"
    },
    "2029-09-22": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תשרי",
        "d": "י״ג"
      },
      "titles": [
        "13th of Tishrei"
      ],
      "weekend": true,
      "next": "2029-09-23"
    },
    "2029-09-23": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תשרי",
        "d": "י״ד"
      },
      "titles": [
        "14th of Tishrei",
        "Erev Sukkot"
      ],
      "recess_name": "pagrat sukot",
      "next": "2029-09-24"
    },
    "2029-09-24": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תשרי",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Tishrei",
        "Sukkot I"
      ],
      "recess_name": "pagrat sukot",
      "next": "2029-09-25"
    },
    "2029-09-25": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תשרי",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Tishrei",
        "Sukkot II (CH’’M)"
      ],
      "recess_name": "pagrat sukot",
      "next": "2029-09-26"
    },
    "2029-09-26": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תשרי",
        "d": "י״ז"
      },
      "titles": [
        "17th of Tishrei",
        "Sukkot III (CH’’M)"
      ],
      "recess_name": "pagrat sukot",
      "next": "2029-09-27"
    },
    "2029-09-27": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תשרי",
        "d": "י״ח"
      },
      "titles": [
        "18th of Tishrei",
        "Sukkot IV (CH’’M)"
      ],
      "recess_name": "pagrat sukot",
      "next": "2029-09-28"
    },
    "2029-09-28": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תשרי",
        "d": "י״ט"
      },
      "titles": [
        "19th of Tishrei",
        "Sukkot V (CH’’M)"
      ],
      "recess_name": "pagrat sukot",
      "weekend": true,
      "next": "2029-09-29"
    },
    "2029-09-29": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תשרי",
        "d": "כ׳"
      },
      "titles": [
        "20th of Tishrei",
        "Sukkot VI (CH’’M)"
      ],
      "recess_name": "pagrat sukot",
      "weekend": true,
      "next": "2029-09-30"
    },
    "2029-09-30": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תשרי",
        "d": "כ״א"
      },
      "titles": [
        "21st of Tishrei",
        "Sukkot VII (Hoshana Raba)"
      ],
      "recess_name": "pagrat sukot",
      "next": "2029-10-01"
    },
    "2029-10-01": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תשרי",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Tishrei",
        "Shmini Atzeret"
      ],
      "recess_name": "pagrat sukot",
      "next": "2029-10-02"
    },
    "2029-10-02": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תשרי",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Tishrei"
      ],
      "next": "2029-10-03"
    },
    "2029-10-03": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תשרי",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Tishrei"
      ],
      "next": "2029-10-04"
    },
    "2029-10-04": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תשרי",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Tishrei"
      ],
      "next": "2029-10-05"
    },
    "2029-10-05": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תשרי",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Tishrei"
      ],
      "weekend": true,
      "next": "2029-10-06"
    },
    "2029-10-06": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תשרי",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Tishrei"
      ],
      "weekend": true,
      "next": "2029-10-07"
    },
    "2029-10-07": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תשרי",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Tishrei"
      ],
      "next": "2029-10-08"
    },
    "2029-10-08": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תשרי",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Tishrei"
      ],
      "next": "2029-10-09"
    },
    "2029-10-09": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תשרי",
        "d": "ל׳"
      },
      "titles": [
        "30th of Tishrei"
      ],
      "next": "2029-10-10"
    },
    "2029-10-10": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "חשון",
        "d": "א׳"
      },
      "titles": [
        "1st of Cheshvan, 5790"
      ],
      "next": "2029-10-11"
    },
    "2029-10-11": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "חשון",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Cheshvan"
      ],
      "next": "2029-10-12"
    },
    "2029-10-12": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "חשון",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Cheshvan"
      ],
      "weekend": true,
      "next": "2029-10-13"
    },
    "2029-10-13": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "חשון",
        "d": "ד׳"
      },
      "titles": [
        "4th of Cheshvan"
      ],
      "weekend": true,
      "next": "2029-10-14"
    },
    "2029-10-14": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "חשון",
        "d": "ה׳"
      },
      "titles": [
        "5th of Cheshvan"
      ],
      "next": "2029-10-15"
    },
    "2029-10-15": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "חשון",
        "d": "ו׳"
      },
      "titles": [
        "6th of Cheshvan"
      ],
      "next": "2029-10-16"
    },
    "2029-10-16": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "חשון",
        "d": "ז׳"
      },
      "titles": [
        "7th of Cheshvan"
      ],
      "next": "2029-10-17"
    },
    "2029-10-17": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "חשון",
        "d": "ח׳"
      },
      "titles": [
        "8th of Cheshvan"
      ],
      "next": "2029-10-18"
    },
    "2029-10-18": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "חשון",
        "d": "ט׳"
      },
      "titles": [
        "9th of Cheshvan"
      ],
      "next": "2029-10-19"
    },
    "2029-10-19": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "חשון",
        "d": "י׳"
      },
      "titles": [
        "10th of Cheshvan"
      ],
      "weekend": true,
      "next": "2029-10-20"
    },
    "2029-10-20": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "חשון",
        "d": "י״א"
      },
      "titles": [
        "11th of Cheshvan"
      ],
      "weekend": true,
      "next": "2029-10-21"
    },
    "2029-10-21": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "חשון",
        "d": "י״ב"
      },
      "titles": [
        "12th of Cheshvan"
      ],
      "next": "2029-10-22"
    },
    "2029-10-22": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "חשון",
        "d": "י״ג"
      },
      "titles": [
        "13th of Cheshvan"
      ],
      "next": "2029-10-23"
    },
    "2029-10-23": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "חשון",
        "d": "י״ד"
      },
      "titles": [
        "14th of Cheshvan"
      ],
      "next": "2029-10-24"
    },
    "2029-10-24": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "חשון",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Cheshvan"
      ],
      "next": "2029-10-25"
    },
    "2029-10-25": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "חשון",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Cheshvan"
      ],
      "next": "2029-10-26"
    },
    "2029-10-26": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "חשון",
        "d": "י״ז"
      },
      "titles": [
        "17th of Cheshvan"
      ],
      "weekend": true,
      "next": "2029-10-27"
    },
    "2029-10-27": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "חשון",
        "d": "י״ח"
      },
      "titles": [
        "18th of Cheshvan"
      ],
      "weekend": true,
      "next": "2029-10-28"
    },
    "2029-10-28": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "חשון",
        "d": "י״ט"
      },
      "titles": [
        "19th of Cheshvan"
      ],
      "next": "2029-10-29"
    },
    "2029-10-29": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "חשון",
        "d": "כ׳"
      },
      "titles": [
        "20th of Cheshvan"
      ],
      "next": "2029-10-30"
    },
    "2029-10-30": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "חשון",
        "d": "כ״א"
      },
      "titles": [
        "21st of Cheshvan"
      ],
      "next": "2029-10-31"
    },
    "2029-10-31": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "חשון",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Cheshvan"
      ],
      "next": "2029-11-01"
    },
    "2029-11-01": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "חשון",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Cheshvan"
      ],
      "next": "2029-11-02"
    },
    "2029-11-02": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "חשון",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Cheshvan"
      ],
      "weekend": true,
      "next": "2029-11-03"
    },
    "2029-11-03": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "חשון",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Cheshvan"
      ],
      "weekend": true,
      "next": "2029-11-04"
    },
    "2029-11-04": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "חשון",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Cheshvan"
      ],
      "next": "2029-11-05"
    },
    "2029-11-05": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "חשון",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Cheshvan"
      ],
      "next": "2029-11-06"
    },
    "2029-11-06": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "חשון",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Cheshvan"
      ],
      "next": "2029-11-07"
    },
    "2029-11-07": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "חשון",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Cheshvan"
      ],
      "next": "2029-11-08"
    },
    "2029-11-08": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "כסלו",
        "d": "א׳"
      },
      "titles": [
        "1st of Kislev, 5790"
      ],
      "next": "2029-11-09"
    },
    "2029-11-09": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "כסלו",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Kislev"
      ],
      "weekend": true,
      "next": "2029-11-10"
    },
    "2029-11-10": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "כסלו",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Kislev"
      ],
      "weekend": true,
      "next": "2029-11-11"
    },
    "2029-11-11": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "כסלו",
        "d": "ד׳"
      },
      "titles": [
        "4th of Kislev"
      ],
      "next": "2029-11-12"
    },
    "2029-11-12": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "כסלו",
        "d": "ה׳"
      },
      "titles": [
        "5th of Kislev"
      ],
      "next": "2029-11-13"
    },
    "2029-11-13": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "כסלו",
        "d": "ו׳"
      },
      "titles": [
        "6th of Kislev"
      ],
      "next": "2029-11-14"
    },
    "2029-11-14": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "כסלו",
        "d": "ז׳"
      },
      "titles": [
        "7th of Kislev"
      ],
      "next": "2029-11-15"
    },
    "2029-11-15": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "כסלו",
        "d": "ח׳"
      },
      "titles": [
        "8th of Kislev"
      ],
      "next": "2029-11-16"
    },
    "2029-11-16": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "כסלו",
        "d": "ט׳"
      },
      "titles": [
        "9th of Kislev"
      ],
      "weekend": true,
      "next": "2029-11-17"
    },
    "2029-11-17": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "כסלו",
        "d": "י׳"
      },
      "titles": [
        "10th of Kislev"
      ],
      "weekend": true,
      "next": "2029-11-18"
    },
    "2029-11-18": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "כסלו",
        "d": "י״א"
      },
      "titles": [
        "11th of Kislev"
      ],
      "next": "2029-11-19"
    },
    "2029-11-19": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "כסלו",
        "d": "י״ב"
      },
      "titles": [
        "12th of Kislev"
      ],
      "next": "2029-11-20"
    },
    "2029-11-20": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "כסלו",
        "d": "י״ג"
      },
      "titles": [
        "13th of Kislev"
      ],
      "next": "2029-11-21"
    },
    "2029-11-21": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "כסלו",
        "d": "י״ד"
      },
      "titles": [
        "14th of Kislev"
      ],
      "next": "2029-11-22"
    },
    "2029-11-22": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "כסלו",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Kislev"
      ],
      "next": "2029-11-23"
    },
    "2029-11-23": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "כסלו",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Kislev"
      ],
      "weekend": true,
      "next": "2029-11-24"
    },
    "2029-11-24": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "כסלו",
        "d": "י״ז"
      },
      "titles": [
        "17th of Kislev"
      ],
      "weekend": true,
      "next": "2029-11-25"
    },
    "2029-11-25": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "כסלו",
        "d": "י״ח"
      },
      "titles": [
        "18th of Kislev"
      ],
      "next": "2029-11-26"
    },
    "2029-11-26": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "כסלו",
        "d": "י״ט"
      },
      "titles": [
        "19th of Kislev"
      ],
      "next": "2029-11-27"
    },
    "2029-11-27": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "כסלו",
        "d": "כ׳"
      },
      "titles": [
        "20th of Kislev"
      ],
      "next": "2029-11-28"
    },
    "2029-11-28": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "כסלו",
        "d": "כ״א"
      },
      "titles": [
        "21st of Kislev"
      ],
      "next": "2029-11-29"
    },
    "2029-11-29": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "כסלו",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Kislev"
      ],
      "next": "2029-11-30"
    },
    "2029-11-30": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "כסלו",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Kislev"
      ],
      "weekend": true,
      "next": "2029-12-01"
    },
    "2029-12-01": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "כסלו",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Kislev",
        "Chanukah: 1 Candle"
      ],
      "weekend": true,
      "next": "2029-12-02"
    },
    "2029-12-02": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "כסלו",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Kislev",
        "Chanukah: 2 Candles"
      ],
      "next": "2029-12-03"
    },
    "2029-12-03": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "כסלו",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Kislev",
        "Chanukah: 3 Candles"
      ],
      "next": "2029-12-04"
    },
    "2029-12-04": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "כסלו",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Kislev",
        "Chanukah: 4 Candles"
      ],
      "next": "2029-12-05"
    },
    "2029-12-05": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "כסלו",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Kislev",
        "Chanukah: 5 Candles"
      ],
      "next": "2029-12-06"
    },
    "2029-12-06": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "כסלו",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Kislev",
        "Chanukah: 6 Candles"
      ],
      "next": "2029-12-07"
    },
    "2029-12-07": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "טבת",
        "d": "א׳"
      },
      "titles": [
        "1st of Tevet, 5790",
        "Chag HaBanot",
        "Chanukah: 7 Candles"
      ],
      "weekend": true,
      "next": "2029-12-08"
    },
    "2029-12-08": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "טבת",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Tevet",
        "Chanukah: 8 Candles"
      ],
      "weekend": true,
      "next": "2029-12-09"
    },
    "2029-12-09": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "טבת",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Tevet",
        "Chanukah: 8th Day"
      ],
      "next": "2029-12-10"
    },
    "2029-12-10": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "טבת",
        "d": "ד׳"
      },
      "titles": [
        "4th of Tevet"
      ],
      "next": "2029-12-11"
    },
    "2029-12-11": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "טבת",
        "d": "ה׳"
      },
      "titles": [
        "5th of Tevet"
      ],
      "next": "2029-12-12"
    },
    "2029-12-12": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "טבת",
        "d": "ו׳"
      },
      "titles": [
        "6th of Tevet"
      ],
      "next": "2029-12-13"
    },
    "2029-12-13": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "טבת",
        "d": "ז׳"
      },
      "titles": [
        "7th of Tevet"
      ],
      "next": "2029-12-14"
    },
    "2029-12-14": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "טבת",
        "d": "ח׳"
      },
      "titles": [
        "8th of Tevet"
      ],
      "weekend": true,
      "next": "2029-12-15"
    },
    "2029-12-15": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "טבת",
        "d": "ט׳"
      },
      "titles": [
        "9th of Tevet"
      ],
      "weekend": true,
      "next": "2029-12-16"
    },
    "2029-12-16": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "טבת",
        "d": "י׳"
      },
      "titles": [
        "10th of Tevet"
      ],
      "next": "2029-12-17"
    },
    "2029-12-17": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "טבת",
        "d": "י״א"
      },
      "titles": [
        "11th of Tevet"
      ],
      "next": "2029-12-18"
    },
    "2029-12-18": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "טבת",
        "d": "י״ב"
      },
      "titles": [
        "12th of Tevet"
      ],
      "next": "2029-12-19"
    },
    "2029-12-19": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "טבת",
        "d": "י״ג"
      },
      "titles": [
        "13th of Tevet"
      ],
      "next": "2029-12-20"
    },
    "2029-12-20": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "טבת",
        "d": "י״ד"
      },
      "titles": [
        "14th of Tevet"
      ],
      "next": "2029-12-21"
    },
    "2029-12-21": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "טבת",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Tevet"
      ],
      "weekend": true,
      "next": "2029-12-22"
    },
    "2029-12-22": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "טבת",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Tevet"
      ],
      "weekend": true,
      "next": "2029-12-23"
    },
    "2029-12-23": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "טבת",
        "d": "י״ז"
      },
      "titles": [
        "17th of Tevet"
      ],
      "next": "2029-12-24"
    },
    "2029-12-24": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "טבת",
        "d": "י״ח"
      },
      "titles": [
        "18th of Tevet"
      ],
      "next": "2029-12-25"
    },
    "2029-12-25": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "טבת",
        "d": "י״ט"
      },
      "titles": [
        "19th of Tevet"
      ],
      "next": "2029-12-26"
    },
    "2029-12-26": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "טבת",
        "d": "כ׳"
      },
      "titles": [
        "20th of Tevet"
      ],
      "next": "2029-12-27"
    },
    "2029-12-27": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "טבת",
        "d": "כ״א"
      },
      "titles": [
        "21st of Tevet"
      ],
      "next": "2029-12-28"
    },
    "2029-12-28": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "טבת",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Tevet"
      ],
      "weekend": true,
      "next": "2029-12-29"
    },
    "2029-12-29": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "טבת",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Tevet"
      ],
      "weekend": true,
      "next": "2029-12-30"
    },
    "2029-12-30": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "טבת",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Tevet"
      ],
      "next": "2029-12-31"
    },
    "2029-12-31": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "טבת",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Tevet"
      ],
      "next": "2030-01-01"
    },
    "2030-01-01": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "טבת",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Tevet"
      ],
      "next": "2030-01-02"
    },
    "2030-01-02": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "טבת",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Tevet"
      ],
      "next": "2030-01-03"
    },
    "2030-01-03": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "טבת",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Tevet"
      ],
      "next": "2030-01-04"
    },
    "2030-01-04": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "טבת",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Tevet"
      ],
      "weekend": true,
      "next": "2030-01-05"
    },
    "2030-01-05": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "שבט",
        "d": "א׳"
      },
      "titles": [
        "1st of Sh’vat, 5790"
      ],
      "weekend": true,
      "next": "2030-01-06"
    },
    "2030-01-06": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "שבט",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Sh’vat"
      ],
      "next": "2030-01-07"
    },
    "2030-01-07": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "שבט",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Sh’vat"
      ],
      "next": "2030-01-08"
    },
    "2030-01-08": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "שבט",
        "d": "ד׳"
      },
      "titles": [
        "4th of Sh’vat"
      ],
      "next": "2030-01-09"
    },
    "2030-01-09": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "שבט",
        "d": "ה׳"
      },
      "titles": [
        "5th of Sh’vat"
      ],
      "next": "2030-01-10"
    },
    "2030-01-10": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "שבט",
        "d": "ו׳"
      },
      "titles": [
        "6th of Sh’vat"
      ],
      "next": "2030-01-11"
    },
    "2030-01-11": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "שבט",
        "d": "ז׳"
      },
      "titles": [
        "7th of Sh’vat"
      ],
      "weekend": true,
      "next": "2030-01-12"
    },
    "2030-01-12": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "שבט",
        "d": "ח׳"
      },
      "titles": [
        "8th of Sh’vat"
      ],
      "weekend": true,
      "next": "2030-01-13"
    },
    "2030-01-13": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "שבט",
        "d": "ט׳"
      },
      "titles": [
        "9th of Sh’vat"
      ],
      "next": "2030-01-14"
    },
    "2030-01-14": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "שבט",
        "d": "י׳"
      },
      "titles": [
        "10th of Sh’vat"
      ],
      "next": "2030-01-15"
    },
    "2030-01-15": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "שבט",
        "d": "י״א"
      },
      "titles": [
        "11th of Sh’vat"
      ],
      "next": "2030-01-16"
    },
    "2030-01-16": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "שבט",
        "d": "י״ב"
      },
      "titles": [
        "12th of Sh’vat"
      ],
      "next": "2030-01-17"
    },
    "2030-01-17": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "שבט",
        "d": "י״ג"
      },
      "titles": [
        "13th of Sh’vat"
      ],
      "next": "2030-01-18"
    },
    "2030-01-18": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "שבט",
        "d": "י״ד"
      },
      "titles": [
        "14th of Sh’vat"
      ],
      "weekend": true,
      "next": "2030-01-19"
    },
    "2030-01-19": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "שבט",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Sh’vat",
        "Tu BiShvat"
      ],
      "weekend": true,
      "next": "2030-01-20"
    },
    "2030-01-20": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "שבט",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Sh’vat"
      ],
      "next": "2030-01-21"
    },
    "2030-01-21": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "שבט",
        "d": "י״ז"
      },
      "titles": [
        "17th of Sh’vat"
      ],
      "next": "2030-01-22"
    },
    "2030-01-22": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "שבט",
        "d": "י״ח"
      },
      "titles": [
        "18th of Sh’vat"
      ],
      "next": "2030-01-23"
    },
    "2030-01-23": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "שבט",
        "d": "י״ט"
      },
      "titles": [
        "19th of Sh’vat"
      ],
      "next": "2030-01-24"
    },
    "2030-01-24": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "שבט",
        "d": "כ׳"
      },
      "titles": [
        "20th of Sh’vat"
      ],
      "next": "2030-01-25"
    },
    "2030-01-25": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "שבט",
        "d": "כ״א"
      },
      "titles": [
        "21st of Sh’vat"
      ],
      "weekend": true,
      "next": "2030-01-26"
    },
    "2030-01-26": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "שבט",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Sh’vat"
      ],
      "weekend": true,
      "next": "2030-01-27"
    },
    "2030-01-27": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "שבט",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Sh’vat"
      ],
      "next": "2030-01-28"
    },
    "2030-01-28": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "שבט",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Sh’vat"
      ],
      "next": "2030-01-29"
    },
    "2030-01-29": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "שבט",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Sh’vat"
      ],
      "next": "2030-01-30"
    },
    "2030-01-30": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "שבט",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Sh’vat"
      ],
      "next": "2030-01-31"
    },
    "2030-01-31": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "שבט",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Sh’vat"
      ],
      "next": "2030-02-01"
    },
    "2030-02-01": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "שבט",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Sh’vat"
      ],
      "weekend": true,
      "next": "2030-02-02"
    },
    "2030-02-02": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "שבט",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Sh’vat"
      ],
      "weekend": true,
      "next": "2030-02-03"
    },
    "2030-02-03": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "שבט",
        "d": "ל׳"
      },
      "titles": [
        "30th of Sh’vat"
      ],
      "next": "2030-02-04"
    },
    "2030-02-04": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר א׳",
        "d": "א׳"
      },
      "titles": [
        "1st of Adar I, 5790"
      ],
      "next": "2030-02-05"
    },
    "2030-02-05": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר א׳",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Adar I"
      ],
      "next": "2030-02-06"
    },
    "2030-02-06": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר א׳",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Adar I"
      ],
      "next": "2030-02-07"
    },
    "2030-02-07": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר א׳",
        "d": "ד׳"
      },
      "titles": [
        "4th of Adar I"
      ],
      "next": "2030-02-08"
    },
    "2030-02-08": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר א׳",
        "d": "ה׳"
      },
      "titles": [
        "5th of Adar I"
      ],
      "weekend": true,
      "next": "2030-02-09"
    },
    "2030-02-09": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר א׳",
        "d": "ו׳"
      },
      "titles": [
        "6th of Adar I"
      ],
      "weekend": true,
      "next": "2030-02-10"
    },
    "2030-02-10": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר א׳",
        "d": "ז׳"
      },
      "titles": [
        "7th of Adar I"
      ],
      "next": "2030-02-11"
    },
    "2030-02-11": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר א׳",
        "d": "ח׳"
      },
      "titles": [
        "8th of Adar I"
      ],
      "next": "2030-02-12"
    },
    "2030-02-12": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר א׳",
        "d": "ט׳"
      },
      "titles": [
        "9th of Adar I"
      ],
      "next": "2030-02-13"
    },
    "2030-02-13": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר א׳",
        "d": "י׳"
      },
      "titles": [
        "10th of Adar I"
      ],
      "next": "2030-02-14"
    },
    "2030-02-14": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר א׳",
        "d": "י״א"
      },
      "titles": [
        "11th of Adar I"
      ],
      "next": "2030-02-15"
    },
    "2030-02-15": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר א׳",
        "d": "י״ב"
      },
      "titles": [
        "12th of Adar I"
      ],
      "weekend": true,
      "next": "2030-02-16"
    },
    "2030-02-16": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר א׳",
        "d": "י״ג"
      },
      "titles": [
        "13th of Adar I"
      ],
      "weekend": true,
      "next": "2030-02-17"
    },
    "2030-02-17": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר א׳",
        "d": "י״ד"
      },
      "titles": [
        "14th of Adar I",
        "Purim Katan"
      ],
      "next": "2030-02-18"
    },
    "2030-02-18": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר א׳",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Adar I",
        "Shushan Purim Katan"
      ],
      "next": "2030-02-19"
    },
    "2030-02-19": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר א׳",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Adar I"
      ],
      "next": "2030-02-20"
    },
    "2030-02-20": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר א׳",
        "d": "י״ז"
      },
      "titles": [
        "17th of Adar I"
      ],
      "next": "2030-02-21"
    },
    "2030-02-21": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר א׳",
        "d": "י״ח"
      },
      "titles": [
        "18th of Adar I"
      ],
      "next": "2030-02-22"
    },
    "2030-02-22": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר א׳",
        "d": "י״ט"
      },
      "titles": [
        "19th of Adar I"
      ],
      "weekend": true,
      "next": "2030-02-23"
    },
    "2030-02-23": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר א׳",
        "d": "כ׳"
      },
      "titles": [
        "20th of Adar I"
      ],
      "weekend": true,
      "next": "2030-02-24"
    },
    "2030-02-24": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר א׳",
        "d": "כ״א"
      },
      "titles": [
        "21st of Adar I"
      ],
      "next": "2030-02-25"
    },
    "2030-02-25": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר א׳",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Adar I"
      ],
      "next": "2030-02-26"
    },
    "2030-02-26": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר א׳",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Adar I"
      ],
      "next": "2030-02-27"
    },
    "2030-02-27": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר א׳",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Adar I"
      ],
      "next": "2030-02-28"
    },
    "2030-02-28": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר א׳",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Adar I"
      ],
      "next": "2030-03-01"
    },
    "2030-03-01": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר א׳",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Adar I"
      ],
      "weekend": true,
      "next": "2030-03-02"
    },
    "2030-03-02": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר א׳",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Adar I"
      ],
      "weekend": true,
      "next": "2030-03-03"
    },
    "2030-03-03": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר א׳",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Adar I"
      ],
      "next": "2030-03-04"
    },
    "2030-03-04": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר א׳",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Adar I"
      ],
      "next": "2030-03-05"
    },
    "2030-03-05": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר א׳",
        "d": "ל׳"
      },
      "titles": [
        "30th of Adar I"
      ],
      "next": "2030-03-06"
    },
    "2030-03-06": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר ב׳",
        "d": "א׳"
      },
      "titles": [
        "1st of Adar II, 5790"
      ],
      "next": "2030-03-07"
    },
    "2030-03-07": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר ב׳",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Adar II"
      ],
      "next": "2030-03-08"
    },
    "2030-03-08": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר ב׳",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Adar II"
      ],
      "weekend": true,
      "next": "2030-03-09"
    },
    "2030-03-09": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר ב׳",
        "d": "ד׳"
      },
      "titles": [
        "4th of Adar II"
      ],
      "weekend": true,
      "next": "2030-03-10"
    },
    "2030-03-10": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר ב׳",
        "d": "ה׳"
      },
      "titles": [
        "5th of Adar II"
      ],
      "next": "2030-03-11"
    },
    "2030-03-11": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר ב׳",
        "d": "ו׳"
      },
      "titles": [
        "6th of Adar II"
      ],
      "next": "2030-03-12"
    },
    "2030-03-12": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר ב׳",
        "d": "ז׳"
      },
      "titles": [
        "7th of Adar II"
      ],
      "next": "2030-03-13"
    },
    "2030-03-13": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר ב׳",
        "d": "ח׳"
      },
      "titles": [
        "8th of Adar II"
      ],
      "next": "2030-03-14"
    },
    "2030-03-14": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר ב׳",
        "d": "ט׳"
      },
      "titles": [
        "9th of Adar II"
      ],
      "next": "2030-03-15"
    },
    "2030-03-15": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר ב׳",
        "d": "י׳"
      },
      "titles": [
        "10th of Adar II"
      ],
      "weekend": true,
      "next": "2030-03-16"
    },
    "2030-03-16": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר ב׳",
        "d": "י״א"
      },
      "titles": [
        "11th of Adar II"
      ],
      "weekend": true,
      "next": "2030-03-17"
    },
    "2030-03-17": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר ב׳",
        "d": "י״ב"
      },
      "titles": [
        "12th of Adar II"
      ],
      "next": "2030-03-18"
    },
    "2030-03-18": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר ב׳",
        "d": "י״ג"
      },
      "titles": [
        "13th of Adar II",
        "Erev Purim"
      ],
      "next": "2030-03-19"
    },
    "2030-03-19": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר ב׳",
        "d": "י״ד"
      },
      "titles": [
        "14th of Adar II",
        "Purim"
      ],
      "next": "2030-03-20"
    },
    "2030-03-20": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר ב׳",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Adar II",
        "Shushan Purim"
      ],
      "next": "2030-03-21"
    },
    "2030-03-21": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר ב׳",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Adar II"
      ],
      "next": "2030-03-22"
    },
    "2030-03-22": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר ב׳",
        "d": "י״ז"
      },
      "titles": [
        "17th of Adar II"
      ],
      "weekend": true,
      "next": "2030-03-23"
    },
    "2030-03-23": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר ב׳",
        "d": "י״ח"
      },
      "titles": [
        "18th of Adar II"
      ],
      "weekend": true,
      "next": "2030-03-24"
    },
    "2030-03-24": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר ב׳",
        "d": "י״ט"
      },
      "titles": [
        "19th of Adar II"
      ],
      "next": "2030-03-25"
    },
    "2030-03-25": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר ב׳",
        "d": "כ׳"
      },
      "titles": [
        "20th of Adar II"
      ],
      "next": "2030-03-26"
    },
    "2030-03-26": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר ב׳",
        "d": "כ״א"
      },
      "titles": [
        "21st of Adar II"
      ],
      "next": "2030-03-27"
    },
    "2030-03-27": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר ב׳",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Adar II"
      ],
      "next": "2030-03-28"
    },
    "2030-03-28": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר ב׳",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Adar II"
      ],
      "next": "2030-03-29"
    },
    "2030-03-29": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר ב׳",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Adar II"
      ],
      "weekend": true,
      "next": "2030-03-30"
    },
    "2030-03-30": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר ב׳",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Adar II"
      ],
      "weekend": true,
      "next": "2030-03-31"
    },
    "2030-03-31": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר ב׳",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Adar II"
      ],
      "next": "2030-04-01"
    },
    "2030-04-01": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר ב׳",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Adar II"
      ],
      "next": "2030-04-02"
    },
    "2030-04-02": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר ב׳",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Adar II"
      ],
      "next": "2030-04-03"
    },
    "2030-04-03": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אדר ב׳",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Adar II"
      ],
      "next": "2030-04-04"
    },
    "2030-04-04": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "ניסן",
        "d": "א׳"
      },
      "titles": [
        "1st of Nisan, 5790"
      ],
      "next": "2030-04-05"
    },
    "2030-04-05": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "ניסן",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Nisan"
      ],
      "weekend": true,
      "next": "2030-04-06"
    },
    "2030-04-06": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "ניסן",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Nisan"
      ],
      "weekend": true,
      "next": "2030-04-07"
    },
    "2030-04-07": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "ניסן",
        "d": "ד׳"
      },
      "titles": [
        "4th of Nisan"
      ],
      "next": "2030-04-08"
    },
    "2030-04-08": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "ניסן",
        "d": "ה׳"
      },
      "titles": [
        "5th of Nisan"
      ],
      "next": "2030-04-09"
    },
    "2030-04-09": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "ניסן",
        "d": "ו׳"
      },
      "titles": [
        "6th of Nisan"
      ],
      "next": "2030-04-10"
    },
    "2030-04-10": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "ניסן",
        "d": "ז׳"
      },
      "titles": [
        "7th of Nisan"
      ],
      "next": "2030-04-11"
    },
    "2030-04-11": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "ניסן",
        "d": "ח׳"
      },
      "titles": [
        "8th of Nisan"
      ],
      "next": "2030-04-12"
    },
    "2030-04-12": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "ניסן",
        "d": "ט׳"
      },
      "titles": [
        "9th of Nisan"
      ],
      "weekend": true,
      "next": "2030-04-13"
    },
    "2030-04-13": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "ניסן",
        "d": "י׳"
      },
      "titles": [
        "10th of Nisan"
      ],
      "weekend": true,
      "next": "2030-04-14"
    },
    "2030-04-14": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "ניסן",
        "d": "י״א"
      },
      "titles": [
        "11th of Nisan"
      ],
      "next": "2030-04-15"
    },
    "2030-04-15": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "ניסן",
        "d": "י״ב"
      },
      "titles": [
        "12th of Nisan"
      ],
      "next": "2030-04-16"
    },
    "2030-04-16": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "ניסן",
        "d": "י״ג"
      },
      "titles": [
        "13th of Nisan"
      ],
      "next": "2030-04-17"
    },
    "2030-04-17": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "ניסן",
        "d": "י״ד"
      },
      "titles": [
        "14th of Nisan",
        "Erev Pesach"
      ],
      "recess_name": "pagrat pesach",
      "next": "2030-04-18"
    },
    "2030-04-18": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "ניסן",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Nisan",
        "Pesach I"
      ],
      "recess_name": "pagrat pesach",
      "next": "2030-04-19"
    },
    "2030-04-19": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "ניסן",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Nisan",
        "Pesach II (CH’’M)"
      ],
      "recess_name": "pagrat pesach",
      "weekend": true,
      "next": "2030-04-20"
    },
    "2030-04-20": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "ניסן",
        "d": "י״ז"
      },
      "titles": [
        "17th of Nisan",
        "Pesach III (CH’’M)"
      ],
      "recess_name": "pagrat pesach",
      "weekend": true,
      "next": "2030-04-21"
    },
    "2030-04-21": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "ניסן",
        "d": "י״ח"
      },
      "titles": [
        "18th of Nisan",
        "Pesach IV (CH’’M)"
      ],
      "recess_name": "pagrat pesach",
      "next": "2030-04-22"
    },
    "2030-04-22": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "ניסן",
        "d": "י״ט"
      },
      "titles": [
        "19th of Nisan",
        "Pesach V (CH’’M)"
      ],
      "recess_name": "pagrat pesach",
      "next": "2030-04-23"
    },
    "2030-04-23": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "ניסן",
        "d": "כ׳"
      },
      "titles": [
        "20th of Nisan",
        "Pesach VI (CH’’M)"
      ],
      "recess_name": "pagrat pesach",
      "next": "2030-04-24"
    },
    "2030-04-24": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "ניסן",
        "d": "כ״א"
      },
      "titles": [
        "21st of Nisan",
        "Pesach VII"
      ],
      "recess_name": "pagrat pesach",
      "next": "2030-04-25"
    },
    "2030-04-25": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "ניסן",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Nisan"
      ],
      "next": "2030-04-26"
    },
    "2030-04-26": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "ניסן",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Nisan"
      ],
      "weekend": true,
      "next": "2030-04-27"
    },
    "2030-04-27": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "ניסן",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Nisan"
      ],
      "weekend": true,
      "next": "2030-04-28"
    },
    "2030-04-28": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "ניסן",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Nisan"
      ],
      "next": "2030-04-29"
    },
    "2030-04-29": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "ניסן",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Nisan"
      ],
      "next": "2030-04-30"
    },
    "2030-04-30": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "ניסן",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Nisan"
      ],
      "next": "2030-05-01"
    },
    "2030-05-01": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "ניסן",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Nisan"
      ],
      "next": "2030-05-02"
    },
    "2030-05-02": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "ניסן",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Nisan"
      ],
      "next": "2030-05-03"
    },
    "2030-05-03": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "ניסן",
        "d": "ל׳"
      },
      "titles": [
        "30th of Nisan"
      ],
      "weekend": true,
      "next": "2030-05-04"
    },
    "2030-05-04": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אייר",
        "d": "א׳"
      },
      "titles": [
        "1st of Iyyar, 5790"
      ],
      "weekend": true,
      "next": "2030-05-05"
    },
    "2030-05-05": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אייר",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Iyyar"
      ],
      "next": "2030-05-06"
    },
    "2030-05-06": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אייר",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Iyyar"
      ],
      "next": "2030-05-07"
    },
    "2030-05-07": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אייר",
        "d": "ד׳"
      },
      "titles": [
        "4th of Iyyar"
      ],
      "next": "2030-05-08"
    },
    "2030-05-08": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אייר",
        "d": "ה׳"
      },
      "titles": [
        "5th of Iyyar"
      ],
      "shabaton_name": "yom haatzmaut",
      "next": "2030-05-09"
    },
    "2030-05-09": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אייר",
        "d": "ו׳"
      },
      "titles": [
        "6th of Iyyar"
      ],
      "next": "2030-05-10"
    },
    "2030-05-10": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אייר",
        "d": "ז׳"
      },
      "titles": [
        "7th of Iyyar"
      ],
      "weekend": true,
      "next": "2030-05-11"
    },
    "2030-05-11": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אייר",
        "d": "ח׳"
      },
      "titles": [
        "8th of Iyyar"
      ],
      "weekend": true,
      "next": "2030-05-12"
    },
    "2030-05-12": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אייר",
        "d": "ט׳"
      },
      "titles": [
        "9th of Iyyar"
      ],
      "next": "2030-05-13"
    },
    "2030-05-13": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אייר",
        "d": "י׳"
      },
      "titles": [
        "10th of Iyyar"
      ],
      "next": "2030-05-14"
    },
    "2030-05-14": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אייר",
        "d": "י״א"
      },
      "titles": [
        "11th of Iyyar"
      ],
      "next": "2030-05-15"
    },
    "2030-05-15": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אייר",
        "d": "י״ב"
      },
      "titles": [
        "12th of Iyyar"
      ],
      "next": "2030-05-16"
    },
    "2030-05-16": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אייר",
        "d": "י״ג"
      },
      "titles": [
        "13th of Iyyar"
      ],
      "next": "2030-05-17"
    },
    "2030-05-17": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אייר",
        "d": "י״ד"
      },
      "titles": [
        "14th of Iyyar",
        "Pesach Sheni"
      ],
      "weekend": true,
      "next": "2030-05-18"
    },
    "2030-05-18": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אייר",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Iyyar"
      ],
      "weekend": true,
      "next": "2030-05-19"
    },
    "2030-05-19": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אייר",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Iyyar"
      ],
      "next": "2030-05-20"
    },
    "2030-05-20": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אייר",
        "d": "י״ז"
      },
      "titles": [
        "17th of Iyyar"
      ],
      "next": "2030-05-21"
    },
    "2030-05-21": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אייר",
        "d": "י״ח"
      },
      "titles": [
        "18th of Iyyar",
        "Lag BaOmer"
      ],
      "next": "2030-05-22"
    },
    "2030-05-22": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אייר",
        "d": "י״ט"
      },
      "titles": [
        "19th of Iyyar"
      ],
      "next": "2030-05-23"
    },
    "2030-05-23": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אייר",
        "d": "כ׳"
      },
      "titles": [
        "20th of Iyyar"
      ],
      "next": "2030-05-24"
    },
    "2030-05-24": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אייר",
        "d": "כ״א"
      },
      "titles": [
        "21st of Iyyar"
      ],
      "weekend": true,
      "next": "2030-05-25"
    },
    "2030-05-25": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אייר",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Iyyar"
      ],
      "weekend": true,
      "next": "2030-05-26"
    },
    "2030-05-26": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אייר",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Iyyar"
      ],
      "next": "2030-05-27"
    },
    "2030-05-27": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אייר",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Iyyar"
      ],
      "next": "2030-05-28"
    },
    "2030-05-28": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אייר",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Iyyar"
      ],
      "next": "2030-05-29"
    },
    "2030-05-29": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אייר",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Iyyar"
      ],
      "next": "2030-05-30"
    },
    "2030-05-30": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אייר",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Iyyar"
      ],
      "next": "2030-05-31"
    },
    "2030-05-31": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אייר",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Iyyar"
      ],
      "weekend": true,
      "next": "2030-06-01"
    },
    "2030-06-01": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אייר",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Iyyar"
      ],
      "weekend": true,
      "next": "2030-06-02"
    },
    "2030-06-02": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "סיון",
        "d": "א׳"
      },
      "titles": [
        "1st of Sivan, 5790"
      ],
      "next": "2030-06-03"
    },
    "2030-06-03": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "סיון",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Sivan"
      ],
      "next": "2030-06-04"
    },
    "2030-06-04": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "סיון",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Sivan"
      ],
      "next": "2030-06-05"
    },
    "2030-06-05": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "סיון",
        "d": "ד׳"
      },
      "titles": [
        "4th of Sivan"
      ],
      "next": "2030-06-06"
    },
    "2030-06-06": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "סיון",
        "d": "ה׳"
      },
      "titles": [
        "5th of Sivan",
        "Erev Shavuot"
      ],
      "next": "2030-06-07"
    },
    "2030-06-07": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "סיון",
        "d": "ו׳"
      },
      "titles": [
        "6th of Sivan",
        "Shavuot"
      ],
      "shabaton_name": "shavuot",
      "weekend": true,
      "next": "2030-06-08"
    },
    "2030-06-08": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "סיון",
        "d": "ז׳"
      },
      "titles": [
        "7th of Sivan"
      ],
      "weekend": true,
      "next": "2030-06-09"
    },
    "2030-06-09": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "סיון",
        "d": "ח׳"
      },
      "titles": [
        "8th of Sivan"
      ],
      "next": "2030-06-10"
    },
    "2030-06-10": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "סיון",
        "d": "ט׳"
      },
      "titles": [
        "9th of Sivan"
      ],
      "next": "2030-06-11"
    },
    "2030-06-11": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "סיון",
        "d": "י׳"
      },
      "titles": [
        "10th of Sivan"
      ],
      "next": "2030-06-12"
    },
    "2030-06-12": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "סיון",
        "d": "י״א"
      },
      "titles": [
        "11th of Sivan"
      ],
      "next": "2030-06-13"
    },
    "2030-06-13": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "סיון",
        "d": "י״ב"
      },
      "titles": [
        "12th of Sivan"
      ],
      "next": "2030-06-14"
    },
    "2030-06-14": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "סיון",
        "d": "י״ג"
      },
      "titles": [
        "13th of Sivan"
      ],
      "weekend": true,
      "next": "2030-06-15"
    },
    "2030-06-15": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "סיון",
        "d": "י״ד"
      },
      "titles": [
        "14th of Sivan"
      ],
      "weekend": true,
      "next": "2030-06-16"
    },
    "2030-06-16": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "סיון",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Sivan"
      ],
      "next": "2030-06-17"
    },
    "2030-06-17": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "סיון",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Sivan"
      ],
      "next": "2030-06-18"
    },
    "2030-06-18": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "סיון",
        "d": "י״ז"
      },
      "titles": [
        "17th of Sivan"
      ],
      "next": "2030-06-19"
    },
    "2030-06-19": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "סיון",
        "d": "י״ח"
      },
      "titles": [
        "18th of Sivan"
      ],
      "next": "2030-06-20"
    },
    "2030-06-20": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "סיון",
        "d": "י״ט"
      },
      "titles": [
        "19th of Sivan"
      ],
      "next": "2030-06-21"
    },
    "2030-06-21": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "סיון",
        "d": "כ׳"
      },
      "titles": [
        "20th of Sivan"
      ],
      "weekend": true,
      "next": "2030-06-22"
    },
    "2030-06-22": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "סיון",
        "d": "כ״א"
      },
      "titles": [
        "21st of Sivan"
      ],
      "weekend": true,
      "next": "2030-06-23"
    },
    "2030-06-23": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "סיון",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Sivan"
      ],
      "next": "2030-06-24"
    },
    "2030-06-24": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "סיון",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Sivan"
      ],
      "next": "2030-06-25"
    },
    "2030-06-25": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "סיון",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Sivan"
      ],
      "next": "2030-06-26"
    },
    "2030-06-26": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "סיון",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Sivan"
      ],
      "next": "2030-06-27"
    },
    "2030-06-27": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "סיון",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Sivan"
      ],
      "next": "2030-06-28"
    },
    "2030-06-28": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "סיון",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Sivan"
      ],
      "weekend": true,
      "next": "2030-06-29"
    },
    "2030-06-29": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "סיון",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Sivan"
      ],
      "weekend": true,
      "next": "2030-06-30"
    },
    "2030-06-30": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "סיון",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Sivan"
      ],
      "next": "2030-07-01"
    },
    "2030-07-01": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "סיון",
        "d": "ל׳"
      },
      "titles": [
        "30th of Sivan"
      ],
      "next": "2030-07-02"
    },
    "2030-07-02": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תמוז",
        "d": "א׳"
      },
      "titles": [
        "1st of Tamuz, 5790"
      ],
      "next": "2030-07-03"
    },
    "2030-07-03": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תמוז",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Tamuz"
      ],
      "next": "2030-07-04"
    },
    "2030-07-04": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תמוז",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Tamuz"
      ],
      "next": "2030-07-05"
    },
    "2030-07-05": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תמוז",
        "d": "ד׳"
      },
      "titles": [
        "4th of Tamuz"
      ],
      "weekend": true,
      "next": "2030-07-06"
    },
    "2030-07-06": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תמוז",
        "d": "ה׳"
      },
      "titles": [
        "5th of Tamuz"
      ],
      "weekend": true,
      "next": "2030-07-07"
    },
    "2030-07-07": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תמוז",
        "d": "ו׳"
      },
      "titles": [
        "6th of Tamuz"
      ],
      "next": "2030-07-08"
    },
    "2030-07-08": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תמוז",
        "d": "ז׳"
      },
      "titles": [
        "7th of Tamuz"
      ],
      "next": "2030-07-09"
    },
    "2030-07-09": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תמוז",
        "d": "ח׳"
      },
      "titles": [
        "8th of Tamuz"
      ],
      "next": "2030-07-10"
    },
    "2030-07-10": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תמוז",
        "d": "ט׳"
      },
      "titles": [
        "9th of Tamuz"
      ],
      "next": "2030-07-11"
    },
    "2030-07-11": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תמוז",
        "d": "י׳"
      },
      "titles": [
        "10th of Tamuz"
      ],
      "next": "2030-07-12"
    },
    "2030-07-12": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תמוז",
        "d": "י״א"
      },
      "titles": [
        "11th of Tamuz"
      ],
      "weekend": true,
      "next": "2030-07-13"
    },
    "2030-07-13": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תמוז",
        "d": "י״ב"
      },
      "titles": [
        "12th of Tamuz"
      ],
      "weekend": true,
      "next": "2030-07-14"
    },
    "2030-07-14": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תמוז",
        "d": "י״ג"
      },
      "titles": [
        "13th of Tamuz"
      ],
      "next": "2030-07-15"
    },
    "2030-07-15": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תמוז",
        "d": "י״ד"
      },
      "titles": [
        "14th of Tamuz"
      ],
      "next": "2030-07-16"
    },
    "2030-07-16": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תמוז",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Tamuz"
      ],
      "next": "2030-07-17"
    },
    "2030-07-17": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תמוז",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Tamuz"
      ],
      "next": "2030-07-18"
    },
    "2030-07-18": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תמוז",
        "d": "י״ז"
      },
      "titles": [
        "17th of Tamuz"
      ],
      "next": "2030-07-19"
    },
    "2030-07-19": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תמוז",
        "d": "י״ח"
      },
      "titles": [
        "18th of Tamuz"
      ],
      "weekend": true,
      "next": "2030-07-20"
    },
    "2030-07-20": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תמוז",
        "d": "י״ט"
      },
      "titles": [
        "19th of Tamuz"
      ],
      "weekend": true,
      "next": "2030-07-21"
    },
    "2030-07-21": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תמוז",
        "d": "כ׳"
      },
      "titles": [
        "20th of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-07-22"
    },
    "2030-07-22": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תמוז",
        "d": "כ״א"
      },
      "titles": [
        "21st of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-07-23"
    },
    "2030-07-23": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תמוז",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-07-24"
    },
    "2030-07-24": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תמוז",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-07-25"
    },
    "2030-07-25": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תמוז",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-07-26"
    },
    "2030-07-26": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תמוז",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2030-07-27"
    },
    "2030-07-27": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תמוז",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2030-07-28"
    },
    "2030-07-28": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תמוז",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-07-29"
    },
    "2030-07-29": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תמוז",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-07-30"
    },
    "2030-07-30": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "תמוז",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Tamuz"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-07-31"
    },
    "2030-07-31": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אב",
        "d": "א׳"
      },
      "titles": [
        "1st of Av, 5790"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-08-01"
    },
    "2030-08-01": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אב",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-08-02"
    },
    "2030-08-02": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אב",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2030-08-03"
    },
    "2030-08-03": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אב",
        "d": "ד׳"
      },
      "titles": [
        "4th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2030-08-04"
    },
    "2030-08-04": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אב",
        "d": "ה׳"
      },
      "titles": [
        "5th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-08-05"
    },
    "2030-08-05": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אב",
        "d": "ו׳"
      },
      "titles": [
        "6th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-08-06"
    },
    "2030-08-06": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אב",
        "d": "ז׳"
      },
      "titles": [
        "7th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-08-07"
    },
    "2030-08-07": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אב",
        "d": "ח׳"
      },
      "titles": [
        "8th of Av",
        "Erev Tish’a B’Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-08-08"
    },
    "2030-08-08": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אב",
        "d": "ט׳"
      },
      "titles": [
        "9th of Av",
        "Tish’a B’Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-08-09"
    },
    "2030-08-09": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אב",
        "d": "י׳"
      },
      "titles": [
        "10th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2030-08-10"
    },
    "2030-08-10": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אב",
        "d": "י״א"
      },
      "titles": [
        "11th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2030-08-11"
    },
    "2030-08-11": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אב",
        "d": "י״ב"
      },
      "titles": [
        "12th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-08-12"
    },
    "2030-08-12": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אב",
        "d": "י״ג"
      },
      "titles": [
        "13th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-08-13"
    },
    "2030-08-13": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אב",
        "d": "י״ד"
      },
      "titles": [
        "14th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-08-14"
    },
    "2030-08-14": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אב",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Av",
        "Tu B’Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-08-15"
    },
    "2030-08-15": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אב",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-08-16"
    },
    "2030-08-16": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אב",
        "d": "י״ז"
      },
      "titles": [
        "17th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2030-08-17"
    },
    "2030-08-17": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אב",
        "d": "י״ח"
      },
      "titles": [
        "18th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2030-08-18"
    },
    "2030-08-18": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אב",
        "d": "י״ט"
      },
      "titles": [
        "19th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-08-19"
    },
    "2030-08-19": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אב",
        "d": "כ׳"
      },
      "titles": [
        "20th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-08-20"
    },
    "2030-08-20": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אב",
        "d": "כ״א"
      },
      "titles": [
        "21st of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-08-21"
    },
    "2030-08-21": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אב",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-08-22"
    },
    "2030-08-22": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אב",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-08-23"
    },
    "2030-08-23": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אב",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2030-08-24"
    },
    "2030-08-24": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אב",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2030-08-25"
    },
    "2030-08-25": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אב",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-08-26"
    },
    "2030-08-26": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אב",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-08-27"
    },
    "2030-08-27": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אב",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-08-28"
    },
    "2030-08-28": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אב",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-08-29"
    },
    "2030-08-29": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אב",
        "d": "ל׳"
      },
      "titles": [
        "30th of Av"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-08-30"
    },
    "2030-08-30": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אלול",
        "d": "א׳"
      },
      "titles": [
        "1st of Elul, 5790",
        "Rosh Hashana LaBehemot"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2030-08-31"
    },
    "2030-08-31": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אלול",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "weekend": true,
      "next": "2030-09-01"
    },
    "2030-09-01": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אלול",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-09-02"
    },
    "2030-09-02": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אלול",
        "d": "ד׳"
      },
      "titles": [
        "4th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-09-03"
    },
    "2030-09-03": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אלול",
        "d": "ה׳"
      },
      "titles": [
        "5th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-09-04"
    },
    "2030-09-04": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אלול",
        "d": "ו׳"
      },
      "titles": [
        "6th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-09-05"
    },
    "2030-09-05": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אלול",
        "d": "ז׳"
      },
      "titles": [
        "7th of Elul"
      ],
      "recess_name": "pagrat kaitz",
      "next": "2030-09-06"
    },
    "2030-09-06": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אלול",
        "d": "ח׳"
      },
      "titles": [
        "8th of Elul"
      ],
      "weekend": true,
      "next": "2030-09-07"
    },
    "2030-09-07": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אלול",
        "d": "ט׳"
      },
      "titles": [
        "9th of Elul"
      ],
      "weekend": true,
      "next": "2030-09-08"
    },
    "2030-09-08": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אלול",
        "d": "י׳"
      },
      "titles": [
        "10th of Elul"
      ],
      "next": "2030-09-09"
    },
    "2030-09-09": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אלול",
        "d": "י״א"
      },
      "titles": [
        "11th of Elul"
      ],
      "next": "2030-09-10"
    },
    "2030-09-10": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אלול",
        "d": "י״ב"
      },
      "titles": [
        "12th of Elul"
      ],
      "next": "2030-09-11"
    },
    "2030-09-11": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אלול",
        "d": "י״ג"
      },
      "titles": [
        "13th of Elul"
      ],
      "next": "2030-09-12"
    },
    "2030-09-12": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אלול",
        "d": "י״ד"
      },
      "titles": [
        "14th of Elul"
      ],
      "next": "2030-09-13"
    },
    "2030-09-13": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אלול",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Elul"
      ],
      "weekend": true,
      "next": "2030-09-14"
    },
    "2030-09-14": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אלול",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Elul"
      ],
      "weekend": true,
      "next": "2030-09-15"
    },
    "2030-09-15": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אלול",
        "d": "י״ז"
      },
      "titles": [
        "17th of Elul"
      ],
      "next": "2030-09-16"
    },
    "2030-09-16": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אלול",
        "d": "י״ח"
      },
      "titles": [
        "18th of Elul"
      ],
      "next": "2030-09-17"
    },
    "2030-09-17": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אלול",
        "d": "י״ט"
      },
      "titles": [
        "19th of Elul"
      ],
      "next": "2030-09-18"
    },
    "2030-09-18": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אלול",
        "d": "כ׳"
      },
      "titles": [
        "20th of Elul"
      ],
      "next": "2030-09-19"
    },
    "2030-09-19": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אלול",
        "d": "כ״א"
      },
      "titles": [
        "21st of Elul"
      ],
      "next": "2030-09-20"
    },
    "2030-09-20": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אלול",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Elul"
      ],
      "weekend": true,
      "next": "2030-09-21"
    },
    "2030-09-21": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אלול",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Elul",
        "Leil Selichot"
      ],
      "weekend": true,
      "next": "2030-09-22"
    },
    "2030-09-22": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אלול",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Elul"
      ],
      "next": "2030-09-23"
    },
    "2030-09-23": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אלול",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Elul"
      ],
      "next": "2030-09-24"
    },
    "2030-09-24": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אלול",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Elul"
      ],
      "next": "2030-09-25"
    },
    "2030-09-25": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אלול",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Elul"
      ],
      "next": "2030-09-26"
    },
    "2030-09-26": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אלול",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Elul"
      ],
      "next": "2030-09-27"
    },
    "2030-09-27": {
      "heDateParts": {
        "y": "תש״צ",
        "m": "אלול",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Elul",
        "Erev Rosh Hashana"
      ],
      "weekend": true,
      "next": "2030-09-28"
    },
    "2030-09-28": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "תשרי",
        "d": "א׳"
      },
      "titles": [
        "1st of Tishrei, 5791",
        "Rosh Hashana 5791"
      ],
      "shabaton_name": "rosh hashana",
      "weekend": true,
      "next": "2030-09-29"
    },
    "2030-09-29": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "תשרי",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Tishrei",
        "Rosh Hashana II"
      ],
      "shabaton_name": "rosh hashana",
      "next": "2030-09-30"
    },
    "2030-09-30": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "תשרי",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Tishrei"
      ],
      "next": "2030-10-01"
    },
    "2030-10-01": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "תשרי",
        "d": "ד׳"
      },
      "titles": [
        "4th of Tishrei"
      ],
      "next": "2030-10-02"
    },
    "2030-10-02": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "תשרי",
        "d": "ה׳"
      },
      "titles": [
        "5th of Tishrei"
      ],
      "next": "2030-10-03"
    },
    "2030-10-03": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "תשרי",
        "d": "ו׳"
      },
      "titles": [
        "6th of Tishrei"
      ],
      "next": "2030-10-04"
    },
    "2030-10-04": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "תשרי",
        "d": "ז׳"
      },
      "titles": [
        "7th of Tishrei"
      ],
      "weekend": true,
      "next": "2030-10-05"
    },
    "2030-10-05": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "תשרי",
        "d": "ח׳"
      },
      "titles": [
        "8th of Tishrei"
      ],
      "weekend": true,
      "next": "2030-10-06"
    },
    "2030-10-06": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "תשרי",
        "d": "ט׳"
      },
      "titles": [
        "9th of Tishrei",
        "Erev Yom Kippur"
      ],
      "next": "2030-10-07"
    },
    "2030-10-07": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "תשרי",
        "d": "י׳"
      },
      "titles": [
        "10th of Tishrei",
        "Yom Kippur"
      ],
      "shabaton_name": "yom kipur",
      "next": "2030-10-08"
    },
    "2030-10-08": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "תשרי",
        "d": "י״א"
      },
      "titles": [
        "11th of Tishrei"
      ],
      "next": "2030-10-09"
    },
    "2030-10-09": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "תשרי",
        "d": "י״ב"
      },
      "titles": [
        "12th of Tishrei"
      ],
      "next": "2030-10-10"
    },
    "2030-10-10": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "תשרי",
        "d": "י״ג"
      },
      "titles": [
        "13th of Tishrei"
      ],
      "next": "2030-10-11"
    },
    "2030-10-11": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "תשרי",
        "d": "י״ד"
      },
      "titles": [
        "14th of Tishrei",
        "Erev Sukkot"
      ],
      "recess_name": "pagrat sukot",
      "weekend": true,
      "next": "2030-10-12"
    },
    "2030-10-12": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "תשרי",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Tishrei",
        "Sukkot I"
      ],
      "recess_name": "pagrat sukot",
      "weekend": true,
      "next": "2030-10-13"
    },
    "2030-10-13": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "תשרי",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Tishrei",
        "Sukkot II (CH’’M)"
      ],
      "recess_name": "pagrat sukot",
      "next": "2030-10-14"
    },
    "2030-10-14": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "תשרי",
        "d": "י״ז"
      },
      "titles": [
        "17th of Tishrei",
        "Sukkot III (CH’’M)"
      ],
      "recess_name": "pagrat sukot",
      "next": "2030-10-15"
    },
    "2030-10-15": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "תשרי",
        "d": "י״ח"
      },
      "titles": [
        "18th of Tishrei",
        "Sukkot IV (CH’’M)"
      ],
      "recess_name": "pagrat sukot",
      "next": "2030-10-16"
    },
    "2030-10-16": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "תשרי",
        "d": "י״ט"
      },
      "titles": [
        "19th of Tishrei",
        "Sukkot V (CH’’M)"
      ],
      "recess_name": "pagrat sukot",
      "next": "2030-10-17"
    },
    "2030-10-17": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "תשרי",
        "d": "כ׳"
      },
      "titles": [
        "20th of Tishrei",
        "Sukkot VI (CH’’M)"
      ],
      "recess_name": "pagrat sukot",
      "next": "2030-10-18"
    },
    "2030-10-18": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "תשרי",
        "d": "כ״א"
      },
      "titles": [
        "21st of Tishrei",
        "Sukkot VII (Hoshana Raba)"
      ],
      "recess_name": "pagrat sukot",
      "weekend": true,
      "next": "2030-10-19"
    },
    "2030-10-19": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "תשרי",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Tishrei",
        "Shmini Atzeret"
      ],
      "recess_name": "pagrat sukot",
      "weekend": true,
      "next": "2030-10-20"
    },
    "2030-10-20": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "תשרי",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Tishrei"
      ],
      "next": "2030-10-21"
    },
    "2030-10-21": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "תשרי",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Tishrei"
      ],
      "next": "2030-10-22"
    },
    "2030-10-22": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "תשרי",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Tishrei"
      ],
      "next": "2030-10-23"
    },
    "2030-10-23": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "תשרי",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Tishrei"
      ],
      "next": "2030-10-24"
    },
    "2030-10-24": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "תשרי",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Tishrei"
      ],
      "next": "2030-10-25"
    },
    "2030-10-25": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "תשרי",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Tishrei"
      ],
      "weekend": true,
      "next": "2030-10-26"
    },
    "2030-10-26": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "תשרי",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Tishrei"
      ],
      "weekend": true,
      "next": "2030-10-27"
    },
    "2030-10-27": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "תשרי",
        "d": "ל׳"
      },
      "titles": [
        "30th of Tishrei"
      ],
      "next": "2030-10-28"
    },
    "2030-10-28": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "חשון",
        "d": "א׳"
      },
      "titles": [
        "1st of Cheshvan, 5791"
      ],
      "next": "2030-10-29"
    },
    "2030-10-29": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "חשון",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Cheshvan"
      ],
      "next": "2030-10-30"
    },
    "2030-10-30": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "חשון",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Cheshvan"
      ],
      "next": "2030-10-31"
    },
    "2030-10-31": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "חשון",
        "d": "ד׳"
      },
      "titles": [
        "4th of Cheshvan"
      ],
      "next": "2030-11-01"
    },
    "2030-11-01": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "חשון",
        "d": "ה׳"
      },
      "titles": [
        "5th of Cheshvan"
      ],
      "weekend": true,
      "next": "2030-11-02"
    },
    "2030-11-02": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "חשון",
        "d": "ו׳"
      },
      "titles": [
        "6th of Cheshvan"
      ],
      "weekend": true,
      "next": "2030-11-03"
    },
    "2030-11-03": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "חשון",
        "d": "ז׳"
      },
      "titles": [
        "7th of Cheshvan"
      ],
      "next": "2030-11-04"
    },
    "2030-11-04": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "חשון",
        "d": "ח׳"
      },
      "titles": [
        "8th of Cheshvan"
      ],
      "next": "2030-11-05"
    },
    "2030-11-05": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "חשון",
        "d": "ט׳"
      },
      "titles": [
        "9th of Cheshvan"
      ],
      "next": "2030-11-06"
    },
    "2030-11-06": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "חשון",
        "d": "י׳"
      },
      "titles": [
        "10th of Cheshvan"
      ],
      "next": "2030-11-07"
    },
    "2030-11-07": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "חשון",
        "d": "י״א"
      },
      "titles": [
        "11th of Cheshvan"
      ],
      "next": "2030-11-08"
    },
    "2030-11-08": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "חשון",
        "d": "י״ב"
      },
      "titles": [
        "12th of Cheshvan"
      ],
      "weekend": true,
      "next": "2030-11-09"
    },
    "2030-11-09": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "חשון",
        "d": "י״ג"
      },
      "titles": [
        "13th of Cheshvan"
      ],
      "weekend": true,
      "next": "2030-11-10"
    },
    "2030-11-10": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "חשון",
        "d": "י״ד"
      },
      "titles": [
        "14th of Cheshvan"
      ],
      "next": "2030-11-11"
    },
    "2030-11-11": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "חשון",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Cheshvan"
      ],
      "next": "2030-11-12"
    },
    "2030-11-12": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "חשון",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Cheshvan"
      ],
      "next": "2030-11-13"
    },
    "2030-11-13": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "חשון",
        "d": "י״ז"
      },
      "titles": [
        "17th of Cheshvan"
      ],
      "next": "2030-11-14"
    },
    "2030-11-14": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "חשון",
        "d": "י״ח"
      },
      "titles": [
        "18th of Cheshvan"
      ],
      "next": "2030-11-15"
    },
    "2030-11-15": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "חשון",
        "d": "י״ט"
      },
      "titles": [
        "19th of Cheshvan"
      ],
      "weekend": true,
      "next": "2030-11-16"
    },
    "2030-11-16": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "חשון",
        "d": "כ׳"
      },
      "titles": [
        "20th of Cheshvan"
      ],
      "weekend": true,
      "next": "2030-11-17"
    },
    "2030-11-17": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "חשון",
        "d": "כ״א"
      },
      "titles": [
        "21st of Cheshvan"
      ],
      "next": "2030-11-18"
    },
    "2030-11-18": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "חשון",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Cheshvan"
      ],
      "next": "2030-11-19"
    },
    "2030-11-19": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "חשון",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Cheshvan"
      ],
      "next": "2030-11-20"
    },
    "2030-11-20": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "חשון",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Cheshvan"
      ],
      "next": "2030-11-21"
    },
    "2030-11-21": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "חשון",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Cheshvan"
      ],
      "next": "2030-11-22"
    },
    "2030-11-22": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "חשון",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Cheshvan"
      ],
      "weekend": true,
      "next": "2030-11-23"
    },
    "2030-11-23": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "חשון",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Cheshvan"
      ],
      "weekend": true,
      "next": "2030-11-24"
    },
    "2030-11-24": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "חשון",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Cheshvan"
      ],
      "next": "2030-11-25"
    },
    "2030-11-25": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "חשון",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Cheshvan"
      ],
      "next": "2030-11-26"
    },
    "2030-11-26": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "חשון",
        "d": "ל׳"
      },
      "titles": [
        "30th of Cheshvan"
      ],
      "next": "2030-11-27"
    },
    "2030-11-27": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "כסלו",
        "d": "א׳"
      },
      "titles": [
        "1st of Kislev, 5791"
      ],
      "next": "2030-11-28"
    },
    "2030-11-28": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "כסלו",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Kislev"
      ],
      "next": "2030-11-29"
    },
    "2030-11-29": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "כסלו",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Kislev"
      ],
      "weekend": true,
      "next": "2030-11-30"
    },
    "2030-11-30": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "כסלו",
        "d": "ד׳"
      },
      "titles": [
        "4th of Kislev"
      ],
      "weekend": true,
      "next": "2030-12-01"
    },
    "2030-12-01": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "כסלו",
        "d": "ה׳"
      },
      "titles": [
        "5th of Kislev"
      ],
      "next": "2030-12-02"
    },
    "2030-12-02": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "כסלו",
        "d": "ו׳"
      },
      "titles": [
        "6th of Kislev"
      ],
      "next": "2030-12-03"
    },
    "2030-12-03": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "כסלו",
        "d": "ז׳"
      },
      "titles": [
        "7th of Kislev"
      ],
      "next": "2030-12-04"
    },
    "2030-12-04": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "כסלו",
        "d": "ח׳"
      },
      "titles": [
        "8th of Kislev"
      ],
      "next": "2030-12-05"
    },
    "2030-12-05": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "כסלו",
        "d": "ט׳"
      },
      "titles": [
        "9th of Kislev"
      ],
      "next": "2030-12-06"
    },
    "2030-12-06": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "כסלו",
        "d": "י׳"
      },
      "titles": [
        "10th of Kislev"
      ],
      "weekend": true,
      "next": "2030-12-07"
    },
    "2030-12-07": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "כסלו",
        "d": "י״א"
      },
      "titles": [
        "11th of Kislev"
      ],
      "weekend": true,
      "next": "2030-12-08"
    },
    "2030-12-08": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "כסלו",
        "d": "י״ב"
      },
      "titles": [
        "12th of Kislev"
      ],
      "next": "2030-12-09"
    },
    "2030-12-09": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "כסלו",
        "d": "י״ג"
      },
      "titles": [
        "13th of Kislev"
      ],
      "next": "2030-12-10"
    },
    "2030-12-10": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "כסלו",
        "d": "י״ד"
      },
      "titles": [
        "14th of Kislev"
      ],
      "next": "2030-12-11"
    },
    "2030-12-11": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "כסלו",
        "d": "ט״ו"
      },
      "titles": [
        "15th of Kislev"
      ],
      "next": "2030-12-12"
    },
    "2030-12-12": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "כסלו",
        "d": "ט״ז"
      },
      "titles": [
        "16th of Kislev"
      ],
      "next": "2030-12-13"
    },
    "2030-12-13": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "כסלו",
        "d": "י״ז"
      },
      "titles": [
        "17th of Kislev"
      ],
      "weekend": true,
      "next": "2030-12-14"
    },
    "2030-12-14": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "כסלו",
        "d": "י״ח"
      },
      "titles": [
        "18th of Kislev"
      ],
      "weekend": true,
      "next": "2030-12-15"
    },
    "2030-12-15": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "כסלו",
        "d": "י״ט"
      },
      "titles": [
        "19th of Kislev"
      ],
      "next": "2030-12-16"
    },
    "2030-12-16": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "כסלו",
        "d": "כ׳"
      },
      "titles": [
        "20th of Kislev"
      ],
      "next": "2030-12-17"
    },
    "2030-12-17": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "כסלו",
        "d": "כ״א"
      },
      "titles": [
        "21st of Kislev"
      ],
      "next": "2030-12-18"
    },
    "2030-12-18": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "כסלו",
        "d": "כ״ב"
      },
      "titles": [
        "22nd of Kislev"
      ],
      "next": "2030-12-19"
    },
    "2030-12-19": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "כסלו",
        "d": "כ״ג"
      },
      "titles": [
        "23rd of Kislev"
      ],
      "next": "2030-12-20"
    },
    "2030-12-20": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "כסלו",
        "d": "כ״ד"
      },
      "titles": [
        "24th of Kislev",
        "Chanukah: 1 Candle"
      ],
      "weekend": true,
      "next": "2030-12-21"
    },
    "2030-12-21": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "כסלו",
        "d": "כ״ה"
      },
      "titles": [
        "25th of Kislev",
        "Chanukah: 2 Candles"
      ],
      "weekend": true,
      "next": "2030-12-22"
    },
    "2030-12-22": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "כסלו",
        "d": "כ״ו"
      },
      "titles": [
        "26th of Kislev",
        "Chanukah: 3 Candles"
      ],
      "next": "2030-12-23"
    },
    "2030-12-23": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "כסלו",
        "d": "כ״ז"
      },
      "titles": [
        "27th of Kislev",
        "Chanukah: 4 Candles"
      ],
      "next": "2030-12-24"
    },
    "2030-12-24": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "כסלו",
        "d": "כ״ח"
      },
      "titles": [
        "28th of Kislev",
        "Chanukah: 5 Candles"
      ],
      "next": "2030-12-25"
    },
    "2030-12-25": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "כסלו",
        "d": "כ״ט"
      },
      "titles": [
        "29th of Kislev",
        "Chanukah: 6 Candles"
      ],
      "next": "2030-12-26"
    },
    "2030-12-26": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "כסלו",
        "d": "ל׳"
      },
      "titles": [
        "30th of Kislev",
        "Chag HaBanot",
        "Chanukah: 7 Candles"
      ],
      "next": "2030-12-27"
    },
    "2030-12-27": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "טבת",
        "d": "א׳"
      },
      "titles": [
        "1st of Tevet, 5791",
        "Chanukah: 8 Candles"
      ],
      "weekend": true,
      "next": "2030-12-28"
    },
    "2030-12-28": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "טבת",
        "d": "ב׳"
      },
      "titles": [
        "2nd of Tevet",
        "Chanukah: 8th Day"
      ],
      "weekend": true,
      "next": "2030-12-29"
    },
    "2030-12-29": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "טבת",
        "d": "ג׳"
      },
      "titles": [
        "3rd of Tevet"
      ],
      "next": "2030-12-30"
    },
    "2030-12-30": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "טבת",
        "d": "ד׳"
      },
      "titles": [
        "4th of Tevet"
      ],
      "next": "2030-12-31"
    },
    "2030-12-31": {
      "heDateParts": {
        "y": "תשצ״א",
        "m": "טבת",
        "d": "ה׳"
      },
      "titles": [
        "5th of Tevet"
      ]
    }
  }
};
