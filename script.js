
//modal1
function acao(){

    let modal = document.querySelector(".modal-1")

    modal.style.display = 'block';
}

function fechar(){

    let modal = document.querySelector('.modal-1')

    modal.style.display = 'none';
}
//Modal2
function acao2(){

    let modal = document.querySelector('.modal-2')

    modal.style.display = 'block';
}

function fechar2(){

    let modal = document.querySelector('.modal-2')

   modal.style.display = 'none';
}
//modal3
function acao3(){

    let modal = document.querySelector('.modal-3')

    modal.style.display = 'block';
}

function fechar3(){

    let modal = document.querySelector('.modal-3')

   modal.style.display = 'none';
}
//modal4
function acao4(){

    let modal = document.querySelector('.modal-4')

    modal.style.display = 'block';
}

function fechar4(){

    let modal = document.querySelector('.modal-4')

   modal.style.display = 'none';
}

//modal5
function acao5(){

    let modal = document.querySelector('.modal-5')

    modal.style.display = 'block';
}

function fechar5(){

    let modal = document.querySelector('.modal-5')

   modal.style.display = 'none';
}

//carrossel
let slider = tns({
    container : ".my-slider",
    "items": 3,
  "rewind": false,
  "swipeAngle": false,
  "speed": 800,
  autoplay : true,
  autoplayButtonOutput : false,
  "mouseDrag" : true,
  
})
