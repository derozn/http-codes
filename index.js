const statusCodeMapping = require('./statusCodeMapping');

// Changes all values of the statusCodeMapping to undefined for autocomplete in IDEs
const autoCompleteStatusCodeMapping = Object.fromEntries(
    Object.entries(statusCodeMapping).map(([key]) => [key, undefined])
)

const scope = () => {
    // the Proxy will throw an error if a unknown status is used
    // this saves an extra function call to see if object exists
    const httpCodes = new Proxy(statusCodeMapping, {
        get: (target, property) => {
            if (property in target) {
                return target[property];
            } else {
                throw new Error("http-codes: HTTP Code doesn't exist");
            }
        },
        ...autoCompleteStatusCodeMapping
    });

    return httpCodes;
};

module.exports = scope();
