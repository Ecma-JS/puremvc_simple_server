const puremvc = require("puremvc");
const ApplicationFacade = require("../ApplicationFacade");

const StartupCommand = new puremvc.SimpleCommand();

StartupCommand.execute = function() {
  ApplicationFacade.sendNotification(ApplicationFacade.SERVICE_RESULT, response)
}


module.exports = StartupCommand;