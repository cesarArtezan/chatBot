import { model, Schema } from 'mongoose';

const booksSchema: Schema = new Schema({
createAt: {
    type: Date,
    default: Date.now
},
name: {
    type: String,
    default: '',
    required: true,
    unique: true,
    lowercase: true
},
pages: {
    type: Number,
    default: 0,
    required: false
}
});
export default model('Books', booksSchema);
