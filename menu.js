var language = localStorage.getItem("language");
var play = document.getElementById("play");
var about = document.getElementById("about");
var lang = document.getElementById("lang");
var newer = document.getElementById("newer");

if (play && about && lang && newer) {
  function langu(){
    switch(language){
      case "en":
        play.innerText = "Play";
        about.innerText = "About game";
        lang.innerText = "Another languages";
        newer.innerText = "Version available since 15 June 2025";
        break;
      case "pl":
        play.innerText = "Graj";
        about.innerText = "O grze";
        lang.innerText = "Inne języki";
        newer.innerText = "Wersja dostępna od 15 czerwca 2025";
        break;
      case "ua":
        play.innerText = "Грати";
        about.innerText = "Про гру";
        lang.innerText = "Інші мови";
        newer.innerText = "Версія доступна від 15 червня 2025";
        break;
	  case "lt":
		play.innerText = "Žaisk";
		about.innerText = "Apie žaidimą";
		lang.innerText = "Kitos kalbos";
		newer.innerText = "Versija, kuri bus prieinama nuo 15 birželio 2025";
		break;
	  case "de":
		play.innerText = "Spielen";
		about.innerText = "Über das Spiel";
		lang.innerText = "Andere Sprachen";
		newer.innerText = "Version verfügbar seit 15. Juni 2025";
		break;
	  case "es":
		play.innerText = "Jugar";
		about.innerText = "Sobre el juego";
		lang.innerText = "Otros idiomas";
		newer.innerText = "Versión disponible desde el 15 de junio de 2025";
		break;
	  case "fr":
		play.innerText = "Jouer";
		about.innerText = "À propos du jeu";
		lang.innerText = "Autres langues";
		newer.innerText = "Version disponible depuis le 15 juin 2025";
		break;
      default:
        play.innerText = "Play";
        about.innerText = "About game";
        lang.innerText = "Another languages";
        newer.innerText = "Version available since 18 May 2025";
        break;
    }
  }
  document.addEventListener("DOMContentLoaded", function() {
    langu();
  });
} else {
  console.error("One or more elements not found");
}
