//?

const PontuaçãoUsuário = 999;
const nivelUsuario = PontuaçãoUsuário >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

console.log(nivelUsuario);

if (PontuaçãoUsuário >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário Normal');
}   

const corUsuario = null;
const corPadrao = corUsuario || 'Preto'
console.log(corPadrao);