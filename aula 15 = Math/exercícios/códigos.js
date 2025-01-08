let nº = prompt('Digite um número');
document.body.innerHTML +=`<strong> Seu número é: ${nº}<strong/><br />`;
document.body.innerHTML +=`Raiz quadrada é: <strong>${nº ** (1/2)}<strong/><br />`;
document.body.innerHTML +=`${nº} é inteiro: <strong>${Number.isInteger(nº)}<strong/><br />`;
document.body.innerHTML +=`É NaN: <strong>${Number.isNaN(nº)}<strong/><br />`
document.body.innerHTML +=`Aredondado pra baixo: <strong>${Math.floor(nº)}<strong/><br />`;
document.body.innerHTML +=`Aredondado pra cima: <strong>${Math.ceil(nº)}<strong/><br />`;
document.body.innerHTML +=`Com duas casas decimais: <strong>${nº.toFixed(2)}<strong/><br />`