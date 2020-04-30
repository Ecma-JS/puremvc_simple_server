const puremvc = require("puremvc");
const convertBodyCommand = require("./ConvertBodyCommand")

class StartupCommand extends puremvc.SimpleCommand {
  
  execute () {
    this.facade.controller.ConvertBodyCommand = convertBodyCommand;
    this.facade.registerCommand("convert", this.facade.controller.ConvertBodyCommand);
  }
  
}


module.exports = StartupCommand;