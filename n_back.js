let length
let result = [];
let count = 0;
let randomeNum;
const num = document.querySelector('.number');
const resultBox = document.querySelector('.result');

function nBack(backNum){
    length = backNum;
    let interval = setInterval(() => {   
        if(length < count){
            clearInterval(interval)            
            document.querySelector('.btn_result').style.display = 'block'
            resultBox.style.display = 'block'
        }else{         
            randomeNum = Math.floor( ( Math.random() * (10 - 1) + 1 ) )
            num.innerHTML = randomeNum
            result.push(randomeNum)
            count++
            console.log(result)   
        }         
    }, 1000);
}
function showResult(result){
    resultBox.innerHTML = result
}
nBack(2)
