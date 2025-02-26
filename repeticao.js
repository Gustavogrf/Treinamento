for (let i = 0; i < 3; i++) {
  console.log(` iteração ${i}`);
}
console.log("acabou a iteração");

const valores = [1, 2, 3, 4, 5];
console.log(valores.length);
for (let i = 0; i <= valores.length; i++) {
  console.log(valores[i]);
}

let i = 0;
while (i < 10) {
  if (i > valores.length) {
    break;
  }
  console.log(`iteração ${i}`);
  i++;
}
