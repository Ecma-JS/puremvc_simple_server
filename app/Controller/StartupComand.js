let puremvc = require("puremvc");
let service = require("../index");

service.controller.ServiceCommand = require('./ServiceCommand')
service.view.ServiceMediator = require("../View/ServiceMediator");
service.model.ServiceProxy = require('../Model/ServiceProxy')

function StartupCommand() {
  puremvc.SimpleCommand.call(this);
}

StartupCommand.prototype = new puremvc.SimpleCommand;
StartupCommand.prototype.constructor = StartupCommand;

StartupCommand.prototype.execute = function (notification) {
  this.facade.registerProxy(new service.model.ServiceProxy());
  this.facade.registerMediator(new service.view.ServiceMediator(notification.body));
  this.facade.registerCommand(service.ApplicationFacade.SERVICE, service.controller.ServiceCommand);
};

module.exports = StartupCommand;