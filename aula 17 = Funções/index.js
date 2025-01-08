//function = cria uma função
function saudacao(nome) {
   return `Bom dia ${nome}!`
}

const variavel = saudacao('Saul');
console.log(variavel);

//OU

const saudacao2 = nome2 => `Bom dia ${nome2}!`
console.log(saudacao2('Saul'));

function soma(x ,y) {
 const resultado = x + y  
   return resultado;
}
console.log(soma(10, 50));
console.log(soma(20, 60));
console.log(soma(30, 70));

const raiz = function (n) {
    return n ** 0.5
};
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

//OU

const raizQuadrada = nº => nº ** 0.5;
console.log(raizQuadrada(9));
console.log(raizQuadrada(16));
console.log(raizQuadrada(25));

