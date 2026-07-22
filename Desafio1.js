const prompt = require('prompt-sync')();

const temp = parseInt(prompt("Digite a temperatura em Graus: "))

if (temp < 15){
    console.log(`Temperatura: ${temp}° graus`)
    console.log("Frio")
}else if (temp <= 24){
    console.log(`Temperatura: ${temp}° graus`)
    console.log("Agradável")
}else if (temp >= 25){
    console.log(`Temperatura: ${temp}° graus`)
    console.log("Quente")
}