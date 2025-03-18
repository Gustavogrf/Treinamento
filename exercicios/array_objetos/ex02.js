// crie uma função que calcule a media de notas

const notas = [7, 7.5, 8];

export const calculaMedia = (notasArray) => {
  let soma = 0;
  for (const nota of notasArray) {
    soma += nota;
  }
  const media = soma / notasArray.length;
  return media;
};

console.log (calculaMedia(notas));

