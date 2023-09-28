const io = require("socket.io-client")

const socketService = {}
const client = io.connect("http://hadafosocket.zentechnologies.net:8084");
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