// mini-slider
var card1 = document.querySelector('.card1');
var card2 = document.querySelector('.card2');

function slid() {
    if (this == card1) {
        card1.classList.remove('card1');
        card1.classList.add('card2');
        card2.classList.remove('card2');
        card2.classList.add('card1');
    } else {
        card1.classList.remove('card2');
        card1.classList.add('card1');
        card2.classList.remove('card1');
        card2.classList.add('card2');

    }
}

card2.addEventListener('click', slid);
card1.addEventListener('click', slid);

// choose-slider
var buttons = document.querySelectorAll('.choose .choose-contant .variables button');
var butB = document.querySelector('#but-b');
var butS = document.querySelector('#but-s');
var butP = document.querySelector('#but-p');
var butE = document.querySelector('#but-e');
var chooseCards = document.querySelectorAll('.choose .choose-card .overlay .card-choose');

function choose() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
        chooseCards[i].classList.add('opacity0');
    }
    this.classList.add('active');
    for (var k = 0; k < chooseCards.length; k++) {
        if (buttons[k].classList.contains('active')) {
            chooseCards[k].classList.remove('opacity0');
        }
    }
}
butB.addEventListener('click', choose);
butS.addEventListener('click', choose);
butP.addEventListener('click', choose);
butE.addEventListener('click', choose);

// $('h2').css('border', '5px solid red');