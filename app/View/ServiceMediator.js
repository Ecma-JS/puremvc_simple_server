const puremvc = require("puremvc");
const ApplicationFacade = require("../ApplicationFacade")
const EventEmitter = require("events");
const http = require("http");


const ServiceMediator = new puremvc.Mediator("serviceMediator");

ServiceMediator.onRegister = function () {
  const server = http.createServer((request, response) => {
    let body = [];
    request.on('error', (err) => {
      console.error(err);
    }).on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      this.facade.controller.StartupCommand.execute(ServiceMediator.facade, body, response)
    });
  }).listen(5000); 
  ServiceMediator.setViewComponent(server);
}

ServiceMediator.listNotificationInterests = function () {
  return [
    "serviceResult",
  ];
};

ServiceMediator.handleNotification = function (notification) {

  if(notification.getName() === "serviceResult") {
    notification.body.end(this.facade.retrieveProxy("serviceProxy").getData())
  }
}

module.exports = ServiceMediator;