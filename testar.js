const Cliente = require("./Cliente");
const Funcionario = require("./Funcionario");
const Administrador = require("./Administrador");

const c1 = new Cliente("Isabela Ferreira da Silva", "isabela.f.silva@edu.senai.br", 150);
const c2 = new Cliente("Heloisa Gigliott", "heloisa.soroca@edu.senai.br", 150);
const f1 = new Funcionario("Guilherme Tomaz Camara", "guilherme.camara@edu.senai.br", 2500);
const a1 = new Administrador("Lucas Maciel de Lima", "lucas.m.lima6@edu.senai.br", 5000);


console.log("--- POLIMORFISMO ---");
console.log("");


c1.apresentar();
console.log("");

f1.apresentar();
console.log("");

a1.apresentar();
console.log("");

// Exemplo do método próprio do Administrador
a1.resetarSenha();

