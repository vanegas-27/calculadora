window.onload = iniciar;

/**
 * timer reload
 *
 * metodo asincrono que nos ejecuta el formateo
 * de la pantallla simulando una carga de datos
 *
 */
let puntos = "."
const timerPunto = setInterval(() => {
  texto.innerText = puntos
  puntos = puntos + "."
  setTimeout(() => {
    clearInterval(timerPunto)
    texto.innerText = ""
  }, 1000)
}, 100)


/**
 * encargada de ejecutarse cuando termine de cargar el HTML
 * por completo, esta nos crea los diversos botones de la calculadora
 */
function iniciar() {

  //instancia de las operaciones de metodos.js
  const operacion = new Operaciones();

  //contenedora del texto o digitos visuales
  const texto = document.querySelector('#texto')


  /**
   * lista contenedora de los objectos que se desean
   * renderizar en el HTML
   */
  const buttonsList = []
  buttonsList.push({
    borrar: "🔚",
    potencia: "🔙",
    dividir: "➗"
  })

  buttonsList.push({
    siete: "7",
    ocho: "8",
    nueve: "9",
    multiplicar: "✖️"
  })


  buttonsList.push({
    cuatro: "4",
    cinco: "5",
    seis: "6",
    menos: "➖"
  })

  buttonsList.push({
    uno: "1",
    dos: "2",
    tres: "3",
    suma: "➕"
  })

  buttonsList.push({
    cero: "0",
    coma: ".",
    igual: "🟰",
  })

  //identificador de cada button (class)
  const ID_BUTTONS = [
    'borrar', 'retroceder', 'dividir',
    'siete', 'ocho', 'nueve', 'multiplicar',
    'cuatro', 'cinco', 'seis', 'menos',
    'uno', 'dos', 'tres', 'suma',
    'cero', 'punto', 'igual'
  ]



  /**
   * encargada de proceder con el renderizado de los componentes en el HTML
   * y por su parte en asignarle su respectivo identificador
   *
   * funcionalidad:
   *
   * itera por cada objecto que halla en la array y  crea un contenedor.
   * y su respectivo identificador por cada iteracion, luego iteramos
   * dentro de los objectos por cada uno de sus valores y por cada valor se crea un
   * span que lo contenga y se le asigna su identificador
   *
   * posterior se agrega cada span dentro de su contenedor y asi hasta terminar las iteraciones
   */
  const container_calculadora = document.querySelector('.container_calculadora')
  let cont = 0;
  let enumNumeros = 0
  for (i of buttonsList) {
    const container = document.createElement('div')
    container.classList.add(`container_num_${cont++}`);
    for (x of Object.values(i)) {
      const btnBorrar = document.createElement('span')
      btnBorrar.classList.add('botones', `${ID_BUTTONS[enumNumeros]}`)
      enumNumeros++
      btnBorrar.innerHTML = `${x}`
      container.appendChild(btnBorrar)
    }
    container_calculadora.appendChild(container)
  }


  //llamar los botones y el texto a modificar

  //numeros
  const uno = document.querySelector('.uno')
  const dos = document.querySelector('.dos')
  const tres = document.querySelector('.tres')
  const cuatro = document.querySelector('.cuatro')
  const cinco = document.querySelector('.cinco')
  const seis = document.querySelector('.seis')
  const siete = document.querySelector('.siete')
  const ocho = document.querySelector('.ocho')
  const nueve = document.querySelector('.nueve')
  const cero = document.querySelector('.cero')




  //simbiolos
  const igual = document.querySelector('.igual')
  const suma = document.querySelector('.suma')
  const resta = document.querySelector('.menos')
  const multiplicar = document.querySelector('.multiplicar')
  const division = document.querySelector('.dividir')
  const retroceder = document.querySelector('.retroceder')
  const borrar = document.querySelector('.borrar')
  const punto = document.querySelector('.punto')


  //metodo para borrar el texto
  borrar.addEventListener('click', operacion.limpiar)

  //metodos botones

  uno.addEventListener('click', () => {
    operacion.textLongit(1)
  })

  dos.addEventListener('click', () => {
    operacion.textLongit(2)
  })

  tres.addEventListener('click', () => {
    operacion.textLongit(3)
  })

  cuatro.addEventListener('click', () => {
    operacion.textLongit(4)
  })

  cinco.addEventListener('click', () => {
    operacion.textLongit(5)
  })

  seis.addEventListener('click', () => {
    operacion.textLongit(6)
  })

  siete.addEventListener('click', () => {
    operacion.textLongit(7)
  })

  ocho.addEventListener('click', () => {
    operacion.textLongit(8)
  })

  nueve.addEventListener('click', () => {
    operacion.textLongit(9)
  })

  cero.addEventListener('click', () => {
    operacion.textLongit(0)
  })

  punto.addEventListener('click', () => {
    operacion.textLongit(".")
  })


  //operaciones matematicas

  suma.addEventListener('click', () => {
    operacion.operaciones("+")
  })

  resta.addEventListener('click', () => {
    operacion.operaciones("-")
  })

  multiplicar.addEventListener('click', () => {
    operacion.operaciones("*")
  })

  division.addEventListener('click', () => {
    operacion.operaciones('/')
  })


  //metodo de retoceder los digitos
  retroceder.addEventListener('click', operacion.modificText)

  igual.addEventListener('click',() =>{
    operacion.calcular()
  })

}
