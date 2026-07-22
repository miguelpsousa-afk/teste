const prompt = require('prompt-sync')();

//inicializa a soma
let soma = 0;

for (let i = 1; i <= 5; i++){
    const numero = Number(prompt(`Digite o ${i}º número: `));
    soma = soma + numero; //acumula o valor
}

console.log(`Soma total: ${soma}`);