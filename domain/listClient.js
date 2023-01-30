const {listClient} = require('../service/listClients');


module.exports = async () => {
    const getClient = await getClientById();
    return {status: 200, body: getClient};
};
