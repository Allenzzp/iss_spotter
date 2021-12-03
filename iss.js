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

const fetchCoordsByIP = (ip, callback) => {
  request(`https://freegeoip.app/json/${ip}`, (err, response, data) => {
    if (err) return callback(err, null);

    if (response.statusCode !== 200) {
      const msg = `Status code ${response.statusCode} when fetching coordinates for IP: ${ip}. Response: ${data}`;
      return callback(Error(msg), null);
    }

    const { latitude, longitude } = JSON.parse(data);
    return callback(null, { latitude, longitude });
  });
};






module.exports = { 
  fetchMyIP,
  fetchCoordsByIP
};