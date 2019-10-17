const httpCodes = require("./index.js");

console.log(httpCodes.OK);                    // 200
console.log(httpCodes.BAD_REQUEST);           // 400
console.log(httpCodes.INTERNAL_SERVER_ERROR); // 500

console.log(httpCodes.DOESNT_EXIST);          // ERROR
