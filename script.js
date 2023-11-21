function saludar(nombre) {
    alert('Hola ' + nombre + ' para consultas o pedido...' )
   }
   function procesarEntradaUsuario(callback) {
    var nombre = prompt('Por favor ingresa tu nombre.')
    callback(nombre)
   }
   procesarEntradaUsuario(saludar)
    
  
   function iniciar() {
    var nombre = "Complete el formulario" 
    function mostrarNombre() { 
    alert(nombre)
    }
    mostrarNombre()
   }
   iniciar() 
