let list = document.querySelectorAll('.item');
let next = document.getElementsByClassName('proximo')[0];
let back = document.getElementsByClassName('anterior')[0];

let count = list.length;
let active = 0;

next.onclick = () => {
    let activeold = document.querySelector('.active');
    activeold.classList.remove('active');
    
    active = active >= count -1 ? 0 : active + 1;
    list[active].classList.add('active');
}

back.onclick = () => {
    let activeold = document.querySelector('.active');
    activeold.classList.remove('active');
    active = active <= 0 ? count -1 : active - 1;
    list[active].classList.add('active');   
}