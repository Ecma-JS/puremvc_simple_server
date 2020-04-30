const puremvc = require("puremvc");

class ConvertBodyCommand extends puremvc.SimpleCommand {
  execute (notification) {
    this.facade.retrieveProxy("serviceProxy").convert(notification.body);
    this.facade.sendNotification("serviceResult", this.facade.retrieveProxy("serviceProxy").getData(), notification.type);
  }
}



module.exports = ConvertBodyCommand;
