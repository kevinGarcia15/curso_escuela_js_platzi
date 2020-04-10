class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
  saludar(fn){
    console.log(`hola soy ${this.nombre} ${this.apellido} y es un gusto saludarte`)
    if (fn) {
      fn(this.nombre, this.apellido, false)
    }
  }
  soyAlto(){
    return this.altura > 1.80
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
  }
  saludar(fn){
    console.log(`hola soy ${this.nombre} y soy Desarrollador`)
    if (fn) {
      fn(this.nombre, this.apellido, true)
    }
  }
}

function saludarDesarrollador(nombre, apellido, esDev){
  console.log(`hola ${nombre}, que tengas un buen día`)
  if (esDev) {
    console.log('mirà, no sabia que eras Desarrollador/a')
  }
}

var kevin = new Persona('kevin', 'garcia', 1.60)
var mynor = new Persona('mynor', 'garcia', 1.85)
var mary = new Desarrollador('Angela', 'garcia', 1.55)

kevin.saludar()
mynor.saludar(saludarDesarrollador)
mary.saludar(saludarDesarrollador)
