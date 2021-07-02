let resultado  = fizzbuzz('teste');
console.log(resultado);

function fizzbuzz(entrada){
  if(typeof entrada !== 'number')
    return 'Não é número';
  if ((entrada %3 ===0)&&(entrada %5===0))
    return 'Fizzbuzz';
  if (entrada %3===0)
    return 'Fizz';
  if (entrada%5 ===0)
    return 'buzz';

  return entrada;
}