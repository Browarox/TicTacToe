let Scores = {
    scoreX: 0,
    scoreO: 0,
    scoreXHtlm: document.querySelector('.score-x'),
    scoreOHtlm: document.querySelector('.score-o'),
    active: document.querySelector('.turn-active'),
    actX: document.querySelector('.turn:nth-child(1)'),
    actO: document.querySelector('.turn:nth-child(3)'),
    updateScore: function(){
        Scores.scoreOHtlm.innerText = `${Scores.scoreO}`
        Scores.scoreXHtlm.innerText = `${Scores.scoreX}`
    }
}

Scores.scoreOHtlm.innerText = `${Scores.scoreO}`
Scores.scoreXHtlm.innerText = `${Scores.scoreX}`

let Board = {
    avFields: document.querySelectorAll('.game-board-field'),
    choosenField: null,
    winList: [[document.querySelector('div.game-board-field:nth-child(1)'), document.querySelector('div.game-board-field:nth-child(2)'), document.querySelector('div.game-board-field:nth-child(3)')],
    [document.querySelector('div.game-board-field:nth-child(4)'), document.querySelector('div.game-board-field:nth-child(5)'), document.querySelector('div.game-board-field:nth-child(6)')],
    [document.querySelector('div.game-board-field:nth-child(7)'), document.querySelector('div.game-board-field:nth-child(8)'), document.querySelector('div.game-board-field:nth-child(9)')],
    [document.querySelector('div.game-board-field:nth-child(1)'), document.querySelector('div.game-board-field:nth-child(4)'), document.querySelector('div.game-board-field:nth-child(7)')],
    [document.querySelector('div.game-board-field:nth-child(2)'), document.querySelector('div.game-board-field:nth-child(5)'), document.querySelector('div.game-board-field:nth-child(8)')],
    [document.querySelector('div.game-board-field:nth-child(3)'), document.querySelector('div.game-board-field:nth-child(6)'), document.querySelector('div.game-board-field:nth-child(9)')],
    [document.querySelector('div.game-board-field:nth-child(1)'), document.querySelector('div.game-board-field:nth-child(5)'), document.querySelector('div.game-board-field:nth-child(9)')],
    [document.querySelector('div.game-board-field:nth-child(3)'), document.querySelector('div.game-board-field:nth-child(5)'), document.querySelector('div.game-board-field:nth-child(7)')]],
    
    fieldChoose: function(num){
        if (Scores.active == Scores.actX && document.querySelector(`div.game-board-field:nth-child(${num})`).classList.contains('game-board-field')){
            document.querySelector(`div.game-board-field:nth-child(${num})`).classList.add('field-x');
            document.querySelector(`div.game-board-field:nth-child(${num})`).classList.remove('game-board-field');
            this.checkWin(document.querySelectorAll('.field-x'));
            this.gameTie();
            document.querySelector('.turn:nth-child(1)').classList.toggle('turn-active');
            document.querySelector('.turn:nth-child(3)').classList.toggle('turn-active');
            Scores.active = document.querySelector('.turn-active')
        } else if (Scores.active == Scores.actO && document.querySelector(`div.game-board-field:nth-child(${num})`).classList.contains('game-board-field')){
            document.querySelector(`div.game-board-field:nth-child(${num})`).classList.add('field-o');
            document.querySelector(`div.game-board-field:nth-child(${num})`).classList.remove('game-board-field');
            this.checkWin(document.querySelectorAll('.field-o'));
            this.gameTie();
            document.querySelector('.turn:nth-child(1)').classList.toggle('turn-active');
            document.querySelector('.turn:nth-child(3)').classList.toggle('turn-active');
            Scores.active = document.querySelector('.turn-active')
        }
        //po każdym kliknięciu trzeba sprawdzić czy ktoś wygrał - jeśli nie to leci dalej, jeśli tak to alert kto wygrał i break
        //dodać funkcję żeby po kliknięci znikała klasa game-board-field -- dzięki tu łatwo będzie można sprawdzić czy wygrał X czy O za pomocą listy
    },

    checkWin: function(activeFieldsList){
        this.winList.forEach(element => {
            let checker = 0;
            activeFieldsList.forEach(activeField =>{
                console.log(activeField);
                if (element.includes(activeField)){
                    checker++
                    console.log(checker);}
                if (checker == 3){
                    if (Scores.active == Scores.actX){
                        Scores.scoreX++;
                        alert ('X wins!');
                    }else {
                        Scores.scoreO++;
                        alert ('O wins!');
                    }
                this.resetBoard();
                Scores.updateScore();
                }
            })
        });
    },

    resetBoard: function(){
        let xfields = document.querySelectorAll('.field-x')
        let ofields = document.querySelectorAll('.field-o')
        xfields.forEach(field => {
            field.classList.add('game-board-field')
            field.classList.remove('field-x')})
        ofields.forEach(field => {
            field.classList.add('game-board-field')
            field.classList.remove('field-o')
        })
    },

    gameTie: function(){
        if (document.querySelectorAll('.field-x').length == 5 || document.querySelectorAll('.field-o').length == 5){
            alert('Round tie!');
            this.resetBoard();
        }
    }
}