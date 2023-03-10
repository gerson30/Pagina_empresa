//agregar evento a clase hamburguesa al momento de darle clic
//crear variable hamurguesa para llamar el div del html

const hamburguesa = document.querySelector(".hamburguesa");
const navegacion = document.querySelector(".navegacion");
const enlaces = document.querySelectorAll(".navegacion a");
const fecha = document.querySelector(".fecha");

//evento global para cargar los eventos luego de que cargue de forma completa el html
document.addEventListener("DOMContentLoaded", () => {
  mostrarMenu();
  cerrarMenu();
  fechaActual();
});[]

//crear funcion llamando un evento
function mostrarMenu() {
  //addevetListener recibe 2 parametros (1 de que tipo, 2 funcion o (llamado de la funcion))
  hamburguesa.addEventListener("click", () => {
    //toggle busca la clase y de esta forma lo quita, de lo contrario agrega
    navegacion.classList.toggle("ocultar");
  });
}
//funcion cerrar menú al momento de seleccionar cualquier opcion del menú
function cerrarMenu() {
  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", (e) => {
      // preventDefault evita mostrar el nombre de los href en la ruta de la pagina
      e.preventDefault();

      //1.1 aqui seleccione cualquier href del menu
      // lo que yo cliquee me lo seleccione con document.queryselector y lo asigne a la variable seccion
      const seccion= document.querySelector(e.target.attributes.href.value);
      cambioSeccion(seccion);
      if(e.target.tagName === 'A')
      navegacion.classList.add('ocultar');
    });
  });
}
// 1.2 aqui se declara lafuncion para llamar el scroll de cada seccion
function cambioSeccion(seccion){
seccion.scrollIntoView({
  // aqui se da un comportamiento al momento de redirigier a cada seccion con scrollintoview
  behavior:'smooth'
})
}
//mostrar año actual en el footer 
function fechaActual(){
  let fechaHoy = new Date().getFullYear();
  fecha.textContent = fechaHoy;
}
