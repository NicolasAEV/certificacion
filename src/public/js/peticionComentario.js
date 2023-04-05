//rescatamos el formulario completo



let formularioComentario = document.getElementById("formularioComentario");
//llamamos al evento submit 

formularioComentario.addEventListener("submit", (event) => {
    event.preventDefault();
    //establecemos el header 
    let myHeaders = new Headers();
    myHeaders.append("authorization", "Bearer " + localStorage.getItem("jwt"));
//le asignamos los valores del formulario al body y el metodo
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: new FormData(formularioComentario),
        redirect: 'follow'
    };

//realizamos la peticion fetch 
    fetch("/api/v1/comentario", requestOptions)
    //vemos el tipo de  respuesta del servidor 
    .then(response =>  response.json() )
    //
    .then(result => {
        console.log(result.code,result.message)
        if(result.code ==200){
            alert(result.message)
            location.reload()
        }else{
            alert(result.message)
          
        }
    })
    .catch(error => console.log('error', error));
})

let comentario = document.getElementsByClassName('comentario')
let tokens = localStorage.getItem('jwt');


