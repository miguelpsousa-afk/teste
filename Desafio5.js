const prompt = require('prompt-sync')();

let valor = 0;
let soma = 0;
let nome = ""
console.log("======== CARDÁPIO ========\n1 - X-Burguer    R$ 18,00\n2 - Batata Frita R$ 12,00\n3 - Refrigerante R$ 6,00\n4 - Milkshake    R$ 15,00\n==========================")

const quantosPedidos = Number(prompt("Quantos pedidos?: "))
for (let i = 1; i <= quantosPedidos; i++){
    const qualPedido = Number(prompt("Qual pedido?: "))
    switch (qualPedido){
        case 1: 
            nome = "X-Burguer"
            valor += 18.00
            console.log(`--- Pedido ${i} --- Item: 1 → X-Burguer = R$ 18,00`); break;
        case 2: 
            nome = "Batata Frita"
            valor += 12.00
            console.log(`--- Pedido ${i} --- Item: 2 → Batata Frita = R$ 12,00`); break;
        case 3: 
            nome = "Refrigerante"
            valor += 6.00 
            console.log(`--- Pedido ${i} --- Item: 3 → Refrigerante = R$ 6,00`); break;
        case 4: 
            nome = "Milkshake"
            valor += 15.00
            console.log(`--- Pedido ${i} --- Item: 4 → Milkshake = R$ 15,00`); break;
    }
}
console.log(`===== TOTAL: R$ ${valor} =====`)