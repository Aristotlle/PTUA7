const meniuDuomenyus = [
    {
        pavadinimas: 'Apie mus visus',
        nuoroda: 'about.html'
    },
    {
        pavadinimas: 'Paslaugos',
        nuoroda: 'services.html'
    },
    {
        pavadinimas: 'Portfolio',
        nuoroda: 'portfolio.html'
    },
    {
        pavadinimas: 'Kontaktai',
        nuoroda: 'kontaktai.html'
    },
    {
        pavadinimas: 'Naujienos',
        nuoroda: 'news.html'
    }
];



function getMenuData() {
    return meniuDuomenyus;
}

function generateHTML(data) {
    let duomenysHTML = '';
    for (let i = 0; i < data.length; i++) {
        duomenysHTML += `<button class="fontai" type="text" onclick="window.location.href='${data[i].nuoroda}'" name ="${data[i].pavadinimas}">${data[i].pavadinimas}</button>`;
    }
    return duomenysHTML;
}

let menuData = getMenuData();

let generateMenu = generateHTML(menuData);

let menuDOM = document.querySelector(".menu");

menuDOM.innerHTML = generateMenu;
menuDOM.style.backgroundColor = 'darkGreen';
menuDOM.style.border = '1px';
menuDOM.style.borderRadius= '10px';
menuDOM.style.boxShadow = '0px 0px 5px 5px rgb(50,148,25)';
menuDOM.style.padding = '20px';
menuDOM.style.fontFamily = "Georgia, serif";


let karoceDOM = document.querySelectorAll(".fontai");
for (let i = 0; i < karoceDOM.length; i++) {
    karoceDOM[i].style.fontFamily = "Times New Roman, serif";
}



