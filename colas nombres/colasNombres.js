var Queue= function() {
  var colas=[];
  this.enqueue= function(valor){
    colas.push(valor);
  };
  this.dequeue= function(){
    return colas.shift();
  }
  this.print= function(){
    console.log(colas.toString());
  };
}

var nombre= new Queue();
for(var i= 0 ; i<5 ; i++ ){
  nombre.enqueue(prompt("Ingresa nombre " + (i+1)));
}
nombre.print();

var apellido= new Queue();
for(var i= 0 ; i<5 ; i++ ){
  apellido.enqueue(prompt("Ingresa apellido " + (i+1)));
}
apellido.print();

var nombres= new Queue();
for(var i= 0 ; i<5 ; i++ ){
  nombres.enqueue(nombre.dequeue()+ " " + apellido.dequeue());
}
nombres.print();
