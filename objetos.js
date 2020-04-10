//prototipos
class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
  saludar(){
    console.log(`hola soy ${this.nombre} ${this.apellido} y es un gusto saludarte`)
  }
  soyAlto(){
    return this.altura > 1.80
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
  }
  saludar(){
    console.log(`hola soy ${this.nombre} y soy Desarrollador`)
  }
}



var kevin = new Persona('kevin', 'garcia', 1.60)
var mynor = new Persona('mynor', 'garcia', 1.85)
var mary = new Desarrollador('Angela', 'garcia', 1.55)

kevin.saludar()
mynor.saludar()
mary.saludar()
