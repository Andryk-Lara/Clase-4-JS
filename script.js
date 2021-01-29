/**
 * Ejercicio #4:
 *
 * Validar el formulario
 *
 * ¿Como funciona?:
 * 1. La validacion se hace cuando el usuario presiona el boton "Enviar" para enviar el form
 * 2. Solo se validan los campos con el * (tienen la clase requerido)
 * 3. Al hacer click en "enviar"
 *     3.1. Los campos invalidos deben ponerse con un borde rojo
 *     3.2. Se debe mostrar un aviso arriba de los campos con un titulo de: "Ocurrio un error, verifica
 *     los siguientes campos" y seguido un listado con los campos invalidos. El aviso
 *     debe tener border rojo y fondo rojo claro
 *     3.3. Si todos los camppos son validos, debe mostrar un mensaje abajo del boton enviar
 *     que dice: "Su formulario fue enviado". El aviso debe tener borde verde con fondo verde claro
 *
 * ¿Donde empiezo?:
 *
 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas (incluyendo buenas practicas pasadas)
 *
 */

// BOILERPLATE
const form = document.querySelector("form");

const validados = document.querySelectorAll(".requerido");
const h2 = document.createElement('h2');
const h3 = document.createElement('h3');
const script = document.querySelector("script");
const parentForm = form.parentElement;

// TEXTO A INSERTAR

let textoValidacion = '';
let textoError = '';

function detallesError(){
  h2.style.backgroundColor = 'pink';
  h2.style.border = '2px solid red';
  h2.style.fontFamily = 'Open Sans, Helvetica Neue, sans-serif';
  h2.style.width = '440px'
  h3.style.backgroundColor = 'transparent';
  h3.style.border = 'none';
}
function detallesValidacion(){
  h2.style.backgroundColor = 'red';
  h2.style.border = 'none';
  h3.style.backgroundColor = 'lime';
  h3.style.border = '2px solid darkgreen';
  h3.style.fontFamily = 'Open Sans, Helvetica Neue, sans-serif';
  h3.style.width = '220px'
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  console.log("FORMULARIO ENVIADO");
});
