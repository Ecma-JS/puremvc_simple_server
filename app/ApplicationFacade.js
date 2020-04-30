const puremvc = require("puremvc");
const startupCommand = require("./Controller/StartupCommand");
const mediator = require("./View/ServiceMediator");
const proxy = require("./Model/ServiceProxy");

const ApplicationFacade = new puremvc.Facade("service");

ApplicationFacade.STARTUP = "startup";
ApplicationFacade.SERVICE = "service";
ApplicationFacade.SERVICE_RESULT = "serviceResult";
ApplicationFacade.PROXY = "serviceProxy";
ApplicationFacade.MEDIATOR = "serviceMediator"

ApplicationFacade.initializeModel();
ApplicationFacade.initializeView();
ApplicationFacade.initializeController();
ApplicationFacade.controller.StartupCommand = startupCommand;
ApplicationFacade.registerProxy(proxy);
ApplicationFacade.registerMediator(mediator);
ApplicationFacade.registerCommand(ApplicationFacade.STARTUP, ApplicationFacade.controller.StartupCommand);
ApplicationFacade.controller.StartupCommand.execute(ApplicationFacade);
