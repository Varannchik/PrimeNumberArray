let allNumber=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let primeNumber = allNumber.filter(function(number) {
  if(number==1){
    return false;
  }     
  for(let d=2; d*d<=number; d++){  
    if(number%d==0){
      return false;
    }      
  }
  return number;  
});

console.log(primeNumber);

let summaPrime=primeNumber.reduce(function(sum, current) {
  return sum + current;
}, 0);

console.log(summaPrime);