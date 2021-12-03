const {fetchMyIP, fetchCoordsByIP } = require("./iss");

fetchMyIP((err, ip) => {
  if (err) {
    console.log("It didn't work!", err);
    return;
  }
  console.log('It worked! Returned IP:', ip);
  fetchCoordsByIP(ip, (err, data) => {
    if (err) {
      console.log(`IP: ${ip} didn't work!`, err);
      return;
    }

    console.log("The coordinates is", data, "based on IP address:", ip, ".");
  });
});