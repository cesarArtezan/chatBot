"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("../models/User");
/**
 * @apiDefine UserResponseParams
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
     * {"data":[
     * {"createdAt": "2018-04-15T22:08:19.645Z", "updatedAt": "2018-04-15T22:08:19.645Z", "firstName": "user102", "lastName": "last102", "username": "user102", "email": "algo@a456.com", "password": "5636", "posts": [ { "timestamp": "2018-07-29T15:08:01.298Z", "title": "algo", "slug": "", "content": "", "featuredImage": "", "category": "c", "published": false, "_id": "5abbfcc0734d1d56e20469e2" } ], "books": [ { "createAt": "2018-04-15T21:19:18.433Z", "name": "libro2", "pages": 50, "_id": "5ad3c1d6d4f5791f80c86744", "__v": 0 }, { "createAt": "2018-04-15T21:17:41.101Z", "name": "libro1", "pages": 40, "_id": "5ad3c175d4f5791f80c86742", "__v": 0 } ], "_id": "5ad3cd5346a90e3d1c9c09a1", "__v": 0 }, { "createdAt": "2018-04-15T22:13:52.471Z", "updatedAt": "2018-04-15T22:13:52.471Z", "firstName": "user25", "lastName": "last25", "username": "username25", "email": "algo@a456.com", "password": "5636", "posts": [ { "timestamp": "2018-07-29T15:08:01.298Z", "title": "algo", "slug": "", "content": "", "featuredImage": "", "category": "c", "published": false, "_id": "5abbfcc0734d1d56e20469e2" }, { "timestamp": "2018-03-29T13:45:17.776Z", "title": "Post4", "slug": "post2", "content": "algo contenido", "featuredImage": "imagen", "category": "category", "published": true, "_id": "5abcededfb5dfb236c199e83", "__v": 0 } ], "books": [ { "createAt": "2018-04-15T21:19:18.433Z", "name": "libro2", "pages": 50, "_id": "5ad3c1d6d4f5791f80c86744", "__v": 0 }, { "createAt": "2018-04-15T21:17:41.101Z", "name": "libro1", "pages": 40, "_id": "5ad3c175d4f5791f80c86742", "__v": 0 }, { "createAt": "2018-04-15T21:19:36.520Z", "name": "libro4", "pages": 150, "_id": "5ad3c1e8d4f5791f80c86746", "__v": 0 } ], "_id": "5ad3cea0206c9611d0a7906c", "__v": 0 }
     * ]}
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
    /**
     * @api {GET} /users/:_id Request by Object Id
     * @apiVersion  0.1.0
     * @apiName getById
     * @apiGroup Users
     *
     *
     * @apiParam {ObjectId} _id Must be provided as QueryParam
     *
     * @apiExample Example usage:
     * https://cesarapp12.herokuapp.com/api/v1/users/5a9c4bb05e46d22f64abc15a
     *
     * @apiSampleRequest /users/
     *
     * @apiUse UserResponseParams
     *
     * @apiSuccessExample {json} Success-Response User:
     * {"data": { "createdAt": "2018-07-29T15:07:59.022Z", "updatedAt": "2018-07-29T15:07:59.022Z", "firstName": "user501", "lastName": "lastname2", "username": "username501", "email": "demo_user@a.com", "password": "5636", "posts": [ { "timestamp": "2018-03-29T13:44:27.979Z", "title": "Post1", "slug": "post1", "content": "algo contenido", "featuredImage": "imagen", "category": "category", "published": false, "_id": "5abcedbbfb5dfb236c199e81", "__v": 0 }, { "timestamp": "2018-03-29T13:45:17.776Z", "title": "Post4", "slug": "post2", "content": "algo contenido", "featuredImage": "imagen", "category": "category", "published": true, "_id": "5abcededfb5dfb236c199e83", "__v": 0 } ], "books": [ { "createAt": "2018-04-15T21:17:41.101Z", "name": "libro1", "pages": 40, "_id": "5ad3c175d4f5791f80c86742", "__v": 0 }, { "createAt": "2018-04-15T21:17:41.101Z", "name": "libro1", "pages": 40, "_id": "5ad3c175d4f5791f80c86742", "__v": 0 } ], "_id": "5b5dd84f7c124a2554381c90", "__v": 0 } }
     */
    oneById(req, res) {
        const username = req.params.username;
        User_1.default.findById(username)
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
    /**
     * @api {POST} /users/ Request New
     * @apiVersion  0.1.0
     * @apiName post
     * @apiGroup Users
     *
     *
     * @apiParam {string} firstName
     * @apiParam {string} lastName
     * @apiParam {string} username
     * @apiParam {string} [email]
     * @apiParam {string} password
     * @apiParam {Books} books
     * @apiParam {ObjectId[]} book._id
     * @apiParam {Posts} posts
     * @apiParam {ObjectId[]} post._id
     *
     * @apiParamExample {json} Request-Example:
     * {"firstName": "user50", "lastName": "lastname2", "username": "username50", "email": "demo_user@a.com", "password": "5636","posts": ["5abcedbbfb5dfb236c199e81","5abcededfb5dfb236c199e83"],"books": ["5ad3c175d4f5791f80c86742","5ad3c1d6d4f5791f80c86744"] }
     *
     * @apiUse UserResponseParams
     *
     * @apiSuccessExample {json} Success-Response Created User:
     * {"data": { "createdAt": "2018-07-29T15:07:59.022Z", "updatedAt": "2018-07-29T15:07:59.022Z", "firstName": "user501", "lastName": "lastname2", "username": "username501", "email": "demo_user@a.com", "password": "5636", "posts": [ "5abcedbbfb5dfb236c199e81", "5abcededfb5dfb236c199e83" ], "books": [ "5ad3c175d4f5791f80c86742", "5ad3c175d4f5791f80c86742" ], "_id": "5b5dd84f7c124a2554381c90", "__v": 0 } }
     */
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
    /**
     * @api {PUT} /users/:_id Request Update
     * @apiVersion  0.1.0
     * @apiName put
     * @apiGroup Users
     *
     *
     * @apiParam {ObjectId} _id Must be placed as QueryParam
     * @apiParam {string} [firstName]
     * @apiParam {string} [lastName]
     * @apiParam {string} [username]
     * @apiParam {string} [email]
     * @apiParam {string} [password]
     * @apiParam {Posts} [posts]
     * @apiParam {ObjectId[]} post._id
     * @apiParam {Books} [books]
     * @apiParam {ObjectId[]} book._id
     *
     * @apiExample Example usage:
     * https://cesarapp12.herokuapp.com/api/v1/users/5a9c4bb05e46d22f64abc15a
     *
     * @apiParamExample {json} Request-Example:
     * { "lastName": "lastname21","books": [ "5ad3c1d6d4f5791f80c86744" ] }
     *
     * @apiSuccessExample {json} Success-Response:
     * { "data": { "createdAt": "2018-07-29T15:07:59.022Z", "updatedAt": "2018-07-29T15:07:59.022Z", "firstName": "user501", "lastName": "lastname21", "username": "username501", "email": "demo_user@a.com", "password": "5636", "posts": [ "5abcedbbfb5dfb236c199e81", "5abcededfb5dfb236c199e83" ], "books": [ "5ad3c175d4f5791f80c86742", "5ad3c1d6d4f5791f80c86744" ], "_id": "5b5dd84f7c124a2554381c90", "__v": 0 } }
     */
    update(req, res) {
        const _id = req.params.username;
        User_1.default.findByIdAndUpdate({ _id: _id }, req.body)
            .then(data => {
            res.status(200).json({ data });
        })
            .catch(error => {
            res.status(500).json({ error });
        });
    }
    /**
     * @api {DELETE} /users/:_id Request  Deleted
     * @apiVersion  0.1.0
     * @apiName deleteByToken
     * @apiGroup Users
     *
     *
     * @apiParam {ObjectId} _id Must be placed as QueryParam
     *
     * @apiExample Example usage:
     * https://cesarapp12.herokuapp.com/api/v1/users/5a9c4bb05e46d22f64abc15a
     *
     * @apiSuccessExample {json} Success-Response:
     * {"data":true}
     */
    delete(req, res) {
        const _id = req.params.username;
        User_1.default.findByIdAndRemove({ _id: _id })
            .then(() => {
            res.status(200).json({ data: true });
        })
            .catch(error => {
            res.status(500).json({ error });
        });
    }
    // set up our routes
    routes() {
        this.router.get("/", this.all);
        this.router.get("/:username", this.oneById);
        this.router.post("/", this.create);
        this.router.put("/:username", this.update);
        this.router.delete("/:username", this.delete);
    }
}
exports.UserRouter = UserRouter;
//# sourceMappingURL=UserRouter.js.map