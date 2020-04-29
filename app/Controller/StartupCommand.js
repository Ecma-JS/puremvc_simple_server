const puremvc = require("puremvc");
const ServiceResponse = require("../Model/ServiceResponse")

const StartupCommand = new puremvc.SimpleCommand();

StartupCommand.execute = function(ApplicationFacade, data, response) {
  ApplicationFacade.retrieveProxy("serviceProxy").setData(ServiceResponse(data));
  ApplicationFacade.sendNotification("serviceResult",response)
}


module.exports = StartupCommand;