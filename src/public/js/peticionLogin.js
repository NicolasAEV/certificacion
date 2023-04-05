//login
//rescatamos los valores enviados 
let formularioLogin = document.getElementById('formularioLogin')

//llamamos al evento submit 
formularioLogin.addEventListener("submit", (event) => {
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    event.preventDefault();
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    //convertimos los values en un objeto JSON
    let raw = JSON.stringify({
    email: email.value,
    password: password.value
    });
    //los add al request option donde especificamos el metodo , headers y body
    let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };
    //realizamos la peticion fetch 
    fetch("/api/v1/login", requestOptions)
    //vemos el tipo de  respuesta del servidor 
    .then(response => response.json())
    //guardamos el token en el localstorage
    .then(result => {
        if(result.code == 200){
            alert("Usuario autenticado con éxito.")
            console.log(result.token)
            localStorage.setItem("jwt", result.token)
            location.href = "/";
        }else if(result.code == 401){
            alert(result.message)
        }else{
            alert("Login fallido.")
        }
    })
    .catch(error => console.log('error', error));
})

//rescatamos el formulario completo
let formularioRegstro = document.getElementById("formularioRegistro");
//llamamos al evento submit 

formularioRegstro.addEventListener("submit", (event) => {
    console.log('here')
    event.preventDefault();
    //establecemos el header 
    let myHeaders = new Headers();
//le asignamos los valores del formulario al body y el metodo
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: new FormData(formularioRegstro),
        redirect: 'follow'
    };
    console.log('here2')

//realizamos la peticion fetch 
    fetch("/api/v1/regitro", requestOptions)
    //vemos el tipo de  respuesta del servidor 
    .then(response =>  response.json() )
    //
    .then(result => {
        console.log(result.code,result.message)
        if(result.code ==200){
            alert(result.message)
            location.href = '/'
        }else{
            alert(result.message)
        }
    })
    .catch(error => console.log('error', error));
})
