import connectToDb from './utils/db.js';
import Member from './models/schemas/member.js';

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