
console.log('for ciklas')

let array = ['a','b','c','d','e','f'];
for(let i = 0; i < array.length; i++) {
    let item = array[i];
    console.log(item);
}
console.log('While ciklas')

let i = 0;
while (i < array.length) {
    let item = array[i];
    console.log(item);
    i++;
}

console.log('do ciklas')

i = 0;
do {
    let item = array[i];
    console.log(item);
    i++;
} while (i < array.length);

const imgElements = document.getElementsByTagName('img');
const imageCount = imgElements.length;
console.log(imageCount);
uuidElement = document.getElementById('uuid')
uuidElement.innerHTML = imageCount;

let buttonActive = document.querySelector('button');
buttonActive.addEventListener('click', function () {alert('Paveiksliuku kiekis ' + imageCount);})

for (let i = 0; i < imgCount; i++) {
  if i % 2 === 0) {
    imgElements[i].alt = 'tekstas'
  }
}

uuidElement.style.fontSize='24px'
uuidElement.style.backgroundColor='green'
uuidElement.style.width='200px'
uuidElement.style.height='200px'