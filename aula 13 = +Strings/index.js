//               0123456789
let umaString = 'Um texto'
let umaString2 = 'O rato roeu a roupa do rei de Roma.'
let umaString3 = 'O RATO ROEU A ROUPA DO REI DE ROMA.'

//seleciona a letra na posição desejada
console.log(umaString[4]); 
console.log(umaString.charAt(6)); 

//concatena as Strings
console.log(umaString.concat(' em', ' um', ' lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`)

//indica o índice em q a palavra/letra desejada começa/ se encontra.
console.log(umaString.indexOf('t'));

//procura o índice de trás pra frente
console.log(umaString.lastIndexOf('t'));

//substitui a palavra desejada por outra
console.log(umaString.replace('Um', 'Outro'));
console.log(umaString2.replace(/r/g, "#"))//sobstituiu todos os "r"

//indica a quantidade de índices em uma string
console.log(umaString2.length);

//substitui todas as letras por maiúsculas ou minúsculas
console.log(umaString2.toUpperCase());
console.log(umaString3.toLowerCase());

