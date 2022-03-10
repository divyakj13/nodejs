function factorial(n){
    let a= 1;
    if (n == 0 || n == 1){
      return a;
    }else{
      for(var i = n; i >= 1; i--){
        a = a * i;
      }
      return a;
    }  
  }
  let n = 12;
  a = factorial(n)
  console.log("The factorial of " + n + " is " + a);
