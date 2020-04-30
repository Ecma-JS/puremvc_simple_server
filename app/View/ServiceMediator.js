const puremvc = require("puremvc");
const ApplicationFacade = require("../ApplicationFacade")
const EventEmitter = require("events");
const http = require("http");
const { v4: uuidv4 } = require('uuid');


const ServiceMediator = new puremvc.Mediator("serviceMediator");

ServiceMediator.onRegister = function () {
  this.emitter = new EventEmitter();
  const server = http.createServer((request, response) => {
    let body = [];
    request.on('error', (err) => {
      console.error(err);
    }).on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      const uuid = uuidv4();
      this.emitter.once(uuid, (payload) => {
        response.end(payload)
      })
      this.facade.sendNotification("convert", body, uuid);
    });
  }).listen(5000); 
  ServiceMediator.setViewComponent(server);
}

ServiceMediator.listNotificationInterests = function () {
  return [
    "serviceResult"
  ];
};

ServiceMediator.handleNotification = function (notification) {
  if(notification.getName() === "serviceResult") {
    this.emitter.emit(notification.type, notification.body);
  }
}

module.exports = ServiceMediator;