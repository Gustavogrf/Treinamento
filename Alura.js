alert("boas vindas ao jogo do número secreto");
let NumeroSecreto = 5;
console.log(NumeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute nao for igual ao número secreto
while (chute != NumeroSecreto) {
  chute = prompt("Escolha um número entre 1 e 10");
  // se chute for igual o número secreto
  if (chute == NumeroSecreto) {
    break;
  } else {
    if (chute > NumeroSecreto) {
      alert(`o número secreto é menor que ${chute}`);
    } else {
      alert(`o número secreto é maior que ${chute}`);
    }
    // tentativas = tentativas + 1
    tentativas++;
  }
}
if (tentativas > 1) {
  alert(
    `Isso ai ! você acertou o número secreto ${NumeroSecreto} com ${tentativas} tentativas`
  );
} else { alert(
  `Isso ai ! você acertou o número secreto ${NumeroSecreto} com ${tentativas} tentativa`
);

}
