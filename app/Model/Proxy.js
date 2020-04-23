const puremvc = require("puremvc");
const service = require("../index");

function ServiceProxy(service) {
    puremvc.Proxy.call(this, this.constructor.NAME, service);
}

ServiceProxy.prototype = new puremvc.Proxy;
ServiceProxy.prototype.constructor = ServiceProxy;

ServiceProxy.prototype.onRegister = function() {
    const self = this;
    function IService() {
        this.service = self.service.bind(self);
    }

    this.viewComponent.setDelegate(new IService());
    this.viewComponent.createServer();
};

ServiceProxy.prototype.service = function(request, response, data) {
    const serviceRequest = new service.model.request.ServiceRequest(request, response, data);
    // this.facade.sendNotification(service.ApplicationFacade.SERVICE, serviceRequest);
};

module.exports = ServiceProxy;