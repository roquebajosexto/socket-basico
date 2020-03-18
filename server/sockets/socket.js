const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Hola Bienvenido'
    })

    client.on('disconnect', () => {
        console.log('Usuario Desconectado');
    })

    //Escuchar al cliente

    client.on('enviarMensaje', (data, callback) => {
        //console.log(mensaje);
        console.log(data);
        client.broadcast.emit('enviarMensaje', data)
            // if (mensaje.usuario) {
            //     callback({
            //         resp: 'todo salió bien'
            //     })
            // } else {
            //     callback({
            //         resp: 'todo salió MAL'
            //     })
            // }

    })
})