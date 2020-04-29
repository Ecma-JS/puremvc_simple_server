function initCap(str) {
  return str.toLowerCase().replace(/(?:^|\s)[a-z]/g, function (m) {
    return m.toUpperCase().replace(/\s+/g, "");
  });
};

function ServiceResponse(data) {
  return initCap(data);
}

module.exports = ServiceResponse;