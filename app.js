// ==========================================
// SUPABASE
// ==========================================

const SUPABASE_URL ="https://yieuzinerctdldxrdivq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable__1wbJQPS4FgSpqk3cL5X7w_ZndM5UWZ";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);


// ==========================================
// APP-VARIABLEN
// ==========================================

let aktuelleSprache = "de";
let ausgewaehlteKlasse = null;


// ==========================================
// 90 THEMEN
// Deutsch / English / Pashto
// ==========================================

const themenDaten = {

    5: [
        ["Natürliche Zahlen", "Natural Numbers", "طبیعي شمېرې"],
        ["Grundrechenarten", "Basic Arithmetic", "بنسټیز حساب"],
        ["Rechnen mit Größen", "Calculating with Quantities", "له کمیتونو سره محاسبه"],
        ["Brüche", "Fractions", "کسرونه"],
        ["Dezimalzahlen", "Decimals", "اعشاري شمېرې"],
        ["Geometrische Grundformen", "Basic Geometric Shapes", "بنسټیز هندسي شکلونه"],
        ["Winkel", "Angles", "زاویې"],
        ["Flächen und Umfang", "Area and Perimeter", "مساحت او محیط"],
        ["Körper und Volumen", "Solids and Volume", "هندسي اجسام او حجم"],
        ["Sachaufgaben", "Word Problems", "لفظي مسئلې"]
    ],

    6: [
        ["Brüche und Bruchrechnen", "Fractions and Fraction Calculations", "کسرونه او د کسرونو محاسبه"],
        ["Dezimalzahlen", "Decimals", "اعشاري شمېرې"],
        ["Prozentrechnung", "Percentages", "سلنه"],
        ["Teilbarkeit und Primzahlen", "Divisibility and Prime Numbers", "د وېش وړتیا او اولي شمېرې"],
        ["Terme", "Expressions", "عبارتونه"],
        ["Gleichungen", "Equations", "معادلې"],
        ["Geometrie", "Geometry", "هندسه"],
        ["Flächen und Volumen", "Area and Volume", "مساحت او حجم"],
        ["Daten und Diagramme", "Data and Charts", "معلومات او نمودارونه"],
        ["Sachaufgaben", "Word Problems", "لفظي مسئلې"]
    ],

    7: [
        ["Rationale Zahlen", "Rational Numbers", "منطقي شمېرې"],
        ["Terme und Klammern", "Expressions and Brackets", "عبارتونه او قوسونه"],
        ["Lineare Gleichungen", "Linear Equations", "خطې معادلې"],
        ["Proportionalität", "Proportionality", "تناسب"],
        ["Prozentrechnung", "Percentages", "سلنه"],
        ["Dreiecke und Winkel", "Triangles and Angles", "مثلثونه او زاویې"],
        ["Flächen und Volumen", "Area and Volume", "مساحت او حجم"],
        ["Zuordnungen", "Mappings and Relations", "اړیکې"],
        ["Daten und Wahrscheinlichkeit", "Data and Probability", "معلومات او احتمال"],
        ["Sachaufgaben", "Word Problems", "لفظي مسئلې"]
    ],

    8: [
        ["Lineare Funktionen", "Linear Functions", "خطې دندې"],
        ["Lineare Gleichungen", "Linear Equations", "خطې معادلې"],
        ["Terme und Binome", "Expressions and Binomials", "عبارتونه او دوه‌حدي عبارتونه"],
        ["Bruchterme", "Algebraic Fractions", "جبري کسرونه"],
        ["Prozent- und Zinsrechnung", "Percentages and Interest", "سلنه او سود"],
        ["Satz des Pythagoras", "Pythagorean Theorem", "د فیثاغورس قضیه"],
        ["Prismen und Zylinder", "Prisms and Cylinders", "منشورونه او سلنډرونه"],
        ["Wahrscheinlichkeit", "Probability", "احتمال"],
        ["Statistik", "Statistics", "احصایه"],
        ["Sachaufgaben", "Word Problems", "لفظي مسئلې"]
    ],

    9: [
        ["Quadratische Funktionen", "Quadratic Functions", "دوهم‌درجې دندې"],
        ["Quadratische Gleichungen", "Quadratic Equations", "دوهم‌درجې معادلې"],
        ["Potenzen und Wurzeln", "Powers and Roots", "توانونه او ریښې"],
        ["Ähnlichkeit", "Similarity", "ورته‌والی"],
        ["Satz des Pythagoras", "Pythagorean Theorem", "د فیثاغورس قضیه"],
        ["Trigonometrie", "Trigonometry", "مثلثاتي محاسبه"],
        ["Kreis und Zylinder", "Circle and Cylinder", "دایره او سلنډر"],
        ["Wahrscheinlichkeitsrechnung", "Probability Calculations", "د احتمال محاسبه"],
        ["Statistik", "Statistics", "احصایه"],
        ["Funktionen und Anwendungen", "Functions and Applications", "دندې او عملي کارونې"]
    ],

    10: [
        ["Quadratische Funktionen", "Quadratic Functions", "دوهم‌درجې دندې"],
        ["Quadratische Gleichungen", "Quadratic Equations", "دوهم‌درجې معادلې"],
        ["Potenzfunktionen", "Power Functions", "تواني دندې"],
        ["Exponentialfunktionen", "Exponential Functions", "نمایي دندې"],
        ["Logarithmen", "Logarithms", "لوګاریتمونه"],
        ["Trigonometrie", "Trigonometry", "مثلثاتي محاسبه"],
        ["Sinus und Kosinus", "Sine and Cosine", "سینوس او کوسینوس"],
        ["Analytische Geometrie", "Analytic Geometry", "تحلیلي هندسه"],
        ["Stochastik", "Stochastics", "احتمالات"],
        ["Modellierung und Sachaufgaben", "Modelling and Word Problems", "ماډل جوړونه او لفظي مسئلې"]
    ],

    11: [
        ["Grundlagen der Analysis", "Fundamentals of Analysis", "د تحلیل اساسات"],
        ["Funktionen", "Functions", "دندې"],
        ["Grenzwerte", "Limits", "حدونه"],
        ["Differentialrechnung", "Differential Calculus", "تفاضلي محاسبه"],
        ["Ableitungsregeln", "Rules of Differentiation", "د مشتق قواعد"],
        ["Kurvendiskussion", "Curve Analysis", "د منحني تحلیل"],
        ["Integralrechnung", "Integral Calculus", "انتګرالي محاسبه"],
        ["Analytische Geometrie", "Analytic Geometry", "تحلیلي هندسه"],
        ["Stochastik", "Stochastics", "احتمالات"],
        ["Wahrscheinlichkeitsverteilungen", "Probability Distributions", "د احتمال وېشونه"]
    ],

    12: [
        ["Funktionen und Analysis", "Functions and Analysis", "دندې او تحلیل"],
        ["Differentialrechnung", "Differential Calculus", "تفاضلي محاسبه"],
        ["Kurvendiskussion", "Curve Analysis", "د منحني تحلیل"],
        ["Integralrechnung", "Integral Calculus", "انتګرالي محاسبه"],
        ["Exponentialfunktionen", "Exponential Functions", "نمایي دندې"],
        ["Logarithmusfunktionen", "Logarithmic Functions", "لوګاریتمي دندې"],
        ["Vektorrechnung", "Vector Calculus", "د ویکتورونو محاسبه"],
        ["Geraden und Ebenen", "Lines and Planes", "مستقیمې کرښې او سطحې"],
        ["Stochastik", "Stochastics", "احتمالات"],
        ["Wahrscheinlichkeitsverteilungen", "Probability Distributions", "د احتمال وېشونه"]
    ],

    13: [
        ["Analysis – Funktionen und Kurvendiskussion", "Analysis – Functions and Curve Analysis", "تحلیل – دندې او د منحني تحلیل"],
        ["Differentialrechnung", "Differential Calculus", "تفاضلي محاسبه"],
        ["Integralrechnung", "Integral Calculus", "انتګرالي محاسبه"],
        ["Exponential- und Logarithmusfunktionen", "Exponential and Logarithmic Functions", "نمایي او لوګاریتمي دندې"],
        ["Analytische Geometrie – Vektoren", "Analytic Geometry – Vectors", "تحلیلي هندسه – ویکتورونه"],
        ["Geraden und Ebenen", "Lines and Planes", "مستقیمې کرښې او سطحې"],
        ["Abstände und Winkel im Raum", "Distances and Angles in Space", "په فضا کې واټنونه او زاویې"],
        ["Stochastik – Wahrscheinlichkeitsrechnung", "Stochastics – Probability", "احتمالات"],
        ["Binomialverteilung und Normalverteilung", "Binomial and Normal Distribution", "بینومي او نورمال وېش"],
        ["Statistik und Hypothesentests", "Statistics and Hypothesis Testing", "احصایه او د فرضیې ازموینې"]
    ]
};


// ==========================================
// STARTSEITE
// ==========================================

function zeigeSprachen() {

    document.getElementById("startseite").classList.add("versteckt");
    document.getElementById("sprachen").classList.remove("versteckt");
}


// ==========================================
// SPRACHE AUSWÄHLEN
// ==========================================

function spracheAuswaehlen(sprache) {

    aktuelleSprache = sprache;

    document.getElementById("sprachen").classList.add("versteckt");
    document.getElementById("anmeldung").classList.remove("versteckt");


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


// ==========================================
// REGISTRIEREN
// ==========================================

async function registrieren() {

    const email = document.getElementById("email").value.trim();
    const passwort = document.getElementById("passwort").value;
    const meldung = document.getElementById("meldung");


    if (!email || !passwort) {

        if (aktuelleSprache === "en") {
            meldung.textContent = "Please enter email and password.";
        }

        else if (aktuelleSprache === "ps") {
            meldung.textContent = "مهرباني وکړئ برېښنالیک او پټ نوم ولیکئ.";
        }

        else {
            meldung.textContent = "Bitte E-Mail und Passwort eingeben.";
        }

        return;
    }


    const { error } = await supabaseClient.auth.signUp({
        email: email,
        password: passwort
    });


    if (error) {
        meldung.textContent = error.message;
        return;
    }


    if (aktuelleSprache === "en") {
        meldung.textContent = "Account created successfully!";
    }

    else if (aktuelleSprache === "ps") {
        meldung.textContent = "ستاسو حساب په بریالیتوب سره جوړ شو!";
    }

    else {
        meldung.textContent = "Konto wurde erfolgreich erstellt!";
    }
}


// ==========================================
// ANMELDEN
// ==========================================

async function anmelden() {

    const email = document.getElementById("email").value.trim();
    const passwort = document.getElementById("passwort").value;
    const meldung = document.getElementById("meldung");


    if (!email || !passwort) {

        if (aktuelleSprache === "en") {
            meldung.textContent = "Please enter email and password.";
        }

        else if (aktuelleSprache === "ps") {
            meldung.textContent = "مهرباني وکړئ برېښنالیک او پټ نوم ولیکئ.";
        }

        else {
            meldung.textContent = "Bitte E-Mail und Passwort eingeben.";
        }

        return;
    }


    const { error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: passwort
    });


    if (error) {
        meldung.textContent = error.message;
        return;
    }


    document.getElementById("anmeldung").classList.add("versteckt");
    document.getElementById("klassen").classList.remove("versteckt");

    klassenSpracheSetzen();
}


// ==========================================
// KLASSENSPRACHE
// ==========================================

function klassenSpracheSetzen() {

    const buttons = document.querySelectorAll(".klassenListe button");


    if (aktuelleSprache === "de") {

        document.getElementById("klassenTitel").textContent =
            "Wähle deine Klasse";

        document.getElementById("klassenText").textContent =
            "Wähle eine Klasse aus:";

        buttons[0].textContent = "Klasse 5";
        buttons[1].textContent = "Klasse 6";
        buttons[2].textContent = "Klasse 7";
        buttons[3].textContent = "Klasse 8";
        buttons[4].textContent = "Klasse 9";
        buttons[5].textContent = "Klasse 10";
        buttons[6].textContent = "Klasse 11";
        buttons[7].textContent = "Klasse 12";
        buttons[8].textContent = "Klasse 13 / Abitur";
    }


    if (aktuelleSprache === "en") {

        document.getElementById("klassenTitel").textContent =
            "Choose your class";

        document.getElementById("klassenText").textContent =
            "Select a class:";

        buttons[0].textContent = "Grade 5";
        buttons[1].textContent = "Grade 6";
        buttons[2].textContent = "Grade 7";
        buttons[3].textContent = "Grade 8";
        buttons[4].textContent = "Grade 9";
        buttons[5].textContent = "Grade 10";
        buttons[6].textContent = "Grade 11";
        buttons[7].textContent = "Grade 12";
        buttons[8].textContent = "Grade 13 / Abitur";
    }


    if (aktuelleSprache === "ps") {

        document.getElementById("klassenTitel").textContent =
            "خپل ټولګی وټاکئ";

        document.getElementById("klassenText").textContent =
            "یو ټولګی وټاکئ:";

        buttons[0].textContent = "پنځم ټولګی";
        buttons[1].textContent = "شپږم ټولګی";
        buttons[2].textContent = "اووم ټولګی";
        buttons[3].textContent = "اتم ټولګی";
        buttons[4].textContent = "نهم ټولګی";
        buttons[5].textContent = "لسم ټولګی";
        buttons[6].textContent = "یوولسم ټولګی";
        buttons[7].textContent = "دولسم ټولګی";
        buttons[8].textContent = "دیارلسم ټولګی / ابیتور";
    }
}


// ==========================================
// KLASSE AUSWÄHLEN
// ==========================================

function klasseAuswaehlen(klasse) {

    ausgewaehlteKlasse = klasse;

    document.getElementById("klassen").classList.add("versteckt");
    document.getElementById("themen").classList.remove("versteckt");

    themenAnzeigen(klasse);
}


// ==========================================
// THEMEN ANZEIGEN
// ==========================================

function themenAnzeigen(klasse) {

    const titel = document.getElementById("themenTitel");
    const text = document.getElementById("themenText");

    const buttons = document.querySelectorAll(".themenListe button");

    const themen = themenDaten[klasse];


    if (aktuelleSprache === "de") {

        titel.textContent =
            klasse === 13 ? "Klasse 13 / Abitur" : "Klasse " + klasse;

        text.textContent =
            "Wähle ein Thema:";
    }


    if (aktuelleSprache === "en") {

        titel.textContent =
            klasse === 13 ? "Grade 13 / Abitur" : "Grade " + klasse;

        text.textContent =
            "Choose a topic:";
    }


    if (aktuelleSprache === "ps") {

        titel.textContent =
            klasse === 13
                ? "دیارلسم ټولګی / ابیتور"
                : "د " + klasse + " ټولګی";

        text.textContent =
            "یوه موضوع وټاکئ:";
    }


    for (let i = 0; i < 10; i++) {

        buttons[i].textContent = themen[i][
            aktuelleSprache === "de"
                ? 0
                : aktuelleSprache === "en"
                    ? 1
                    : 2
        ];


        buttons[i].onclick = function () {

            themaAuswaehlen(
                klasse,
                i + 1
            );

        };
    }
}


// ==========================================
// THEMA AUSWÄHLEN
// ==========================================

function themaAuswaehlen(klasse, themaNummer) {

    const meldung =
        document.getElementById("themenMeldung");

    const thema =
        themenDaten[klasse][themaNummer - 1];


    if (meldung) {

        const themaName =
            thema[
                aktuelleSprache === "de"
                    ? 0
                    : aktuelleSprache === "en"
                        ? 1
                        : 2
            ];


        if (aktuelleSprache === "de") {

            meldung.textContent =
                themaName + " ausgewählt.";

        }

        else if (aktuelleSprache === "en") {

            meldung.textContent =
                themaName + " selected.";

        }

        else {

            meldung.textContent =
                themaName + " وټاکل شو.";
        }
    }


    console.log(
        "Klasse:",
        klasse,
        "Thema:",
        themaNummer
    );
}
