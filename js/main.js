import tipCalculator from './modules/tipCalculator.js';
import totalFinal from './modules/totalFinal.js';

// Connstantes de los elementos de HTML
const main = document.getElementById('main');
const form = document.getElementById('main-form')

// Guardar valores en variables
const subtotal = document.getElementById('total-bill');
const porcenDiv = document.getElementById('form-btns');
const personas = document.getElementById('total-people');

// Variable para almacenar el valor porcentual seleccionado
let porcenTip;

// Evento para escuchar a que boton le estamos dando click
porcenDiv.addEventListener('click', (e) => {
  porcenTip = e.target;
  console.log(porcenTip);

  // Condicion para escuchar al custom
  if (e.target.id === 'custom-tip') {
    console.log('Si soy custom');
  }
});

// Crear un evento de submit para la forma
form.addEventListener('submit', (e) => {
  // Evitar la action por defecto
  e.preventDefault();

  // crear objecto constante con los valores de la forma
  const formulario = {
    subTotalF: subtotal.value,
    porcenTipF: porcenTip.value,
    personasF: personas.value,
  }

  console.log(formulario);

  const { subTotalF, porcenTipF, personasF } = formulario;

  const tipFinal = tipCalculator(subTotalF, porcenTipF, personasF);

  console.log(tipFinal.toFixed(2));

  const totalF = totalFinal(subTotalF, personasF, tipFinal);

  console.log(totalF.toFixed(2));

});

