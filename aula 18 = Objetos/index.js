//para criar um objeto devemos utilizar o {}
const pessoa1 = {
  nome: 'Saul',
  sobrenome: 'Júnior',
  idade: 16
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

//OU

function criaPessoa (nome, sobrenome, idade) {
   return { nome, sobrenome, idade };
}

const pessoa2 = criaPessoa('Marcia', 'Elias', 57);
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade);

