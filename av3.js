const usuarios = [
  {nome: "joao", estado: "SP"},
  {nome: "marina", estado: "MG"},
  {nome: "caua", estado: "MG"},
  {nome: "bianca", estado: "RJ"}
];

const usuariosmg = usuarios.filter(usuario => usuario.estado === "MG");

console.log("Usuarios de MG:");
console.log(usuariosmg);