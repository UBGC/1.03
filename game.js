function setColor(hexagons) {
    // Color hexagons in rows 0 to 2, column 1 to 3
    for (let row = 1; row < 4; row++) {
        hexagons[0][row].style.backgroundColor = '#BA0C2F';
    }
    // Color hexagons in row 1, columns 0 to 2
    for (let row = 4; row < 7; row++) {
        hexagons[0][row].style.backgroundColor = '#FECC02';
    }

    // Color hexagons in rows 9 to 13, column 0
    for (let row = 9; row < 14; row++) {
        hexagons[0][row].style.backgroundColor = '#002F6C';
    }

    // Color hexagons in rows 14 to 15, column 0
    for (let row = 14; row < 17; row++) {
        hexagons[0][row].style.backgroundColor = '#0036A7';
    }

    // Color hexagons in rows 18 to 19, column 0
    for (let row = 18; row < 20; row++) {
        hexagons[0][row].style.backgroundColor = '#0036A7';
    }
    for (let row = 1; row < 4; row++) {
        hexagons[1][row].style.backgroundColor = '#BA0C2F';
    }
    for (let row = 4; row < 6; row++) {
        hexagons[1][row].style.backgroundColor = '#FECC02';
    }
    for (let row = 9; row < 13; row++) {
        hexagons[1][row].style.backgroundColor = '#002F6C';
    }
    for (let row = 13; row < 16; row++) {
        hexagons[1][row].style.backgroundColor = '#0036A7';
    }
    for (let row = 17; row < 20; row++) {
        hexagons[1][row].style.backgroundColor = '#0036A7';
    }
    for (let row = 1; row < 4; row++) {
        hexagons[2][row].style.backgroundColor = '#BA0C2F';
    }
    for (let row = 4; row < 7; row++) {
        hexagons[2][row].style.backgroundColor = '#FECC02';
    }
    hexagons[2][8].style.backgroundColor = '#002F6C'
    for (let row = 10; row < 13; row++) {
        hexagons[2][row].style.backgroundColor = '#002F6C';
    }
    hexagons[2][14].style.backgroundColor = '#0036A7';
    for (let row = 16; row < 20; row++) {
        hexagons[2][row].style.backgroundColor = '#0036A7';
    }
    for (let row = 1; row < 3; row++) {
        hexagons[3][row].style.backgroundColor = '#BA0C2F';
    }
    for (let row = 4; row < 7; row++) {
        hexagons[3][row].style.backgroundColor = '#FECC02';
    }
    for (let row = 13; row < 20; row++) {
        hexagons[3][row].style.backgroundColor = '#0036A7';
    }
    hexagons[4][2].style.backgroundColor = '#BA0C2F';
    for (let row = 4; row < 7; row++) {
        hexagons[4][row].style.backgroundColor = '#FECC02';
    }
    hexagons[4][10].style.backgroundColor = '#0072CE';
    hexagons[4][12].style.backgroundColor = '#0072CE';
    hexagons[4][13].style.backgroundColor = '#0072CE';
    for (let row = 14; row < 20; row++) {
        hexagons[4][row].style.backgroundColor = '#0036A7';
    }
    for (let row = 4; row < 7; row++) {
        hexagons[5][row].style.backgroundColor = '#FECC02';
    }
    hexagons[5][12].style.backgroundColor = '#0072CE';
    hexagons[5][13].style.backgroundColor = '#0072CE';
    for (let row = 14; row < 20; row++) {
        hexagons[5][row].style.backgroundColor = '#0036A7';
    }
    hexagons[6][2].style.backgroundColor = '#C8102E';
    for (let row = 4; row < 7; row++) {
        hexagons[6][row].style.backgroundColor = '#FECC02';
    }
    hexagons[6][8].style.backgroundColor = '#FECC02';
    hexagons[6][10].style.backgroundColor = '#A4343A';
    hexagons[6][12].style.backgroundColor = '#A4343A';
    hexagons[6][13].style.backgroundColor = '#A4343A';
    for (let row = 14; row < 20; row++) {
        hexagons[6][row].style.backgroundColor = '#0036A7';
    }
    hexagons[7][1].style.backgroundColor = '#C8102E';
    hexagons[7][3].style.backgroundColor = '#C8102E';
    for (let row = 4; row < 7; row++) {
        hexagons[7][row].style.backgroundColor = '#FECC02';
    }
    hexagons[7][8].style.backgroundColor = '#FECC02';
    for (let row = 10; row < 14; row++) {
        hexagons[7][row].style.backgroundColor = '#A4343A';
    }
    for (let row = 14; row < 20; row++) {
        hexagons[7][row].style.backgroundColor = '#0036A7';
    }
    hexagons[8][2].style.backgroundColor = '#C8102E';
    hexagons[8][6].style.backgroundColor = '#FECC02';
    hexagons[8][5].style.backgroundColor = '#FECC02';
    for (let row = 10; row < 14; row++) {
        hexagons[8][row].style.backgroundColor = '#046A38';
    }
    hexagons[8][14].style.backgroundColor = '#00AF66';
    hexagons[8][15].style.backgroundColor = '#00AF66';
    for (let row = 16; row < 20; row++) {
        hexagons[8][row].style.backgroundColor = '#0036A7';
    }
    hexagons[9][2].style.backgroundColor = '#000000';
    hexagons[9][9].style.backgroundColor = '#0036A7';
    hexagons[9][10].style.backgroundColor = '#0036A7';
    hexagons[9][11].style.backgroundColor = '#046A38';
    hexagons[9][12].style.backgroundColor = '#046A38';
    for (let row = 13; row < 16; row++) {
        hexagons[9][row].style.backgroundColor = '#00AF66';
    }
    for (let row = 16; row < 20; row++) {
        hexagons[9][row].style.backgroundColor = '#0036A7';
    }
    for (let row = 1; row < 5; row++) {
        hexagons[10][row].style.backgroundColor = '#000000';
    }
    hexagons[10][0].style.backgroundColor = '#003DA5';
    hexagons[10][7].style.backgroundColor = '#DC143C';
    for (let row = 9; row < 12; row++) {
        hexagons[10][row].style.backgroundColor = '#DC143C';
    }
    hexagons[10][12].style.backgroundColor = '#046A38';
    for (let row = 13; row < 16; row++) {
        hexagons[10][row].style.backgroundColor = '#00AF66';
    }
    for (let row = 16; row < 20; row++) {
        hexagons[10][row].style.backgroundColor = '#0036A7';
    }
    hexagons[11][0].style.backgroundColor = '#003DA5';
    for (let row = 1; row < 5; row++) {
        hexagons[11][row].style.backgroundColor = '#000000';
    }
    for (let row = 5; row < 12; row++) {
        hexagons[11][row].style.backgroundColor = '#DC143C';
    }
    for (let row = 12; row < 16; row++) {
        hexagons[11][row].style.backgroundColor = '#00AF66';
    }
    for (let row = 16; row < 20; row++) {
        hexagons[11][row].style.backgroundColor = '#0036A7';
    }
    hexagons[12][0].style.backgroundColor = '#003DA5';
    for (let row = 1; row < 5; row++) {
        hexagons[12][row].style.backgroundColor = '#000000';
    }
    for (let row = 5; row < 12; row++) {
        hexagons[12][row].style.backgroundColor = '#DC143C';
    }
    for (let row = 12; row < 16; row++) {
        hexagons[12][row].style.backgroundColor = '#00AF66';
    }
    for (let row = 16; row < 20; row++) {
        hexagons[12][row].style.backgroundColor = '#0036A7';
    }
    hexagons[13][0].style.backgroundColor = '#FFCD00';
    for (let row = 1; row < 5; row++) {
        hexagons[13][row].style.backgroundColor = '#000000';
    }
    for (let row = 5; row < 12; row++) {
        hexagons[13][row].style.backgroundColor = '#DC143C';
    }
    for (let row = 12; row < 19; row++) {
        hexagons[13][row].style.backgroundColor = '#FFDD00';
    }
    hexagons[13][19].style.backgroundColor = '#0036A7';
    hexagons[14][0].style.backgroundColor = '#51ADDA';
    for (let row = 1; row < 5; row++) {
        hexagons[14][row].style.backgroundColor = '#000000';
    }
    for (let row = 5; row < 12; row++) {
        hexagons[14][row].style.backgroundColor = '#DC143C';
    }
    for (let row = 12; row < 20; row++) {
        hexagons[14][row].style.backgroundColor = '#FFDD00';
    }
    hexagons[15][0].style.backgroundColor = '#000091';
    for (let row = 1; row < 4; row++) {
        hexagons[15][row].style.backgroundColor = '#000000';
    }
    hexagons[15][4].style.backgroundColor = '#11457E';
    hexagons[15][5].style.backgroundColor = '#11457E';
    for (let row = 6; row < 12; row++) {
        hexagons[15][row].style.backgroundColor = '#DC143C';
    }
    for (let row = 12; row < 20; row++) {
        hexagons[15][row].style.backgroundColor = '#FFDD00';
    }
    hexagons[16][0].style.backgroundColor = '#000091';
    hexagons[16][1].style.backgroundColor = '#000091';
    for (let row = 4; row < 8; row++) {
        hexagons[16][row].style.backgroundColor = '#11457E';
    }
    hexagons[16][2].style.backgroundColor = '#000000';
    hexagons[16][3].style.backgroundColor = '#000000';
    for (let row = 12; row < 20; row++) {
        hexagons[16][row].style.backgroundColor = '#FFDD00';
    }
    hexagons[17][0].style.backgroundColor = '#000091';
    hexagons[17][1].style.backgroundColor = '#000000';
    for (let row = 4; row < 8; row++) {
        hexagons[17][row].style.backgroundColor = '#11457E';
    }
    hexagons[17][2].style.backgroundColor = '#000000';
    hexagons[17][3].style.backgroundColor = '#000000';
    hexagons[18][2].style.backgroundColor = '#000000';
    hexagons[18][3].style.backgroundColor = '#000000';
    hexagons[16][8].style.backgroundColor = '#DC143C';
    hexagons[16][9].style.backgroundColor = '#0B4EA2';
    hexagons[16][11].style.backgroundColor = '#0B4EA2';
    hexagons[16][10].style.backgroundColor = '#DC143C';
    for (let row = 11; row < 19; row++) {
        hexagons[17][row].style.backgroundColor = '#FFDD00';
    }
    hexagons[17][19].style.backgroundColor = '#0036A7';
    hexagons[18][0].style.backgroundColor = '#DA291C';
    hexagons[18][1].style.backgroundColor = '#DA291C';
    for (let row = 4; row < 7; row++) {
        hexagons[18][row].style.backgroundColor = '#EF3340';
    }
    for (let row = 12; row < 17; row++) {
        hexagons[18][row].style.backgroundColor = '#FFDD00';
    }
    hexagons[19][0].style.backgroundColor = '#DA291C';
    hexagons[19][1].style.backgroundColor = '#DA291C';
    for (let row = 2; row < 7; row++) {
        hexagons[19][row].style.backgroundColor = '#EF3340';
    }
    for (let row = 7; row < 11; row++) {
        hexagons[17][row].style.backgroundColor = '#0B4EA2';
    }
    for (let row = 7; row < 9; row++) {
        hexagons[18][row].style.backgroundColor = '#0B4EA2';
    }
    for (let row = 11; row < 13; row++) {
        hexagons[19][row].style.backgroundColor = '#CE1126';
    }
    for (let row = 13; row < 15; row++) {
        hexagons[19][row].style.backgroundColor = '#FFD100';
    }
    for (let row = 7; row < 11; row++) {
        hexagons[19][row].style.backgroundColor = '#477050';
    }
    for (let row = 9; row < 12; row++) {
        hexagons[18][row].style.backgroundColor = '#477050';
    }
    hexagons[19][15].style.backgroundColor = '#FFDD00';
}
let color;
const hexagons = [];
// Function to create hexagons in a grid
function createHexagons(rows, cols) {
    const hexMap = document.querySelector('.hexMap');
    const hexagonSize = 100;
    const hexagonSpacing = 20;
    for (let row = 0; row < rows; row++) {
        hexagons[row] = []; // Initialize an empty array for columns in each row
        for (let col = 0; col < cols; col++) {
            const hexagon = document.createElement('div');
            hexagon.classList.add('hexagon');
            hexagon.style.width = `${hexagonSize}px`;
            hexagon.style.height = `${hexagonSize}px`;

            const offset = (row % 2 === 0) ? 0 : hexagonSize * 0.375;
            hexagon.style.left = `${col * (hexagonSize * 0.75 + hexagonSpacing) + offset}px`;
            hexagon.style.top = `${row * (hexagonSize * 0.5 + hexagonSpacing)}px`;
            hexMap.appendChild(hexagon);

            // Add click event listener to each hexagon
            hexagon.addEventListener('click', () => {
            let index = [row, col]; // Pass index as an array
            console.log(index);
            color = hexagon.style.backgroundColor;
            console.log(color);
            let nation = getNationByColor(color);
            updateProvinceInfoBar(availableNations[nation], index);
            });

            hexagons[row][col] = hexagon; // Store hexagon in the 2D array
        }
    }

    setColor(hexagons); // Pass the 2D hexagons array to setColor
} 
const language = localStorage.getItem("language");
let lang;
switch (language) {
    case "en":
        lang = 0;
        break;
    case "pl":
        lang = 1;
        break;
    case "ua":
        lang = 2;
        break;
    case "lt":
        lang = 3;
        break;
    default:
        lang = 0;
        break;
}
const names = [
    ["Poland","Czechia","Russia","Germany","France","Norway","Sweden","Finland","Denmark","Estonia","Latvia","Lithuania","Netherlands","Belgium","Luxembourg","Ukraine","Switzerland","Austria","Slovakia","Belarus","Hungary","Romania","Moldova","Cordinates:"," provinces","mobilize","sea","select nation","create army","/price: ","Enter the coordinates of the hexagon you want to move your troops to (e.g., '10,15'): ","move","attack","retreat","west tank","east tank","west fighter","towed artilery","infrantry","european tank","aircraft carrier","destroyer","navy","create a ship","rocket artilery"], //Orginal text(English)
    ["Polska","Czechy","Rosja","Niemcy","Francja","Norwegia","Szwecja","Finlandia","Dania","Estonia","Łotwa","Litwa","Holandia","Belgia","Luksemburg","Ukraina","Szwajcaria","Austria","Słowacja","Białoruś","Węgry","Rumunia","Mołdawia","Współrzędne:", "prowincji","mobilizuj","morze","wybierz nację","utwórz armię","/cena: ","Wprowadź współrzędne sześciokąta, do którego chcesz przemieścić swoje wojska (np. '10,15'): ","przenieś","zaatakuj","wycofaj","zachodni czołg","wschodni czołg","zachodni myśliwiec","holowana artyleria","piechota","europejski czołg","lotniskowiec","niszczyciel","marynarka wojenna","stwórz okręt","artyleria rakietowa"], //Polish text
    ["Польща","Чехія","Росія","Німеччина","Франція","Норвегія","Швеція","Фінляндія","Данія","Естонія","Латвія","Литва","Нідерланди","Бельгія","Люксембург","Україна","Швейцарія","Австрія","Словаччина","Білорусь","Угорщина","Румунія","Молдова","координати:"," провінцій","мобілізуй","море","вибрай націю","створити армію","/ціна: ","Введіть координати шестикутника, до якого ви хочете перемістити війська (наприклад, '10,15'): ","рухати","заатакуй","вилучити","західний танк","східний танк","Західний винищувач","буксирувана ","піхота","Європейський танк","авіаносець","руйнівник","флот","створити корабель","ракєтова артилерія"], //Ukrainian text
    ["Lenkija","Čekija","Rusija","Vokietija","Prancūzija","Norvegija","Švedija","Suomija","Danija","Estija","Latvija","Lietuva","Nyderlandai","Belgija","Liuksemburgas","Ukraina","Šveicarija","Austrija","Slovakija","Baltarusija","Vengrija","Rumunija","Moldova","Koordinatės:", "provincijų","mobilizuoti","jūra","pasirink tautą","sukurk armiją","/kaina: ","Įveskite šešiakampio koordinatę, į kurią norite perkelti savo kariuomenę (pvz. '10,15'): ","perkelti","pulti","atsitraukti","vakarų tankas","rytų tankas","vakarų naikintuvas","vilkoma artilerija","pėstininkai","europinis tankas","lėktuvnešis","naikintojas","karinis jūrų laivynas","sukurk laivą",""], //Lithuanian text
];
class Nation {
    constructor(name, color, HX, flag, bot, cash, defeated, area, units) {
      this.name = name;
      this.color = color;
      this.HX = HX;
      this.flag = flag;
      this.bot = bot;
      this.cash = 100;
      this.defeated = false; // Initialize defeated property
      this.area = []; // Initialize area property
      this.units = []; // Initialize units property
    }
}

// Function to get the nation by color
const availableNations = [
   new Nation(names[lang][0], 'rgb(220, 20, 60)','#DC143C',names[0][0],true),
   new Nation(names[lang][1], 'rgb(17, 69, 126)','#11457E',names[0][1],true),
   new Nation(names[lang][2], 'rgb(0, 54, 167)','#0036A7',names[0][2],true),
   new Nation(names[lang][3], 'rgb(0, 0, 0)','#000000',names[0][3],true),
   new Nation(names[lang][4], 'rgb(0, 0, 145)','#000091',names[0][4],true),
   new Nation(names[lang][5], 'rgb(186, 12, 47)','#BA0C2F',names[0][5],true),
   new Nation(names[lang][6], 'rgb(254, 204, 2)','#FECC02',names[0][6],true),
   new Nation(names[lang][7], 'rgb(0, 47, 108)','#002F6C',names[0][7],true),
   new Nation(names[lang][8], 'rgb(200, 16, 46)','#C8102E',names[0][8],true),
   new Nation(names[lang][9], 'rgb(0, 114, 206)','#0072CE',names[0][9],true),
   new Nation(names[lang][10],'rgb(164, 52, 58)', '#002F6C',names[0][10],true),
   new Nation(names[lang][11], 'rgb(4, 106, 56)','#046A38',names[0][11],true),
   new Nation(names[lang][12],'rgb(0, 61, 165)', '#003DA5',names[0][12],true),
   new Nation(names[lang][13],'rgb(255, 205, 0)', '#FFCD00',names[0][13],true),
   new Nation(names[lang][14],'rgb(81, 173, 218)', '#51ADDA',names[0][14],true),
   new Nation(names[lang][15],'rgb(255, 221, 0)','#FFDD00',names[0][15],true),
   new Nation(names[lang][16],'rgb(218, 41, 28)','#DA291C',names[0][16],true),
   new Nation(names[lang][17],'rgb(239, 51, 64)', '#EF3340',names[0][17],true),
   new Nation(names[lang][18],'rgb(11, 78, 162)', '#0B4EA2',names[0][18],true),
   new Nation(names[lang][19],'rgb(0, 175, 102)', '#00AF66',names[0][19],true),
   new Nation(names[lang][20],'rgb(71, 112, 80)', '#477050',names[0][20],true),
   new Nation(names[lang][21],'rgb(206, 17, 38)', '#CE1126',names[0][21],true),
   new Nation(names[lang][22],'rgb(255, 209, 0)', '#FFD100',names[0][22],true),
];
function getNationByColor(color) {
    let n;
    n = availableNations.findIndex((nation) => nation.color === color);
    console.log(`Color checked: ${color}, Nation index: ${n}`); // Debugging log
    return n;
}

var mob = document.getElementById("add");
// Function to update the province info bar
function updateProvinceInfoBar(nation, index) {
    const provinceInfoBar = document.getElementById('provinceInfoBar');
    if (!nation) {
        provinceInfoBar.innerHTML = `<h3>${names[lang][26]}</h3>
        <p>${names[lang][23]} ${index}</p>
        <button id="fleet" type="button">${names[lang][42]}</button>`;
        var fleet = document.getElementById("fleet");   
        if (fleet) {
            fleet.addEventListener("click", function() {
                spawnFleet(index);
            });
        }  
    } else {
        provinceInfoBar.innerHTML = `
            <h3>${nation.name}</h3>
            <p>${names[lang][23]} ${index}</p>
            <button id="add" type="button">${names[lang][25]}</button>
        `;
        if (color != selectedNationColor) {
            document.getElementById("add").style.display = "none";
        }
    }
    provinceInfoBar.style.display = 'block'; // Show the info bar
    console.log(`Nation updated in info bar: ${nation ? nation.name : 'No nation found'}`); // Debugging log

    // Update the mob variable with the new #add button element
    var mob = document.getElementById("add");
    if (mob) {
        mob.addEventListener("click", function() {
            spawnArmy(index);
        });
    }
}
var Procou = document.getElementById("provinCount");
// New function to count hexagons by color
function countHexagonsByNation(nation) {
    let count = 0;
    const hexagonsList = document.querySelectorAll('.hexagon');
    hexagonsList.forEach(hex => {
        if (colorsMatch(hex.style.backgroundColor, nation.color)) {
            count++;
        }
    });
    return count;
}


var selectedNation;
var selectedNationColor;
setInterval(() => {
    const nationSelect = document.getElementById('nation-select');
    selectedNation = availableNations.find(nation => nation.name === nationSelect.value);
    selectedNationColor = selectedNation ? selectedNation.color : 'rgb(220, 20, 60)'; // Default color if none selected
    Procou.innerText = `${countHexagonsByNation(selectedNation)} ${names[lang][24]}`; // Update the province count in the info bar
}, 10000)

// Call the function with desired rows and columns

// WASD Scrolling Functionality
let offsetX = 0;
let offsetY = 0;

function scrollHexMap(event) {
    const hexMap = document.querySelector('.hexMap');
    const scrollSpeed = 15; // Speed of scrolling

    switch (event.key) {
        case 'w': // Move up
            offsetY += scrollSpeed;
            break;
        case 's': // Move down
            offsetY -= scrollSpeed;
            break;
        case 'a': // Move left
            offsetX += scrollSpeed;
            break;
        case 'd': // Move right
            offsetX -= scrollSpeed;
            break;
        case 'W': // Move up
            offsetY += scrollSpeed;
            break;
        case 'S': // Move down
            offsetY -= scrollSpeed;
            break;
        case 'A': // Move left
            offsetX += scrollSpeed;
            break;
        case 'D': // Move right
            offsetX -= scrollSpeed;
            break;
    }

    hexMap.style.transform = `translate(${offsetX}px, ${offsetY}px)`; // Apply translation
}

// Add event listener for keydown
document.addEventListener('keydown', scrollHexMap);

// Disable mouse wheel scrolling
window.addEventListener('wheel', function(event) {
    event.preventDefault(); // Prevent default scrolling behavior
}, { passive: false }); // Set passive to false to allow preventDefault

// Call the function with desired rows and columns
createHexagons(20, 20);

function chooseNation() {
    const nationContainer = document.getElementById('nationSelectionContainer');
    nationContainer.innerHTML = ''; // Clear any existing content

    const nationSelect = document.createElement('select');
    nationSelect.id = 'nation-select';

    availableNations.forEach((nation) => {
        const option = document.createElement('option');
        option.value = nation.name;
        option.text = nation.name;
        nationSelect.appendChild(option);
    });

    const nationButton = document.createElement('button');
    nationButton.textContent = names[lang][27];
    nationButton.onclick = () => {
        const selectedNation = availableNations.find((nation) => nation.name === nationSelect.value);
        console.log(`Selected Nation: ${selectedNation.name}`); // Debugging log
        // Update the game state with the selected nation
        updateGameState(selectedNation);
        nationContainer.style.display = 'none'; // Hide the selection UI after selection
    };

    nationContainer.appendChild(nationSelect);
    nationContainer.appendChild(nationButton);
}
var nationFlag;
function updateGameState(selectedNation) {
    // Add logic to update the game state based on the selected nation
    // For example, update the nation flag, color, or other game elements
    nationFlag = document.getElementById('nationflag');
    nationFlag.src = `flags/${selectedNation.flag.toLowerCase()}.png`; // Example: Update the flag image
    nationFlag.style.display = 'block'; // Show the flag
    console.log(`Game state updated for ${selectedNation.name}`); // Debugging log
    availableNations.push(new Nation('Sea','rgb(0, 170, 255)',' #00aaff'));
    selectedNation.bot = false; // Set the selected nation as a player-controlled nation
}

// Call the function to display the nation selection UI immediately
chooseNation();
var expenses = 0;
var profit;
var discash = document.getElementById("cash");
setInterval(() => {
    availableNations.forEach(nation => {
        if (nation.name === "Sea") return;

        let count = countHexagonsByNation(nation);
        let profit = count * 10;
        nation.cash += profit;

        if (nation === selectedNation && discash) {
            discash.innerText = `${nation.cash}$`;
        }
    });
}, 10000);



class unit {
    constructor(name, cost, health, attack, defense, image, speed, attackrange) {
        this.name = name;
        this.cost = cost;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
        this.image = image;
        this.speed = speed;
        this.attackrange = attackrange;
    }
}
const landUnits = [
    new unit(names[lang][34], 50, 50, 10, 5,"tank1.png", 3, 1),
    new unit(names[lang][35], 25, 40, 8, 5,"tank2.png", 2, 1),
    new unit(names[lang][36], 20, 30, 12, 6,"f16.png", 15, 2),
    new unit(names[lang][37], 7, 10, 4, 3,"towedArtillery.png", 12, 5),
    new unit(names[lang][38], 10, 15, 6, 9, "infrantry.png", 11, 1),
    new unit(names[lang][39], 38, 45, 9, 5,"tank3.png", 3, 1),
    new unit(names[lang][44], 45, 50, 18, 9,"rocket_artilery.png", 5, 8)
];
const fleet = [
    new unit(names[lang][41], 50, 50, 10, 5,"destroyer.png", 12, 3),
    new unit(names[lang][40], 75, 80, 8, 5, "aircarier.png", 10, 6)
]; // todo finish fleet mobilizing
function spawnArmy(index) {
    const armyContainer = document.getElementById('armyContainer');
    armyContainer.innerHTML = ''; // Clear any existing content

    const armySelect = document.createElement('select');
    armySelect.id = "select";

    landUnits.forEach((unit) => {
        const option = document.createElement('option');
        option.value = unit.name;
        option.text = unit.name + names[lang][29]  + unit.cost;
        armySelect.appendChild(option);
    });

    const armyButton = document.createElement('button');
    armyButton.textContent = names[lang][28];
    armyButton.onclick = () => {
        const selectedUnitName = armySelect.value;
        const selectedUnit = landUnits.find((unit) => unit.name === selectedUnitName);
        console.log(`Spawned unit: ${selectedUnit.name}`); // Debugging log
        // Update the game state with the selected nation
        spawnNewForce(selectedUnit, index);
        armyContainer.style.display = 'none'; // Hide the selection UI after selection
    };

    armyContainer.appendChild(armySelect);
    armyContainer.appendChild(armyButton);
    armyContainer.style.display = 'block'; // Show the selection UI
}
function getCountryFlag() {
    const countryName = selectedNation.flag.toLowerCase();
    console.log(`Country flag: flags/${countryName}.png`);
    return `flags/${countryName}.png`;
}
function spawnFleet(index) {
    const fleetContainer = document.getElementById('fleetContainer');
    fleetContainer.innerHTML = ''; // Clear any existing content

    const fleetSelect = document.createElement('select');
    fleetSelect.id = names[lang][30];

    fleet.forEach((unit) => {
        const option = document.createElement('option');
        option.value = unit.name;
        option.text = unit.name + names[lang][29]  + unit.cost;
        fleetSelect.appendChild(option);
    });

    const fleetButton = document.createElement('button');
    fleetButton.textContent = names[lang][43];
    fleetButton.onclick = () => {
        const selectedUnitName = fleetSelect.value;
        const selectedUnit = fleet.find((unit) => unit.name === selectedUnitName);
        console.log(`Spawned unit: ${selectedUnit.name}`); // Debugging log
        // Update the game state with the selected nation
        spawnNewFleet(selectedUnit, index);
        fleetContainer.style.display = 'none'; // Hide the selection UI after selection
    };

    fleetContainer.appendChild(fleetSelect);
    fleetContainer.appendChild(fleetButton);
    fleetContainer.style.display = 'block'; // Show the selection UI
}
function spawnNewForce(unit, index, ownerNation = selectedNation) {
    // Check if the player has enough cash to spawn the unit
    if (ownerNation.cash > unit.cost) {

        const unitElement = document.createElement('div');
        unitElement.classList.add('unit');
        unitElement.dataset.owner = ownerNation.name;
        unitElement.hp = unit.health ?? 50;
        unitElement.attack = unit.attack ?? 10;
        unitElement.defense = unit.defense ?? 5;
    
        const hexagon = hexagons[index[0]]?.[index[1]];
    
        const offsetLeft = parseInt(hexagon.style.left) || 0;
        const offsetTop = parseInt(hexagon.style.top) || 0;
    
        unitElement.style.position = 'absolute';
        unitElement.style.left = `${offsetLeft + 40}px`;
        unitElement.style.top = `${offsetTop + 40}px`;
        unitElement.style.width = '25px';
        unitElement.style.height = '15px';
        unitElement.style.backgroundImage = `url('units/${unit.image}')`;
        unitElement.style.backgroundSize = 'cover';
        document.body.appendChild(unitElement);
    
        const flagElement = document.createElement('img');
        flagElement.src = `flags/${ownerNation.flag.toLowerCase()}.png`;
        flagElement.style.width = '9px';
        flagElement.style.height = '6px';
        flagElement.style.position = 'absolute';
        flagElement.style.top = '5px';
        flagElement.style.left = '5px';
        unitElement.appendChild(flagElement);
    
        document.querySelector('.hexMap').appendChild(unitElement);
    unitElement.onclick = () => {
        if (unitElement.dataset.owner !== selectedNation.name) return;

        manageBar.style.display = 'block';
        selectedUnit = unitElement;

        const unitRect = unitElement.getBoundingClientRect();
        const hexMapRect = document.querySelector('.hexMap').getBoundingClientRect();

        manageBar.style.left = `${unitRect.left - hexMapRect.left + 60}px`;
        manageBar.style.top = `${unitRect.top - hexMapRect.top + 60}px`;
    };
        // Get the country flag image
        const countryFlag = `${ownerNation.flag.toLowerCase()}.png`;

        // Position the unit on the game map
        unitElement.style.left = `${offsetLeft + 40}px`;
        unitElement.style.top = `${offsetTop + 40}px`;

        // Add the unit to the game map
        let hexMap = document.querySelector('.hexMap');
        hexMap.appendChild(unitElement);

        
        // Create a manage bar for the unit
        // Create a manage bar for the unit
        const manageBar = document.createElement('div');
        manageBar.classList.add('manage-bar');
        manageBar.style.position = 'absolute'; // Add this line
        manageBar.style.width = '90px';
        manageBar.style.height = '150px';
        document.body.appendChild(manageBar);
        manageBar.style.zIndex = '1000';

        // Create a close button for the manage bar
        const closeButton = document.createElement('button');
        closeButton.textContent = 'X';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '5px';
        closeButton.style.right = '5px';
        manageBar.appendChild(closeButton);

        // Create a move button for the unit
        const moveButton = document.createElement('button');
        moveButton.textContent = names[lang][31];
        manageBar.appendChild(moveButton);

        // Create an attack button for the unit
        const attackButton = document.createElement('button');
        attackButton.textContent = names[lang][32];
        manageBar.appendChild(attackButton);

// Create a retreat button for the unit
const retreatButton = document.createElement('button');
retreatButton.textContent = names[lang][33];
manageBar.appendChild(retreatButton);

// Add the manage bar to the game map
let hexMapElement = document.querySelector('.hexMap');
hexMapElement.appendChild(manageBar); // Add this line

// Position the manage bar near the unit
hexMap = document.querySelector('.hexMap');
let unitRect = unitElement.getBoundingClientRect();
let hexMapRect = hexMap.getBoundingClientRect();
manageBar.style.left = `${unitRect.left - hexMapRect.left + 60}px`;
manageBar.style.top = `${unitRect.top - hexMapRect.top + 60}px`;



let seaColor = "";
moveButton.onclick = () => {
    let target = prompt(names[lang][30]);
    let targetCoords = target.split(',').map(Number);
    let targetRow = targetCoords[0];
    let targetCol = targetCoords[1];

    if (targetRow < 0 || targetRow >= hexagons.length || targetCol < 0 || targetCol >= hexagons[0].length) {
        console.log('Invalid target coordinates');
        return;
    }

    let targetHexagon = hexagons[targetRow][targetCol];
    let targetColor = targetHexagon.style.backgroundColor;

    // Check if the target hexagon is a sea area
    if (targetColor === seaColor) {
        console.log('Cannot conquer sea province');
        return;
    }

    if (targetColor == Nation.color) {
        let stop = confirm("If you send army to the target, you can unluckly start a war. Are you going to continue?");
        if (stop === true) {
            return;
        }
    }

    let unitRect = unitElement.getBoundingClientRect();
    let hexMapRect = hexMap.getBoundingClientRect();
    let unitLeft = unitRect.left - hexMapRect.left;
    let unitTop = unitRect.top - hexMapRect.top;

    let currentIndex = [0, 0];
    for (let row = 0; row < hexagons.length; row++) {
        for (let col = 0; col < hexagons[row].length; col++) {
            let hexagon = hexagons[row][col];
            let offsetLeft = parseInt(hexagon.style.left) || 0;
            let offsetTop = parseInt(hexagon.style.top) || 0;
            if (unitLeft >= offsetLeft && unitLeft <= offsetLeft + 100 && unitTop >= offsetTop && unitTop <= offsetTop + 100) {
                currentIndex = [row, col];
                break;
            }
        }
    }

    animateMovement(unitElement, targetRow, targetCol, currentIndex);
}
function animateMovement(unitElement, targetRow, targetCol, currentIndex) {
    let hexagon = hexagons[currentIndex[0]][currentIndex[1]];
    let offsetLeft = parseInt(hexagon.style.left) || 0;
    let offsetTop = parseInt(hexagon.style.top) || 0;
    unitElement.style.left = `${offsetLeft + 40}px`;
    unitElement.style.top = `${offsetTop + 40}px`;

    let nextIndex = [currentIndex[0], currentIndex[1]];
    if (currentIndex[0] < targetRow) {
        nextIndex[0]++;
    } else if (currentIndex[0] > targetRow) {
        nextIndex[0]--;
    } else if (currentIndex[1] < targetCol) {
        nextIndex[1]++;
    } else if (currentIndex[1] > targetCol) {
        nextIndex[1]--;
    }

    if (nextIndex[0] === targetRow && nextIndex[1] === targetCol) {
        let targetHexagon = hexagons[targetRow][targetCol];
        let offsetLeft = parseInt(targetHexagon.style.left) || 0;
        let offsetTop = parseInt(targetHexagon.style.top) || 0;
        unitElement.style.left = `${offsetLeft + 40}px`;
        unitElement.style.top = `${offsetTop + 40}px`;

        // Update the hexagon's color to the chosen nation's color
        if (targetHexagon.style.backgroundColor !== selectedNationColor) {
    targetHexagon.style.backgroundColor = selectedNationColor;
    hexagons[targetRow][targetCol] = targetHexagon;
} else if (targetHexagon.style.backgroundColor === seaColor ) {
    console.log('Cannot conquer sea province');
}
        return;
    }

    currentIndex = nextIndex;

    setTimeout(() => {
        animateMovement(unitElement, targetRow, targetCol, currentIndex);
    }, 10000 / unitElement.speed);
}

        attackButton.onclick = () => {
            
        }

        retreatButton.onclick = () => {
       
        };
        closeButton.onclick = () => {
            manageBar.style.display = 'none';
          }
        console.log(`Spawned unit: ${unit.name} at index ${index}`);
    } 
    ownerNation.cash -= unit.cost;
    if (ownerNation === selectedNation && discash) {
        discash.innerText = `${ownerNation.cash}$`;
    }

    console.log(`✅ Spawned unit: ${unit.name} at (${index[0]}, ${index[1]})`); 
}

function spawnNewFleet(unit, index, ownerNation = selectedNation) {
    // Check if the player has enough cash to spawn the unit
    if (ownerNation.cash < unit.cost) return false;

    const navalElement = document.createElement('div');
    navalElement.classList.add('fleet');
    navalElement.dataset.owner = ownerNation.name;
    navalElement.hp = unit.health ?? 50;
    navalElement.attack = unit.attack ?? 10;
    navalElement.defense = unit.defense ?? 5;

    navalElement.style.position = 'absolute';
    navalElement.style.left = `${index[1] * 32}px`;
    navalElement.style.top = `${index[0] * 28}px`;
    navalElement.style.width = '32px';
    navalElement.style.height = '28px';
    navalElement.style.backgroundImage = `url('units/${unit.icon}')`;
    navalElement.style.backgroundSize = 'cover';
    
    navalElement.onclick = () => {
        if (navalElement.dataset.owner !== selectedNation.name) {
            console.log("⛔ Próba kliknięcia cudzej jednostki.");
            return;
        }
    
        openManageBar(navalElement);
    };
    
    function openManageBar(unit) {
        if (!unit) return;
    
        manageBar.style.display = 'block';
        selectedUnit = unit;
    
        const unitRect = unit.getBoundingClientRect();
        const hexMapRect = document.querySelector('.hexMap').getBoundingClientRect();
    
        manageBar.style.left = `${unitRect.left - hexMapRect.left + 60}px`;
        manageBar.style.top = `${unitRect.top - hexMapRect.top + 60}px`;
    
        console.log(`✅ Zarządzasz jednostką: ${unit.dataset.owner}`);
    }
        

        const flagElement = document.createElement('img');
        flagElement.src = countryFlag;
        flagElement.style.width = '9px';
        flagElement.style.height = '6px';
        flagElement.style.position = 'absolute';
        flagElement.style.top = '5px';
        flagElement.style.left = '5px';
        navalElement.appendChild(flagElement);

        // Position the unit on the game map
        const hexagon = hexagons[index[0]][index[1]];
        const offsetLeft = parseInt(hexagon.style.left) || 0;
        const offsetTop = parseInt(hexagon.style.top) || 0;
        navalElement.style.left = `${offsetLeft + 40}px`;
        navalElement.style.top = `${offsetTop + 40}px`;

        // Add the unit to the game map
        let hexMap = document.querySelector('.hexMap');
        hexMap.appendChild(navalElement);

        
        // Create a manage bar for the unit
        // Create a manage bar for the unit
        let manageBar = document.createElement('div');
        manageBar.classList.add('manage-bar');
        manageBar.style.position = 'absolute'; // Add this line
        manageBar.style.width = '90px';
        manageBar.style.height = '150px';
        document.body.appendChild(manageBar);
        manageBar.style.zIndex = '1000';
        
        
        // Create a close button for the manage bar
        const closeButton = document.createElement('button');
        closeButton.textContent = 'X';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '5px';
        closeButton.style.right = '5px';
        manageBar.appendChild(closeButton);

        // Create a move button for the unit
        const moveButton = document.createElement('button');
        moveButton.textContent = names[lang][31];
        manageBar.appendChild(moveButton);

        // Create an attack button for the unit
        const attackButton = document.createElement('button');
        attackButton.textContent = names[lang][32];
        manageBar.appendChild(attackButton);

// Create a retreat button for the unit
const retreatButton = document.createElement('button');
retreatButton.textContent = names[lang][33];
manageBar.appendChild(retreatButton);

// Add the manage bar to the game map
        let hexMapElement = document.querySelector('.hexMap');
        hexMapElement.appendChild(manageBar); // Add this line

        // Position the manage bar near the unit
        hexMap = document.querySelector('.hexMap');
        let unitRect = navalElement.getBoundingClientRect();
        let hexMapRect = hexMap.getBoundingClientRect();
        manageBar.style.left = `${unitRect.left - hexMapRect.left + 60}px`;
        manageBar.style.top = `${unitRect.top - hexMapRect.top + 60}px`;

        // Add event listeners to the buttons
function animateMovement(navalElement, targetRow, targetCol, currentIndex) {
    let hexagon = hexagons[currentIndex[0]][currentIndex[1]];
    let offsetLeft = parseInt(hexagon.style.left) || 0;
    let offsetTop = parseInt(hexagon.style.top) || 0;
    navalElement.style.left = `${offsetLeft + 40}px`;
    navalElement.style.top = `${offsetTop + 40}px`;

    let nextIndex = [currentIndex[0], currentIndex[1]];
    if (currentIndex[0] < targetRow) {
        nextIndex[0]++;
    } else if (currentIndex[0] > targetRow) {
        nextIndex[0]--;
    } else if (currentIndex[1] < targetCol) {
        nextIndex[1]++;
    } else if (currentIndex[1] > targetCol) {
        nextIndex[1]--;
    }

    if (nextIndex[0] === targetRow && nextIndex[1] === targetCol) {
        let targetHexagon = hexagons[targetRow][targetCol];
        let offsetLeft = parseInt(targetHexagon.style.left) || 0;
        let offsetTop = parseInt(targetHexagon.style.top) || 0;
        navalElement.style.left = `${offsetLeft + 40}px`;
        navalElement.style.top = `${offsetTop + 40}px`;

        // Update the hexagon's color to the chosen nation's color
        if (targetHexagon.style.backgroundColor !== selectedNationColor) {
            hexagons[targetRow][targetCol] = targetHexagon;
            }   else if (targetHexagon.style.backgroundColor ==! seaColor ) {
            console.log('Cannot conquer land province');
        }
        return;
    }

    currentIndex = nextIndex;

    setTimeout(() => {
        animateMovement(navalElement, targetRow, targetCol, currentIndex);
    }, 10000 / navalElement.speed);
}
let seaColor = "";
moveButton.onclick = () => {
    let target = prompt(names[lang][30]);
    let targetCoords = target.split(',').map(Number);
    let targetRow = targetCoords[0];
    let targetCol = targetCoords[1];

    if (targetRow < 0 || targetRow >= hexagons.length || targetCol < 0 || targetCol >= hexagons[0].length) {
        console.log('Invalid target coordinates');
        return;
    }

    let targetHexagon = hexagons[targetRow][targetCol];
    let targetColor = targetHexagon.style.backgroundColor;

    // Check if the target hexagon is a sea area
    if (targetColor !== seaColor) {
        return;
    }


    let unitRect = navalElement.getBoundingClientRect();
    let hexMapRect = hexMap.getBoundingClientRect();
    let unitLeft = unitRect.left - hexMapRect.left;
    let unitTop = unitRect.top - hexMapRect.top;

    let currentIndex = [0, 0];
    for (let row = 0; row < hexagons.length; row++) {
        for (let col = 0; col < hexagons[row].length; col++) {
            let hexagon = hexagons[row][col];
            let offsetLeft = parseInt(hexagon.style.left) || 0;
            let offsetTop = parseInt(hexagon.style.top) || 0;
            if (unitLeft >= offsetLeft && unitLeft <= offsetLeft + 100 && unitTop >= offsetTop && unitTop <= offsetTop + 100) {
                currentIndex = [row, col];
                break;
            }
        }
    }

    animateMovement(navalElement, targetRow, targetCol, currentIndex);
}

    navalElement.onclick = () => {
        if (unitElement.owner !== selectedNation.name) {
            console.log(`⛔ Nie możesz zarządzać jednostką ${unitElement.owner}`);
            return;
        }
        manageBar.style.display = 'block';
        console.log('Unit element clicked');

        let hexMap = document.querySelector('.hexMap');
        let unitRect = navalElement.getBoundingClientRect();
        let hexMapRect = hexMap.getBoundingClientRect();
        manageBar.style.left = `${unitRect.left - hexMapRect.left + 60}px`;
        manageBar.style.top = `${unitRect.top - hexMapRect.top + 60}px`;
        }
        attackButton.onclick = () => {
            
        }

        retreatButton.onclick = () => {
       
        };
        closeButton.onclick = () => {
            manageBar.style.display = 'none';
          }
        // Update the game state with the new unit
        console.log(`Spawned unit: ${unit.name} at index ${index}`);
        navalElement.onclick = () => {
            if (navalElement.dataset.owner !== selectedNation.name) return;
            manageBar.style.display = 'block';
            selectedUnit = navalElement;
        };
}
function colorsMatch(color1, color2) {
    if (typeof color1 !== 'string' || typeof color2 !== 'string') return false;
    return color1.replace(/\s/g, '').toLowerCase() === color2.replace(/\s/g, '').toLowerCase();
}



const seaColor = ''; // kolor morza

// Poprawione runBotAI() bez nielegalnego return
function runBotAI() {
    availableNations.forEach((nation) => {
        if (nation.bot && !nation.defeated) {
            // 1.Mobilize army
            if (nation.cash > 500 && countHexagonsByNation(nation) > nation.units.length) {
                const randomUnit = landUnits[Math.floor(Math.random() * landUnits.length)];
                hexagons.forEach((row, rowIndex) => {
                    row.forEach((hexagon, colIndex) => {
                        if (colorsMatch(hexagon.style.backgroundColor, nation.color)) {
                            nation.area.push([rowIndex, colIndex]);
                            console.log(`Hexagon ${rowIndex},${colIndex} is owned by ${nation.name}`);
                            const randomHexagon = nation.area[Math.floor(Math.random() * nation.area.length)];
                        
                            if (randomUnit.cost < nation.cash) {
                                randomUnit.c = randomHexagon;
                                randomUnit.x = rowIndex;
                                randomUnit.y = colIndex;
                                spawnNewForce(randomUnit, randomHexagon, nation);
                                nation.cash -= randomUnit.cost;
                                nation.units.push(randomUnit);
                            }
                        }
                    });
                });
            }
            // 2. Move army
            if (nation.units.length > 0) {
                const randomUnit = nation.units[Math.floor(Math.random() * nation.units.length)];
                const moving_options = [-1, 0, 1]
                let randomMove = [moving_options[Math.floor(Math.random() * 2)], moving_options[Math.floor(Math.random() * 2)]];
                setTimeout(() => {
                    randomUnit.x += randomMove[0];
                    randomUnit.y += randomMove[1];
                }, 10000 / randomUnit.speed);
                console.log(`Unit ${randomUnit.name} moved to (${randomUnit.x}, ${randomUnit.y})`);
            }
        }    
    });
}
setInterval(runBotAI, 10000); // Uruchom AI co 10 sekund