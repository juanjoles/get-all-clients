const {listClient} = require('../service/listClients');


module.exports = async () => {
    const getClient = await listClient();
    return {status: 200, body: getClient};
};
