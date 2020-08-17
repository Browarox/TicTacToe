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
        if (Scores.active == Scores.actX){
            document.querySelector(`div.game-board-field:nth-child(${num})`).classList.add('field-x');
            document.querySelector('.turn:nth-child(1)').classList.toggle('turn-active');
            document.querySelector('.turn:nth-child(3)').classList.toggle('turn-active');
            Scores.active = document.querySelector('.turn-active')
        } else if (Scores.active == Scores.actO){
            document.querySelector(`div.game-board-field:nth-child(${num})`).classList.add('field-o');
            document.querySelector('.turn:nth-child(1)').classList.toggle('turn-active');
            document.querySelector('.turn:nth-child(3)').classList.toggle('turn-active');
            Scores.active = document.querySelector('.turn-active')
        }
    }

}