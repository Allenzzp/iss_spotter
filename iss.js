const request = require("request");

const fetchMyIP = (callback) => {
  request("https://api.ipify.org?format=json", (err, response, body) => {
    if (err) {
      return callback(err, null);
    }
    if (response.statusCode !== 200) {
      const msg = `Status code ${response.statusCode} when fetching IP: ${body}`;
      return callback(Error(msg), null);
    }

    const obj = JSON.parse(body);

    callback(null, obj.ip);
  });
};

module.exports = { fetchMyIP };