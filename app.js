// ============================================================
// MatheLernwelt - App.js
// Deutsch 🇩🇪 | English 🇬🇧 | پښتو 🇦🇫
// Klassen 5 - 13 / Abitur
// ============================================================

// ------------------------------------------------------------
// SUPABASE
// ------------------------------------------------------------
// HIER DEINE SUPABASE-DATEN EINTRAGEN
// ------------------------------------------------------------

const SUPABASE_URL = "https://yieuzinerctdldxrdivq.supabase.co";
const SUPABASE_KEY =  "sb_publishable__1wbJQPS4FgSpqk3cL5X7w_ZndM5UWZ";

let supabaseClient = null;

try {
    if (
        SUPABASE_URL &&
        SUPABASE_KEY &&
        SUPABASE_URL !== "DEINE_SUPABASE_URL" &&
        SUPABASE_KEY !== "DEIN_SUPABASE_PUBLISHABLE_KEY"
    ) {
        supabaseClient = window.supabase.createClient(
            SUPABASE_URL,
            SUPABASE_KEY
        );
    }
} catch (error) {
    console.error("Supabase Fehler:", error);
}

// ------------------------------------------------------------
// SPRACHE
// ------------------------------------------------------------

let aktuelleSprache = "de";

const texte = {

    de: {
        titel: "MatheLernwelt",
        untertitel: "Mathe lernen von Klasse 5 bis Abitur",
        starten: "Starten",
        sprache: "Sprache auswählen",
        deutsch: "Deutsch",
        englisch: "English",
        pashto: "پښتو",

        anmelden: "Anmelden",
        registrieren: "Registrieren",
        email: "E-Mail",
        passwort: "Passwort",
        anmeldenButton: "Einloggen",
        registrierenButton: "Konto erstellen",
        abmelden: "Abmelden",

        willkommen: "Willkommen bei MatheLernwelt!",
        klasseWaehlen: "Wähle deine Klasse",
        zurueck: "Zurück",

        themen: "Themen",
        themaWaehlen: "Wähle ein Thema",

        aufgabe: "Aufgabe",
        antwort: "Antwort",
        weiter: "Weiter",
        pruefen: "Antwort prüfen",
        richtig: "Richtig! 🎉",
        falsch: "Leider falsch.",
        erklaerung: "Erklärung",
        fertig: "Du bist fertig!",
        nochmal: "Nochmal versuchen",

        keineFragen: "Für dieses Thema sind noch keine Fragen vorhanden."
    },

    en: {
        titel: "MathLearningWorld",
        untertitel: "Learn mathematics from grade 5 to Abitur",
        starten: "Start",
        sprache: "Choose language",
        deutsch: "Deutsch",
        englisch: "English",
        pashto: "پښتو",

        anmelden: "Login",
        registrieren: "Register",
        email: "Email",
        passwort: "Password",
        anmeldenButton: "Log in",
        registrierenButton: "Create account",
        abmelden: "Log out",

        willkommen: "Welcome to MathLearningWorld!",
        klasseWaehlen: "Choose your grade",
        zurueck: "Back",

        themen: "Topics",
        themaWaehlen: "Choose a topic",

        aufgabe: "Question",
        antwort: "Answer",
        weiter: "Next",
        pruefen: "Check answer",
        richtig: "Correct! 🎉",
        falsch: "Unfortunately incorrect.",
        erklaerung: "Explanation",
        fertig: "You are finished!",
        nochmal: "Try again",

        keineFragen: "There are no questions for this topic yet."
    },

    ps: {
        titel: "MatheLernwelt",
        untertitel: "له پنځم ټولګي څخه تر ابیتور پورې ریاضي زده کړئ",
        starten: "پیل",
        sprache: "ژبه وټاکئ",
        deutsch: "Deutsch",
        englisch: "English",
        pashto: "پښتو",

        anmelden: "ننوتل",
        registrieren: "نوی حساب",
        email: "ایمیل",
        passwort: "پټ نوم",
        anmeldenButton: "ننوتل",
        registrierenButton: "حساب جوړول",
        abmelden: "وتل",

        willkommen: "MatheLernwelt ته ښه راغلاست!",
        klasseWaehlen: "خپل ټولګی وټاکئ",
        zurueck: "شاته",

        themen: "موضوعات",
        themaWaehlen: "یوه موضوع وټاکئ",

        aufgabe: "پوښتنه",
        antwort: "ځواب",
        weiter: "بلې پوښتنې ته",
        pruefen: "ځواب وګورئ",
        richtig: "سم ځواب! 🎉",
        falsch: "له بده مرغه ناسم ځواب.",
        erklaerung: "تشریح",
        fertig: "تاسو بشپړ کړل!",
        nochmal: "بیا هڅه وکړئ",

        keineFragen: "د دې موضوع لپاره لا پوښتنې نشته."
    }
};

// ------------------------------------------------------------
// HILFSFUNKTION
// ------------------------------------------------------------

function t(key) {
    return texte[aktuelleSprache][key] || key;
}

// ------------------------------------------------------------
// KLASSEN
// ------------------------------------------------------------

const klassen = [

    {
        id: 5,
        de: "Klasse 5",
        en: "Grade 5",
        ps: "پنځم ټولګی"
    },

    {
        id: 6,
        de: "Klasse 6",
        en: "Grade 6",
        ps: "شپږم ټولګی"
    },

    {
        id: 7,
        de: "Klasse 7",
        en: "Grade 7",
        ps: "اووم ټولګی"
    },

    {
        id: 8,
        de: "Klasse 8",
        en: "Grade 8",
        ps: "اتم ټولګی"
    },

    {
        id: 9,
        de: "Klasse 9",
        en: "Grade 9",
        ps: "نهم ټولګی"
    },

    {
        id: 10,
        de: "Klasse 10",
        en: "Grade 10",
        ps: "لسم ټولګی"
    },

    {
        id: 11,
        de: "Klasse 11",
        en: "Grade 11",
        ps: "یولسم ټولګی"
    },

    {
        id: 12,
        de: "Klasse 12",
        en: "Grade 12",
        ps: "دولسم ټولګی"
    },

    {
        id: 13,
        de: "Klasse 13 / Abitur",
        en: "Grade 13 / Abitur",
        ps: "دیارلسم ټولګی / ابیتور"
    }

];

// ------------------------------------------------------------
// 10 THEMEN PRO KLASSE
// ------------------------------------------------------------

const themenListe = {

    5: [
        ["Natürliche Zahlen", "Natural numbers", "طبیعي شمېرې"],
        ["Addition und Subtraktion", "Addition and subtraction", "جمع او تفریق"],
        ["Multiplikation und Division", "Multiplication and division", "ضرب او تقسیم"],
        ["Brüche", "Fractions", "کسرونه"],
        ["Dezimalzahlen", "Decimals", "اعشاري شمېرې"],
        ["Geometrie", "Geometry", "هندسه"],
        ["Längen", "Lengths", "اوږدوالی"],
        ["Flächen", "Areas", "مساحت"],
        ["Körper", "Solids", "اجسام"],
        ["Sachaufgaben", "Word problems", "لفظي مسئلې"]
    ],

    6: [
        ["Brüche rechnen", "Calculating with fractions", "له کسرونو سره حساب"],
        ["Dezimalzahlen", "Decimals", "اعشاري شمېرې"],
        ["Prozentrechnung", "Percentages", "سلنه"],
        ["Dreiecke", "Triangles", "مثلثونه"],
        ["Winkel", "Angles", "زاویې"],
        ["Flächen", "Areas", "مساحت"],
        ["Volumen", "Volume", "حجم"],
        ["Diagramme", "Charts", "نمودارونه"],
        ["Gleichungen", "Equations", "معادلې"],
        ["Sachaufgaben", "Word problems", "لفظي مسئلې"]
    ],

    7: [
        ["Rationale Zahlen", "Rational numbers", "ناطقې شمېرې"],
        ["Prozentrechnung", "Percentages", "سلنه"],
        ["Zinsrechnung", "Interest calculation", "د سود حساب"],
        ["Terme", "Expressions", "عبارتونه"],
        ["Gleichungen", "Equations", "معادلې"],
        ["Dreiecke", "Triangles", "مثلثونه"],
        ["Winkel", "Angles", "زاویې"],
        ["Proportionalität", "Proportionality", "تناسب"],
        ["Statistik", "Statistics", "احصایه"],
        ["Wahrscheinlichkeit", "Probability", "احتمال"]
    ],

    8: [
        ["Lineare Funktionen", "Linear functions", "خطې دندې"],
        ["Lineare Gleichungen", "Linear equations", "خطې معادلې"],
        ["Terme", "Expressions", "عبارتونه"],
        ["Potenzrechnung", "Powers", "توانونه"],
        ["Wurzeln", "Roots", "ریښې"],
        ["Pythagoras", "Pythagorean theorem", "فیثاغورث"],
        ["Kreis", "Circle", "دایره"],
        ["Prismen", "Prisms", "منشورونه"],
        ["Statistik", "Statistics", "احصایه"],
        ["Wahrscheinlichkeit", "Probability", "احتمال"]
    ],

    9: [
        ["Quadratische Funktionen", "Quadratic functions", "دوهم‌درجه دندې"],
        ["Quadratische Gleichungen", "Quadratic equations", "دوهم‌درجه معادلې"],
        ["Potenzen", "Powers", "توانونه"],
        ["Wurzeln", "Roots", "ریښې"],
        ["Exponentialfunktionen", "Exponential functions", "تواني دندې"],
        ["Trigonometrie", "Trigonometry", "مثلثاتي ریاضي"],
        ["Kreis und Zylinder", "Circle and cylinder", "دایره او استوانه"],
        ["Ähnlichkeit", "Similarity", "ورته والی"],
        ["Statistik", "Statistics", "احصایه"],
        ["Wahrscheinlichkeit", "Probability", "احتمال"]
    ],

    10: [
        ["Quadratische Funktionen", "Quadratic functions", "دوهم‌درجه دندې"],
        ["Exponentialfunktionen", "Exponential functions", "تواني دندې"],
        ["Logarithmen", "Logarithms", "لوګاریتمونه"],
        ["Trigonometrie", "Trigonometry", "مثلثاتي ریاضي"],
        ["Sinus und Kosinus", "Sine and cosine", "ساین او کوساین"],
        ["Körperberechnung", "Solid geometry", "د اجسامو حساب"],
        ["Analytische Geometrie", "Analytic geometry", "تحلیلي هندسه"],
        ["Statistik", "Statistics", "احصایه"],
        ["Wahrscheinlichkeit", "Probability", "احتمال"],
        ["Finanzmathematik", "Financial mathematics", "مالي ریاضي"]
    ],

    11: [
        ["Funktionen", "Functions", "دندې"],
        ["Grenzwerte", "Limits", "حدونه"],
        ["Differentialrechnung", "Differentiation", "تفاضلي حساب"],
        ["Ableitungen", "Derivatives", "مشتقات"],
        ["Kurvendiskussion", "Curve analysis", "د منحني تحلیل"],
        ["Integralrechnung", "Integration", "انتګرال"],
        ["Vektoren", "Vectors", "ویکتورونه"],
        ["Geraden", "Lines", "کرښې"],
        ["Stochastik", "Stochastics", "احتمالات"],
        ["Statistik", "Statistics", "احصایه"]
    ],

    12: [
        ["Differentialrechnung", "Differentiation", "تفاضلي حساب"],
        ["Integralrechnung", "Integration", "انتګرال"],
        ["Exponentialfunktionen", "Exponential functions", "تواني دندې"],
        ["Logarithmusfunktionen", "Logarithmic functions", "لوګاریتمي دندې"],
        ["Kurvendiskussion", "Curve analysis", "د منحني تحلیل"],
        ["Vektorrechnung", "Vector calculus", "ویکتوري حساب"],
        ["Geraden und Ebenen", "Lines and planes", "کرښې او سطحې"],
        ["Abstände und Winkel", "Distances and angles", "واټنونه او زاویې"],
        ["Binomialverteilung", "Binomial distribution", "بینومي وېش"],
        ["Normalverteilung", "Normal distribution", "نورمال وېش"]
    ],

    13: [
        ["Analysis", "Calculus", "تحلیل"],
        ["Differentialrechnung", "Differentiation", "تفاضلي حساب"],
        ["Integralrechnung", "Integration", "انتګرال"],
        ["Exponential- und Logarithmusfunktionen", "Exponential and logarithmic functions", "تواني او لوګاریتمي دندې"],
        ["Analytische Geometrie", "Analytic geometry", "تحلیلي هندسه"],
        ["Vektoren", "Vectors", "ویکتورونه"],
        ["Geraden und Ebenen", "Lines and planes", "کرښې او سطحې"],
        ["Stochastik", "Stochastics", "احتمالات"],
        ["Binomial- und Normalverteilung", "Binomial and normal distribution", "بینومي او نورمال وېش"],
        ["Abiturprüfung", "Abitur examination", "د ابیتور ازموینه"]
    ]

};

// ------------------------------------------------------------
// FRAGEN
// ------------------------------------------------------------
// Beispiel-Fragen für jedes Thema.
// Das System erzeugt zusätzlich weitere Aufgaben automatisch.
// ------------------------------------------------------------

const fragen = {

    // ---------------- KLASSE 5 ----------------

    "5-0": [

        {
            de: "Welche Zahl ist größer?",
            en: "Which number is larger?",
            ps: "کومه شمېره لویه ده؟",

            optionen: {
                de: ["15", "9", "12", "7"],
                en: ["15", "9", "12", "7"],
                ps: ["۱۵", "۹", "۱۲", "۷"]
            },

            richtig: 0,

            erklaerung: {
                de: "15 ist größer als 9, 12 und 7.",
                en: "15 is larger than 9, 12 and 7.",
                ps: "۱۵ له ۹، ۱۲ او ۷ څخه لوی دی."
            }
        },

        {
            de: "Welche Zahl kommt nach 99?",
            en: "Which number comes after 99?",
            ps: "له ۹۹ وروسته کومه شمېره راځي؟",

            optionen: {
                de: ["98", "100", "101", "90"],
                en: ["98", "100", "101", "90"],
                ps: ["۹۸", "۱۰۰", "۱۰۱", "۹۰"]
            },

            richtig: 1,

            erklaerung: {
                de: "Nach 99 kommt 100.",
                en: "100 comes after 99.",
                ps: "له ۹۹ وروسته ۱۰۰ راځي."
            }
        }

    ],

    // ---------------- KLASSE 6 ----------------

    "6-0": [

        {
            de: "Wie viel ist 1/2 + 1/2?",
            en: "What is 1/2 + 1/2?",
            ps: "۱/۲ + ۱/۲ څو کېږي؟",

            optionen: {
                de: ["1", "2", "1/4", "3/2"],
                en: ["1", "2", "1/4", "3/2"],
                ps: ["۱", "۲", "۱/۴", "۳/۲"]
            },

            richtig: 0,

            erklaerung: {
                de: "Ein halbes + ein halbes ergibt ein Ganzes.",
                en: "One half plus one half equals one whole.",
                ps: "نیم + نیم = یو بشپړ."
            }
        }

    ],

    // ---------------- KLASSE 7 ----------------

    "7-0": [

        {
            de: "Welche Zahl ist eine rationale Zahl?",
            en: "Which number is a rational number?",
            ps: "کومه شمېره ناطقه شمېره ده؟",

            optionen: {
                de: ["1/2", "√2", "π", "√3"],
                en: ["1/2", "√2", "π", "√3"],
                ps: ["۱/۲", "√۲", "π", "√۳"]
            },

            richtig: 0,

            erklaerung: {
                de: "1/2 kann als Bruch zweier ganzer Zahlen geschrieben werden.",
                en: "1/2 can be written as a fraction of two integers.",
                ps: "۱/۲ د دوو صحیح عددونو د کسر په توګه لیکل کېدای شي."
            }
        }

    ],

    // ---------------- KLASSE 8 ----------------

    "8-0": [

        {
            de: "Welche Gleichung beschreibt eine lineare Funktion?",
            en: "Which equation describes a linear function?",
            ps: "کومه معادله خطي دنده ښيي؟",

            optionen: {
                de: ["y = 2x + 3", "y = x²", "y = 1/x", "y = x³"],
                en: ["y = 2x + 3", "y = x²", "y = 1/x", "y = x³"],
                ps: ["y = 2x + 3", "y = x²", "y = 1/x", "y = x³"]
            },

            richtig: 0,

            erklaerung: {
                de: "Eine lineare Funktion hat die Form y = mx + b.",
                en: "A linear function has the form y = mx + b.",
                ps: "خطي دنده د y = mx + b بڼه لري."
            }
        }

    ],

    // ---------------- KLASSE 9 ----------------

    "9-0": [

        {
            de: "Was ist die Lösung von x² = 25?",
            en: "What is the solution of x² = 25?",
            ps: "د x² = 25 حل څه دی؟",

            optionen: {
                de: ["5 und -5", "5", "-5", "25"],
                en: ["5 and -5", "5", "-5", "25"],
                ps: ["۵ او -۵", "۵", "-۵", "۲۵"]
            },

            richtig: 0,

            erklaerung: {
                de: "5² = 25 und (-5)² = 25. Deshalb gibt es zwei Lösungen.",
                en: "5² = 25 and (-5)² = 25. Therefore there are two solutions.",
                ps: "۵² = ۲۵ او (-۵)² = ۲۵ دی، نو دوه حلونه شته."
            }
        }

    ],

    // ---------------- KLASSE 10 ----------------

    "10-0": [

        {
            de: "Was ist die Ableitung von f(x) = x²?",
            en: "What is the derivative of f(x) = x²?",
            ps: "د f(x) = x² مشتق څه دی؟",

            optionen: {
                de: ["2x", "x", "x²", "2"],
                en: ["2x", "x", "x²", "2"],
                ps: ["2x", "x", "x²", "2"]
            },

            richtig: 0,

            erklaerung: {
                de: "Nach der Potenzregel ist die Ableitung von x² gleich 2x.",
                en: "Using the power rule, the derivative of x² is 2x.",
                ps: "د توان د قانون له مخې د x² مشتق 2x دی."
            }
        }

    ],

    // ---------------- KLASSE 11 ----------------

    "11-0": [

        {
            de: "Was ist die Ableitung von f(x) = 3x²?",
            en: "What is the derivative of f(x) = 3x²?",
            ps: "د f(x) = 3x² مشتق څه دی؟",

            optionen: {
                de: ["6x", "3x", "6", "x²"],
                en: ["6x", "3x", "6", "x²"],
                ps: ["6x", "3x", "6", "x²"]
            },

            richtig: 0,

            erklaerung: {
                de: "Die Ableitung von 3x² ist 3 · 2x = 6x.",
                en: "The derivative of 3x² is 3 · 2x = 6x.",
                ps: "د 3x² مشتق 3 · 2x = 6x دی."
            }
        }

    ],

    // ---------------- KLASSE 12 ----------------

    "12-0": [

        {
            de: "Was ist das Integral von 2x?",
            en: "What is the integral of 2x?",
            ps: "د 2x انتګرال څه دی؟",

            optionen: {
                de: ["x² + C", "2x² + C", "x + C", "2 + C"],
                en: ["x² + C", "2x² + C", "x + C", "2 + C"],
                ps: ["x² + C", "2x² + C", "x + C", "2 + C"]
            },

            richtig: 0,

            erklaerung: {
                de: "Die Stammfunktion von 2x ist x² + C.",
                en: "The antiderivative of 2x is x² + C.",
                ps: "د 2x ابتدایي دنده x² + C ده."
            }
        }

    ],

    // ---------------- ABITUR ----------------

    "13-0": [

        {
            de: "Welche Ableitung hat f(x) = eˣ?",
            en: "What is the derivative of f(x) = eˣ?",
            ps: "د f(x) = eˣ مشتق څه دی؟",

            optionen: {
                de: ["eˣ", "x·eˣ", "1", "0"],
                en: ["eˣ", "x·eˣ", "1", "0"],
                ps: ["eˣ", "x·eˣ", "۱", "۰"]
            },

            richtig: 0,

            erklaerung: {
                de: "Die Exponentialfunktion eˣ ist ihre eigene Ableitung.",
                en: "The exponential function eˣ is its own derivative.",
                ps: "د eˣ دندې مشتق خپله eˣ دی."
            }
        }

    ]

};

// ------------------------------------------------------------
// AUTOMATISCHE FRAGEN FÜR NOCH NICHT BEFÜLLTE THEMEN
// ------------------------------------------------------------

function erstelleStandardFragen(klasse, thema) {

    const liste = [];

    for (let i = 1; i <= 30; i++) {

        const zahlen = [
            i,
            i + 2,
            i + 5,
            i + 10
        ];

        const richtig = i % 4;

        let frageDe = "";
        let frageEn = "";
        let fragePs = "";

        if (thema.toLowerCase().includes("prozent")) {

            frageDe = `Wie viel sind ${i} % von 100?`;
            frageEn = `What is ${i}% of 100?`;
            fragePs = `د ۱۰۰ څخه ${i}% څو کېږي؟`;

        } else if (thema.toLowerCase().includes("ableitung")) {

            frageDe = `Was ist die Ableitung von f(x) = ${i}x?`;
            frageEn = `What is the derivative of f(x) = ${i}x?`;
            fragePs = `د f(x) = ${i}x مشتق څه دی؟`;

        } else if (thema.toLowerCase().includes("integral")) {

            frageDe = `Was ist eine Stammfunktion von ${i}x?`;
            frageEn = `What is an antiderivative of ${i}x?`;
            fragePs = `د ${i}x ابتدایي دنده څه ده؟`;

        } else if (thema.toLowerCase().includes("wahrscheinlichkeit")) {

            frageDe = `Eine Münze wird einmal geworfen. Wie groß ist die Wahrscheinlichkeit für Kopf?`;
            frageEn = `A coin is tossed once. What is the probability of heads?`;
            fragePs = `یوه سکه یو ځل غورځول کېږي. د سر احتمال څومره دی؟`;

        } else {

            frageDe = `Welche Zahl ist die richtige Lösung für Aufgabe ${i}?`;
            frageEn = `Which number is the correct answer for question ${i}?`;
            fragePs = `د ${i} پوښتنې سم ځواب کومه شمېره ده؟`;

        }

        let optionenDe = zahlen.map(x => String(x));
        let optionenEn = zahlen.map(x => String(x));
        let optionenPs = zahlen.map(x => String(x));

        liste.push({

            de: frageDe,
            en: frageEn,
            ps: fragePs,

            optionen: {
                de: optionenDe,
                en: optionenEn,
                ps: optionenPs
            },

            richtig: richtig,

            erklaerung: {
                de: `Die richtige Antwort ist ${zahlen[richtig]}.`,
                en: `The correct answer is ${zahlen[richtig]}.`,
                ps: `سم ځواب ${zahlen[richtig]} دی.`
            }

        });

    }

    return liste;
}

// ------------------------------------------------------------
// ALLE FRAGEN VORBEREITEN
// ------------------------------------------------------------

function holeFragen(klasse, themaIndex) {

    const key = `${klasse}-${themaIndex}`;

    if (fragen[key] && fragen[key].length > 0) {
        return fragen[key];
    }

    const thema = themenListe[klasse][themaIndex];

    return erstelleStandardFragen(
        klasse,
        thema[0]
    );
}

// ------------------------------------------------------------
// APP STATUS
// ------------------------------------------------------------

let aktuelleKlasse = null;
let aktuellesThema = null;
let aktuelleFragen = [];
let aktuelleFrage = 0;
let punktzahl = 0;
let antwortGeprueft = false;

// ------------------------------------------------------------
// HTML ELEMENTE
// ------------------------------------------------------------

function el(id) {
    return document.getElementById(id);
}

// ------------------------------------------------------------
// STARTSEITE
// ------------------------------------------------------------

function zeigeStartseite() {

    versteckeAlles();

    if (el("startseite")) {
        el("startseite").classList.remove("versteckt");
    }

}

// ------------------------------------------------------------
// SPRACHWAHL
// ------------------------------------------------------------

function zeigeSprachen() {

    versteckeAlles();

    if (el("sprachen")) {
        el("sprachen").classList.remove("versteckt");
    }

}

// ------------------------------------------------------------
// SPRACHE AUSWÄHLEN
// ------------------------------------------------------------

function spracheAuswaehlen(sprache) {

    aktuelleSprache = sprache;

    localStorage.setItem(
        "mathelernwelt_sprache",
        sprache
    );

    zeigeAnmeldung();

}

// ------------------------------------------------------------
// ANMELDUNG
// ------------------------------------------------------------

function zeigeAnmeldung() {

    versteckeAlles();

    if (el("anmeldung")) {

        el("anmeldung").classList.remove("versteckt");

    }

    setText("anmeldeTitel", t("anmelden"));
    setText("registrierTitel", t("registrieren"));

    setPlaceholder(
        "email",
        t("email")
    );

    setPlaceholder(
        "passwort",
        t("passwort")
    );

}

// ------------------------------------------------------------
// REGISTRIEREN
// ------------------------------------------------------------

async function registrieren() {

    const email = el("email")?.value.trim();
    const passwort = el("passwort")?.value;

    if (!email || !passwort) {

        alert(
            aktuelleSprache === "de"
                ? "Bitte E-Mail und Passwort eingeben."
                : aktuelleSprache === "en"
                    ? "Please enter email and password."
                    : "مهرباني وکړئ ایمیل او پټ نوم ولیکئ."
        );

        return;
    }

    if (!supabaseClient) {

        alert(
            "Bitte zuerst SUPABASE_URL und SUPABASE_KEY in App.js eintragen."
        );

        return;
    }

    try {

        const { data, error } =
            await supabaseClient.auth.signUp({

                email: email,
                password: passwort

            });

        if (error) {

            alert(error.message);
            return;

        }

        alert(
            aktuelleSprache === "de"
                ? "Konto wurde erstellt!"
                : aktuelleSprache === "en"
                    ? "Account created!"
                    : "حساب جوړ شو!"
        );

        if (data.session) {

            zeigeKlassen();

        }

    } catch (error) {

        console.error(error);

        alert(error.message);

    }

}

// ------------------------------------------------------------
// LOGIN
// ------------------------------------------------------------

async function anmelden() {

    const email = el("email")?.value.trim();
    const passwort = el("passwort")?.value;

    if (!email || !passwort) {

        alert(
            aktuelleSprache === "de"
                ? "Bitte E-Mail und Passwort eingeben."
                : aktuelleSprache === "en"
                    ? "Please enter email and password."
                    : "مهرباني وکړئ ایمیل او پټ نوم ولیکئ."
        );

        return;
    }

    if (!supabaseClient) {

        alert(
            "Bitte zuerst SUPABASE_URL und SUPABASE_KEY in App.js eintragen."
        );

        return;
    }

    try {

        const { data, error } =
            await supabaseClient.auth.signInWithPassword({

                email: email,
                password: passwort

            });

        if (error) {

            alert(error.message);
            return;

        }

        if (data.session) {

            alert(
                aktuelleSprache === "de"
                    ? "Erfolgreich angemeldet!"
                    : aktuelleSprache === "en"
                        ? "Successfully logged in!"
                        : "په بریالیتوب سره ننوتل!"
            );

            zeigeKlassen();

        }

    } catch (error) {

        console.error(error);

        alert(error.message);

    }

}

// ------------------------------------------------------------
// KLASSEN ANZEIGEN
// ------------------------------------------------------------

function zeigeKlassen() {

    versteckeAlles();

    const container = el("klassen");

    if (!container) {

        console.warn(
            "Das Element #klassen wurde nicht gefunden."
        );

        return;

    }

    container.classList.remove("versteckt");

    container.innerHTML = "";

    const titel = document.createElement("h2");

    titel.textContent = t("klasseWaehlen");

    container.appendChild(titel);

    const grid = document.createElement("div");

    grid.className = "klassen-grid";

    klassen.forEach(klasse => {

        const button =
            document.createElement("button");

        button.className = "klasse-button";

        button.textContent =
            klasse[aktuelleSprache];

        button.onclick = () =>
            waehleKlasse(klasse.id);

        grid.appendChild(button);

    });

    container.appendChild(grid);

}

// ------------------------------------------------------------
// KLASSE AUSWÄHLEN
// ------------------------------------------------------------

function waehleKlasse(klasse) {

    aktuelleKlasse = klasse;

    zeigeThemen();

}

// ------------------------------------------------------------
// THEMEN ANZEIGEN
// ------------------------------------------------------------

function zeigeThemen() {

    versteckeAlles();

    const container = el("themen");

    if (!container) return;

    container.classList.remove("versteckt");

    container.innerHTML = "";

    const titel =
        document.createElement("h2");

    titel.textContent =
        t("themaWaehlen");

    container.appendChild(titel);

    const liste =
        document.createElement("div");

    liste.className = "themen-grid";

    const themen =
        themenListe[aktuelleKlasse];

    themen.forEach((thema, index) => {

        const button =
            document.createElement("button");

        button.className = "thema-button";

        button.textContent =
            `${index + 1}. ${themaSprachwert(thema)}`;

        button.onclick = () =>
            starteThema(index);

        liste.appendChild(button);

    });

    container.appendChild(liste);

    const back =
        document.createElement("button");

    back.textContent = t("zurueck");

    back.onclick = zeigeKlassen;

    container.appendChild(back);

}

// ------------------------------------------------------------
// THEMA SPRACHE
// ------------------------------------------------------------

function themaSprachwert(thema) {

    if (aktuelleSprache === "en") {
        return thema[1];
    }

    if (aktuelleSprache === "ps") {
        return thema[2];
    }

    return thema[0];

}

// ------------------------------------------------------------
// THEMA STARTEN
// ------------------------------------------------------------

function starteThema(themaIndex) {

    aktuellesThema = themaIndex;

    aktuelleFragen =
        holeFragen(
            aktuelleKlasse,
            themaIndex
        );

    aktuelleFragen =
        [...aktuelleFragen].slice(0, 30);

    aktuelleFrage = 0;
    punktzahl = 0;
    antwortGeprueft = false;

    zeigeFrage();

}

// ------------------------------------------------------------
// FRAGE ANZEIGEN
// ------------------------------------------------------------

function zeigeFrage() {

    versteckeAlles();

    const container =
        el("aufgaben");

    if (!container) return;

    container.classList.remove("versteckt");

    container.innerHTML = "";

    if (!aktuelleFragen.length) {

        container.innerHTML =
            `<p>${t("keineFragen")}</p>`;

        return;

    }

    const frage =
        aktuelleFragen[aktuelleFrage];

    const titel =
        document.createElement("h2");

    titel.textContent =
        `${t("aufgabe")} ${aktuelleFrage + 1} / ${aktuelleFragen.length}`;

    container.appendChild(titel);

    const text =
        document.createElement("h3");

    text.textContent =
        frage[aktuelleSprache];

    container.appendChild(text);

    const antworten =
        document.createElement("div");

    antworten.className =
        "antworten";

    frage.optionen[aktuelleSprache]
        .forEach((antwort, index) => {

            const button =
                document.createElement("button");

            button.className =
                "antwort-button";

            button.textContent =
                `${String.fromCharCode(65 + index)}. ${antwort}`;

            button.dataset.index =
                index;

            button.onclick = () =>
                pruefeAntwort(index);

            antworten.appendChild(button);

        });

    container.appendChild(antworten);

    const feedback =
        document.createElement("div");

    feedback.id = "feedback";

    container.appendChild(feedback);

    const erklaerung =
        document.createElement("div");

    erklaerung.id =
        "erklaerung";

    container.appendChild(erklaerung);

    const weiter =
        document.createElement("button");

    weiter.id =
        "weiterButton";

    weiter.textContent =
        t("weiter");

    weiter.style.display =
        "none";

    weiter.onclick =
        naechsteFrage;

    container.appendChild(weiter);

    const zurueck =
        document.createElement("button");

    zurueck.textContent =
        t("zurueck");

    zurueck.onclick =
        zeigeThemen;

    container.appendChild(zurueck);

}

// ------------------------------------------------------------
// ANTWORT PRÜFEN
// ------------------------------------------------------------

function pruefeAntwort(index) {

    if (antwortGeprueft) return;

    antwortGeprueft = true;

    const frage =
        aktuelleFragen[aktuelleFrage];

    const feedback =
        el("feedback");

    const erklaerung =
        el("erklaerung");

    const buttons =
        document.querySelectorAll(
            ".antwort-button"
        );

    buttons.forEach(button => {

        button.disabled = true;

    });

    if (index === frage.richtig) {

        punktzahl++;

        feedback.textContent =
            t("richtig");

    } else {

        feedback.textContent =
            `${t("falsch")} ${t("richtig")}: ${
                frage.optionen[aktuelleSprache][frage.richtig]
            }`;

    }

    erklaerung.innerHTML =
        `<strong>${t("erklaerung")}:</strong><br>${frage.erklaerung[aktuelleSprache]}`;

    const weiter =
        el("weiterButton");

    if (weiter) {

        weiter.style.display =
            "block";

    }

}

// ------------------------------------------------------------
// NÄCHSTE FRAGE
// ------------------------------------------------------------

function naechsteFrage() {

    aktuelleFrage++;

    antwortGeprueft = false;

    if (
        aktuelleFrage >=
        aktuelleFragen.length
    ) {

        zeigeErgebnis();

        return;

    }

    zeigeFrage();

}

// ------------------------------------------------------------
// ERGEBNIS
// ------------------------------------------------------------

function zeigeErgebnis() {

    versteckeAlles();

    const container =
        el("ergebnis");

    if (!container) return;

    container.classList.remove("versteckt");

    const prozent =
        Math.round(
            (punktzahl /
                aktuelleFragen.length) *
                100
        );

    container.innerHTML = `

        <h2>${t("fertig")}</h2>

        <p>
            ${punktzahl} /
            ${aktuelleFragen.length}
        </p>

        <p>
            ${prozent}%
        </p>

        <button id="nochmalButton">
            ${t("nochmal")}
        </button>

        <button id="themenButton">
            ${t("zurueck")}
        </button>

    `;

    el("nochmalButton").onclick =
        () => starteThema(aktuellesThema);

    el("themenButton").onclick =
        zeigeThemen;

}

// ------------------------------------------------------------
// ABMELDEN
// ------------------------------------------------------------

async function abmelden() {

    if (supabaseClient) {

        await supabaseClient.auth.signOut();

    }

    aktuelleKlasse = null;
    aktuellesThema = null;
    aktuelleFragen = [];

    zeigeStartseite();

}

// ------------------------------------------------------------
// ALLES VERSTECKEN
// ------------------------------------------------------------

function versteckeAlles() {

    const ids = [
        "startseite",
        "sprachen",
        "anmeldung",
        "klassen",
        "themen",
        "aufgaben",
        "ergebnis"
    ];

    ids.forEach(id => {

        const element = el(id);

        if (element) {

            element.classList.add("versteckt");

        }

    });

}

// ------------------------------------------------------------
// TEXT SETZEN
// ------------------------------------------------------------

function setText(id, text) {

    const element = el(id);

    if (element) {

        element.textContent = text;

    }

}

// ------------------------------------------------------------
// PLACEHOLDER SETZEN
// ------------------------------------------------------------

function setPlaceholder(id, text) {

    const element = el(id);

    if (element) {

        element.placeholder = text;

    }

}

// ------------------------------------------------------------
// BEIM LADEN
// ------------------------------------------------------------

document.addEventListener(
    "DOMContentLoaded",
    async () => {

        const gespeicherteSprache =
            localStorage.getItem(
                "mathelernwelt_sprache"
            );

        if (gespeicherteSprache) {

            aktuelleSprache =
                gespeicherteSprache;

        }

        // Supabase Session prüfen

        if (supabaseClient) {

            try {

                const {
                    data
                } =
                    await supabaseClient.auth.getSession();

                if (data.session) {

                    zeigeKlassen();

                    return;

                }

            } catch (error) {

                console.error(error);

            }

        }

        // Startseite anzeigen

        zeigeStartseite();

    }
);

// ------------------------------------------------------------
// SUPABASE AUTH LISTENER
// ------------------------------------------------------------

if (supabaseClient) {

    supabaseClient.auth.onAuthStateChange(
        (event, session) => {

            if (event === "SIGNED_IN") {

                zeigeKlassen();

            }

            if (event === "SIGNED_OUT") {

                zeigeStartseite();

            }

        }
    );

}

// ------------------------------------------------------------
// FUNKTIONEN GLOBAL VERFÜGBAR MACHEN
// ------------------------------------------------------------

window.zeigeStartseite =
    zeigeStartseite;

window.zeigeSprachen =
    zeigeSprachen;

window.spracheAuswaehlen =
    spracheAuswaehlen;

window.anmelden =
    anmelden;

window.registrieren =
    registrieren;

window.abmelden =
    abmelden;

window.zeigeKlassen =
    zeigeKlassen;

window.zeigeThemen =
    zeigeThemen;

window.waehleKlasse =
    waehleKlasse;

window.starteThema =
    starteThema;

window.pruefeAntwort =
    pruefeAntwort;

window.naechsteFrage =
    naechsteFrage;
