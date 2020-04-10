var nombre = 'kevn'
var apellido = 'García';

var nombre_completo = `${nombre} ${apellido.toUpperCase()}`;

var number_letter = nombre.length;
var last_letter = nombre.substr(-1,1);


//----------------numerova
var  edad = 25;
edad += 1;
//----------------Objetos
var kevin = {
  nombre: 'kevin tomas de jesus',
  apellido: 'garcía',
  edad: 14
}

function imprimirNombreMayuscula({ nombre, edad }){
  console.log(`hola me llamo ${nombre} y tengo ${edad} años`);
}
//imprimirNombreMayuscula(kevin);

var tomas = {
  nombre: 'kevin',
  edad: '19'
}
var otra_persona = {
  nombre:'kevin'
}
//------------------condicionales
function mayor_edad(persona){
  if (persona.edad >= '18') {
    console.log(`${persona.nombre } es mayor de edad porque tiene ${persona.edad} años`)

  }else{
    console.log(`${persona.nombre } es menor de edad porque tiene ${persona.edad} años`)
  }
}
// mayor_edad(tomas);
//----------return
const MAYORIA_EDAD = 18;

function mayor_edad(persona){
  return persona.edad >= MAYORIA_EDAD;
}
 function imprimirMayoriaDeEdad(persona){
   if (mayorEdad(persona)) {
     console.log(`${persona.nombre } es mayor de edad porque tiene ${persona.edad} años`)
   }else {
     console.log(`${persona.nombre } es menor de edad porque tiene ${persona.edad} años`)
   }
 }
//-----------arrow function
const mayorEdad = ({edad}) => edad >= MAYORIA_EDAD;

function acceso(persona){
//  debugger
  if (!mayorEdad(persona)) {
    console.log('acceso denegado');
  }
}
//------------estructura while
var chus ={
    name : 'Chusito',
    age : 26,
    peso : 65,
    meta: 50
}

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANIO = 365

const aumentar_de_peso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

var dias = 0;
const META = chus.peso - 3;

while (chus.peso > META) {
  debugger
  if (comeMucho()) {
      aumentar_de_peso(chus);
  }
  if (realizaDeporte()) {
      adelgazar(chus);
  }
  dias +=1;
}
console.log(`pasaron ${dias} dias para que ${chus.nombre} perdiera peso`);
