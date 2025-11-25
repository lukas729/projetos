const mensagens = [
  "Hoje o dia está lindo!",
  "Não gostei desse trabalho",
  "A aula foi muito divertida",
  "Que tarefa chata"
];
 
const palavrasProibidas = ["chato", "chata", "não gostei"];
 
const mensagensComProibidas = mensagens.filter(mensagens => palavrasProibidas.some(p => mensagens.toLowerCase().includes(p.toLowerCase()))
);
 
console.log("Mensagens com palavras proibidas:");
console.log(mensagensComProibidas);
 
