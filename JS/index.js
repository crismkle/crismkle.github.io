
const naTog = document.querySelector(".toggle");
const naLista = document.querySelector(".nav_lista");

const navElemSobremi = document.querySelector("#sobremi_link");
const navElemExper = document.querySelector("#experiencia_link");
const navElemForm = document.querySelector("#formacion_link");
const navElemHabili = document.querySelector("#habilidades_link");
const navElemRedes = document.querySelector("#redes_link");


naTog.addEventListener("click", function () {
    naLista.classList.toggle("nav_lista_visible");              // Activa y desactiva la lista vertical del nav
});


function dameElWidth(){
    return (document.documentElement.clientWidth);
}

navElemSobremi.addEventListener("click", function () {
    if(dameElWidth()<= 768){
        naLista.classList.toggle("nav_lista_visible");
    }
})

navElemExper.addEventListener("click", function () {
    if(dameElWidth()<= 768){
        naLista.classList.toggle("nav_lista_visible");
    }
})

navElemForm.addEventListener("click", function () {
    if(dameElWidth()<= 768){
        naLista.classList.toggle("nav_lista_visible");
    }
})

navElemHabili.addEventListener("click", function () {
    if(dameElWidth()<= 768){
        naLista.classList.toggle("nav_lista_visible");
    }
})

navElemRedes.addEventListener("click", function () {
    if(dameElWidth()<= 768){
        naLista.classList.toggle("nav_lista_visible");
    }
})

