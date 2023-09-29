const bs = document.querySelector('.imgs');
const source = 'https://picsum.photos/v2/list?page=';
const unhide = document.querySelector('.hide');




const jokeButton = document.querySelector('.juoksimes');



const prikolaiDiv = document.querySelector('.juokeliai');
const prikolaiSrc = 'https://api.chucknorris.io/jokes/random';

jokeButton.onclick = function() {
    console.log('sveika');
    const jokeCount = document.getElementById('verte').value;
    console.log(jokeCount);
    for (i = 0; i <=jokeCount ; i++) {
        fetch(prikolaiSrc)
            .then(response => response.json())
            .then(jsonJoke => {
                jsonJoke(juokas => {
                    const jokeDiv = document.createElement('div');
                    prikolaiDiv.append(jokeDiv);
                })
            })
    }
};





function genGaleryElement(element) {
    const galeryImage = document.createElement('img');
    galeryImage.src = element.download_url;
    galeryImage.className = 'imgClass';
    return galeryImage;

}

function random() {
    const min = 1;
    const max = 33;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}

function genGalery(source) {
    source += random();
    console.log(source);
    fetch(source)
        .then(response => response.json())
        .then(jsonObj => {
            jsonObj.forEach(elementData => {
                const galeryImage = genGaleryElement(elementData);
                bs.append(galeryImage);
            })
        })
}

genGalery(source);

