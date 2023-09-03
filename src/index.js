window.onload = iniciar;
// import modulo from './metodos.js'

class Operaciones{

    limpiar(){
        texto.innerText = ''
    }

    modificTextNumber(numero){
        texto.innerText += `${numero}`
    }

}



function iniciar() {
    const operacion = new Operaciones();
    //texto a modificar
    const texto = document.querySelector('#texto')

    //campos donde se incrusta el codigo al html
    const buttonsList = []
    buttonsList.push({
        borrar: "AC",
        potencia: "**",
        resto: "%",
        dividir: "/"
    })

    buttonsList.push({
        siete: "7",
        ocho: "8",
        nueve: "9",
        multiplicar: "x"
    })


    buttonsList.push({
        cuatro: "4",
        cinco: "5",
        seis: "6",
        menos: "-"
    })

    buttonsList.push({
        uno: "1",
        dos: "2",
        tres: "3",
        suma: "+"
    })

    buttonsList.push({
        cero: "0",
        dobleCero: "00",
        coma: ",",
        igual: "=",
    })

    //identificador de cada button
    const ID_BUTTONS = [
        'borrar', 'potencia', 'resto', 'dividir',
        'siete', 'ocho', 'nueve', 'multiplicar',
        'cuatro', 'cinco', 'seis', 'menos',
        'uno', 'dos', 'tres', 'suma',
        'cero', 'dobleCero', 'coma', 'igual'
    ]



    const container_calculadora = document.querySelector('.container_calculadora')
    let cont = 0;
    let enumNumeros = 0
    for (i of buttonsList) {
        const container = document.createElement('div')
        container.classList.add(`container_num_${cont++}`);
        for (x of Object.values(i)) {
            const btnBorrar = document.createElement('span')
            btnBorrar.classList.add('botones', `${ID_BUTTONS[enumNumeros]}`)
            btnBorrar.id.concat('id')
            enumNumeros++
            btnBorrar.innerHTML = `${x}`
            container.appendChild(btnBorrar)
        }
        container_calculadora.appendChild(container)
    }


    //lammar los botones y el texto a modificar

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





    //simbiolos
    const igual = document.querySelector('.igual')
    const suma = document.querySelector('.suma')
    const resta = document.querySelector('.menos')
    const multiplicar = document.querySelector('.multiplicacion')
    const division = document.querySelector('.dividir')
    const resto = document.querySelector('.resto')
    const potencia = document.querySelector('.potencia')
    const borrar = document.querySelector('.borrar')

    // uno.addEventListener()

    //llamar a modificar texto


    borrar.addEventListener('click',operacion.limpiar)
    uno.addEventListener('click',operacion.submitNumber)
    dos.addEventListener('click',operacion.modificTextNumber)
}
