const { connectToDb } = require('./utils/db');
const { Member } = require('./app/models/schemas/member')
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