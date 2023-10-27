function isPrime(){
    const txtNum= document.querySelector("#txtNum");
    const result= document.querySelector("#result");
    const num= Number(txtNum.value);

    for(let i=2; i<num ; i++){
        if(num % i === 0){
            result.innerHTML= `${num} is not a prime number`;
            return false;
            break;
        }
    }
    return result;

    console.log(isPrime(11));
    console.log(isPrime(4));
}

function onIsPrimeClick(){
    const txtNum= document.querySelector("#txtNum");
    const result= document.querySelector("#result");
    const num= Number(txtNum.value);
}