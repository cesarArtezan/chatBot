"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const booksSchema = new mongoose_1.Schema({
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
exports.default = mongoose_1.model('Books', booksSchema);
//# sourceMappingURL=Books.js.map