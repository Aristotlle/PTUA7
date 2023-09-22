const button = document.querySelector('button');
const emailInput = document.getElementById('emailInput');
const emailError = document.getElementById('emailError');
const images = document.querySelectorAll('img');

function updateResizeBar() {
    const fixedBar = document.getElementById('resizeBar');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    fixedBar.innerText = 'Rezoliucija: ' + screenWidth + 'x' +screenHeight;
}

updateResizeBar();

window.addEventListener('resize', updateResizeBar);


const hidden = document.getElementById('slepiam');
const hiddenMenu = document.querySelector('.hidden'); // Select the element with class "hidden"

hidden.addEventListener('click', function () {
    hiddenMenu.classList.toggle('hidden');
});



let count = 0;

const counteris = document.body;
counteris.addEventListener('click', function() {
    count++;
    console.log(count);
})






images.forEach(function(image) {
    image.addEventListener('mouseenter', function(){
        image.style.transform = 'scale(1.5)';
    });

    image.addEventListener('mouseleave', function () {
        image.style.transform = 'scale(1)';
    })
});


emailInput.addEventListener('input', function() {
    const email = emailInput.value;
    if (!isValidEmail(email)) {
        emailError.textContent = 'Netinkamas e-mail formatas';
    } else {
        emailError.textContent = '';
    }
});

function isValidEmail(email) {
    if (email.includes('@')) {
        return true;
    } else {
        return false;
    }
}




const windows = window.addEventListener('resize', function() {
    console.log('Window resized');
})



