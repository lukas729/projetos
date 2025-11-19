let numero = [5, 15, 8, 25, 3, 18];
 
let contador = 0
 
numero.forEach(numero =>{
 
     console.log(` ${numero} `);
   
    if(numero > 10){
        contador++;
    }
})
 
console.log("Quantidade de números maiores que 10: ", contador)