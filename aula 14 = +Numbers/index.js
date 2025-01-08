let num1 = 100;
let num2 = 2.5;
let num3 = 10.7487825785025

//.toString = transforma um number em uma variável
console.log(num1.toString() + num2);

//exibe o nº em sua forma binária
console.log(num1.toString(2));

//.toFixed = simplifica um número com muitas casa decimais
console.log(num3.toFixed(2)); //Esee "2" é a quantidade de casas decimais q aparecerão

//Number.isInteger = indica se o nº é inteiro.
console.log(Number.isInteger(num1));

//Number.isNaN = indica se o nº é um NaN (not a number)
let conta = num1 * 'Olá';
console.log(Number.isNaN(conta));