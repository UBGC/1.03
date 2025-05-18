var language = localStorage.getItem("language");
var info = document.getElementById("info");
var naglowek = document.getElementById("naglowek");
var tutor = document.getElementById("tutor");
var contact = document.getElementById("contact");
var channel = document.getElementById("channel");

switch(language) {
    case "en":
        info.innerHTML = "Ultrabattleground is a computer strategic game, made on programming languages like, Javascript, HTML and more, by polish teenager.<br>That game is new, so expect bugs.<br> If you notice any bug, please contact with developer.";
        naglowek.innerHTML = "Tutorial";
        tutor.innerHTML = "At the start of new game you choose nation ,which will be under your ruling until your victory... ,or your fairule.<br>Every 10 seconds your country gets money based on income. Basic income is (number of provinces * 10).<br>To move map, use WASD keys. To see info about any province, click it.<br>You can also mobilize army, but without enough money it won't get mobilized at all<br>Army always performs your orders.";
        contact.innerHTML = "Contact";
        channel.innerHTML = "Youtube Channel";
    break;
    case "pl":
        info.innerHTML = "Ultrabattleground to strategiczna gra komputerowa, stworzona w językach programowania takich jak Javascript, HTML i więcej, przez polskiego nastolatka.<br>Ta gra jest nowa, więc spodziewaj się błędów.<br>Jeśli zauważysz jakiś błąd skontaktuj się z deweloperem";
        naglowek.innerHTML = "Tutorial";
        tutor.innerHTML = "Na początku nowej gry wybierasz nację, która będzie pod twoim panowaniem aż do twojego zwycięstwa... ,lub porażki<br>Co 10 sekund twój kraj otrzymuje pieniądze na podstawie przychodu. Podstawowy przychód  to: (liczba prowincji * 10).<br> Aby przesunąć mapę użyj klawiszy WASD. Aby zobaczyć informacje o prowincji naciśnij na nią.<br>Możesz także zmobilizować armię, ale bez wystarczających pieniędzy,w ogóle nie zostaną zmobilizowane.<br>Armia zawsze wykonuje twoje rozkazy.";
        contact.innerHTML = "Kontakt";
        channel.innerHTML = "Kanał na YouTubie";
   break;
   case "ua":
        info.innerHTML = "Ultrabattleground — це стратегічна комп’ютерна гра, створена з використанням мов програмування, таких як JavaScript, HTML та інших, польським підлітком.<br>Це нова гра, тож очікуйте помилок.<br>Якщо ви помітите якусь помилку — зв’яжіться з розробником.";
        naglowek.innerHTML = "Туторял";
        tutor.innerHTML = "На початку нової гри ти обираєш націю, яка буде під твоїм контролем аж до твоєї перемоги… або поразки.<br>Кожні 10 секунд твоя країна отримує гроші залежно від прибутку. Базовий прибуток: (кількість провінцій * 10).<br>Щоб пересувати карту, використовуй клавіші WASD. Щоб побачити інформацію про провінцію — натисни на неї.<br>Ти також можеш мобілізувати армію, але без достатньої кількості грошей вона взагалі не буде мобілізована.<br>Армія завжди виконує твої накази";
        contact.innerHTML = "Контакт";
        channel.innerHTML = "Канал на YouTube";
    break;
    case "lt":
        info.innerHTML = "Ultrabattleground yra strateginis kompiuterinis žaidimas, sukurtas naudojant programavimo kalbas, tokias kaip JavaScript, HTML ir kitas, lenkų paauglio.<br>Šis žaidimas yra naujas, todėl tikėkitės klaidų.<br>Jei pastebėsite kokių nors klaidų, susisiekite su kūrėju.";
        naglowek.innerHTML = "Pamoka";
        tutor.innerHTML = "Naujo žaidimo pradžioje pasirenki tautą, kuri bus tavo valdžioje iki tavo pergalės... arba pralaimėjimo.<br>Kiekvienas 10 sekundžių tavo šalis gauna pinigų pagal pajamas. Pagrindinės pajamos: (provincijų skaičius * 10).<br>Norėdamas perkelti žemėlapį, naudok WASD klavišus. Norėdamas pamatyti informaciją apie provinciją — spustelėk ją.<br>Taip pat gali mobilizuoti kariuomenę, bet jei neturi pakankamai pinigų, ji apskritai nebus mobilizuota.<br>Kariuomenė visada vykdo tavo įsakymus.";
        contact.innerHTML = "Kontaktas";
        channel.innerHTML = "Youtube kanalas";
    break;
    default:
        info.innerHTML = "Ultrabattleground is a computer strategic game, made on programming languages like, Javascript, HTML and more, by polish teenager.<br>That game is new, so expect bugs.<br> If you notice any bug, please contact with developer.";
        naglowek.innerHTML = "Tutorial";
        tutor.innerHTML = "At the start of new game you choose nation ,which will be under your ruling until your victory... ,or your fairule.<br>Every 10 seconds your country gets money based on income. Basic income is (number of provinces * 10).<br>To move map, use WASD keys. To see info about any province, click it.<br>You can also mobilize army, but without enough money it won't get mobilized at all<br>Army always performs your orders.";
        contact.innerHTML = "Contact";
        channel.innerHTML = "Youtube Channel";
}