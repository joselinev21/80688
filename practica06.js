var usuario = false
var password = false
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", e =>{
    e.preventDefault()
    console.log("se presiono el botón iniciar sesión")
    if (usuario && password) {
        console.log("Enviando")
        formulario.submit()
    }
   
})

const x = document.getElementById("x");
x.addEventListener("focusout", ()=>{
    if(x.value.length == 0) {
    //alert("salida del campo");
    document.getElementById("mensaje1").innerHTML = "El campo está vacío";
    }
    else {
        document.getElementById("mensaje1").innerHTML=""
        usuario = true
    }
})

const enviar=document.getElementById("xx")

const y = document.getElementById("y")
y.addEventListener("keypress", e=>{
    console.log(e.key + " " + y.value.length)
    if (y.value.length ==5){
    enviar.focus()
    password= true
    }
})

function limpiar() {
    x.value= ""
    y.value= ""
}