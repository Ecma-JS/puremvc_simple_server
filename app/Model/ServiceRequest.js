function ServiceRequest(request, response, requestData) {
    this.request = request;
    this.response = response;
    this.requestData = requestData;
}

ServiceRequest.prototype.request;

ServiceRequest.prototype.response;

ServiceRequest.prototype.requestData;

ServiceRequest.prototype.resultData;

ServiceRequest.prototype.setResultData = function(resultData) {
    this.resultData = resultData;
};

module.exports = ServiceRequest;