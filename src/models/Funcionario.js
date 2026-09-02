const Pessoas = require("./Pessoas");
const BONUS = 0.10;

class Funcionario extends Pessoas {
    #salario;

    constructor(nome, email, salario) {
        super(nome, email);
        this.#salario = salario;
    }

    get salario() {
        return this.#salario;
    }

    calcularBonus() {
        return this.#salario * BONUS;
    }

    apresentar() {
        super.apresentar();
        console.log("Tipo: Funcionario");
        console.log("Bonus: R$ " + this.calcularBonus().toFixed(2));
    }
}

module.exports = Funcionario;