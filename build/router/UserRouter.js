"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("../models/User");
class UserRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    all(req, res) {
        User_1.default.find().populate('posts').populate('books')
            .then((data) => {
            res.status(200).json({ data });
        })
            .catch((error) => {
            res.status(500).json({ error });
        });
    }
    one(req, res) {
        const username = req.params.username;
        User_1.default.findOne({ username }).populate('books posts')
            .then((data) => {
            res.status(200).json({ data });
        })
            .catch((error) => {
            res.status(500).json({ error });
        });
        /*User.findOne({ username }).select('lastName')
          .then((data) => {
            res.status(200).json({ data });
          })
          .catch((error) => {
            res.status(500).json({ error });
          });*/
    }
    create(req, res) {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const posts = req.body.posts;
        const books = req.body.books;
        const user = new User_1.default({
            firstName,
            lastName,
            username,
            email,
            password,
            posts,
            books
        });
        user.save()
            .then((data) => {
            res.status(201).json({ data });
        })
            .catch((error) => {
            res.status(500).json({ error });
        });
    }
    update(req, res) {
        const username = req.params.username;
        User_1.default.findOneAndUpdate({ username }, req.body)
            .then((data) => {
            res.status(200).json({ data });
        })
            .catch((error) => {
            res.status(500).json({ error });
        });
    }
    delete(req, res) {
        const username = req.params.username;
        User_1.default.findOneAndRemove({ username })
            .then(() => {
            res.status(204).end();
        })
            .catch((error) => {
            res.status(500).json({ error });
        });
    }
    // set up our routes
    routes() {
        this.router.get('/', this.all);
        this.router.get('/:username', this.one);
        this.router.post('/', this.create);
        this.router.put('/:username', this.update);
        this.router.delete('/:username', this.delete);
    }
}
exports.UserRouter = UserRouter;
//# sourceMappingURL=UserRouter.js.map