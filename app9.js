function sumAll() {
   var total=0;
   for (var i=0; i< sumAll.arguments.length; i++) 
   		total+=sumAll.arguments[i];
   return(total); 
}
console.log(sumAll(3,5,3,5,3,2,6));
