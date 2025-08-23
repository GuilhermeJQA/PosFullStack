let aluno = {
    nome: "João Silva",
    idade: 21,
    curso: "Ciência da Computação",
    notas: [7.5, 8.2, 9.0]
};

console.log(aluno.nome);
console.log(aluno.notas[0]);

aluno.idade = 22;
aluno.notas.push(8.7);

let alunoString = JSON.stringify(aluno);
console.log(alunoString);

let alunoObj = JSON.parse(alunoString);

for (let prop in alunoObj) {
    console.log(prop + ":", alunoObj[prop]);
}

let media = alunoObj.notas.reduce((acc, nota) => acc + nota, 0) / alunoObj.notas.length;
console.log(media);

aluno.endereco = {
    rua: "Rua das Flores",
    cidade: "João Pessoa",
    estado: "PB"
};

console.log(aluno.endereco.cidade);
console.log(aluno.endereco.estado);

let alunos = [
    {
        nome: "João Silva",
        idade: 22,
        curso: "Ciência da Computação",
        notas: [7.5, 8.2, 9.0],
        endereco: { rua: "Rua das Flores", cidade: "João Pessoa", estado: "PB" }
    },
    {
        nome: "Maria Souza",
        idade: 23,
        curso: "Engenharia",
        notas: [9.5, 8.8, 9.2],
        endereco: { rua: "Av. Central", cidade: "Campina Grande", estado: "PB" }
    },
    {
        nome: "Pedro Lima",
        idade: 20,
        curso: "Matemática",
        notas: [6.0, 7.2, 7.8],
        endereco: { rua: "Rua Nova", cidade: "Patos", estado: "PB" }
    }
];

let alunosComMediaMaiorQue8 = alunos.filter(aluno => {
    let media = aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length;
    return media > 8;
});
console.log(alunosComMediaMaiorQue8);