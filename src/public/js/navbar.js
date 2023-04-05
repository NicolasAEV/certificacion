const btnLogin = document.getElementById('btnLogin')
const btnRegistrar = document.getElementById('btnRegistrar')
const btnLogout = document.getElementById('btnLogout')
const btnPerfil = document.getElementById('btnperfil');


let token = localStorage.getItem('jwt');
if (token) {
    btnLogin.style.display = "none";
    btnRegistrar.style.display = "none";


    // registro.style.display = "none";

} else {
    btnPerfil.style.display = "none";
    btnLogout.style.display = "none";
    // btnCarrito.style.display = "none";

}
btnPerfil.addEventListener("click", (event) => {
    if(token){
        location.href = "/perfil?token="+token;
    }else{
        alert('debes iniciar sesion')
    }
})
btnLogout.addEventListener("click", (event) => {
    localStorage.clear();
    location.href = "/";
})