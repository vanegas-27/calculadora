class Operaciones {

  limpiar() {
    texto.innerText = ""
  }

  textLongit(num) {
    if(num === "." && texto.textContent.includes('.'))return
    if (texto.textContent.length < 13) texto.innerText += num

  }

  calcular(){
    texto.innerText = eval(texto.textContent)
  }

  comparacionNUm() {

    const op = texto.textContent

    let digitoEnd = parseInt(op[op.length - 1])

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

    let info = true;
    for (i of numeros) {
      if (i == digitoEnd) {
        info = false
      }
    }
    return info

  }

  operaciones(SimOp) {
    if (texto.textContent.length < 13) {

      const op = texto.textContent
      if (op[op.length - 1] == SimOp) {
        texto.innerText = op
      } else if (op[op.length - 1] !== SimOp && this.comparacionNUm()) {
        const array = op.split('')//la vuelvo un array

        array[array.length - 1] = SimOp //intercambio el ultimo

        const nuevoString = array.join('') //la vuelvo de nuevo un string
        texto.innerText = nuevoString
      } else {
        texto.innerHTML += SimOp
      }
    }
  }

  modificText() {
    const op = texto.textContent
    const newOp = op.split('')
    newOp.pop()
    texto.innerHTML = newOp.join('')
  }

  //fin
}



