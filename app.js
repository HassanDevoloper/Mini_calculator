
 const val1 = prompt("Enter a value 1");
 const val2 = prompt("Enter a value 2");
 const operator = prompt("please chose anyone for this: +,-,*,/,%");
   let result ;
 
  
  
  if(operator === "+"){
  result = parseFloat(val1) + parseFloat(val2);
  }
  else if (operator === "-") {
    result = parseFloat(val1) - parseFloat(val2);
  }
    else if (operator === "*") {
    result = parseFloat(val1) * parseFloat(val2);
  }
  else if (operator === "/") {
    result = parseFloat(val1) / parseFloat(val2);
  }
  else if (operator === "%") {
    result = parseFloat(val1) - parseFloat(val2);
  }
  document.write(val1,operator,val2,"=",result);
 
 
 