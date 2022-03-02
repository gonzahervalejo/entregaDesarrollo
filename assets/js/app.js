
class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}
const deportes1 = new Producto("river", "350");
const deportes2 = new Producto("boca", "300");
const soquetes1 = new Producto("mariposas", "300");
const soquetes2 = new Producto("corazones", "350");
const soquetes3 = new Producto("lisos", "300");
const invisibles1 = new Producto("rayados", "200");
const invisibles2 = new Producto("lisos", "200");
const invisibles3 = new Producto("old school", "250");
deportes1.sumaIva();
 deportes1.vender(); 
deportes2.sumaIva();
deportes2.vender();

const deportes =[];
const soquetes = [];
const invisibles = [];

deportes.push(deportes1);
deportes.push(deportes2)
console.log(deportes);

soquetes.push(soquetes1)
soquetes.push(soquetes2)
soquetes.push(soquetes3)
console.log(soquetes)

invisibles.push(invisibles1)
invisibles.push(invisibles2)
invisibles.push(invisibles3)
console.log(invisibles);

const productos = ()=> {

    let soquetesId;

     do {
   soquetesId = parseInt(
    prompt("Bienvenido! A que categoria desea ingresar?\n1)deportes \n2) soquetes \n 3)Invisibles "))

 }while(soquetesId < 1 || soquetesId > 3 ||  isNaN(soquetesId))


let soquetesNombre;

switch(soquetesId){

case 1:
    soquetesNombre = "Deportes"
    break;

case 2:
    soquetesNombre = "Soquetes"
    break;

case 3:
    soquetesNombre = "Invisibles"
    break;

    
}

return soquetesNombre;


}


let soquetesNombre = productos();
 console.log(soquetesNombre);

/* aca necesitaria saber como enganchar la parte de elegir la categoria con el siguiente switch para desp poder hacer un switch con cada una de las categorias*/

 const seccion = ()=> {

    let seccionId;

     do {
   seccionId = parseInt(
    prompt("Usted ingreso en Deportes. ¿Que medias deportivas quiere? \n1)river \n2) boca"))

 }while(seccionId < 1 || seccionId > 2 ||  isNaN(seccionId))


let deportesNombre;

switch(seccionId){

case 1:
    deportesNombre = "river"
    break;

case 2:
    deportesNombre= "boca"
    break;


    
}

return deportesNombre;


}


let deportesNombre = seccion();
 console.log(deportesNombre);



if (deportesNombre == "river") {
    alert(`El precio final es ${deportes1.precio}`)
}else (alert(`el precio final es ${deportes2.precio}`));
 




deportes.forEach( producto =>  {producto.nombre

    console.log(producto.nombre) 
  
      })
  
  
  
  
  for (const propiedad in deportes) {
      console.log(deportes[propiedad]);
  }
