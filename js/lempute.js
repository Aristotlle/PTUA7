const nyktysDOM = document.getElementById('nykstysVirsun');
const rezultatai = document.querySelector('.rezultatai');

function change_pic() {
    if (nyktysDOM.src.endsWith('middlefinger.png')) {
        nyktysDOM.src = '../img/thumbsUp.png';
    } else {
        nyktysDOM.src = '../img/middlefinger.png';
    }
}

function sudetis(a, b) {
    return a + b;
}

function atimtis(a, b) {
    return a - b;
}

function dalyba(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return 'Dalyba is nulio negalima';
    }
}

function daugyba(a, b) {
    return a * b;
}




function skaiciuojam() {
let a = 2;

for (let j = 0; j < 5; j++) {
    let b = 5;

    for (let i = 0; i < 10; i++) {
        let suma = sudetis(a, b);
        let skirtumas = atimtis(a, b);
        let dalmuo = dalyba(a, b);
        let sandauga = daugyba(a, b);

        rezultatai.innerHTML += `a = ${a}, b = ${b}, a + b = ${suma}, a - b = ${skirtumas}, a / b = ${dalmuo}, a * b = ${sandauga}<br>`;
        b += 2; // Increment b by 2
    }

    a++; // Increment a by 1
}
}

