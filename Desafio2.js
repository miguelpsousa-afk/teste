const prompt = require('prompt-sync')();

console.log("(1 - Manhã | 2 - Tarde | 3 - Noite)")
const turno = Number(prompt("Digite o turno de acordo com os números: "))

switch(turno){
    case 1:
        console.log("Turno: Manhã")
        break;
    case 2:
        console.log("Turno: Tarde")
        break;
    case 3:
        console.log("Turno: Noite")
        break;
    default:
        console.log("TURNO INVÁLIDO!!")
}

if (turno === 1){
    console.log("Horário: 7h30 ás 12h15")
}else if (turno === 2){
    console.log("Horário: 13h00 ás 18h00")
}else if (turno === 3){
    console.log("Horário: 18h30 ás 22h00")
}else{
    console.log("")
}