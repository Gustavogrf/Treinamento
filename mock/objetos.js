import { alunos } from "./dados.js";

// manipulação de objetos
const conta = {
  dono: "gustavo",
  saldo: 1000,
};
// console.log(`o saldo ds conta é ${conta.saldo}`)

// instanciar um objeto
const teste = new Object();

// adicionar propriedades no objeto
teste.nome = "melissa";
teste.idade = 1;
// console.log(teste)

// alunos.forEach((obj) => {
//     console.log(obj.nome)
// })

// const alunosMenorIdade = alunos.filter((aluno) => {
//   return aluno.idade < 15;
// });
// console.log(alunosMenorIdade);

const alunosComProfessor = alunos.map((aluno) => {
  if (aluno.turma == "A") {
    aluno.professor = "Marina";
  } else if (aluno.turma == "B") {
    aluno.professor = "Gariel";
  } else if (aluno.turma == "C") {
    aluno.professor = "Bruna";
  } else {
    aluno.professor = "sem professor";
  }

  return aluno;
});
console.log(alunosComProfessor);

