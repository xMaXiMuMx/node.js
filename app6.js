var id = setInterval (()=> console.log('foo'), 2000);
setTimeout (()=> clearInterval(id) , 9000);