const Cliente = require("./Cliente");
const Funcionario = require("./Funcionario");

const c1 = new Cliente("Isabela Ferreira da Silva", "isabela.f.silva@edu.senai.br", 150);
const c2 = new Cliente("Heloisa Gigliott", "heloisa.soroca@edu.senai.br", 150);
const f1 = new Funcionario("Guilherme Tomaz Camara", "guilherme.camara@edu.senai.br", 2500);
const f2 = new Funcionario("Lucas Maciel de Lima", "lucas.m.lima6@edu.senai.br", 2500);

c1.apresentar();
console.log("");
f1.apresentar();
console.log("");
c2.apresentar();
console.log("");
f2.apresentar();

