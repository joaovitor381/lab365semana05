const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Impar = (numero) => {
  return numero % 2 !== 0;
};

const arrayImpares = arrayNumeros.filter(Impar);

const todosImpares = arrayImpares.every(Impar);

console.log("Vetor original: ", arrayNumeros);
console.log("Números ímpares: ", arrayImpares);
console.log("Todos são ímpares? ", todosImpares);
