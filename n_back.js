let length
let result = [];
let resultCheck = [];
let answer = [];
let count = 0;
let randomeNum;
let ing = 0;
let gameNum
let currentNum
const num = document.querySelector('.number');
const resultBox = document.querySelector('.result');
const btnResult = document.querySelector('.btn_result');
const btnStart = document.querySelectorAll('.btn_start');
const myResult = document.querySelector('.my_result');
const restart = document.querySelector('.btn_restart');
const btnBox = document.querySelector('.btnBox');
const gameinfoBox = document.querySelector('.game_info');
const btnGameinfo = document.querySelector('.btn_game_info');

function nBack(backNum){
    ing = 1;
    gameNum = backNum;
    length = backNum + 9;
    btnGameinfo.style.display = 'none';
    btnStart.forEach(function(el){
        el.style.display = 'none'
    })
    num.innerHTML = `<span class="fadeout start">${backNum}-back 시작합니다.</span>`
    btnBox.style.display = 'flex';
    let interval = setInterval(() => {   
        if(length < count){
            clearInterval(interval);
            btnResult.style.display = 'block';
            resultBox.style.display = 'block';    
            btnBox.style.display = 'none';        
            for(let i=backNum;i<result.length;i++){
                if(result[i] == result[i-backNum]){
                    resultCheck.push('O')
                }else{
                    resultCheck.push('X')
                }
            }
            ing = 0;
        }else{
            if(count > backNum - 1){
                currentNum = result[count - backNum]
                if(Math.floor( Math.random()*100) < 49){
                    randomeNum = currentNum
                }else{
                    randomeNum = Math.floor( ( Math.random() * (10 - 1) + 1 ) )
                }
            }else{
                randomeNum = Math.floor( ( Math.random() * (10 - 1) + 1 ) )
            }
            num.innerHTML = `<span class="fadeout">${randomeNum}</span>`
            result.push(randomeNum)
            count++;  
        }         
    }, 100);
}
function showResult(){
    btnResult.style.display = 'none';
    restart.style.display = 'block';
    let score = resultCheck.filter((word,idx)=>{
        return word == answer[idx] ? word : '';
    })
    console.log(resultCheck, answer, score)
    resultBox.innerHTML = `<span style="font-size:17px">진행게임 ${gameNum}-back : ${result}</span><br><hr>
                            정답 : <span class="letter_space">${resultCheck.join('')}</span><br>
                            내답 : <span class="letter_space">${answer.join('')}</span><br>
                            점수 : ${length+1-gameNum}개중 <span class="col_green">${score.length}개 정답</span>`;
}

window.addEventListener('keydown',function(e){    
    if(ing == 1){
        if(e.key == 1){
            answer.push('O')
            myResult.innerHTML = '<span class="fadeout fast">O</span>'            
        }else{
            answer.push('X')
            myResult.innerHTML = '<span class="fadeout fast">X</span>'             
        }   
    }
}) 
function inputMyResult(num){
    if(ing == 1){
        if(num == 1){
            answer.push('O')
            myResult.innerHTML = '<span class="fadeout fast">O</span>'            
        }
        if(num == 2){
            answer.push('X')
            myResult.innerHTML = '<span class="fadeout fast">X</span>'             
        }   
    }
}


function gameInfo(){
    const bg = document.createElement('div');
    bg.classList.add('fixBg')
    document.querySelector('.box').appendChild(bg)
    gameinfoBox.style.display = 'block'
    document.querySelector('.fixBg').addEventListener('click',function(){
        gameinfoBox.style.display = 'none';
        this.remove()
    })
}
