let valor1;
let valor2;
let operacao = {
    "soma": 1,
    "subtracao": 2,
    "multiplicacao": 3,
    "divisao": 4
}

const calculadora = (a, b, operacao) => {
    switch (operacao) {
        case 1:
            return a + b;
        case 2:
            return a - b;
        case 3:
            return a * b;
        case 4:
            if (b == 0) return "Impossível dividir por 0";
            else return a / b;
        default:
            return 'Operação inválida';
    }
}

console.log("Soma = 1, substracao = 2, multiplicacao = 3, divisao = 4");
console.log("Soma 1 + 2: " + calculadora(1, 2, operacao.soma));
console.log("Subtração 1 - 2: " + calculadora(1, 2, operacao.subtracao));
console.log("Multiplicação 1 * 2: " + calculadora(1, 2, operacao.multiplicacao));
console.log("Divisão 1 / 0: " + calculadora(1, 0, operacao.divisao));