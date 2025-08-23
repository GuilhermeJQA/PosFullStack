let notas = [7.5, 8.0, 6.5, 9.2, 5.8];

console.log(notas[0]);
console.log(notas[notas.length - 1]);

notas.push(7.8);
notas.shift();

console.log(notas);

notas.forEach((nota) => {
    console.log(nota);
});

let media = notas.reduce((acum, nota) => acum + nota, 0) / notas.length;
console.log(media);

let notasMaioresQueSete = notas.filter(nota => nota > 7);
console.log(notasMaioresQueSete);

let notasOrdenadas = [...notas].sort((a, b) => a - b);
console.log(notasOrdenadas);

console.log(notas.includes(6.5));

console.log(notas.indexOf(8.0));

let notasQuadrado = notas.map(nota => nota ** 2);
console.log(notasQuadrado);