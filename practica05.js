const app = document.getElementById("app")
    const url = "https:/picsum.photos/id/"
    const size = "/200/200"
    //componente
    const picture = parametro => {
        const src=url+parametro+size
        return `
        <figure>
        <img src="https://picsum.photos/id/${parametro}/200/200" alt="" id = "${parametro}" class ="">
        <figcaption>${parametro}</figcaption>
        </figure>
        `
        
    }
    //console.log(picture())

    app.innerHTML = picture(1) + picture(2) + picture(3)

    //const elemento1 = document.getElementById("1")
    //const elemento2 = document.getElementById("2")
    //const elemento3 = document.getElementById("3")
    //elemento1.addEventListener("click", miFuncion)
    //elemento2.addEventListener("click", miFuncion)
    //elemento3.addEventListener("click", miFuncion)
const lista = document.querySelectorAll("img")
for (let i = 0; i < lista.length; i++) {
    //cuando demos click se ejecute una funcion
    lista[i].addEventListener("click", miFuncion)
    
}

//funcion 

    function miFuncion(parametro){
        console.log("ayyy")
        console.log(parametro.target)
        var imagen = parametro.target
        imagen.classList.toggle("redonda")
}