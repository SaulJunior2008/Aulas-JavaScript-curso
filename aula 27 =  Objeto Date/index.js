const data = new Date();
console.log(data.toString());

const data2 = new Date(2024, 7, 21, 15, 40, 25); //ano, mês, dia, hora, minuto, segundos, milissegundos
console.log(data2.toString());

const data3 = new Date('2024-08-21 20:43:24') 
console.log(data3.toString());

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); //Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); //Domingo é 0 e Sábado é 6
console.log(data.toString());