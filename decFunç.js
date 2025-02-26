const name1 = "Gustavo";
const age1 = 30;
const temCarteira1 = true;
let saldo1 = 100;

const name2 = "Gabriel";
const age2 = 65;
const temCarteira2 = false;
let saldo2 = 200;

console.log(
  `Pessoa 1 : Name = ${name1} , age = ${age1} , Tem carteira = ${temCarteira1}, saldo = ${saldo1}`
);
console.log(
  `Pessoa 2 : Name = ${name2} , age = ${age2} , Tem carteira = ${temCarteira2}`
);

function AtualizaSaldo(saldo, valor) {
  return saldo + valor;
}

if (temCarteira1) {
  saldo1 = AtualizaSaldo(saldo1, 200);
}
if (temCarteira2) {
  saldo2 = AtualizaSaldo(saldo2, 200);
}
temCarteira2 = true;
saldo1 = AtualizaSaldo(saldo1, -450);
saldo2 = AtualizaSaldo(saldo2, -450);
if (age1 > 50) {
  saldo1 = AtualizaSaldo(saldo1 + 1000);
}
if (age2 > 50) {
  saldo2 = AtualizaSaldo(saldo2 + 1000);
}
