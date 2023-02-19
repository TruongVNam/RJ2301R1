function isEmailRight(str) {
    regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[a-zA-Z0-9]+)$/
    if(regexp.test(str)) {return true}
    return false
}

let emailList = ['a@gmail.com', 'ab@yahoo.com', 'abc@hotmail.com', '@gmail.com', 'ab@gmail.', '@#abc@gmail.com'];
emailList.forEach(email =>{
    console.log(isEmailRight(email));
});