// Deine Supabase-Daten
const SUPABASE_URL = "https://yieuzinerctdldxrdivq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable__1wbJQPS4FgSpqk3cL5X7w_ZndM5UWZ";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

let aktuelleSprache = "de";

// Start → Sprachauswahl
function zeigeSprachen() {
    document.getElementById("startseite").classList.add("versteckt");
    document.getElementById("sprachen").classList.remove("versteckt");
}

// Sprache auswählen
function spracheAuswaehlen(sprache) {
    aktuelleSprache = sprache;

    document.getElementById("sprachen").classList.add("versteckt");
    document.getElementById("anmeldung").classList.remove("versteckt");

    if (sprache === "de") {
        document.getElementById("sprachTitel").textContent = "Sprache auswählen";
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

// Neues Konto erstellen
async function registrieren() {
    const email = document.getElementById("email").value;
    const passwort = document.getElementById("passwort").value;
    const meldung = document.getElementById("meldung");

    if (!email || !passwort) {
        meldung.textContent = "Bitte E-Mail und Passwort eingeben.";
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

    meldung.textContent =
        aktuelleSprache === "en"
            ? "Account created successfully!"
            : aktuelleSprache === "ps"
            ? "ستاسو حساب جوړ شو!"
            : "Konto wurde erstellt!";
}

// Einloggen
async function anmelden() {
    const email = document.getElementById("email").value;
    const passwort = document.getElementById("passwort").value;
    const meldung = document.getElementById("meldung");

    const { error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: passwort
    });

    if (error) {
        meldung.textContent = error.message;
        return;
    }

    meldung.textContent =
        aktuelleSprache === "en"
            ? "Login successful!"
            : aktuelleSprache === "ps"
            ? "په بریالیتوب سره ننوتل!"
            : "Erfolgreich eingeloggt!";
}
