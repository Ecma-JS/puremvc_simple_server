let service = {
    controller: {},
    model: {
        request: {}
    },
    view: {
        components: {}
    }
};

module.exports = service;

let Service = require("./View/Service");
service.ApplicationFacade = require("./ApplicationFacade");
service.ApplicationFacade.getInstance("service").startup(new Service());