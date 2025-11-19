let compras = []

compras.push("banana", "carne", "quijo", "presunto", "maça", "óleo", "arroz", "feijão", "miojo", "macarão")

console.log( "Minha lista de compras:", "\n")

compras.forEach((compras,index) => {
 
    console.log(`${index + 1}. ${compras} `);
 
});