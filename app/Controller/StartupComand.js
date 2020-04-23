let puremvc = require("puremvc");
let service = require("../index");

service.view.ServiceMediator = require("../View/ServiceMediator");

function StartupCommand() {
    puremvc.SimpleCommand.call(this);
}

StartupCommand.prototype = new puremvc.SimpleCommand;
StartupCommand.prototype.constructor = StartupCommand;

StartupCommand.prototype.execute = function(notification) {

    this.facade.registerMediator(new service.view.ServiceMediator(notification.body));

};

module.exports = StartupCommand;
