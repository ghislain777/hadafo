const express = require('express')
const app = express()
const cors = require('cors');
const multer = require('multer');
//*** entrée pour le service de socket io */
const http = require('http');
const serverSocket = http.createServer(app);
const { Server } = require("socket.io");
const socketService = require('./services/socket_service')

const {Role, Media} = require('./models')
const roleRoutes = require('./routes/role_routes');
const utilisateurRoutes = require('./routes/utilisateur_routes');
const bodyParser = require('body-parser');
const menuRoutes = require('./routes/menu_route');
const activiteRoutes = require('./routes/activite_routes');
const privilegeRoutes = require('./routes/privilege_routes');
const parametreRoutes = require('./routes/parametre_routes.js')
const mediaRoutes = require('./routes/media_routes.js')
const payRoutes = require('./routes/pay_routes.js')
const villeRoutes = require('./routes/ville_routes.js')
const chaineRoutes = require('./routes/chaine_routes.js')
const emissionRoutes = require('./routes/emission_routes.js')
const animateurRoutes = require('./routes/animateur_routes.js')
const animateuremissionRoutes = require('./routes/animateuremission_routes.js')
const endirectRoutes = require('./routes/endirect_routes.js')
const programmationRoutes = require('./routes/programmation_routes.js')
const planningRoutes = require('./routes/planning_routes.js')
const categorieRoutes = require('./routes/categorie_routes.js')

const fonctions = require("./fonctions")
const PORT = process.env.PORT || 8000

const path = require('path');

app.use(bodyParser.json())
app.use(cors({
  origin: '*'
}));


//*** socvkets */
const io = new Server(serverSocket);

// io.use((socket, next) => {
//   const application = socket.request.headers.application?? " "
//   if(application != "hadafomedia") {
//       const err = new Error("not authorized")
//   err.data = { content: "Please retry later" }
//   }
//   next()
// })

io.on("connection", (socket) => {
  console.log("Client socket connected succesfully")

  socket.on('disconnect', () => {
    console.log('user disconnected');
  })

  socket.on("chaine", (data) => {
    console.log("Envoi du message de mise à jour des infos sur les chaines à tout le monde")
    io.emit("chaine", data)
  })

})


app.use('/api/roles', roleRoutes);
app.use('/api/utilisateurs', utilisateurRoutes);
app.use('/api/menus', menuRoutes);
app.use('/api/activites', activiteRoutes);
app.use('/api/privileges', privilegeRoutes);
app.use('/api/parametres', parametreRoutes);
app.use('/api/medias', mediaRoutes); 
app.use('/api/pays', payRoutes); 
app.use('/api/villes', villeRoutes); 
app.use('/api/chaines', chaineRoutes); 
app.use('/api/emissions', emissionRoutes);
app.use('/api/animateurs', animateurRoutes);
app.use('/api/animateuremissions', animateuremissionRoutes); 
app.use('/api/programmations', programmationRoutes); 
app.use('/api/endirects', endirectRoutes); 
app.use('/api/plannings', planningRoutes); 
app.use('/api/categories', categorieRoutes); 



app.use(express.static('public')); 


serverSocket.listen(PORT, () => {
  console.log(` server listening on port `, PORT)
});


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

var cron = require('node-cron');
const directService = require("./services/direct_service")
cron.schedule('* * * * *', () => {
    directService.getEmissionsEnDirect()
  });
