const puremvc = require("puremvc");
const ServiceResponse = require("../Model/ServiceResponse")
const convertBodyCommand = require("./ConvertBodyCommand")

const StartupCommand = new puremvc.SimpleCommand();

StartupCommand.execute = function(facade) {
  facade.controller.ConvertBodyCommand = convertBodyCommand;
  facade.registerCommand("convert", facade.controller.ConvertBodyCommand);
}


module.exports = StartupCommand;