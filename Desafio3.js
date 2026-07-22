const prompt = require('prompt-sync')();

const n = parseInt(prompt("Digite o número que quer saber a tabuada: "))
for(let i = 1; i <= 10; i++){
    console.log(`${n} x ${i} = ${n * i}`)
}