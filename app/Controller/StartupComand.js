let puremvc = require("puremvc");
let service = require("../index");

// service.controller.ServiceCommand = require("./ServiceCommand");
// service.model.ServiceProxy = require("../model/ServiceProxy");
// service.model.request.ServiceRequest = require("../model/request/ServiceRequest");
service.view.ServiceProxy = require("../Model/Server");

function StartupCommand() {
    puremvc.SimpleCommand.call(this);
}

StartupCommand.prototype = new puremvc.SimpleCommand;
StartupCommand.prototype.constructor = StartupCommand;

StartupCommand.prototype.execute = function(notification) {

    this.facade.registerProxy(new service.model.ServiceProxy(notification.body));

};

module.exports = StartupCommand;
