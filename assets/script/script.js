const login = document.querySelector('input[type = "submit"]');
const mailinp = document.querySelector('input[type = "email"]');
const show = document.querySelector('.bx-hide');
const passinp = document.querySelector('input[type = "password"]');
const envelope = document.querySelector('.bx-envelope');
const mailDiv = document.querySelector('#mailDiv');
const glasses = document.querySelector('.glasses');
const passwordDiv = document.querySelector('#passwordDiv');
const eyeone = document.querySelector('.one');

show.addEventListener('click', (e) => {
    if(passinp.type == "password") {
        passinp.type = 'text';
        show.classList.value = 'bx bx-show';
        glasses.classList.add('active');
    } else {
        passinp.type = 'password';
        show.classList.value = 'bx bx-hide';
        glasses.classList.remove('active');
    }
})

passinp.addEventListener('input', () => {
    if(glasses.classList = 'glasses animate') {
        console.log('The dev https://www.github.com/constneophyte, the designer https://instagram.com/thesarcasticdesigner');
    } else {
        glasses.classList.add('animate');
    }
})

mailinp.addEventListener('input', () => {
    if(mailinp.value.includes('@gmail.com') || mailinp.value.includes('@yahoomail.com') || mailinp.value.includes('@email.com')) {
        mailDiv.classList.toggle('green');
    } else {
        mailDiv.classList.toggle('red');
    }
})

console.log(mailinp.value);

// Eyes


document.addEventListener('mousemove', (e) => {
    // console.log('this that');

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const anchor = document.querySelector('#anchor');
    const rekt = anchor.getBoundingClientRect();
    
    const anchorX = rekt.left + rekt.width/2;
    const anchorY = rekt.top + rekt.height/2;

    const angelDeg = angle(mouseX, mouseY, anchorX, anchorY);

    // console.log(angelDeg);

    const eyes = document.querySelectorAll('.eye');

    eyes.forEach(eye => {
        eye.style.transform = `rotate(${90 + angelDeg}deg)`;
    });
});


function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;

    const rad = Math.atan2(dy, dx);

    const deg = rad * 180 / Math.PI;

    return deg;
}

// show.addEventListener('click', () => {
//     if(mailinp.value == '') {
//         glasses.classList.value = 'glasses';
//         alert('no')
//     } else {
//         glasses.classList.value = 'glasses active'
//     }
// })

