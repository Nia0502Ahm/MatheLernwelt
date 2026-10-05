// ============================================================
// MATHE LERNWELT – APP.JS
// Deutsch / English / پښتو
// ============================================================


// ============================================================
// SUPABASE
// ============================================================

const SUPABASE_URL = "https://yieuzinerctdldxrdivq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =  "sb_publishable__1wbJQPS4FgSpqk3cL5X7w_ZndM5UWZ";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);


// ============================================================
// APP-VARIABLEN
// ============================================================

let aktuelleSprache = "de";
let gewaehlteKlasse = 5;
let aktuellesThema = 0;
let aktuelleFrage = 0;
let richtigePosition = 0;
let antwortGegeben = false;


// ============================================================
// KLASSEN
// ============================================================

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


// ============================================================
// THEMEN
// ============================================================

const themen = {

    5: [
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
    ],

    6: [
        {
            de: "Brüche und Bruchrechnen",
            en: "Fractions and Fraction Arithmetic",
            ps: "کسرونه او د کسرونو حساب"
        },
        {
            de: "Dezimalzahlen",
            en: "Decimals",
            ps: "اعشاري شمېرې"
        },
        {
            de: "Prozentrechnung",
            en: "Percentages",
            ps: "سلنه"
        },
        {
            de: "Negative Zahlen",
            en: "Negative Numbers",
            ps: "منفي شمېرې"
        },
        {
            de: "Terme",
            en: "Expressions",
            ps: "عبارتونه"
        },
        {
            de: "Gleichungen",
            en: "Equations",
            ps: "معادلې"
        },
        {
            de: "Geometrie",
            en: "Geometry",
            ps: "هندسه"
        },
        {
            de: "Flächen",
            en: "Areas",
            ps: "مساحتونه"
        },
        {
            de: "Winkel",
            en: "Angles",
            ps: "زاویې"
        },
        {
            de: "Daten und Diagramme",
            en: "Data and Charts",
            ps: "معلومات او جدولونه"
        }
    ],

    7: [
        {
            de: "Rationale Zahlen",
            en: "Rational Numbers",
            ps: "منطقي شمېرې"
        },
        {
            de: "Terme und Variablen",
            en: "Expressions and Variables",
            ps: "عبارتونه او متغیرونه"
        },
        {
            de: "Gleichungen",
            en: "Equations",
            ps: "معادلې"
        },
        {
            de: "Prozentrechnung",
            en: "Percentages",
            ps: "سلنه"
        },
        {
            de: "Proportionalität",
            en: "Proportionality",
            ps: "تناسب"
        },
        {
            de: "Dreiecke",
            en: "Triangles",
            ps: "مثلثونه"
        },
        {
            de: "Winkel",
            en: "Angles",
            ps: "زاویې"
        },
        {
            de: "Flächen und Körper",
            en: "Areas and Solids",
            ps: "مساحتونه او اجسام"
        },
        {
            de: "Zuordnungen",
            en: "Mappings",
            ps: "اړیکې"
        },
        {
            de: "Statistik",
            en: "Statistics",
            ps: "احصایه"
        }
    ],

    8: [
        {
            de: "Lineare Funktionen",
            en: "Linear Functions",
            ps: "خطی دندې"
        },
        {
            de: "Lineare Gleichungen",
            en: "Linear Equations",
            ps: "خطی معادلې"
        },
        {
            de: "Terme",
            en: "Expressions",
            ps: "عبارتونه"
        },
        {
            de: "Potenzrechnung",
            en: "Powers",
            ps: "توانونه"
        },
        {
            de: "Wurzeln",
            en: "Roots",
            ps: "جذرونه"
        },
        {
            de: "Satz des Pythagoras",
            en: "Pythagorean Theorem",
            ps: "د فیثاغورس قضیه"
        },
        {
            de: "Kreis",
            en: "Circle",
            ps: "دایره"
        },
        {
            de: "Prismen",
            en: "Prisms",
            ps: "منشورونه"
        },
        {
            de: "Wahrscheinlichkeit",
            en: "Probability",
            ps: "احتمال"
        },
        {
            de: "Statistik",
            en: "Statistics",
            ps: "احصایه"
        }
    ],

    9: [
        {
            de: "Quadratische Funktionen",
            en: "Quadratic Functions",
            ps: "درجې دوهمې دندې"
        },
        {
            de: "Quadratische Gleichungen",
            en: "Quadratic Equations",
            ps: "درجې دوهمې معادلې"
        },
        {
            de: "Potenzen",
            en: "Powers",
            ps: "توانونه"
        },
        {
            de: "Wurzeln",
            en: "Roots",
            ps: "جذرونه"
        },
        {
            de: "Ähnlichkeit",
            en: "Similarity",
            ps: "ورته والی"
        },
        {
            de: "Trigonometrie",
            en: "Trigonometry",
            ps: "مثلثاتي حساب"
        },
        {
            de: "Körper",
            en: "Solids",
            ps: "اجسام"
        },
        {
            de: "Stochastik",
            en: "Probability and Statistics",
            ps: "احتمال او احصایه"
        },
        {
            de: "Funktionen",
            en: "Functions",
            ps: "دندې"
        },
        {
            de: "Sachaufgaben",
            en: "Word Problems",
            ps: "لفظي مسئلې"
        }
    ],

    10: [
        {
            de: "Quadratische Funktionen",
            en: "Quadratic Functions",
            ps: "درجې دوهمې دندې"
        },
        {
            de: "Quadratische Gleichungen",
            en: "Quadratic Equations",
            ps: "درجې دوهمې معادلې"
        },
        {
            de: "Exponentialfunktionen",
            en: "Exponential Functions",
            ps: "تواني دندې"
        },
        {
            de: "Logarithmen",
            en: "Logarithms",
            ps: "لوګاریتمونه"
        },
        {
            de: "Trigonometrie",
            en: "Trigonometry",
            ps: "مثلثاتي حساب"
        },
        {
            de: "Analytische Geometrie",
            en: "Analytic Geometry",
            ps: "تحلیلي هندسه"
        },
        {
            de: "Wahrscheinlichkeit",
            en: "Probability",
            ps: "احتمال"
        },
        {
            de: "Statistik",
            en: "Statistics",
            ps: "احصایه"
        },
        {
            de: "Funktionen",
            en: "Functions",
            ps: "دندې"
        },
        {
            de: "Prüfungsvorbereitung",
            en: "Exam Preparation",
            ps: "د ازموینې چمتووالی"
        }
    ],

    11: [
        {
            de: "Analysis",
            en: "Calculus",
            ps: "تحلیل"
        },
        {
            de: "Funktionen",
            en: "Functions",
            ps: "دندې"
        },
        {
            de: "Differentialrechnung",
            en: "Differentiation",
            ps: "تفاضلي حساب"
        },
        {
            de: "Integralrechnung",
            en: "Integration",
            ps: "انتګرال حساب"
        },
        {
            de: "Exponentialfunktionen",
            en: "Exponential Functions",
            ps: "تواني دندې"
        },
        {
            de: "Analytische Geometrie",
            en: "Analytic Geometry",
            ps: "تحلیلي هندسه"
        },
        {
            de: "Vektoren",
            en: "Vectors",
            ps: "وکتورونه"
        },
        {
            de: "Stochastik",
            en: "Probability and Statistics",
            ps: "احتمال او احصایه"
        },
        {
            de: "Wahrscheinlichkeitsrechnung",
            en: "Probability Theory",
            ps: "د احتمال حساب"
        },
        {
            de: "Statistik",
            en: "Statistics",
            ps: "احصایه"
        }
    ],

    12: [
        {
            de: "Analysis",
            en: "Calculus",
            ps: "تحلیل"
        },
        {
            de: "Differentialrechnung",
            en: "Differentiation",
            ps: "تفاضلي حساب"
        },
        {
            de: "Integralrechnung",
            en: "Integration",
            ps: "انتګرال حساب"
        },
        {
            de: "Exponential- und Logarithmusfunktionen",
            en: "Exponential and Logarithmic Functions",
            ps: "تواني او لوګاریتمي دندې"
        },
        {
            de: "Vektorrechnung",
            en: "Vector Calculus",
            ps: "د وکتورونو حساب"
        },
        {
            de: "Geraden und Ebenen",
            en: "Lines and Planes",
            ps: "مستقیمې کرښې او سطحې"
        },
        {
            de: "Abstände und Winkel",
            en: "Distances and Angles",
            ps: "واټنونه او زاویې"
        },
        {
            de: "Stochastik",
            en: "Probability and Statistics",
            ps: "احتمال او احصایه"
        },
        {
            de: "Binomialverteilung",
            en: "Binomial Distribution",
            ps: "بینومي ویش"
        },
        {
            de: "Normalverteilung",
            en: "Normal Distribution",
            ps: "نورمال ویش"
        }
    ],

    13: [
        {
            de: "Analysis – Funktionen und Kurvendiskussion",
            en: "Calculus – Functions and Curve Analysis",
            ps: "تحلیل – دندې او د منحني تحلیل"
        },
        {
            de: "Differentialrechnung",
            en: "Differentiation",
            ps: "تفاضلي حساب"
        },
        {
            de: "Integralrechnung",
            en: "Integration",
            ps: "انتګرال حساب"
        },
        {
            de: "Exponential- und Logarithmusfunktionen",
            en: "Exponential and Logarithmic Functions",
            ps: "تواني او لوګاریتمي دندې"
        },
        {
            de: "Analytische Geometrie – Vektoren",
            en: "Analytic Geometry – Vectors",
            ps: "تحلیلي هندسه – وکتورونه"
        },
        {
            de: "Geraden und Ebenen",
            en: "Lines and Planes",
            ps: "مستقیمې کرښې او سطحې"
        },
        {
            de: "Abstände und Winkel im Raum",
            en: "Distances and Angles in Space",
            ps: "په فضا کې واټنونه او زاویې"
        },
        {
            de: "Stochastik – Wahrscheinlichkeitsrechnung",
            en: "Probability Theory",
            ps: "احتمال حساب"
        },
        {
            de: "Binomialverteilung und Normalverteilung",
            en: "Binomial and Normal Distribution",
            ps: "بینومي او نورمال ویش"
        },
        {
            de: "Statistik und Hypothesentests",
            en: "Statistics and Hypothesis Tests",
            ps: "احصایه او د فرضیې ازموینې"
        }
    ]

};


// ============================================================
// FRAGEN KLASSE 5
// ============================================================

const fragenKlasse5 = {

    0: [
        {
            frage: {
                de: "Welche Zahl kommt nach 99?",
                en: "Which number comes after 99?",
                ps: "له ۹۹ څخه وروسته کومه شمېره راځي؟"
            },
            antworten: [
                { de: "100", en: "100", ps: "۱۰۰" },
                { de: "98", en: "98", ps: "۹۸" },
                { de: "101", en: "101", ps: "۱۰۱" },
                { de: "90", en: "90", ps: "۹۰" }
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
                { de: "45", en: "45", ps: "۴۵" },
                { de: "54", en: "54", ps: "۵۴" },
                { de: "40", en: "40", ps: "۴۰" },
                { de: "35", en: "35", ps: "۳۵" }
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
                { de: "35", en: "35", ps: "۳۵" },
                { de: "42", en: "42", ps: "۴۲" },
                { de: "27", en: "27", ps: "۲۷" },
                { de: "31", en: "31", ps: "۳۱" }
            ],
            richtig: 2,
            erklaerung: {
                de: "27 ist kleiner als 30.",
                en: "27 is smaller than 30.",
                ps: "۲۷ له ۳۰ څخه کوچنی دی."
            }
        }
    ],

    1: [
        {
            frage: {
                de: "Wie viel ist 7 + 5?",
                en: "What is 7 + 5?",
                ps: "۷ + ۵ څو کېږي؟"
            },
            antworten: [
                { de: "10", en: "10", ps: "۱۰" },
                { de: "12", en: "12", ps: "۱۲" },
                { de: "13", en: "13", ps: "۱۳" },
                { de: "14", en: "14", ps: "۱۴" }
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
                { de: "6", en: "6", ps: "۶" },
                { de: "7", en: "7", ps: "۷" },
                { de: "8", en: "8", ps: "۸" },
                { de: "9", en: "9", ps: "۹" }
            ],
            richtig: 2,
            erklaerung: {
                de: "15 - 7 = 8.",
                en: "15 - 7 = 8.",
                ps: "۱۵ - ۷ = ۸."
            }
        }
    ],

    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: []
};


// ============================================================
// FRAGEN FÜR ANDERE KLASSEN
// ============================================================
// Damit die App nicht abstürzt, bekommt jedes Thema
// zunächst eine Beispiel-Frage.
// Später können hier die echten 30 Fragen pro Thema stehen.


function erstelleStandardFragen(klasse, thema) {

    const themaName = themen[klasse][thema];

    return [
        {
            frage: {
                de: `Frage zu ${themaName.de}`,
                en: `Question about ${themaName.en}`,
                ps: `د ${themaName.ps} په اړه پوښتنه`
            },

            antworten: [
                {
                    de: "Antwort A",
                    en: "Answer A",
                    ps: "ځواب A"
                },
                {
                    de: "Antwort B",
                    en: "Answer B",
                    ps: "ځواب B"
                },
                {
                    de: "Antwort C",
                    en: "Answer C",
                    ps: "ځواب C"
                },
                {
                    de: "Antwort D",
                    en: "Answer D",
                    ps: "ځواب D"
                }
            ],

            richtig: 0,

            erklaerung: {
                de: "Dies ist eine Beispielerklärung.",
                en: "This is an example explanation.",
                ps: "دا یوه بېلګه تشریح ده."
            }
        }
    ];
}


// ============================================================
// FRAGEN HOLEN
// ============================================================

function holeFragen() {

    if (gewaehlteKlasse === 5) {

        if (fragenKlasse5[aktuellesThema]) {
            return fragenKlasse5[aktuellesThema];
        }
    }

    return erstelleStandardFragen(
        gewaehlteKlasse,
        aktuellesThema
    );
}


// ============================================================
// START → SPRACHEN
// ============================================================

function zeigeSprachen() {

    document
        .getElementById("startseite")
        .classList.add("versteckt");

    document
        .getElementById("sprachen")
        .classList.remove("versteckt");
}


// ============================================================
// SPRACHE AUSWÄHLEN
// ============================================================

function spracheAuswaehlen(sprache) {

    aktuelleSprache = sprache;

    document
        .getElementById("sprachen")
        .classList.add("versteckt");

    document
        .getElementById("anmeldung")
        .classList.remove("versteckt");


    if (sprache === "de") {

        document.getElementById("loginTitel").textContent =
            "Anmelden";

        document.getElementById("email").placeholder =
            "E-Mail";

        document.getElementById("passwort").placeholder =
            "Passwort";

        document.getElementById("loginButton").textContent =
            "Einloggen";

        document.getElementById("registerText").textContent =
            "Noch kein Konto?";

        document.getElementById("registerButton").textContent =
            "Registrieren";
    }


    if (sprache === "en") {

        document.getElementById("loginTitel").textContent =
            "Login";

        document.getElementById("email").placeholder =
            "Email";

        document.getElementById("passwort").placeholder =
            "Password";

        document.getElementById("loginButton").textContent =
            "Sign in";

        document.getElementById("registerText").textContent =
            "Don't have an account?";

        document.getElementById("registerButton").textContent =
            "Register";
    }


    if (sprache === "ps") {

        document.getElementById("loginTitel").textContent =
            "ننوتل";

        document.getElementById("email").placeholder =
            "برېښنالیک";

        document.getElementById("passwort").placeholder =
            "پټ نوم";

        document.getElementById("loginButton").textContent =
            "ننوتل";

        document.getElementById("registerText").textContent =
            "حساب نه لرئ؟";

        document.getElementById("registerButton").textContent =
            "حساب جوړ کړئ";
    }
}


// ============================================================
// REGISTRIEREN
// ============================================================

async function registrieren() {

    const email =
        document.getElementById("email").value.trim();

    const passwort =
        document.getElementById("passwort").value;

    const meldung =
        document.getElementById("meldung");


    if (!email || !passwort) {

        meldung.textContent =
            aktuelleSprache === "en"
                ? "Please enter email and password."
                : aktuelleSprache === "ps"
                    ? "مهرباني وکړئ برېښنالیک او پټ نوم ولیکئ."
                    : "Bitte E-Mail und Passwort eingeben.";

        return;
    }


    const { error } =
        await supabaseClient.auth.signUp({
            email: email,
            password: passwort
        });


    if (error) {

        meldung.textContent = error.message;

        return;
    }


    meldung.textContent =
        aktuelleSprache === "en"
            ? "Account created successfully!"
            : aktuelleSprache === "ps"
                ? "ستاسو حساب په بریالیتوب سره جوړ شو!"
                : "Konto wurde erfolgreich erstellt!";
}


// ============================================================
// ANMELDEN
// ============================================================

async function anmelden() {

    const email =
        document.getElementById("email").value.trim();

    const passwort =
        document.getElementById("passwort").value;

    const meldung =
        document.getElementById("meldung");


    if (!email || !passwort) {

        meldung.textContent =
            aktuelleSprache === "en"
                ? "Please enter email and password."
                : aktuelleSprache === "ps"
                    ? "مهرباني وکړئ برېښنالیک او پټ نوم ولیکئ."
                    : "Bitte E-Mail und Passwort eingeben.";

        return;
    }


    const { error } =
        await supabaseClient.auth.signInWithPassword({
            email: email,
            password: passwort
        });


    if (error) {

        meldung.textContent = error.message;

        return;
    }


    document
        .getElementById("anmeldung")
        .classList.add("versteckt");

    document
        .getElementById("klassen")
        .classList.remove("versteckt");


    aktualisiereKlassenSprache();
}


// ============================================================
// KLASSEN-SPRACHE
// ============================================================

function aktualisiereKlassenSprache() {

    document.getElementById("klassenTitel").textContent =
        aktuelleSprache === "de"
            ? "Wähle deine Klasse"
            : aktuelleSprache === "en"
                ? "Choose your class"
                : "خپل ټولګی وټاکئ";


    document.getElementById("klassenText").textContent =
        aktuelleSprache === "de"
            ? "Wähle eine Klasse aus:"
            : aktuelleSprache === "en"
                ? "Select a class:"
                : "یو ټولګی وټاکئ";


    const buttons =
        document.querySelectorAll("#klassen .klassenListe button");


    buttons.forEach((button, index) => {

        const klasse = index + 5;

        if (klassen[klasse]) {
            button.textContent =
                klassen[klasse][aktuelleSprache];
        }
    });
}


// ============================================================
// KLASSE AUSWÄHLEN
// ============================================================

function klasseAuswaehlen(klasse) {

    gewaehlteKlasse = klasse;
    aktuellesThema = 0;
    aktuelleFrage = 0;


    document
        .getElementById("klassen")
        .classList.add("versteckt");

    document
        .getElementById("themen")
        .classList.remove("versteckt");


    zeigeThemen();
}


// ============================================================
// THEMEN ANZEIGEN
// ============================================================

function zeigeThemen() {

    const titel =
        document.getElementById("themenTitel");

    const liste =
        document.getElementById("themenListe");


    titel.textContent =
        aktuelleSprache === "de"
            ? "Wähle ein Thema"
            : aktuelleSprache === "en"
                ? "Choose a topic"
                : "یوه موضوع وټاکئ";


    liste.innerHTML = "";


    const klassenThemen =
        themen[gewaehlteKlasse] || [];


    klassenThemen.forEach((thema, index) => {

        const button =
            document.createElement("button");


        button.textContent =
            `${index + 1}. ${thema[aktuelleSprache]}`;


        button.onclick = function () {

            themaAuswaehlen(index);

        };


        liste.appendChild(button);
    });
}


// ============================================================
// THEMA AUSWÄHLEN
// ============================================================

function themaAuswaehlen(thema) {

    aktuellesThema = thema;
    aktuelleFrage = 0;


    document
        .getElementById("themen")
        .classList.add("versteckt");

    document
        .getElementById("aufgaben")
        .classList.remove("versteckt");


    zeigeFrage();
}


// ============================================================
// FRAGE ANZEIGEN
// ============================================================

function zeigeFrage() {

    const fragen =
        holeFragen();


    if (!fragen || fragen.length === 0) {

        document.getElementById("frageText").textContent =
            aktuelleSprache === "de"
                ? "Für dieses Thema gibt es noch keine Fragen."
                : aktuelleSprache === "en"
                    ? "There are no questions for this topic yet."
                    : "د دې موضوع لپاره تراوسه پوښتنې نشته.";

        return;
    }


    const frage =
        fragen[aktuelleFrage];


    document.getElementById("frageNummer").textContent =
        aktuelleSprache === "de"
            ? `Frage ${aktuelleFrage + 1} von ${fragen.length}`
            : aktuelleSprache === "en"
                ? `Question ${aktuelleFrage + 1} of ${fragen.length}`
                : `پوښتنه ${aktuelleFrage + 1} له ${fragen.length}`;


    document.getElementById("frageText").textContent =
        frage.frage[aktuelleSprache];


    let antworten =
        [...frage.antworten];


    const richtigeAntwort =
        antworten[frage.richtig];


    // Antworten zufällig mischen
    for (let i = antworten.length - 1; i > 0; i--) {

        const j =
            Math.floor(Math.random() * (i + 1));


        [
            antworten[i],
            antworten[j]
        ] = [
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


    document
        .getElementById("erklaerung")
        .classList.add("versteckt");


    document
        .getElementById("weiterButton")
        .classList.add("versteckt");


    antwortGegeben = false;
}


// ============================================================
// ANTWORT AUSWÄHLEN
// ============================================================

function antwortAuswaehlen(position) {

    if (antwortGegeben) {
        return;
    }


    antwortGegeben = true;


    const fragen =
        holeFragen();

    const frage =
        fragen[aktuelleFrage];


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


    erklaerung
        .classList.remove("versteckt");


    document
        .getElementById("weiterButton")
        .classList.remove("versteckt");
}


// ============================================================
// NÄCHSTE FRAGE
// ============================================================

function naechsteFrage() {

    const fragen =
        holeFragen();


    if (aktuelleFrage < fragen.length - 1) {

        aktuelleFrage++;

        zeigeFrage();

    } else {

        aufgabenFertig();
    }
}


// ============================================================
// AUFGABEN FERTIG
// ============================================================

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


    document
        .getElementById("erklaerung")
        .classList.add("versteckt");


    document
        .getElementById("weiterButton")
        .classList.add("versteckt");
}
