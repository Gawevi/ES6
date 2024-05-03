const alunos = [
    { nome: 'Guilherme', nota: 5},
    { nome: 'Gustavo', nota: 6},
    { nome: 'Alice', nota: 10}
]

const buscaAluno = alunos.filter(function(item) {
    return item.nota >= 6
})

console.log(buscaAluno);