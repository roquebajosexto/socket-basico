var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
})

socket.on('disconnect', function() {
    console.log('Perdimos coneccion con el servidor');
})

socket.on('enviarMensaje', function(message) {
        console.log(message);
    })
    // enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'roque',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
})