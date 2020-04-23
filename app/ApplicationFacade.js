const puremvc = require("puremvc");
const service = require("./index");

service.controller.StartupCommand = require("./Controller/StartupComand");

function ApplicationFacade(multitonKey) {
    puremvc.Facade.call(this, multitonKey);
}

ApplicationFacade.prototype = new puremvc.Facade;
ApplicationFacade.prototype.constructor = ApplicationFacade;

ApplicationFacade.prototype.initializeController = function() {
    puremvc.Facade.prototype.initializeController.call(this);
    this.registerCommand(this.constructor.STARTUP, service.controller.StartupCommand);
};

ApplicationFacade.getInstance = function(multitonKey) {
    if(puremvc.Facade.instanceMap[multitonKey] == null) {
        puremvc.Facade.instanceMap[multitonKey] = new ApplicationFacade(multitonKey);
    }
    return puremvc.Facade.instanceMap[multitonKey];
};

ApplicationFacade.prototype.startup = function(service) {
    this.sendNotification(this.constructor.STARTUP, service);
};

ApplicationFacade.STARTUP = "startup";

ApplicationFacade.SERVICE = "service";

module.exports = ApplicationFacade;