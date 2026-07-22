const prompt = require('prompt-sync')();

//lê a nota
const nota = Number(prompt('Digite a nota (0-10): '));

switch (nota) {
    case 10:
    case 9:
        console.log(`Conceito: A`);
        break;
    case 8:
    case 7:
        console.log(`Conceito: B`);
        break;
    case 6:
    case 5:
        console.log(`Conceito: C`);
        break;
    case 4:
    case 3:
        console.log(`Conceito: D`);
        break;
    case 2:
    case 1:
    case 0:
        console.log(`Conceito: E`);
        break;
    default:
        console.log(`Nota inválida!a`);
}