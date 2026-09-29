const SUPABASE_URL = "https://yieuzinerctdldxrdivq.supabase.co/rest/v1/";
const SUPABASE_PUBLISHABLE_KEY =  "sb_publishable__1wbJQPS4FgSpqk3cL5X7w_ZndM5UWZ";

function zeigeSprachen() {
    document.getElementById("startseite").classList.add("versteckt");
    document.getElementById("sprachen").classList.remove("versteckt");
}

function spracheAuswaehlen(sprache) {
    if (sprache === "de") {
        alert("Deutsch ausgewählt!");
    }

    if (sprache === "en") {
        alert("English selected!");
    }

    if (sprache === "ps") {
        alert("پښتو وټاکل شوه!");
    }
}
