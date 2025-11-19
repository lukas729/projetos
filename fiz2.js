let nomes = ["Vitoria", "Leticia" ,"Beatriz"]

nomes.push("Lukas jnr", "Kaun jnr");
console.log(nomes)

let removido = nomes.pop();
console.log(nomes)

console.log( "Minha lista de nomes:", "\n")

nomes.forEach((nomes,index) => {
 
    console.log(`${index + 1}. ${nomes} `);
 
});