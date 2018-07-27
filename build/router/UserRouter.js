"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("../models/User");
/**
 * @apiDefine UserResponsePArams
 * @apiSuccess {Date} createdAt
 * @apiSuccess {Date} [updatedAt]
 * @apiSuccess {ObjectId} _id
 * @apiSuccess {string} firstName
 * @apiSuccess {string} lastName
 * @apiSuccess {string} username
 * @apiSuccess {string} email
 * @apiSuccess {string} password
 * @apiSuccess {Books} books
 * @apiSuccess {Post} post
 */
class UserRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    /**
     * @api {GET} /users/ Request all
     * @apiVersion  0.1.0
     * @apiName get
     * @apiGroup Users
     *
     *
     * @apiSampleRequest /users/
     *
     * @apiSuccessExample {json} Success-Response a JSON-Array<user>:
     * {"data":[{"createdAt":"2018-07-27T15:13:59.451Z","updatedAt":"2018-07-27T15:13:59.451Z","firstName":"Cesar","lastName":"Artezan","username":"cesarartezan","email":"algo@a.com","password":"123","posts":[],"books":[],"_id":"5abc0051734d1d56e2046bd6"},{"createdAt":"2018-04-15T21:46:50.337Z","updatedAt":"2018-04-15T21:46:50.337Z","firstName":"user2","lastName":"lastname2","username":"username1","email":"algo@a.com","password":"5636","posts":[],"books":[],"_id":"5ad3c84afddb2b2cc4ffbb0f","__v":0}]}
     */
    all(req, res) {
        User_1.default.find()
            .populate("posts")
            .populate("books")
            .then(data => {
            res.status(200).json({ data });
        })
            .catch(error => {
            res.status(500).json({ error });
        });
    }
    one(req, res) {
        const username = req.params.username;
        User_1.default.findOne({ username })
            .populate("books posts")
            .then(data => {
            res.status(200).json({ data });
        })
            .catch(error => {
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
        user
            .save()
            .then(data => {
            res.status(201).json({ data });
        })
            .catch(error => {
            res.status(500).json({ error });
        });
    }
    update(req, res) {
        const username = req.params.username;
        User_1.default.findOneAndUpdate({ username }, req.body)
            .then(data => {
            res.status(200).json({ data });
        })
            .catch(error => {
            res.status(500).json({ error });
        });
    }
    delete(req, res) {
        const username = req.params.username;
        User_1.default.findOneAndRemove({ username })
            .then(() => {
            res.status(204).end();
        })
            .catch(error => {
            res.status(500).json({ error });
        });
    }
    // set up our routes
    routes() {
        this.router.get("/", this.all);
        this.router.get("/:username", this.one);
        this.router.post("/", this.create);
        this.router.put("/:username", this.update);
        this.router.delete("/:username", this.delete);
    }
}
exports.UserRouter = UserRouter;
//# sourceMappingURL=UserRouter.js.map