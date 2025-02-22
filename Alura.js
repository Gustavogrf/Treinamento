alert("boas vindas ao jogo do número secreto");
let NumeroSecreto = 5;
console.log(NumeroSecreto);
let chute = prompt("Escolha um número entre 1 e 10");

if (chute == NumeroSecreto) {
  alert(`Isso ai ! você acertou o número secreto ${NumeroSecreto}`);
} else {
  alert(" Você errou !");
}
