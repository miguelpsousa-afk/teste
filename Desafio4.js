const prompt = require('prompt-sync')();


let nome = ""
let estoque = 0;
let esgotado = 0;
let baixo = 0;
let ok = 0;

// lê o número digitado pelo usuário
const quantosProdutos = parseInt(prompt("Digite quantos produtos serão verificados: "))
for (let i = 1; i <= quantosProdutos; i++){
    nome = prompt("Digite o nome do produto: ")
    estoque = Number(prompt("Digite a quantidade em estoque: "))

    if (estoque === 0){
        resultado = "Esgotado"
        esgotado++;

    }else if (estoque <= 5){
        resultado = "Estoque baixo"
        baixo++;
    }else{
        resultado = "Estoque OK"
        ok++;
    }
    console.log(`Produto ${i} - nome: ${nome} - Quantidade: ${estoque} → ${resultado}\n`)
}
console.log(`===== RESUMO =====`)
console.log(`Esgotados: ${esgotado} | Baixo: ${baixo} | OK: ${ok}`)