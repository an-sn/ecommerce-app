import { connectToDb, db } from './utils/db.js';
import express from 'express';
import booksRouter from './routes/bookRoutes.js';

const port = 10000;
const app = express();
const router = express.Router();

connectToDb()
  .then(() => {
    app.listen(port, router, ()  => {
      console.log("Started backend on port:", port);
      app.use('/api', router);
      router.use('/', booksRouter);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  });