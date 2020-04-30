const puremvc = require("puremvc");
const ConvertBodyCommand = new puremvc.SimpleCommand();

ConvertBodyCommand.execute = function(notification, facade) {
  facade.retrieveProxy("serviceProxy").convert(notification.body);
  facade.sendNotification("serviceResult", facade.retrieveProxy("serviceProxy").getData(), notification.type);
}

module.exports = ConvertBodyCommand;
