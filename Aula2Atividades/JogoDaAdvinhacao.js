const readline = require('readline');

let maxTentativas = 10;

function atingiuLimiteTentativas(tentativas, maxTentativas) {
    return tentativas >= maxTentativas;
}

function verificarTentativa(palpite, numeroSecreto) {
    if (palpite === numeroSecreto) {
        return "Parabéns! Você acertou!";
    } else if (palpite < numeroSecreto) {
        return "O número secreto é maior.";
    } else {
        return "O número secreto é menor.";
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Jogo() {
    let tentativas = 0;
    let numeroSecreto = Math.floor(Math.random() * 100) + 1;

    function perguntar() {
        if (atingiuLimiteTentativas(tentativas, maxTentativas)) {
            console.log("Suas tentativas acabaram! O número era " + numeroSecreto);
            rl.close();
            return;
        }
        rl.question("Adivinhe o número entre 1 e 100: ", (input) => {
            let palpite = parseInt(input);
            let mensagem = verificarTentativa(palpite, numeroSecreto);
            console.log(mensagem);

            if (palpite === numeroSecreto) {
                console.log("Você acertou o número em " + (tentativas + 1) + " tentativas.");
                rl.close();
                return;
            }
            tentativas++;
            perguntar();
        });
    }
    perguntar();
}

Jogo();