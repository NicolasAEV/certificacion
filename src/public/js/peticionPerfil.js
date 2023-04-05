//rescatamos el formulario completo
let publicarNoticia = document.getElementById("publicarNoticia");
//llamamos al evento submit 

publicarNoticia.addEventListener("submit", (event) => {
    event.preventDefault();
    //establecemos el header 
    let myHeaders = new Headers();
    myHeaders.append("authorization", "Bearer " + localStorage.getItem("jwt"));
//le asignamos los valores del formulario al body y el metodo
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: new FormData(publicarNoticia),
        redirect: 'follow'
    };

//realizamos la peticion fetch 
    fetch("/api/v1/articulo", requestOptions)
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
