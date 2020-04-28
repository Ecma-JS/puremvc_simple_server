const puremvc = require("puremvc");
const ApplicationFacade = require("../ApplicationFacade")
const Server = require("./Server")

const ServiceMediator = new puremvc.Mediator("serviceMediator");

const server = new Server();
ServiceMediator.setViewComponent(server);

ServiceMediator.listNotificationInterests = function () {
  return [
    "serviceResult",
  ];
};

ServiceMediator.handleNotification = function (notification) {
  if(notification.getName() === "serviceResult") {
    const component = ServiceMediator.getViewComponent();
    component.createServer(notification.body);
  }
}

module.exports = ServiceMediator;