const httpCodes = require("./index.js");

console.log(httpCodes.ACCEPTED);     // 200
console.log(httpCodes.BAD_GATEWAY);  // 502
console.log(httpCodes.BAD_REQUEST);  // 400

console.log(httpCodes.DOESNT_EXIST); // ERROR
