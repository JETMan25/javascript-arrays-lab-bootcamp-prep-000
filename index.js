const app = "I don't do much."
var kittens = [
  'Milo',
  'Otis',
  'Garfeld',
  ]
  
function destructivelyAppendKitten(){
  kittens.push('Ralph');
  
}

  function destructivelyPrependKitten(){
    kittens.unshift('Bob');
  }
  
  function destructivelyRemoveLastKitten(){
    kittens.pop('Milo');
  }