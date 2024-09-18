const app = document.getElementById("app")
    const url = "https:/picsum.photos/id/"
    const size = "/200/200"
    const picture = parametro => {
        const src=url+parametro+size
        return `
        <figure>
        <img src="https://picsum.photos/id/${parametro}/200/200" alt="">
        <figcaption>${parametro}</figcaption>
        </figure>
        `
        
    }
    //console.log(picture())

    app.innerHTML = picture(1) + picture(2) + picture(3)

    const elemento = document.getElementById("app")
    const elemento = document.getElementById("app")
    const elemento = document.getElementById("app")

    elemento.addEventListener("click", miFuncion)
    elementoaddEvenListener

    function miFuncion(parametro){
        console.log("ayyy" + parametro)
        console.log(parametro)
}