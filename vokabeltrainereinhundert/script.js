
// Array mit Vokabeln und Übersetzungen
let vocabularyList = [
    { vocabulary: "tree", translation: "baum" },
    { vocabulary: "plötzlich", translation: "suddenly" },
    { vocabulary: "Tisch", translation: "table" },
    { vocabulary: "Himmel", translation: "heaven" },
    { vocabulary: "Auto", translation: "car" },



    // Weitere Vokabeln hinzufügen...
];

let currentIndex = 0;

// Funktion, um die nächste Vokabel anzuzeigen
function displayFlashcard() {
    document.getElementById("vocabulary").textContent = vocabularyList[currentIndex].vocabulary;
    document.getElementById("translationInput").value = "";
    document.getElementById("feedback").textContent = "";
}

// Funktion, um die eingegebene Übersetzung zu überprüfen
function checkTranslation() {
    let translationInput = document.getElementById("translationInput").value.toLowerCase();
    let correctTranslation = vocabularyList[currentIndex].translation.toLowerCase();

    if (translationInput === correctTranslation) {
        document.getElementById("feedback").textContent = "Richtig!";
    } else {
        document.getElementById("feedback").textContent = "Falsch. Die richtige Übersetzung lautet: " + correctTranslation;
    }
}

// Funktion, um zur nächsten Vokabel zu wechseln und die Notizen zu aktualisieren
function nextFlashcard() {
    currentIndex = (currentIndex + 1) % vocabularyList.length;
    displayFlashcard();
    updateNotes();
}

// Funktion, um die Notizen für die aktuelle Vokabel zu aktualisieren
function updateNotes() {
    let vocabulary = vocabularyList[currentIndex].vocabulary;
    let notesTextarea = document.getElementById("notesTextarea");
    let storedNotes = localStorage.getItem(vocabulary);

    if (storedNotes) {
        notesTextarea.value = storedNotes;
    } else {
        notesTextarea.value = "";
    }
}

// Funktion, um die Notizen zu speichern, wenn der Benutzer die Seite verlässt
window.addEventListener("beforeunload", function() {
    let vocabulary = vocabularyList[currentIndex].vocabulary;
    let notesTextarea = document.getElementById("notesTextarea");
    localStorage.setItem(vocabulary, notesTextarea.value);
});

// Seite initialisieren
displayFlashcard();
updateNotes();