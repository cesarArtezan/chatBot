"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Post_1 = require("../models/Post");
class PostRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    // get all of the posts in the database
    all(req, res) {
        Post_1.default.find()
            .then((data) => {
            res.status(200).json({ data });
        })
            .catch((error) => {
            res.json({ error });
        });
    }
    // get a single post by params of 'slug'
    one(req, res) {
        const slug = req.params.slug;
        Post_1.default.findOne({ slug })
            .then((data) => {
            res.status(200).json({ data });
        })
            .catch((error) => {
            res.status(500).json({ error });
        });
    }
    // create a new post
    create(req, res) {
        const title = req.body.title;
        const slug = req.body.slug;
        const content = req.body.content;
        const featuredImage = req.body.featuredImage;
        const category = req.body.category;
        const published = req.body.published;
        if (!title || !slug || !content) {
            res.status(422).json({ message: 'All Fields Required.' });
        }
        const post = new Post_1.default({
            title,
            slug,
            content,
            featuredImage,
            category,
            published
        });
        post.save()
            .then((data) => {
            res.status(201).json({ data });
        })
            .catch((error) => {
            res.status(500).json({ error });
        });
    }
    // update post by params of 'slug'
    update(req, res) {
        const slug = req.body.slug;
        Post_1.default.findOneAndUpdate({ slug }, req.body)
            .then((data) => {
            res.status(200).json({ data });
        })
            .catch((error) => {
            res.status(500).json({ error });
        });
    }
    // delete post by params of 'slug'
    delete(req, res) {
        const slug = req.body.slug;
        Post_1.default.findOneAndRemove({ slug })
            .then(() => {
            res.status(204).end();
        })
            .catch((error) => {
            res.status(500).json({ error });
        });
    }
    routes() {
        this.router.get('/', this.all);
        this.router.get('/:slug', this.one);
        this.router.post('/', this.create);
        this.router.put('/:slug', this.update);
        this.router.delete('/:slug', this.delete);
    }
}
exports.PostRouter = PostRouter;
/*
const postRoutes = new PostRouter();
postRoutes.routes();

export default postRoutes.router;*/ 
//# sourceMappingURL=PostRouter.js.map