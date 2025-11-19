const prompt = require('prompt-sync')({ sigint: true })
 
let pedido = []
 
for(let i = 0; i < 4; i++){
const pedidos = prompt('Faça seu pedido: ')
pedido.push(pedidos)
 console.log("Seu pedido ",pedidos)
}
pedido.pop()
console.log("pedidos retirados", pedido)
pedido.pop()
console.log("pedidos retirados", pedido) 

pedido.forEach((pedido, index) => {
    console.log(`${index + 1}. ${pedido} `)
})