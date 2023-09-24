const { connectToDb, client } = require('./db/db-connect');

function main(){
    connectToDb();
}

main();