const prompt = require('prompt-sync')();

//lê o número digitado pelo usuário
const numero = Number(prompt('Digite um numero: '));

//Verifica e classifica o número

if (numero > 0){
    console.log(`O número é POSITIVO`);
}else if (numero < 0){
    console.log(`O número é NEGATIVO`);
}else{
    console.log(`O número é ZERO`);
}