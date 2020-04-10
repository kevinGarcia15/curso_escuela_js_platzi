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
//  debugger
  if (comeMucho()) {
      aumentar_de_peso(chus);
  }
  if (realizaDeporte()) {
      adelgazar(chus);
  }
  dias +=1;
}
console.log(`pasaron ${dias} dias para que ${chus.name} perdiera peso`);
//estrucutra do while

var contador = 0;
const lloveria = () => Math.random() < 0.25

do {
  contador++
} while (!lloveria());

if (contador === 1) {
  console.log(`fuí a ver si lloveria ${contador} vez`)
}else {
  console.log(`fuí a ver si lloveria ${contador} veces`)  
}
