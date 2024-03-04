
const min = 1;
const max = 100;
const rand =Math.floor(Math.random() * (max - min + 1)) + min;
console.log(rand);
let no = 10;

const form = document.querySelector('.form');
const previousGuess = [];
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputField = parseInt(document.querySelector('#guessField').value);
    const lowHi = document.querySelector('.lowOrHi');
    const guess = document.querySelector('.guesses');
    const lastResult = document.querySelector('.lastResult');
    const subt = document.querySelector('#subt');

    lastResult.innerHTML = no;
    if(inputField<0 || inputField===''||isNaN(inputField)){
        lowHi.innerHTML = "Please Enter Valid No."
    }else if(inputField < rand){
        no--;
        previousGuess.push(inputField);
        guess.innerHTML = [...previousGuess];
        lastResult.innerHTML = no;
        if(no>0){
            
            lowHi.innerHTML = "Try Entering Higher No.";
            console.log(no);
        }else{
            lowHi.innerHTML = "Attempt Over";
            subt.disabled = true;
                }
    }else if(inputField>rand){
        no--;
        previousGuess.push(inputField);
        guess.innerHTML = [...previousGuess];
        lastResult.innerHTML = no;
        if(no>0){
           
            lowHi.innerHTML = "Try Entering Lower No.";
            console.log(no);
        }else{
            lowHi.innerHTML = "Attempt Over";
            subt.disabled = true;
        }
    }else{
        lowHi.innerHTML = "You have entered correct no";
        lastResult.innerHTML = "Lets Start Again";
    }

})
