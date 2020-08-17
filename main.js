let Scores = {
    scoreX: 0,
    scoreO: 0,
    scoreXHtlm: document.querySelector('.score-x'),
    scoreOHtlm: document.querySelector('.score-o')
}

Scores.scoreOHtlm.innerText = `${Scores.scoreO}`
Scores.scoreXHtlm.innerText = `${Scores.scoreX}`

let Board = {
    avFields: document.querySelectorAll('.game-board-field')
}