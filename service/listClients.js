const config = require('ebased/util/config');
const dynamo = require ('ebased/service/storage/dynamo');
const { ErrorHandled } = require('ebased/util/error');
const TABLE_NAME = config.get('Clients')

const listClient = async (client) => {
    const {Item} = await dynamo.queryTable({
        TableName: TABLE_NAME,
        KeyConditionExpression: 'pk = :dni',
        ExpressionAttributeValues: {':dni' : 'dni'},
    });
    if (!Item) throw new ErrorHandled('Missing Elements', {status:404, code:'NOT_FOUND'});
    return Item;
}

 module.exports = {listClient};