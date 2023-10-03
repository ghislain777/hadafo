const io = require("socket.io-client")

const socketService = {}
const client = io.connect("http://209.145.57.186:8084", (socket) => {
socket.onAny( (event, data) => console.log(event))
});

console.log("conexion locale au serveur de socket hadafosocket....")

socketService.envoiMesage = (event, data) => {
    try {
        console.log(`Envoi du message: envent: ${event} données: ${data}`)
        client.emit(event, data)
    } catch (error) {
        console.log(error)
    }

}

module.exports = socketService