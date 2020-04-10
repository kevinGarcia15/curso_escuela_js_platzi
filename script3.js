//array y filter
 var kevin = {
  nombre: 'kevin García',
  altura: 1.60
}
var mynor = {
 nombre: 'Mynor García',
 altura: 1.70
}
var mary = {
 nombre: 'Angela García',
 altura: 1.50
}
var anselmo = {
 nombre: 'Anselmo García',
 altura: 1.68
}

var personas = [kevin,mynor,mary,anselmo];

for (var i = 0; i < personas.length; i++) {
  var persona = personas[i];
  console.log(`${persona.nombre} mide ${persona.altura}mts`)
}

const ALTURA = 1.55;
const esAlta = persona => persona.altura > ALTURA
var personasAltas = personas.filter(esAlta);

const esBaja = ({altura}) =>altura < ALTURA
var personasBajas = personas.filter(esBaja);

console.log(personasAltas);
console.log(personasBajas);
//-------map
/*para retornar un nuevo objeto con arrow funciton se hace de la siguiente manera... */
const pasarAlturaACms = persona => ({
  ...persona,
  altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms);
console.log(personasCms);
//--------------reduce
var ender = {
  nombre: "Ender",
  apellido: "Peña",
  estatura: 1.82,
  libros: 128
}
var jesus = {
  nombre: "Jesus",
  apellido: "Gonzalez",
  estatura: 1.79,
  libros: 12
}
var enmanuel = {
  nombre: "Enmanuel",
  apellido: "Fernandez",
  estatura: 1.72,
  libros: 192
}
var maria = {
  nombre: "Maria",
  apellido: "Chirinos",
  estatura: 1.69,
  libros: 87
}
var luis =  {
  nombre: "Luis",
  apellido: "Peña",
  estatura: 1.81,
  libros: 59
}

const reducir = (acum, persona) => acum + persona.libros

var persona = [ender, jesus, enmanuel, maria, luis]

var totalDeLibros = persona.reduce(reducir, 0)

console.log(`Estas personas en total tienen ${totalDeLibros} Libros.`)
