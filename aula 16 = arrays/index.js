//            0123456789
const nome = 'Saul Júnior'

//                0        1       2
const alunos = ['Luiz', 'Maria', 'João']; //para criar um array, devemos usar os []
const alunos2 =['Mario', 'Lucas', 'Jacinto'];
console.log(alunos);
console.log(alunos[0]);//exibe o índice indicado
console.log(alunos[1]);//exibe o índice indicado
console.log(alunos[2]); //exibe o índice indicado

//.push = adiciona mais um objeto no final do array
alunos.push('Luiza');
console.log(alunos);

//.unshift = adiciona mais um objeto no começo do array
alunos.unshift('Carlos');
console.log(alunos);

//.pop = remove o último objeto do array
alunos.pop();
console.log(alunos);

//.shift = remove o primeiro objeto do array
alunos.shift();
console.log(alunos);

//delete = exclui um objeto do array sem mudar on índices
delete alunos[1];
console.log(alunos);

//.slice = exibe os objetos do array indicados
console.log(alunos2.slice(0, 3));// 0 é o indice q vai começar e 3 é oq vai parar

//instanceoff Array = indica se é ou não um array
console.log(alunos2 instanceof Array);

//.length = índica o tamanho do array
console.log(alunos2.length);