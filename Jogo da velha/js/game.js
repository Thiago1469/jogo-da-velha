var squares = document.querySelectorAll(".square");
var title = document.getElementById("command_title");
var btnReset = document.getElementById("btnreset");
var body = document.getElementById("corpo");
var playerScore1 = document.getElementById("pscore1");
var playerScore2 = document.getElementById("pscore2");
var abs = document.getElementById('abs');
var retorno = document.getElementById("return");

var p1score = 0;
var p2score = 0;

var lastWinnerRound = '';

var variant = "";

var currentPlayer = 'x';
var blockValue;

var score = {
    block1: {value: ''},
    block2: {value: ''},
    block3: {value: ''},
    block4: {value: ''},
    block5: {value: ''},
    block6: {value: ''},
    block7: {value: ''},
    block8: {value: ''},
    block9: {value: ''}

}


retorno.addEventListener("click", function(e){
    e.preventDefault();
    window.location.href = 'index.html';
})



squares.forEach(function(square){
    square.addEventListener("click", function(){

        if(currentPlayer === 'x'){
            this.classList.add("x");
            currentPlayer = 'o'
            this.style.pointerEvents = 'none'

            blockValue = this.dataset.block;

            title.innerHTML = "Vez de Jogador 2 <img id='abs' src='images/O.png' width='48' height='48'> ";

        }
        else{
            this.classList.add("o");
            currentPlayer = 'x';
            this.style.pointerEvents = 'none'
            blockValue = this.dataset.block;
            title.innerHTML = "Vez de Jogador 1 <img id='abs' src='images/X.png' width='48' height='48'> ";
            }

            switch (blockValue){
                case 'block1':
                    score.block1.value = currentPlayer === 'x' ? 'o' : 'x';
                    break;
    
                case 'block2':
                    score.block2.value = currentPlayer === 'x' ? 'o' : 'x';
                    break;
    
                case 'block3':
                    score.block3.value = currentPlayer === 'x' ? 'o' : 'x';
                    break;
    
                case 'block4':
                    score.block4.value = currentPlayer === 'x' ? 'o' : 'x';
                    break;
    
                case 'block5':
                    score.block5.value = currentPlayer === 'x' ? 'o' : 'x';
                    break;
    
                case 'block6':
                    score.block6.value = currentPlayer === 'x' ? 'o' : 'x';
                    break;
    
                case 'block7':
                    score.block7.value = currentPlayer === 'x' ? 'o' : 'x';
                    break;
    
                case 'block8':
                    score.block8.value = currentPlayer === 'x' ? 'o' : 'x';
                    break;
    
                case 'block9':
                    score.block9.value = currentPlayer === 'x' ? 'o' : 'x';
                    break;
            }
            checkDraw();
            winner();
            

        })

    }
)


function winner(){

    const winningCombination = [
        ['block1', 'block2', 'block3'],
        ['block4', 'block5', 'block6'],
        ['block7', 'block8', 'block9'],
        ['block1', 'block4', 'block7'],
        ['block2', 'block5', 'block8'],
        ['block3', 'block6', 'block9'],
        ['block1', 'block5', 'block9'],
        ['block3', 'block5', 'block7']
    ];

    for(let combination of winningCombination){
        
        

        const [a, b, c] = combination;

        if (score[a].value && score[a].value === score[b].value && score[a].value === score[c].value) {

            btnReset.style.display = 'flex';

            title.textContent = `Parabéns Jogador ${score[a].value === 'x' ? '1' : '2'}, Você ganhou e começara na proxima rodada`;
            if(score[a].value === 'x'){
                p1score++;
                playerScore1.textContent = p1score;
                lastWinnerRound = 'x';

            }

            if(score[a].value === 'o'){
                p2score++;
                playerScore2.textContent = p2score;
                lastWinnerRound = 'o';
            }


            let winningSquares = [
                document.querySelector(`[data-block="${a}"]`),
                document.querySelector(`[data-block="${b}"]`),
                document.querySelector(`[data-block="${c}"]`)
            ];

            squares.forEach(function(square){
                square.style.pointerEvents = 'none';
            })
            
            winningSquares.forEach(function(square){
                square.style.backgroundColor = '#00FF00';
               
            })


            return;
        }
       
    }


}

function resetGame(){
        
    squares.forEach(function(reset){
        btnReset.addEventListener("click", function(){
            reset.classList.remove("x");
            reset.classList.remove("o");
            reset.style = '';
            title.textContent = 'Jogo da velha!';
            currentPlayer = lastWinnerRound;
            
          for (let key in score){
            score[key].value = '';
          }

            btnReset.style.display = 'none'
        })
    })

}

function checkDraw () {

        

        const drawCombination = [
            ['block1', 'block2', 'block3', 'block4', 'block5', 'block6', 'block7', 'block8', 'block9']

        ];

        for(let combination of drawCombination){
            const [one, two, three, four, five, six, seven, eight, nine] = combination;
            
            let draw = true;
            
            if (score[one].value === '' || score[two].value === '' || score[three].value === '' || 
                score[four].value === '' || score[five].value === '' || score[six].value === '' || 
                score[seven].value === '' || score[eight].value === '' || score[nine].value === '') {

                draw = false;
            }

            if(draw === true){

                if(lastWinnerRound === 'x'){
                    variant = "1";
                } else if(lastWinnerRound === 'o'){
                    variant = "2";
                }

                btnReset.style.display = 'flex';
                title.textContent = "Empate! Ninguém venceu, Jogador "+variant+" Começara a rodada";
                squares.forEach(function (square){
                square.style.pointerEvents = 'none';
                  
            })
            }

    }


}

resetGame();









    




  
    

