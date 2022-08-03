'use strict'

function BinarioADecimal(num) {
  let decimal=0;
  for (let i=0;i<num.length;i++){
    decimal+=num[num.length-1-i]*2**i;
  }
  return decimal;

}

function DecimalABinario(num) {
  let binario=[];
  while(num>1){
    binario.push(num%2);
    num=Math.floor(num/2);
  }
  binario.push(num);
  return binario.reverse().join("");

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}