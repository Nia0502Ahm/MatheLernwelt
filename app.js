// ==========================================
// SUPABASE
// ==========================================

const SUPABASE_URL = "https://yieuzinerctdldxrdivq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable__1wbJQPS4FgSpqk3cL5X7w_ZndM5UWZ";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

// Aktuelle Sprache
let aktuelleSprache = "de";


// ==========================================
// STARTSEITE → SPRACHAUSWAHL
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


// ==========================================
// REGISTRIEREN
// ==========================================

async function registrieren() {

    const email =
        document.getElementById("email").value.trim();

    const passwort =
        document.getElementById("passwort").value;

    const meldung =
        document.getElementById("meldung");


    if (!email || !passwort) {

        if (aktuelleSprache === "en") {
            meldung.textContent =
                "Please enter email and password.";
        }

        else if (aktuelleSprache === "ps") {
            meldung.textContent =
                "مهرباني وکړئ برېښنالیک او پټ نوم ولیکئ.";
        }

        else {
            meldung.textContent =
                "Bitte E-Mail und Passwort eingeben.";
        }

        return;
    }


    const { data, error } =
        await supabaseClient.auth.signUp({
            email: email,
            password: passwort
        });


    if (error) {

        meldung.textContent = error.message;

        return;
    }


    if (aktuelleSprache === "en") {

        meldung.textContent =
            "Account created successfully!";
    }

    else if (aktuelleSprache === "ps") {

        meldung.textContent =
            "ستاسو حساب په بریالیتوب سره جوړ شو!";
    }

    else {

        meldung.textContent =
            "Konto wurde erfolgreich erstellt!";
    }
}


// ==========================================
// ANMELDEN
// ==========================================

async function anmelden() {

    const email =
        document.getElementById("email").value.trim();

    const passwort =
        document.getElementById("passwort").value;

    const meldung =
        document.getElementById("meldung");


    if (!email || !passwort) {

        if (aktuelleSprache === "en") {

            meldung.textContent =
                "Please enter email and password.";
        }

        else if (aktuelleSprache === "ps") {

            meldung.textContent =
                "مهرباني وکړئ برېښنالیک او پټ نوم ولیکئ.";
        }

        else {

            meldung.textContent =
                "Bitte E-Mail und Passwort eingeben.";
        }

        return;
    }


    const { data, error } =
        await supabaseClient.auth.signInWithPassword({
            email: email,
            password: passwort
        });


    if (error) {

        meldung.textContent = error.message;

        return;
    }


    // ==========================================
    // LOGIN ERFOLGREICH
    // → KLASSENAUSWAHL ANZEIGEN
    // ==========================================

    document
        .getElementById("anmeldung")
        .classList.add("versteckt");

    document
        .getElementById("klassen")
        .classList.remove("versteckt");


    // Deutsch

    if (aktuelleSprache === "de") {

        document.getElementById("klassenTitel").textContent =
            "Wähle deine Klasse";

        document.getElementById("klassenText").textContent =
            "Wähle eine Klasse aus:";
    }


    // English

    if (aktuelleSprache === "en") {

        document.getElementById("klassenTitel").textContent =
            "Choose your class";

        document.getElementById("klassenText").textContent =
            "Select a class:";
    }


    // Pashto

    if (aktuelleSprache === "ps") {

        document.getElementById("klassenTitel").textContent =
            "خپل ټولګی وټاکئ";

        document.getElementById("klassenText").textContent =
            "یو ټولګی وټاکئ:";
    }
}


// ==========================================
// KLASSE AUSWÄHLEN
// ==========================================

function klasseAuswaehlen(klasse) {

    const meldung =
        document.getElementById("klassenMeldung");


    if (aktuelleSprache === "en") {

        meldung.textContent =
            "Class " + klasse + " selected!";
    }


    else if (aktuelleSprache === "ps") {

        meldung.textContent =
            "ټولګی " + klasse + " وټاکل شو!";
    }


    else {

        meldung.textContent =
            "Klasse " + klasse + " ausgewählt!";
    }
}
