import express from 'express';
import Book from '../models/schemas/books.js';

const booksRouter = express.Router();

booksRouter.get('/books', async (req, res) => {
  try {
    console.log("GET books REST API called");
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch books' });
  }
});

// // Get a specific book by ID
// router.get('/books/:id', async (req, res) => {
//   try {
//     const book = await Book.findById(req.params.id);
//     if (!book) {
//       return res.status(404).json({ error: 'Book not found' });
//     }
//     res.json(book);
//   } catch (error) {
//     res.status(500).json({ error: 'Could not fetch book' });
//   }
// });

// // Update a book by ID
// router.put('/books/:id', async (req, res) => {
//   try {
//     const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!book) {
//       return res.status(404).json({ error: 'Book not found' });
//     }
//     res.json(book);
//   } catch (error) {
//     res.status(500).json({ error: 'Could not update book' });
//   }
// });

// // Delete a book by ID
// router.delete('/books/:id', async (req, res) => {
//   try {
//     const book = await Book.findByIdAndRemove(req.params.id);
//     if (!book) {
//       return res.status(404).json({ error: 'Book not found' });
//     }
//     res.json({ message: 'Book deleted' });
//   } catch (error) {
//     res.status(500).json({ error: 'Could not delete book' });
//   }
// });

export default booksRouter;
