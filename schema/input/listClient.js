const {InputValidation} = require('ebased/schema/inputValidation');

class listClients extends InputValidation {
    constructor(payload, meta) {
        super({
            source: meta.status,
            payload: payload,
            source: "CLIENT.LIST",
            specversion:"v1.0.0",
            schema:{strict:false},
        });
    }
}

module.exports = {listClients}