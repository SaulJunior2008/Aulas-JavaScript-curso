/*
Entre 0 - 11 = Bom Dia!
Entre 12 - 17 = Boa Tarde!
Entre 18 - 23 = Boa Noite!

if = pode ser executado sozinho
else if = ñ pode ser executado sozinho (else SEMPRE precisa de um if antes) (posso ter infinitos else ifs na checagem)
else = só pode ser utilizado UMA VEZ ns checagem
*/
const hora = 20;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if (hora >=12 && hora <= 17) {
    console.log('Boa Tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa Noite!');
} else {
    console.log('Horário inexistente');
}

const numero = 20;
if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5');
}else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 8');
}else if (numero >= 9 && numero <= 11) {
    console.log('O número está entre 9 e 11');
} else {
    console.log('O número não está entre 0 e 11')
}


