const form = document.querySelector('.form');



form.addEventListener('submit', function (e) {
    e.preventDefault()
const user = document.querySelector('#user').value;
const password = document.querySelector('#password').value;

console.log(user, password);

const contenedor = document.querySelector('.mensaje');
// contenedor.innerHTML = ''
while (contenedor.firstChild) {
    contenedor.removeChild(contenedor.firstChild) 
}

if (user.trim() === '' || password.trim() === '') {
    console.log('Está vacío');
    const texto = document.createElement('P');
    texto.classList.add('mensaje', 'error')
    texto.textContent = 'No puede ingresar. Complete campos'
    contenedor.appendChild(texto)

    
}else{
    console.log('Listo puedes acceder');
    const texto = document.createElement('P');
    texto.classList.add('mensaje', 'okay')
    texto.textContent = 'Listo, puede ingresar'
    contenedor.appendChild(texto) 

   
}


    
})