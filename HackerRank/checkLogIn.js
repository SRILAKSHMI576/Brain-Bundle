function checkLogIn(userName, password){
	if(userName == 'admin' && password == 'Welcome'){
		console.log("Welcome")
	}
	else if(userName !== 'admin' && password == 'Welcome' || password == ''){
		console.log("Dont know you")
	}else {
		console.log("canceled")
	}
}

// console.log(checkLogIn('admin', 'Welcome'))

function CheckLoggedIn(userName, pass){
	if (userName == 'Admin') {
		if (pass == 'TheMaster') {
			console.log( 'Welcome!' );
		} else if (pass == '' || pass == null) {
			console.log( 'Canceled' );
		} else {
			console.log( 'Wrong password' );
		}
	} else if (userName == '' || userName == null) {
		console.log( 'Canceled' );
	} else {
		console.log( "I don't know you" );
	}
}

console.log(CheckLoggedIn('Admin', 'TheMaster'))