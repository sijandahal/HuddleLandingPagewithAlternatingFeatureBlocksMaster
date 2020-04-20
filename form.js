function validation(){


  var name = document.getElementById('name').value;
  const subject = document.getElementById('subject').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const error_message = document.getElementById('error')

  var text ;
  error_message.style.padding= "10px";

  if(name.length < 5){
    text  = "Please enter a valid Name";
    error_message.innerHTML = text;
    return false;
  }

  if(subject.length< 10) {
    text  = "Please enter more than 10 words";
    error_message.innerHTML = text;
    return false;
  }

 if(isNaN(phone) ||  phone.length !=10){
  text = "Please enter valid phone number";
  error_message.innerHTML = text;
  return false;
 }

if(email.indexof('@') && email.length < 6){
  text = "Please enter valid email address"
  error_message.innerHTML = text;
  return false;
}

if(message.length  < 15 ) {
  text = "Please enter your message more than 15 characters"
  error_message.innerHTML =  text;
  return false;
}
 
  alert("grrreeaaaat");
  return true;

  


}