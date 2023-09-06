let lista = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('pre');
let next = document.getElementById('next');

let active = 0;
let tamanoItems = items.length - 1;

next.onclick = function(){
    if(active + 1 > tamanoItems){
        active = 0;  
    }else{
        active = active + 1;
    }
    relocargaSlider();
};
prev.onclick = function(){
    if(active -1 < 0){
        active = tamanoItems;
    }else{
        active = active - 1;
    }
    relocargaSlider();
}
let refrescarslider = setInterval(() =>{
    next.click()
}, 3000);//esta funcion activa el movimiento de las imagenes

function relocargaSlider(){
    let checkLeft = items[active].offsetLeft;
    lista.style.left = -checkLeft + 'px';

    let ultimoActivo = document.querySelector('.slider .dots li.active');
    ultimoActivo.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refrescarslider);refrescarslider = setInterval(() =>{next.click()}, 3000);
}
dots.forEach((li, key) =>{
    li.addEventListener('click', function(){
        active = key;
        relocargaSlider();
    })
})
