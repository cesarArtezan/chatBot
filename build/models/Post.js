"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// tslint:disable object-literal-sort-keys
const PostSchema = new mongoose_1.Schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: "",
        required: true
    },
    slug: {
        type: String,
        default: "",
        required: true,
        unique: true,
        trim: true
    },
    content: {
        type: String,
        default: "",
        required: true
    },
    featuredImage: {
        type: String,
        default: ""
    },
    category: {
        type: String,
        default: ""
    },
    published: {
        type: Boolean,
        default: false
    }
});
exports.default = mongoose_1.model("Post", PostSchema);
//# sourceMappingURL=Post.js.map