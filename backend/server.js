const { connectToDb, client } = require('./app/db/db-connect');

async function main() {
    try {
      await connectToDb();
      console.log('Starting backend...');
    }
    catch (error) {
      console.error('Error connecting to the database:', error);
    }
}

main();