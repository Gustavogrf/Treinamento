import { dadosEscolas } from "../../mock/dadosEscola.js";

// Listar os nomes de todos os alunos da escola

dadosEscolas.forEach((escola) => {
    escola.turmas.forEach((turma) => {
        turma.alunos.forEach((aluno) => {
            console.log (`o aluno ${aluno.nome} é da turma ${turma.nome} da escola ${escola.nome}`)
        })
    })
})

for (const escola of dadosEscolas) {
  for (const turma of escola.turmas) {
    for (const aluno of turma.alunos) {
        console.log (`o aluno ${aluno.nome} é da turma ${turma.nome} da escola ${escola.nome}`)
    }
  }
}

