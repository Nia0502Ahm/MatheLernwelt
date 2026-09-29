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
