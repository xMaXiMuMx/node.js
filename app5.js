var foo= (arg1,arg2) => {
	console.log('foo:' + arg1 + arg2);
}

setTimeout(foo, 2000, 'Joe','Jim');
