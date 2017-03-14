var nombres= [];

function Stack(){
  var elementos= [];
  this.push= function(valor){
    elementos.push(valor);
  };
  this.pop= function(){
    return elementos.pop();
  };
}

var nombre= new Stack();
for(var i=0; i<5;i++){
  nombre.push(prompt("Ingresa nombre " + (i+1)));
}

var apellido= new Stack();
for(var i=0; i<5;i++){
  apellido.push(prompt("Ingresa apellido " + (i+1)));
}


for(var i=0; i<5;i++){
  nombres.push(nombre.pop() + " " + apellido.pop());
}

document.write(nombres);

//function ingresarDatos(){
//
//}
