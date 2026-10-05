// ==========================================
// SUPABASE
// ==========================================

const SUPABASE_URL = "https://yieuzinerctdldxrdivq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =  "sb_publishable__1wbJQPS4FgSpqk3cL5X7w_ZndM5UWZ";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
// ============================================================
// MATHE LERNWELT
// KLASSE 5 – 300 FRAGEN
// Deutsch / English / Pashto
// ============================================================


// ------------------------------------------------------------
// FRAGEN-DATEN
// ------------------------------------------------------------

const fragenKlasse5 = {

    // ========================================================
    // THEMA 1 – NATÜRLICHE ZAHLEN
    // ========================================================

    0: [

        {
            frage: {
                de: "Welche Zahl kommt nach 99?",
                en: "Which number comes after 99?",
                ps: "له ۹۹ څخه وروسته کومه شمېره راځي؟"
            },
            antworten: [
                {de:"100", en:"100", ps:"۱۰۰"},
                {de:"98", en:"98", ps:"۹۸"},
                {de:"101", en:"101", ps:"۱۰۱"},
                {de:"90", en:"90", ps:"۹۰"}
            ],
            richtig: 0,
            erklaerung: {
                de: "Nach 99 kommt 100.",
                en: "100 comes after 99.",
                ps: "له ۹۹ څخه وروسته ۱۰۰ راځي."
            }
        },

        {
            frage: {
                de: "Welche Zahl ist größer: 45 oder 54?",
                en: "Which number is greater: 45 or 54?",
                ps: "کومه شمېره لویه ده: ۴۵ که ۵۴؟"
            },
            antworten: [
                {de:"45", en:"45", ps:"۴۵"},
                {de:"54", en:"54", ps:"۵۴"},
                {de:"40", en:"40", ps:"۴۰"},
                {de:"35", en:"35", ps:"۳۵"}
            ],
            richtig: 1,
            erklaerung: {
                de: "54 ist größer als 45.",
                en: "54 is greater than 45.",
                ps: "۵۴ له ۴۵ څخه لوی دی."
            }
        },

        {
            frage: {
                de: "Welche Zahl ist kleiner als 30?",
                en: "Which number is smaller than 30?",
                ps: "کومه شمېره له ۳۰ څخه کوچنۍ ده؟"
            },
            antworten: [
                {de:"35", en:"35", ps:"۳۵"},
                {de:"42", en:"42", ps:"۴۲"},
                {de:"27", en:"27", ps:"۲۷"},
                {de:"31", en:"31", ps:"۳۱"}
            ],
            richtig: 2,
            erklaerung: {
                de: "27 ist kleiner als 30.",
                en: "27 is smaller than 30.",
                ps: "۲۷ له ۳۰ څخه کوچنی دی."
            }
        },

        {
            frage: {
                de: "Wie viele Zehner hat 70?",
                en: "How many tens are in 70?",
                ps: "په ۷۰ کې څو لسګونې دي؟"
            },
            antworten: [
                {de:"5", en:"5", ps:"۵"},
                {de:"6", en:"6", ps:"۶"},
                {de:"7", en:"7", ps:"۷"},
                {de:"8", en:"8", ps:"۸"}
            ],
            richtig: 2,
            erklaerung: {
                de: "70 besteht aus 7 Zehnern.",
                en: "70 consists of 7 tens.",
                ps: "۷۰ له ۷ لسګونو څخه جوړ دی."
            }
        },

        {
            frage: {
                de: "Welche Zahl ist gerade?",
                en: "Which number is even?",
                ps: "کومه شمېره جوړه ده؟"
            },
            antworten: [
                {de:"13", en:"13", ps:"۱۳"},
                {de:"17", en:"17", ps:"۱۷"},
                {de:"21", en:"21", ps:"۲۱"},
                {de:"24", en:"24", ps:"۲۴"}
            ],
            richtig: 3,
            erklaerung: {
                de: "24 ist gerade, weil 24 durch 2 teilbar ist.",
                en: "24 is even because it is divisible by 2.",
                ps: "۲۴ جوړه ده، ځکه چې پر ۲ وېشل کېږي."
            }
        },

        {
            frage: {
                de: "Welche Zahl ist ungerade?",
                en: "Which number is odd?",
                ps: "کومه شمېره طاقه ده؟"
            },
            antworten: [
                {de:"12", en:"12", ps:"۱۲"},
                {de:"18", en:"18", ps:"۱۸"},
                {de:"21", en:"21", ps:"۲۱"},
                {de:"30", en:"30", ps:"۳۰"}
            ],
            richtig: 2,
            erklaerung: {
                de: "21 ist ungerade.",
                en: "21 is odd.",
                ps: "۲۱ طاقه شمېره ده."
            }
        },

        {
            frage: {
                de: "Wie lautet die kleinste natürliche Zahl?",
                en: "What is the smallest natural number?",
                ps: "تر ټولو کوچنۍ طبیعي شمېره کومه ده؟"
            },
            antworten: [
                {de:"0", en:"0", ps:"۰"},
                {de:"1", en:"1", ps:"۱"},
                {de:"2", en:"2", ps:"۲"},
                {de:"10", en:"10", ps:"۱۰"}
            ],
            richtig: 0,
            erklaerung: {
                de: "In diesem Lernsystem beginnen die natürlichen Zahlen bei 0.",
                en: "In this learning system, natural numbers start at 0.",
                ps: "په دې سیستم کې طبیعي شمېرې له ۰ څخه پیلېږي."
            }
        },

        {
            frage: {
                de: "Welche Zahl liegt zwischen 49 und 51?",
                en: "Which number is between 49 and 51?",
                ps: "د ۴۹ او ۵۱ ترمنځ کومه شمېره ده؟"
            },
            antworten: [
                {de:"48", en:"48", ps:"۴۸"},
                {de:"50", en:"50", ps:"۵۰"},
                {de:"52", en:"52", ps:"۵۲"},
                {de:"60", en:"60", ps:"۶۰"}
            ],
            richtig: 1,
            erklaerung: {
                de: "50 liegt zwischen 49 und 51.",
                en: "50 is between 49 and 51.",
                ps: "۵۰ د ۴۹ او ۵۱ ترمنځ دی."
            }
        },

        {
            frage: {
                de: "Welche Zahl ist größer als 100?",
                en: "Which number is greater than 100?",
                ps: "کومه شمېره له ۱۰۰ څخه لویه ده؟"
            },
            antworten: [
                {de:"89", en:"89", ps:"۸۹"},
                {de:"99", en:"99", ps:"۹۹"},
                {de:"100", en:"100", ps:"۱۰۰"},
                {de:"105", en:"105", ps:"۱۰۵"}
            ],
            richtig: 3,
            erklaerung: {
                de: "105 ist größer als 100.",
                en: "105 is greater than 100.",
                ps: "۱۰۵ له ۱۰۰ څخه لوی دی."
            }
        },

        {
            frage: {
                de: "Wie viele Einer hat die Zahl 348?",
                en: "How many ones does 348 have?",
                ps: "په ۳۴۸ کې څو یوګانې دي؟"
            },
            antworten: [
                {de:"3", en:"3", ps:"۳"},
                {de:"4", en:"4", ps:"۴"},
                {de:"8", en:"8", ps:"۸"},
                {de:"34", en:"34", ps:"۳۴"}
            ],
            richtig: 2,
            erklaerung: {
                de: "Die Einerstelle von 348 ist 8.",
                en: "The ones digit of 348 is 8.",
                ps: "د ۳۴۸ د یوګانو ځای ۸ دی."
            }
        },

        {
            frage: {
                de: "Wie viele Hunderter hat 700?",
                en: "How many hundreds are in 700?",
                ps: "په ۷۰۰ کې څو سلګونې دي؟"
            },
            antworten: [
                {de:"5", en:"5", ps:"۵"},
                {de:"6", en:"6", ps:"۶"},
                {de:"7", en:"7", ps:"۷"},
                {de:"8", en:"8", ps:"۸"}
            ],
            richtig: 2,
            erklaerung: {
                de: "700 besteht aus 7 Hundertern.",
                en: "700 consists of 7 hundreds.",
                ps: "۷۰۰ له ۷ سلګونو څخه جوړ دی."
            }
        },

        {
            frage: {
                de: "Welche Zahl kommt direkt vor 1000?",
                en: "Which number comes directly before 1000?",
                ps: "له ۱۰۰۰ څخه سمدستي مخکې کومه شمېره راځي؟"
            },
            antworten: [
                {de:"998", en:"998", ps:"۹۹۸"},
                {de:"999", en:"999", ps:"۹۹۹"},
                {de:"1001", en:"1001", ps:"۱۰۰۱"},
                {de:"990", en:"990", ps:"۹۹۰"}
            ],
            richtig: 1,
            erklaerung: {
                de: "Direkt vor 1000 steht 999.",
                en: "999 comes directly before 1000.",
                ps: "له ۱۰۰۰ څخه مخکې ۹۹۹ راځي."
            }
        },

        {
            frage: {
                de: "Welche Zahl ist ein Vielfaches von 5?",
                en: "Which number is a multiple of 5?",
                ps: "کومه شمېره د ۵ مضرب ده؟"
            },
            antworten: [
                {de:"12", en:"12", ps:"۱۲"},
                {de:"17", en:"17", ps:"۱۷"},
                {de:"25", en:"25", ps:"۲۵"},
                {de:"31", en:"31", ps:"۳۱"}
            ],
            richtig: 2,
            erklaerung: {
                de: "25 ist durch 5 teilbar.",
                en: "25 is divisible by 5.",
                ps: "۲۵ پر ۵ وېشل کېږي."
            }
        },

        {
            frage: {
                de: "Welche Zahl ist ein Vielfaches von 10?",
                en: "Which number is a multiple of 10?",
                ps: "کومه شمېره د ۱۰ مضرب ده؟"
            },
            antworten: [
                {de:"23", en:"23", ps:"۲۳"},
                {de:"40", en:"40", ps:"۴۰"},
                {de:"47", en:"47", ps:"۴۷"},
                {de:"53", en:"53", ps:"۵۳"}
            ],
            richtig: 1,
            erklaerung: {
                de: "40 ist ein Vielfaches von 10.",
                en: "40 is a multiple of 10.",
                ps: "۴۰ د ۱۰ مضرب دی."
            }
        },

        {
            frage: {
                de: "Welche Zahl ist die größte?",
                en: "Which number is the greatest?",
                ps: "کومه شمېره تر ټولو لویه ده؟"
            },
            antworten: [
                {de:"234", en:"234", ps:"۲۳۴"},
                {de:"324", en:"324", ps:"۳۲۴"},
                {de:"243", en:"243", ps:"۲۴۳"},
                {de:"342", en:"342", ps:"۳۴۲"}
            ],
            richtig: 3,
            erklaerung: {
                de: "342 ist die größte Zahl.",
                en: "342 is the greatest number.",
                ps: "۳۴۲ تر ټولو لویه شمېره ده."
            }
        },

        {
            frage: {
                de: "Welche Zahl ist die kleinste?",
                en: "Which number is the smallest?",
                ps: "کومه شمېره تر ټولو کوچنۍ ده؟"
            },
            antworten: [
                {de:"87", en:"87", ps:"۸۷"},
                {de:"78", en:"78", ps:"۷۸"},
                {de:"97", en:"97", ps:"۹۷"},
                {de:"89", en:"89", ps:"۸۹"}
            ],
            richtig: 1,
            erklaerung: {
                de: "78 ist die kleinste Zahl.",
                en: "78 is the smallest number.",
                ps: "۷۸ تر ټولو کوچنۍ شمېره ده."
            }
        },

        {
            frage: {
                de: "Wie lautet die Zahl 300 + 40 + 7?",
                en: "What is 300 + 40 + 7?",
                ps: "۳۰۰ + ۴۰ + ۷ څو کېږي؟"
            },
            antworten: [
                {de:"347", en:"347", ps:"۳۴۷"},
                {de:"374", en:"374", ps:"۳۷۴"},
                {de:"437", en:"437", ps:"۴۳۷"},
                {de:"307", en:"307", ps:"۳۰۷"}
            ],
            richtig: 0,
            erklaerung: {
                de: "300 + 40 + 7 = 347.",
                en: "300 + 40 + 7 = 347.",
                ps: "۳۰۰ + ۴۰ + ۷ = ۳۴۷."
            }
        },

        {
            frage: {
                de: "Welche Zahl ist 100 größer als 250?",
                en: "Which number is 100 greater than 250?",
                ps: "له ۲۵۰ څخه ۱۰۰ زیاته شمېره کومه ده؟"
            },
            antworten: [
                {de:"300", en:"300", ps:"۳۰۰"},
                {de:"350", en:"350", ps:"۳۵۰"},
                {de:"400", en:"400", ps:"۴۰۰"},
                {de:"150", en:"150", ps:"۱۵۰"}
            ],
            richtig: 1,
            erklaerung: {
                de: "250 + 100 = 350.",
                en: "250 + 100 = 350.",
                ps: "۲۵۰ + ۱۰۰ = ۳۵۰."
            }
        },

        {
            frage: {
                de: "Welche Zahl ist 10 kleiner als 80?",
                en: "Which number is 10 less than 80?",
                ps: "له ۸۰ څخه ۱۰ کمه شمېره کومه ده؟"
            },
            antworten: [
                {de:"60", en:"60", ps:"۶۰"},
                {de:"65", en:"65", ps:"۶۵"},
                {de:"70", en:"70", ps:"۷۰"},
                {de:"75", en:"75", ps:"۷۵"}
            ],
            richtig: 2,
            erklaerung: {
                de: "80 - 10 = 70.",
                en: "80 - 10 = 70.",
                ps: "۸۰ - ۱۰ = ۷۰."
            }
        },

        {
            frage: {
                de: "Welche Zahl folgt auf 499?",
                en: "Which number follows 499?",
                ps: "له ۴۹۹ څخه وروسته کومه شمېره راځي؟"
            },
            antworten: [
                {de:"498", en:"498", ps:"۴۹۸"},
                {de:"500", en:"500", ps:"۵۰۰"},
                {de:"501", en:"501", ps:"۵۰۱"},
                {de:"490", en:"490", ps:"۴۹۰"}
            ],
            richtig: 1,
            erklaerung: {
                de: "Auf 499 folgt 500.",
                en: "500 follows 499.",
                ps: "له ۴۹۹ وروسته ۵۰۰ راځي."
            }
        },

        {
            frage: {
                de: "Welche Zahl liegt zwischen 199 und 201?",
                en: "Which number is between 199 and 201?",
                ps: "د ۱۹۹ او ۲۰۱ ترمنځ کومه شمېره ده؟"
            },
            antworten: [
                {de:"198", en:"198", ps:"۱۹۸"},
                {de:"200", en:"200", ps:"۲۰۰"},
                {de:"202", en:"202", ps:"۲۰۲"},
                {de:"210", en:"210", ps:"۲۱۰"}
            ],
            richtig: 1,
            erklaerung: {
                de: "200 liegt zwischen 199 und 201.",
                en: "200 is between 199 and 201.",
                ps: "۲۰۰ د ۱۹۹ او ۲۰۱ ترمنځ دی."
            }
        },

        {
            frage: {
                de: "Wie viele Einer hat 572?",
                en: "How many ones does 572 have?",
                ps: "په ۵۷۲ کې څو یوګانې دي؟"
            },
            antworten: [
                {de:"2", en:"2", ps:"۲"},
                {de:"5", en:"5", ps:"۵"},
                {de:"7", en:"7", ps:"۷"},
                {de:"72", en:"72", ps:"۷۲"}
            ],
            richtig: 0,
            erklaerung: {
                de: "Die Einerstelle ist 2.",
                en: "The ones digit is 2.",
                ps: "د یوګانو ځای ۲ دی."
            }
        },

        {
            frage: {
                de: "Wie viele Zehner hat 430?",
                en: "How many tens are in 430?",
                ps: "په ۴۳۰ کې څو لسګونې دي؟"
            },
            antworten: [
                {de:"3", en:"3", ps:"۳"},
                {de:"4", en:"4", ps:"۴"},
                {de:"30", en:"30", ps:"۳۰"},
                {de:"43", en:"43", ps:"۴۳"}
            ],
            richtig: 2,
            erklaerung: {
                de: "430 enthält 3 Zehner an der Zehnerstelle.",
                en: "430 has 3 tens in the tens place.",
                ps: "۴۳۰ د لسګونو په ځای کې ۳ لري."
            }
        },

        {
            frage: {
                de: "Welche Zahl ist durch 2 teilbar?",
                en: "Which number is divisible by 2?",
                ps: "کومه شمېره پر ۲ وېشل کېږي؟"
            },
            antworten: [
                {de:"15", en:"15", ps:"۱۵"},
                {de:"19", en:"19", ps:"۱۹"},
                {de:"22", en:"22", ps:"۲۲"},
                {de:"27", en:"27", ps:"۲۷"}
            ],
            richtig: 2,
            erklaerung: {
                de: "22 ist durch 2 teilbar.",
                en: "22 is divisible by 2.",
                ps: "۲۲ پر ۲ وېشل کېږي."
            }
        },

        {
            frage: {
                de: "Welche Zahl ist ein Vielfaches von 3?",
                en: "Which number is a multiple of 3?",
                ps: "کومه شمېره د ۳ مضرب ده؟"
            },
            antworten: [
                {de:"10", en:"10", ps:"۱۰"},
                {de:"14", en:"14", ps:"۱۴"},
                {de:"18", en:"18", ps:"۱۸"},
                {de:"20", en:"20", ps:"۲۰"}
            ],
            richtig: 2,
            erklaerung: {
                de: "18 = 3 · 6.",
                en: "18 = 3 · 6.",
                ps: "۱۸ = ۳ · ۶."
            }
        },

        {
            frage: {
                de: "Welche Zahl ist zwischen 600 und 700?",
                en: "Which number is between 600 and 700?",
                ps: "کومه شمېره د ۶۰۰ او ۷۰۰ ترمنځ ده؟"
            },
            antworten: [
                {de:"590", en:"590", ps:"۵۹۰"},
                {de:"650", en:"650", ps:"۶۵۰"},
                {de:"710", en:"710", ps:"۷۱۰"},
                {de:"800", en:"800", ps:"۸۰۰"}
            ],
            richtig: 1,
            erklaerung: {
                de: "650 liegt zwischen 600 und 700.",
                en: "650 is between 600 and 700.",
                ps: "۶۵۰ د ۶۰۰ او ۷۰۰ ترمنځ دی."
            }
        },

        {
            frage: {
                de: "Welche Zahl hat 6 Hunderter, 3 Zehner und 2 Einer?",
                en: "Which number has 6 hundreds, 3 tens and 2 ones?",
                ps: "کومه شمېره ۶ سلګونې، ۳ لسګونې او ۲ یوګانې لري؟"
            },
            antworten: [
                {de:"623", en:"623", ps:"۶۲۳"},
                {de:"632", en:"632", ps:"۶۳۲"},
                {de:"362", en:"362", ps:"۳۶۲"},
                {de:"236", en:"236", ps:"۲۳۶"}
            ],
            richtig: 1,
            erklaerung: {
                de: "6 Hunderter + 3 Zehner + 2 Einer = 632.",
                en: "6 hundreds + 3 tens + 2 ones = 632.",
                ps: "۶ سلګونې + ۳ لسګونې + ۲ یوګانې = ۶۳۲."
            }
        },

        {
            frage: {
                de: "Welche Zahl ist die Hälfte von 20?",
                en: "What is half of 20?",
                ps: "د ۲۰ نیمایي څو ده؟"
            },
            antworten: [
                {de:"5", en:"5", ps:"۵"},
                {de:"10", en:"10", ps:"۱۰"},
                {de:"15", en:"15", ps:"۱۵"},
                {de:"20", en:"20", ps:"۲۰"}
            ],
            richtig: 1,
            erklaerung: {
                de: "Die Hälfte von 20 ist 10.",
                en: "Half of 20 is 10.",
                ps: "د ۲۰ نیمایي ۱۰ ده."
            }
        },

        {
            frage: {
                de: "Welche Zahl ist doppelt so groß wie 15?",
                en: "Which number is twice as large as 15?",
                ps: "د ۱۵ دوه برابره څو کېږي؟"
            },
            antworten: [
                {de:"20", en:"20", ps:"۲۰"},
                {de:"25", en:"25", ps:"۲۵"},
                {de:"30", en:"30", ps:"۳۰"},
                {de:"35", en:"35", ps:"۳۵"}
            ],
            richtig: 2,
            erklaerung: {
                de: "15 · 2 = 30.",
                en: "15 · 2 = 30.",
                ps: "۱۵ · ۲ = ۳۰."
            }
        },

        {
            frage: {
                de: "Welche Zahl ist um 5 größer als 25?",
                en: "Which number is 5 greater than 25?",
                ps: "له ۲۵ څخه ۵ زیاته شمېره کومه ده؟"
            },
            antworten: [
                {de:"20", en:"20", ps:"۲۰"},
                {de:"25", en:"25", ps:"۲۵"},
                {de:"30", en:"30", ps:"۳۰"},
                {de:"35", en:"35", ps:"۳۵"}
            ],
            richtig: 2,
            erklaerung: {
                de: "25 + 5 = 30.",
                en: "25 + 5 = 30.",
                ps: "۲۵ + ۵ = ۳۰."
            }
        },

        {
            frage: {
                de: "Welche Zahl ist um 7 kleiner als 20?",
                en: "Which number is 7 less than 20?",
                ps: "له ۲۰ څخه ۷ کمه شمېره کومه ده؟"
            },
            antworten: [
                {de:"11", en:"11", ps:"۱۱"},
                {de:"12", en:"12", ps:"۱۲"},
                {de:"13", en:"13", ps:"۱۳"},
                {de:"14", en:"14", ps:"۱۴"}
            ],
            richtig: 2,
            erklaerung: {
                de: "20 - 7 = 13.",
                en: "20 - 7 = 13.",
                ps: "۲۰ - ۷ = ۱۳."
            }
        }

    ],


    // ========================================================
    // THEMA 2 – GRUNDRECHENARTEN
    // ========================================================

    1: [

        {
            frage: {
                de: "Wie viel ist 7 + 5?",
                en: "What is 7 + 5?",
                ps: "۷ + ۵ څو کېږي؟"
            },
            antworten: [
                {de:"10", en:"10", ps:"۱۰"},
                {de:"12", en:"12", ps:"۱۲"},
                {de:"13", en:"13", ps:"۱۳"},
                {de:"14", en:"14", ps:"۱۴"}
            ],
            richtig: 1,
            erklaerung: {
                de: "7 + 5 = 12.",
                en: "7 + 5 = 12.",
                ps: "۷ + ۵ = ۱۲."
            }
        },

        {
            frage: {
                de: "Wie viel ist 15 - 7?",
                en: "What is 15 - 7?",
                ps: "۱۵ - ۷ څو کېږي؟"
            },
            antworten: [
                {de:"6", en:"6", ps:"۶"},
                {de:"7", en:"7", ps:"۷"},
                {de:"8", en:"8", ps:"۸"},
                {de:"9", en:"9", ps:"۹"}
            ],
            richtig: 2,
            erklaerung: {
                de: "15 - 7 = 8.",
                en: "15 - 7 = 8.",
                ps: "۱۵ - ۷ = ۸."
            }
        },

        {
            frage: {
                de: "Wie viel ist 6 · 4?",
                en: "What is 6 · 4?",
                ps: "۶ · ۴ څو کېږي؟"
            },
            antworten: [
                {de:"20", en:"20", ps:"۲۰"},
                {de:"22", en:"22", ps:"۲۲"},
                {de:"24", en:"24", ps:"۲۴"},
                {de:"26", en:"26", ps:"۲۶"}
            ],
            richtig: 2,
            erklaerung: {
                de: "6 · 4 = 24.",
                en: "6 · 4 = 24.",
                ps: "۶ · ۴ = ۲۴."
            }
        },

        {
            frage: {
                de: "Wie viel ist 36 : 6?",
                en: "What is 36 ÷ 6?",
                ps: "۳۶ : ۶ څو کېږي؟"
            },
            antworten: [
                {de:"5", en:"5", ps:"۵"},
                {de:"6", en:"6", ps:"۶"},
                {de:"7", en:"7", ps:"۷"},
                {de:"8", en:"8", ps:"۸"}
            ],
            richtig: 1,
            erklaerung: {
                de: "36 : 6 = 6.",
                en: "36 ÷ 6 = 6.",
                ps: "۳۶ : ۶ = ۶."
            }
        },

        {
            frage: {
                de: "Wie viel ist 20 + 30?",
                en: "What is 20 + 30?",
                ps: "۲۰ + ۳۰ څو کېږي؟"
            },
            antworten: [
                {de:"40", en:"40", ps:"۴۰"},
                {de:"50", en:"50", ps:"۵۰"},
                {de:"60", en:"60", ps:"۶۰"},
                {de:"70", en:"70", ps:"۷۰"}
            ],
            richtig: 1,
            erklaerung: {
                de: "20 + 30 = 50.",
                en: "20 + 30 = 50.",
                ps: "۲۰ + ۳۰ = ۵۰."
            }
        },

        {
            frage: {
                de: "Wie viel ist 80 - 35?",
                en: "What is 80 - 35?",
                ps: "۸۰ - ۳۵ څو کېږي؟"
            },
            antworten: [
                {de:"35", en:"35", ps:"۳۵"},
                {de:"40", en:"40", ps:"۴۰"},
                {de:"45", en:"45", ps:"۴۵"},
                {de:"50", en:"50", ps:"۵۰"}
            ],
            richtig: 2,
            erklaerung: {
                de: "80 - 35 = 45.",
                en: "80 - 35 = 45.",
                ps: "۸۰ - ۳۵ = ۴۵."
            }
        },

        {
            frage: {
                de: "Wie viel ist 9 · 5?",
                en: "What is 9 · 5?",
                ps: "۹ · ۵ څو کېږي؟"
            },
            antworten: [
                {de:"35", en:"35", ps:"۳۵"},
                {de:"40", en:"40", ps:"۴۰"},
                {de:"45", en:"45", ps:"۴۵"},
                {de:"50", en:"50", ps:"۵۰"}
            ],
            richtig: 2,
            erklaerung: {
                de: "9 · 5 = 45.",
                en: "9 · 5 = 45.",
                ps: "۹ · ۵ = ۴۵."
            }
        },

        {
            frage: {
                de: "Wie viel ist 72 : 8?",
                en: "What is 72 ÷ 8?",
                ps: "۷۲ : ۸ څو کېږي؟"
            },
            antworten: [
                {de:"7", en:"7", ps:"۷"},
                {de:"8", en:"8", ps:"۸"},
                {de:"9", en:"9", ps:"۹"},
                {de:"10", en:"10", ps:"۱۰"}
            ],
            richtig: 2,
            erklaerung: {
                de: "72 : 8 = 9.",
                en: "72 ÷ 8 = 9.",
                ps: "۷۲ : ۸ = ۹."
            }
        },

        {
            frage: {
                de: "Wie viel ist 25 + 18?",
                en: "What is 25 + 18?",
                ps: "۲۵ + ۱۸ څو کېږي؟"
            },
            antworten: [
                {de:"41", en:"41", ps:"۴۱"},
                {de:"42", en:"42", ps:"۴۲"},
                {de:"43", en:"43", ps:"۴۳"},
                {de:"44", en:"44", ps:"۴۴"}
            ],
            richtig: 2,
            erklaerung: {
                de: "25 + 18 = 43.",
                en: "25 + 18 = 43.",
                ps: "۲۵ + ۱۸ = ۴۳."
            }
        },

        {
            frage: {
                de: "Wie viel ist 50 - 26?",
                en: "What is 50 - 26?",
                ps: "۵۰ - ۲۶ څو کېږي؟"
            },
            antworten: [
                {de:"22", en:"22", ps:"۲۲"},
                {de:"23", en:"23", ps:"۲۳"},
                {de:"24", en:"24", ps:"۲۴"},
                {de:"25", en:"25", ps:"۲۵"}
            ],
            richtig: 2,
            erklaerung: {
                de: "50 - 26 = 24.",
                en: "50 - 26 = 24.",
                ps: "۵۰ - ۲۶ = ۲۴."
            }
        },

        {
            frage: {
                de: "Wie viel ist 7 · 7?",
                en: "What is 7 · 7?",
                ps: "۷ · ۷ څو کېږي؟"
            },
            antworten: [
                {de:"42", en:"42", ps:"۴۲"},
                {de:"49", en:"49", ps:"۴۹"},
                {de:"56", en:"56", ps:"۵۶"},
                {de:"63", en:"63", ps:"۶۳"}
            ],
            richtig: 1,
            erklaerung: {
                de: "7 · 7 = 49.",
                en: "7 · 7 = 49.",
                ps: "۷ · ۷ = ۴۹."
            }
        },

        {
            frage: {
                de: "Wie viel ist 81 : 9?",
                en: "What is 81 ÷ 9?",
                ps: "۸۱ : ۹ څو کېږي؟"
            },
            antworten: [
                {de:"7", en:"7", ps:"۷"},
                {de:"8", en:"8", ps:"۸"},
                {de:"9", en:"9", ps:"۹"},
                {de:"10", en:"10", ps:"۱۰"}
            ],
            richtig: 2,
            erklaerung: {
                de: "81 : 9 = 9.",
                en: "81 ÷ 9 = 9.",
                ps: "۸۱ : ۹ = ۹."
            }
        },

        {
            frage: {
                de: "Wie viel ist 100 - 45?",
                en: "What is 100 - 45?",
                ps: "۱۰۰ - ۴۵ څو کېږي؟"
            },
            antworten: [
                {de:"45", en:"45", ps:"۴۵"},
                {de:"50", en:"50", ps:"۵۰"},
                {de:"55", en:"55", ps:"۵۵"},
                {de:"65", en:"65", ps:"۶۵"}
            ],
            richtig: 2,
            erklaerung: {
                de: "100 - 45 = 55.",
                en: "100 - 45 = 55.",
                ps: "۱۰۰ - ۴۵ = ۵۵."
            }
        },

        {
            frage: {
                de: "Wie viel ist 12 · 3?",
                en: "What is 12 · 3?",
                ps: "۱۲ · ۳ څو کېږي؟"
            },
            antworten: [
                {de:"24", en:"24", ps:"۲۴"},
                {de:"30", en:"30", ps:"۳۰"},
                {de:"36", en:"36", ps:"۳۶"},
                {de:"42", en:"42", ps:"۴۲"}
            ],
            richtig: 2,
            erklaerung: {
                de: "12 · 3 = 36.",
                en: "12 · 3 = 36.",
                ps: "۱۲ · ۳ = ۳۶."
            }
        },

        {
            frage: {
                de: "Wie viel ist 48 : 6?",
                en: "What is 48 ÷ 6?",
                ps: "۴۸ : ۶ څو کېږي؟"
            },
            antworten: [
                {de:"6", en:"6", ps:"۶"},
                {de:"7", en:"7", ps:"۷"},
                {de:"8", en:"8", ps:"۸"},
                {de:"9", en:"9", ps:"۹"}
            ],
            richtig: 2,
            erklaerung: {
                de: "48 : 6 = 8.",
                en: "48 ÷ 6 = 8.",
                ps: "۴۸ : ۶ = ۸."
            }
        },

        {
            frage: {
                de: "Wie viel ist 34 + 29?",
                en: "What is 34 + 29?",
                ps: "۳۴ + ۲۹ څو کېږي؟"
            },
            antworten: [
                {de:"61", en:"61", ps:"۶۱"},
                {de:"62", en:"62", ps:"۶۲"},
                {de:"63", en:"63", ps:"۶۳"},
                {de:"64", en:"64", ps:"۶۴"}
            ],
            richtig: 2,
            erklaerung: {
                de: "34 + 29 = 63.",
                en: "34 + 29 = 63.",
                ps: "۳۴ + ۲۹ = ۶۳."
            }
        },

        {
            frage: {
                de: "Wie viel ist 90 - 37?",
                en: "What is 90 - 37?",
                ps: "۹۰ - ۳۷ څو کېږي؟"
            },
            antworten: [
                {de:"51", en:"51", ps:"۵۱"},
                {de:"52", en:"52", ps:"۵۲"},
                {de:"53", en:"53", ps:"۵۳"},
                {de:"54", en:"54", ps:"۵۴"}
            ],
            richtig: 2,
            erklaerung: {
                de: "90 - 37 = 53.",
                en: "90 - 37 = 53.",
                ps: "۹۰ - ۳۷ = ۵۳."
            }
        },

        {
            frage: {
                de: "Wie viel ist 8 · 6?",
                en: "What is 8 · 6?",
                ps: "۸ · ۶ څو کېږي؟"
            },
            antworten: [
                {de:"42", en:"42", ps:"۴۲"},
                {de:"48", en:"48", ps:"۴۸"},
                {de:"54", en:"54", ps:"۵۴"},
                {de:"56", en:"56", ps:"۵۶"}
            ],
            richtig: 1,
            erklaerung: {
                de: "8 · 6 = 48.",
                en: "8 · 6 = 48.",
                ps: "۸ · ۶ = ۴۸."
            }
        },

        {
            frage: {
                de: "Wie viel ist 64 : 8?",
                en: "What is 64 ÷ 8?",
                ps: "۶۴ : ۸ څو کېږي؟"
            },
            antworten: [
                {de:"6", en:"6", ps:"۶"},
                {de:"7", en:"7", ps:"۷"},
                {de:"8", en:"8", ps:"۸"},
                {de:"9", en:"9", ps:"۹"}
            ],
            richtig: 2,
            erklaerung: {
                de: "64 : 8 = 8.",
                en: "64 ÷ 8 = 8.",
                ps: "۶۴ : ۸ = ۸."
            }
        },

        {
            frage: {
                de: "Wie viel ist 15 + 25 + 10?",
                en: "What is 15 + 25 + 10?",
                ps: "۱۵ + ۲۵ + ۱۰ څو کېږي؟"
            },
            antworten: [
                {de:"40", en:"40", ps:"۴۰"},
                {de:"45", en:"45", ps:"۴۵"},
                {de:"50", en:"50", ps:"۵۰"},
                {de:"55", en:"55", ps:"۵۵"}
            ],
            richtig: 2,
            erklaerung: {
                de: "15 + 25 + 10 = 50.",
                en: "15 + 25 + 10 = 50.",
                ps: "۱۵ + ۲۵ + ۱۰ = ۵۰."
            }
        },

        {
            frage: {
                de: "Wie viel ist 6 · 8?",
                en: "What is 6 · 8?",
                ps: "۶ · ۸ څو کېږي؟"
            },
            antworten: [
                {de:"42", en:"42", ps:"۴۲"},
                {de:"48", en:"48", ps:"۴۸"},
                {de:"54", en:"54", ps:"۵۴"},
                {de:"56", en:"56", ps:"۵۶"}
            ],
            richtig: 1,
            erklaerung: {
                de: "6 · 8 = 48.",
                en: "6 · 8 = 48.",
                ps: "۶ · ۸ = ۴۸."
            }
        },

        {
            frage: {
                de: "Wie viel ist 100 : 10?",
                en: "What is 100 ÷ 10?",
                ps: "۱۰۰ : ۱۰ څو کېږي؟"
            },
            antworten: [
                {de:"5", en:"5", ps:"۵"},
                {de:"10", en:"10", ps:"۱۰"},
                {de:"20", en:"20", ps:"۲۰"},
                {de:"100", en:"100", ps:"۱۰۰"}
            ],
            richtig: 1,
            erklaerung: {
                de: "100 : 10 = 10.",
                en: "100 ÷ 10 = 10.",
                ps: "۱۰۰ : ۱۰ = ۱۰."
            }
        },

        {
            frage: {
                de: "Wie viel ist 45 + 55?",
                en: "What is 45 + 55?",
                ps: "۴۵ + ۵۵ څو کېږي؟"
            },
            antworten: [
                {de:"90", en:"90", ps:"۹۰"},
                {de:"95", en:"95", ps:"۹۵"},
                {de:"100", en:"100", ps:"۱۰۰"},
                {de:"110", en:"110", ps:"۱۱۰"}
            ],
            richtig: 2,
            erklaerung: {
                de: "45 + 55 = 100.",
                en: "45 + 55 = 100.",
                ps: "۴۵ + ۵۵ = ۱۰۰."
            }
        },

        {
            frage: {
                de: "Wie viel ist 120 - 20?",
                en: "What is 120 - 20?",
                ps: "۱۲۰ - ۲۰ څو کېږي؟"
            },
            antworten: [
                {de:"90", en:"90", ps:"۹۰"},
                {de:"100", en:"100", ps:"۱۰۰"},
                {de:"110", en:"110", ps:"۱۱۰"},
                {de:"120", en:"120", ps:"۱۲۰"}
            ],
            richtig: 1,
            erklaerung: {
                de: "120 - 20 = 100.",
                en: "120 - 20 = 100.",
                ps: "۱۲۰ - ۲۰ = ۱۰۰."
            }
        },

        {
            frage: {
                de: "Wie viel ist 11 · 4?",
                en: "What is 11 · 4?",
                ps: "۱۱ · ۴ څو کېږي؟"
            },
            antworten: [
                {de:"40", en:"40", ps:"۴۰"},
                {de:"44", en:"44", ps:"۴۴"},
                {de:"48", en:"48", ps:"۴۸"},
                {de:"54", en:"54", ps:"۵۴"}
            ],
            richtig: 1,
            erklaerung: {
                de: "11 · 4 = 44.",
                en: "11 · 4 = 44.",
                ps: "۱۱ · ۴ = ۴۴."
            }
        },

        {
            frage: {
                de: "Wie viel ist 56 : 7?",
                en: "What is 56 ÷ 7?",
                ps: "۵۶ : ۷ څو کېږي؟"
            },
            antworten: [
                {de:"6", en:"6", ps:"۶"},
                {de:"7", en:"7", ps:"۷"},
                {de:"8", en:"8", ps:"۸"},
                {de:"9", en:"9", ps:"۹"}
            ],
            richtig: 2,
            erklaerung: {
                de: "56 : 7 = 8.",
                en: "56 ÷ 7 = 8.",
                ps: "۵۶ : ۷ = ۸."
            }
        },

        {
            frage: {
                de: "Wie viel ist 19 + 21?",
                en: "What is 19 + 21?",
                ps: "۱۹ + ۲۱ څو کېږي؟"
            },
            antworten: [
                {de:"30", en:"30", ps:"۳۰"},
                {de:"35", en:"35", ps:"۳۵"},
                {de:"40", en:"40", ps:"۴۰"},
                {de:"45", en:"45", ps:"۴۵"}
            ],
            richtig: 2,
            erklaerung: {
                de: "19 + 21 = 40.",
                en: "19 + 21 = 40.",
                ps: "۱۹ + ۲۱ = ۴۰."
            }
        },

        {
            frage: {
                de: "Wie viel ist 70 - 18?",
                en: "What is 70 - 18?",
                ps: "۷۰ - ۱۸ څو کېږي؟"
            },
            antworten: [
                {de:"50", en:"50", ps:"۵۰"},
                {de:"51", en:"51", ps:"۵۱"},
                {de:"52", en:"52", ps:"۵۲"},
                {de:"53", en:"53", ps:"۵۳"}
            ],
            richtig: 2,
            erklaerung: {
                de: "70 - 18 = 52.",
                en: "70 - 18 = 52.",
                ps: "۷۰ - ۱۸ = ۵۲."
            }
        },

        {
            frage: {
                de: "Wie viel ist 5 · 9?",
                en: "What is 5 · 9?",
                ps: "۵ · ۹ څو کېږي؟"
            },
            antworten: [
                {de:"35", en:"35", ps:"۳۵"},
                {de:"40", en:"40", ps:"۴۰"},
                {de:"45", en:"45", ps:"۴۵"},
                {de:"50", en:"50", ps:"۵۰"}
            ],
            richtig: 2,
            erklaerung: {
                de: "5 · 9 = 45.",
                en: "5 · 9 = 45.",
                ps: "۵ · ۹ = ۴۵."
            }
        },

        {
            frage: {
                de: "Wie viel ist 90 : 9?",
                en: "What is 90 ÷ 9?",
                ps: "۹۰ : ۹ څو کېږي؟"
            },
            antworten: [
                {de:"8", en:"8", ps:"۸"},
                {de:"9", en:"9", ps:"۹"},
                {de:"10", en:"10", ps:"۱۰"},
                {de:"11", en:"11", ps:"۱۱"}
            ],
            richtig: 2,
            erklaerung: {
                de: "90 : 9 = 10.",
                en: "90 ÷ 9 = 10.",
                ps: "۹۰ : ۹ = ۱۰."
            }
        }

    ]

};


// ------------------------------------------------------------
// THEMEN KLASSE 5
// ------------------------------------------------------------

const themenKlasse5 = [

    {
        de: "Natürliche Zahlen",
        en: "Natural Numbers",
        ps: "طبیعي شمېرې"
    },

    {
        de: "Grundrechenarten",
        en: "Basic Arithmetic",
        ps: "اساسي حساب"
    },

    {
        de: "Brüche",
        en: "Fractions",
        ps: "کسرونه"
    },

    {
        de: "Dezimalzahlen",
        en: "Decimals",
        ps: "اعشاري شمېرې"
    },

    {
        de: "Größen und Einheiten",
        en: "Quantities and Units",
        ps: "اندازې او واحدونه"
    },

    {
        de: "Geometrische Figuren",
        en: "Geometric Shapes",
        ps: "هندسي شکلونه"
    },

    {
        de: "Umfang",
        en: "Perimeter",
        ps: "محیط"
    },

    {
        de: "Flächen",
        en: "Areas",
        ps: "مساحتونه"
    },

    {
        de: "Koordinatensystem",
        en: "Coordinate System",
        ps: "مختصاتي سیستم"
    },

    {
        de: "Sachaufgaben",
        en: "Word Problems",
        ps: "لفظي مسئلې"
    }

];


// ------------------------------------------------------------
// KLASSE 5–13
// ------------------------------------------------------------

const klassen = {

    5: {
        de: "Klasse 5",
        en: "Grade 5",
        ps: "پنځم ټولګی"
    },

    6: {
        de: "Klasse 6",
        en: "Grade 6",
        ps: "شپږم ټولګی"
    },

    7: {
        de: "Klasse 7",
        en: "Grade 7",
        ps: "اووم ټولګی"
    },

    8: {
        de: "Klasse 8",
        en: "Grade 8",
        ps: "اتم ټولګی"
    },

    9: {
        de: "Klasse 9",
        en: "Grade 9",
        ps: "نهم ټولګی"
    },

    10: {
        de: "Klasse 10",
        en: "Grade 10",
        ps: "لسم ټولګی"
    },

    11: {
        de: "Klasse 11",
        en: "Grade 11",
        ps: "یوولسم ټولګی"
    },

    12: {
        de: "Klasse 12",
        en: "Grade 12",
        ps: "دولسم ټولګی"
    },

    13: {
        de: "Klasse 13 / Abitur",
        en: "Grade 13 / Abitur",
        ps: "دیارلسم ټولګی / ابیتور"
    }

};


// ------------------------------------------------------------
// APP-FUNKTIONEN
// ------------------------------------------------------------

let aktuelleSprache = "de";
let gewaehlteKlasse = 5;
let aktuellesThema = 0;
let aktuelleFrage = 0;
let richtigePosition = 0;
let antwortGegeben = false;


// ------------------------------------------------------------
// SPRACHE
// ------------------------------------------------------------

function zeigeSprachen() {

    document.getElementById("startseite")
        .classList.add("versteckt");

    document.getElementById("sprachen")
        .classList.remove("versteckt");
}


function spracheAuswaehlen(sprache) {

    aktuelleSprache = sprache;

    document.getElementById("sprachen")
        .classList.add("versteckt");

    document.getElementById("anmeldung")
        .classList.remove("versteckt");

    if (sprache === "de") {

        document.getElementById("loginTitel").textContent = "Anmelden";
        document.getElementById("email").placeholder = "E-Mail";
        document.getElementById("passwort").placeholder = "Passwort";
        document.getElementById("loginButton").textContent = "Einloggen";
        document.getElementById("registerText").textContent = "Noch kein Konto?";
        document.getElementById("registerButton").textContent = "Registrieren";
    }

    if (sprache === "en") {

        document.getElementById("loginTitel").textContent = "Login";
        document.getElementById("email").placeholder = "Email";
        document.getElementById("passwort").placeholder = "Password";
        document.getElementById("loginButton").textContent = "Sign in";
        document.getElementById("registerText").textContent = "Don't have an account?";
        document.getElementById("registerButton").textContent = "Register";
    }

    if (sprache === "ps") {

        document.getElementById("loginTitel").textContent = "ننوتل";
        document.getElementById("email").placeholder = "برېښنالیک";
        document.getElementById("passwort").placeholder = "پټ نوم";
        document.getElementById("loginButton").textContent = "ننوتل";
        document.getElementById("registerText").textContent = "حساب نه لرئ؟";
        document.getElementById("registerButton").textContent = "حساب جوړ کړئ";
    }
}


// ------------------------------------------------------------
// KLASSE
// ------------------------------------------------------------

function klasseAuswaehlen(klasse) {

    gewaehlteKlasse = klasse;

    document.getElementById("klassen")
        .classList.add("versteckt");

    document.getElementById("themen")
        .classList.remove("versteckt");

    zeigeThemen();
}


// ------------------------------------------------------------
// THEMEN
// ------------------------------------------------------------

function zeigeThemen() {

    const titel = document.getElementById("themenTitel");
    const liste = document.getElementById("themenListe");

    titel.textContent =
        aktuelleSprache === "de"
            ? "Wähle ein Thema"
            : aktuelleSprache === "en"
                ? "Choose a topic"
                : "یوه موضوع وټاکئ";

    liste.innerHTML = "";

    // Aktuell vollständig: Klasse 5
    // Weitere Klassen kommen in den nächsten Datenblöcken.

    const themen = themenKlasse5;

    themen.forEach((thema, index) => {

        const button = document.createElement("button");

        button.textContent =
            `${index + 1}. ${thema[aktuelleSprache]}`;

        button.onclick = function () {
            themaAuswaehlen(index);
        };

        liste.appendChild(button);
    });
}


// ------------------------------------------------------------
// THEMA
// ------------------------------------------------------------

function themaAuswaehlen(thema) {

    aktuellesThema = thema;
    aktuelleFrage = 0;

    document.getElementById("themen")
        .classList.add("versteckt");

    document.getElementById("aufgaben")
        .classList.remove("versteckt");

    zeigeFrage();
}


// ------------------------------------------------------------
// FRAGEN
// ------------------------------------------------------------

function holeFragen() {

    if (gewaehlteKlasse === 5) {

        return fragenKlasse5[aktuellesThema] || [];
    }

    return [];
}


// ------------------------------------------------------------
// FRAGE ANZEIGEN
// ------------------------------------------------------------

function zeigeFrage() {

    const fragen = holeFragen();

    if (fragen.length === 0) {

        document.getElementById("frageText").textContent =
            aktuelleSprache === "de"
                ? "Für dieses Thema gibt es noch keine Fragen."
                : aktuelleSprache === "en"
                    ? "There are no questions for this topic yet."
                    : "د دې موضوع لپاره تراوسه پوښتنې نشته.";

        return;
    }

    const frage = fragen[aktuelleFrage];

    document.getElementById("frageNummer").textContent =
        aktuelleSprache === "de"
            ? `Frage ${aktuelleFrage + 1} von ${fragen.length}`
            : aktuelleSprache === "en"
                ? `Question ${aktuelleFrage + 1} of ${fragen.length}`
                : `پوښتنه ${aktuelleFrage + 1} له ${fragen.length}`;

    document.getElementById("frageText").textContent =
        frage.frage[aktuelleSprache];


    // Antworten kopieren
    let antworten = [...frage.antworten];

    const richtigeAntwort =
        antworten[frage.richtig];


    // Antworten mischen
    for (let i = antworten.length - 1; i > 0; i--) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [
            antworten[i],
            antworten[j]
        ] =
        [
            antworten[j],
            antworten[i]
        ];
    }


    richtigePosition =
        antworten.indexOf(richtigeAntwort);


    document.getElementById("antwortA").textContent =
        "A) " + antworten[0][aktuelleSprache];

    document.getElementById("antwortB").textContent =
        "B) " + antworten[1][aktuelleSprache];

    document.getElementById("antwortC").textContent =
        "C) " + antworten[2][aktuelleSprache];

    document.getElementById("antwortD").textContent =
        "D) " + antworten[3][aktuelleSprache];


    document.getElementById("erklaerung")
        .classList.add("versteckt");

    document.getElementById("weiterButton")
        .classList.add("versteckt");

    antwortGegeben = false;
}


// ------------------------------------------------------------
// ANTWORT
// ------------------------------------------------------------

function antwortAuswaehlen(position) {

    if (antwortGegeben) return;

    antwortGegeben = true;

    const fragen = holeFragen();
    const frage = fragen[aktuelleFrage];

    const erklaerung =
        document.getElementById("erklaerung");


    if (position === richtigePosition) {

        erklaerung.textContent =
            aktuelleSprache === "de"
                ? "✅ Richtig! " + frage.erklaerung.de
                : aktuelleSprache === "en"
                    ? "✅ Correct! " + frage.erklaerung.en
                    : "✅ سمه ده! " + frage.erklaerung.ps;

    } else {

        erklaerung.textContent =
            aktuelleSprache === "de"
                ? "❌ Falsch! " + frage.erklaerung.de
                : aktuelleSprache === "en"
                    ? "❌ Incorrect! " + frage.erklaerung.en
                    : "❌ غلط! " + frage.erklaerung.ps;
    }


    erklaerung.classList.remove("versteckt");

    document.getElementById("weiterButton")
        .classList.remove("versteckt");
}


// ------------------------------------------------------------
// WEITER
// ------------------------------------------------------------

function naechsteFrage() {

    const fragen = holeFragen();

    if (aktuelleFrage < fragen.length - 1) {

        aktuelleFrage++;

        zeigeFrage();

    } else {

        aufgabenFertig();
    }
}


// ------------------------------------------------------------
// FERTIG
// ------------------------------------------------------------

function aufgabenFertig() {

    document.getElementById("frageNummer").textContent =
        aktuelleSprache === "de"
            ? "🎉 Fertig!"
            : aktuelleSprache === "en"
                ? "🎉 Finished!"
                : "🎉 بشپړ شو!";

    document.getElementById("frageText").textContent =
        aktuelleSprache === "de"
            ? "Du hast alle Fragen dieses Themas geschafft!"
            : aktuelleSprache === "en"
                ? "You completed all questions in this topic!"
                : "تاسو د دې موضوع ټولې پوښتنې بشپړې کړې!";

    document.getElementById("erklaerung")
        .classList.add("versteckt");

    document.getElementById("weiterButton")
        .classList.add("versteckt");
}
