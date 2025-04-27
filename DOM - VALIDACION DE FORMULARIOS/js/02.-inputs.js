const user = document.querySelector('#user');
const password = document.querySelector('#password');

const userClass = document.querySelector('.userClass');

console.log(user, password);


user.addEventListener('input', function (e) {
    
     userClass.textContent = ""
     
    if (user.value !== '') {
        
    }else{
        userClass.textContent = "Campo obligatorio"
    }
    
})