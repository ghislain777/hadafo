const io = require("socket.io-client")

const socketService = {}
const client = io.connect("http://localhost:8000");
console.log("conexion locale au serveur de socket....")
socketService.envoiMesage = (event, data) => {
    try {
        console.log(`Envoi du message: envent: ${event} données: ${data}`)
        client.emit(event, data)
    } catch (error) {
        console.log(error)
    }

}

module.exports = socketService