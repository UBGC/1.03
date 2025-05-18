function changeLanguage() {
    var languageSelect = document.getElementById("language-select");
    var selectedLanguage = languageSelect.value;
    localStorage.setItem("language",selectedLanguage);
    var button = document.getElementById("button");
    // Perform actions based on the selected language
    switch(selectedLanguage) {
        case "en":
            // English translations
            document.getElementById("language-form").querySelector("label").textContent = "Select language:";
            button.textContent = "return";
            break;
        case "pl":
            // Polish translations
            document.getElementById("language-form").querySelector("label").textContent = "Wybierz język:";
            button.textContent = "wróć";
            break;
        case "ua":
            // Ukrainian translations
            document.getElementById("language-form").querySelector("label").textContent = "Виберіть мову:";
            button.textContent = "повернутися";
            break;
        case "lt":
            // Lithuanian translations
            document.getElementById("language-form").querySelector("label").textContent = "Pasirinkite kalbą:";
            button.textContent = "grįžk";
            break;
        // Add cases for other languages
        default:
            // Default to English
            document.getElementById("language-form").querySelector("label").textContent = "Select language:";
            button.textContent = "return";
    }
} 
changeLanguage;
document.addEventListener("DOMContentLoaded", function() {
    language = localStorage.getItem("language");
    changeLanguage();
  });