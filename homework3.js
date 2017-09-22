const add = function(num1, num2, num3){
  return num1 * num2 * num3;
  };

const noarguments = function(){
  const text = 'i am useless';
  return text;
  };

const  noreturn = function(number1, number2){
        const add = number1 + number2;
};

const  fullname = function(fname, lname){
  return fname + ' ' + lname;
};

const longest = function(n1, n2, n3){
  if((n1.length > n2.length || n1.length ===n2.length) && ((n1.length > n3.length) || (n1.length === n3.length))){
    return n1;
  } else if((n2.length > n1.length || n2.length === n1.length) && ((n2.length > n3.length) || (n2.length === n3.length))){
    return n2;
  } else if((n3.length > n1.length || n3.length === n1.length) && ((n3.length > n2.length) || (n3.length === n2.length))){
    return n3;
  }
};

  const compare = function(n1, n2){
  if (n1 > n2){
    return 1;
  }
  if (n1 === n2){
    return 0;
  }
  if (n2 > n1){
    return -1;
  } 
};

  const firstThru = function(n1 ,n2 ,n3){
    if (n1){
      return n1;
    }
    if (n2){
      return n2;
    }
    if (n3){
      return n3;
    }
  };
  
  
