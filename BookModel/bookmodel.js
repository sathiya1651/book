const mongoose = require('mongoose');
const mongooseAutoIncrement = require('mongoose-sequence')(mongoose);

const Bookschema = new mongoose.Schema({
    bookid: { type: Number,  unique:true },
    bookname: { type: String, required: true },
    bookprice: { type: Number, required: true },
}, { timestamps: true });

Bookschema.plugin(mongooseAutoIncrement, { inc_field: 'bookid' });

module.exports = mongoose.model('Book', Bookschema);
