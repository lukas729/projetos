const carros = [
  { modelo: "ONIX", marca: "CHEVROLET" },
  { modelo: "ARGO", marca: "FiAT" },
  { modelo: "MOBI", marca: "FIAT" },
  { modelo: "HB20", marca: "Honda" }
];
 
const fiat = carros.filter(carro => carro.marca.toUpperCase() === "FIAT");
 
console.log("Carros da FIAT:");
console.log(fiat);