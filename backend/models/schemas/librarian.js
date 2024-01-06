import { Schema, model } from 'mongoose';

const librarianSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    }
}, {collection: 'librarians'});

const Librarian = model('librarian', librarianSchema);
export default Librarian;