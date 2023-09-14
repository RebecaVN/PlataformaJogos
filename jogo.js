const liu = document.querySelector('.liu');
const pipe = document.querySelector('.pipe');

const jump = () => {
    liu.classList.add('jump');

    setTimeout(() => {
        liu.classList.remove('jump');
    }, 500);
 
}

const loop = setInterval(() => {
    

    const pipePosition = pipe.offsetLeft;
    const liuPosition = window.getComputedStyle(liu).bottom.replace('px', '');

    console.log(liuPosition);

    if(pipePosition <= 120 && pipePosition > 0 && liuPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        liu.style.animation = 'none';
        liu.style.bottom = `${liuPosition}px`

        liu.src = './img/fail.gif';
        liu.style.marginLeft = '50px'
    }

}, 10);

document.addEventListener('keydown', jump);