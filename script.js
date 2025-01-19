let form=document.getElementById('usernameForm');
let username=document.getElementById('username');
let errorText=document.getElementById('errorMessage');
let button=document.querySelector('button');

form.addEventListener('submit',function(event){
    event.preventDefault();

    let rule=/^[a-zA-Z]+[a-zA-Z0-9]{5,}$/ig;
    if(username.value.match(rule)){
    errorText.style.display="block"
    errorText.innerText="valid username!"
    errorText.style.color="green"
    }else{
  errorText.style.display="block"
   errorText.style.color="red"
    }
})
