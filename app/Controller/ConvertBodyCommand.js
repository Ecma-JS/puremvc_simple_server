const puremvc = require("puremvc");
const ConvertBodyCommand = new puremvc.SimpleCommand();

ConvertBodyCommand.execute = function(notification) {
  this.facade.retrieveProxy("serviceProxy").convert(notification.body);
  this.sendNotification("serviceResult", this.facade.retrieveProxy("serviceProxy").getData(), notification.type);
}

module.exports = ConvertBodyCommand;
