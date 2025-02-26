const name1 = "Gustavo";
const age1 = 30;
const anoNascimento = 1994;
const temCarteira1 = true;
let saldo1 = 100;

const name2 = "Gabriel";
const age2 = 65;
let temCarteira2 = false;
let saldo2 = 200;

console.log(
  `Pessoa 1 : Name = ${name1} , age = ${age1} , Tem carteira = ${temCarteira1}, saldo = ${saldo1}`
);
console.log(
  `Pessoa 2 : Name = ${name2} , age = ${age2} , Tem carteira = ${temCarteira2}`
);

function atualizaSaldo(saldo, valor) {
  const resultado = saldo + valor;
  console.log(`o seu novo saldo é ${resultado}`);
  return resultado;
}

if (temCarteira1) {
  saldo1 = atualizaSaldo(saldo1, 200);
}
if (temCarteira2) {
  saldo2 = atualizaSaldo(saldo2, 200);
}
temCarteira2 = true;
if (temCarteira2) {
  saldo2 = atualizaSaldo(saldo2, -100);
}
saldo1 = atualizaSaldo(saldo1, -450);
saldo2 = atualizaSaldo(saldo2, -450);
if (age1 > 50) {
  saldo1 = atualizaSaldo(saldo1 + 1000);
}
if (age2 > 50) {
  saldo2 = atualizaSaldo(saldo2 + 1000);
}

function calculeIdade(ano) {
  const REGRA_ANO = 2030;
  const resultadoIdade = REGRA_ANO - ano;
  console.log(`a idade da pessoa neste ano será de ${resultadoIdade}`);
  return resultadoIdade;
}

calculeIdade(anoNascimento);

function exibeDados (name , age , temCarteira , saldo ){
  console.log(
    `Pessoa 1 : Name = ${name} , age = ${age} , Tem carteira = ${temCarteira}, saldo = ${saldo}`
  );
}
exibeDados('marina', 40 , true, 10000)
exibeDados('bruna' , 30 , false , 20000)
exibeDados('bruna' , 30 , false , 20000)
exibeDados('bruna' , 30 , false , 20000)
exibeDados('bruna' , 30 , false , 20000)
exibeDados('bruna' , 30 , false , 20000)