alert ('Bem Vindo! Esse é o jogo de número secreto.');

let numVezes = 100;
let numSecreto = parseInt(Math.random() * numVezes + 1);

console.log(`Númerop secreto = ${numSecreto}`);

let chute;  
let tentativas = 1;

while(chute != numSecreto){
    chute = prompt(`Escreva um numero de 1 a ${numVezes}`);
    console.log (`chute = ${chute}`);

    if(chute == numSecreto){
        break;
    }
    else{
        if(chute > numSecreto){
            alert (`O número secreto é menor quer ${chute}`)
        } else{
            alert(`o número secreto é maior que ${chute}`)
        }
        tentativas++
    }
}

let palavraTentativas = tentativas > 1 ? 'tentativas': 'tentativa';
alert(`Você acertou o numero Secreto ${numSecreto} com ${tentativas} ${palavraTentativas}`)