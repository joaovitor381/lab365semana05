const lista = ["Banana", "Morango", "Maçã", "Uva", "Pêra"];

lista.forEach((item) => {
  localStorage.setItem(item, item);
});
