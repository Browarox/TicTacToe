let Scores = {
    scoreX: 0,
    scoreO: 0,
    scoreXHtlm: document.querySelector('.score-x'),
    scoreOHtlm: document.querySelector('.score-o'),
    active: document.querySelector('.turn-active'),
    actX: document.querySelector('.turn:nth-child(1)'),
    actO: document.querySelector('.turn:nth-child(3)')
}

Scores.scoreOHtlm.innerText = `${Scores.scoreO}`
Scores.scoreXHtlm.innerText = `${Scores.scoreX}`

let Board = {
    avFields: document.querySelectorAll('.game-board-field'),
    choosenField: null,
    fieldChoose: function(num){
        if (Scores.active == Scores.actX && document.querySelector(`div.game-board-field:nth-child(${num})`).classList.contains('game-board-field')){
            document.querySelector(`div.game-board-field:nth-child(${num})`).classList.add('field-x');
            document.querySelector(`div.game-board-field:nth-child(${num})`).classList.remove('game-board-field');
            document.querySelector('.turn:nth-child(1)').classList.toggle('turn-active');
            document.querySelector('.turn:nth-child(3)').classList.toggle('turn-active');
            Scores.active = document.querySelector('.turn-active')
        } else if (Scores.active == Scores.actO && document.querySelector(`div.game-board-field:nth-child(${num})`).classList.contains('game-board-field')){
            document.querySelector(`div.game-board-field:nth-child(${num})`).classList.add('field-o');
            document.querySelector(`div.game-board-field:nth-child(${num})`).classList.remove('game-board-field');
            document.querySelector('.turn:nth-child(1)').classList.toggle('turn-active');
            document.querySelector('.turn:nth-child(3)').classList.toggle('turn-active');
            Scores.active = document.querySelector('.turn-active')
        }
        //po każdym kliknięciu trzeba sprawdzić czy ktoś wygrał - jeśli nie to leci dalej, jeśli tak to alert kto wygrał i break
        //dodać funkcję żeby po kliknięci znikała klasa game-board-field -- dzięki tu łatwo będzie można sprawdzić czy wygrał X czy O za pomocą listy
    }

}