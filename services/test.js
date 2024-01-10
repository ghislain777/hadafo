var cron = require('node-cron');
const directService = require("./direct_service")
cron.schedule('* * * * *', () => {
    directService.getEmissionsEnDirect()
  });
