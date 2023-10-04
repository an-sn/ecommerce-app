import { Schema, model } from 'mongoose';

const booksSchema = new Schema({
    title: {
        type: String,
        required: true,
        index: true
    },
    author:{
        type: String,
        required: true,
        index: true
    },
    isbn:{
        type: String,
        required: true
    },
    publish_year: {
        type: Number,
        required: true
    },
    genre:{
        type: String,
        required: true,
        index: true
    },
    description:{
        type: String,
        required: true
    },
    language:{
        type: String,
        required: true
    },
    num_of_pages: {
        type: Number,
        required: true
    },
    available:{
        type: Boolean,
        required: true
    }
}, {collection : 'books'});

const Book = model('Book', booksSchema);
export default Book;
