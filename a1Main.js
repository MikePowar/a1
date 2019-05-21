
//Add DOM elements into Variables


function onSubmit(){

	let myName = document.getElementbyId("name");
	let myMessage = document.getElementbyId("message");
	console.log(myName);
	console.log(myMessage);
	//let obj = {
	//	nameKey = name,
	//	messageKey = message
	//};
	console.log(obj);
	let myJSON = JSON.stringify(obj);

//clear fields
name.value='';
message.value='';
}


