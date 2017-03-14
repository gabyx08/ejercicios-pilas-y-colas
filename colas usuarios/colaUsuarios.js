var numUsuarios= parseInt(prompt("No. de usuarios a ingresar"));
var Queue= function(){
  var cola= [];
  this.enqueue= function(valor){
    cola.push(valor);
  };
  this.dequeue= function(){
    return cola.shift();
  };
  this.print= function(){
    console.log(cola.toString());
  };
}

var nombresUsuario= new Queue();
for(var i=0;i<numUsuarios;i++){
  nombresUsuario.enqueue(prompt("Ingresa nombre de usuario"+ (i+1)));
}
