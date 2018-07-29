"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Books_1 = require("../models/Books");
/**
 * @apiDefine BookResponseParams
 * @apiSuccess {Date} createdAt
 * @apiSuccess {ObjectId} _id
 * @apiSuccess {string} name
 * @apiSuccess {number} pages
 */
class BookRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    all(req, res) {
        Books_1.default.find()
            .then(data => {
            res.status(200).json({ data });
        })
            .catch(error => {
            res.status(500).json({ error });
        });
    }
    /**
     * @api {GET} /books/ Request all
     * @apiVersion  0.1.0
     * @apiName get
     * @apiGroup Books
     *
     *
     * @apiSampleRequest /books/
     *
     * @apiSuccessExample {json} Success-Response a JSON-Array<books>:
     * {"data":[
     * { "createAt": "2018-04-15T21:17:41.101Z", "name": "libro1", "pages": 40, "_id": "5ad3c175d4f5791f80c86742", "__v": 0 }, { "createAt": "2018-04-15T21:19:18.433Z", "name": "libro2", "pages": 50, "_id": "5ad3c1d6d4f5791f80c86744", "__v": 0 }, { "createAt": "2018-04-15T21:19:26.769Z", "name": "libro33", "pages": 151, "_id": "5ad3c1ded4f5791f80c86745", "__v": 0 }, { "createAt": "2018-04-15T21:19:36.520Z", "name": "libro4", "pages": 150, "_id": "5ad3c1e8d4f5791f80c86746", "__v": 0 }
     * ]}
     */
    find(req, res) {
        const pagesGt = req.body.pagesGt;
        const pagesLt = req.body.pagesLt;
        Books_1.default.find()
            .where("pages")
            .gt(pagesGt)
            .lt(pagesLt)
            .sort("-pages")
            .then(data => {
            res.status(200).json({ data });
        })
            .catch(error => {
            res.status(500).json({ error });
        });
    }
    one(req, res) {
        const name = req.params.name;
        Books_1.default.findOne({ name })
            .then(data => {
            res.status(200).json({ data });
        })
            .catch(error => {
            res.status(500).json({ error });
        });
    }
    create(req, res) {
        const name = req.body.name;
        const pages = req.body.pages;
        if (!name) {
            res.status(422).json({ mensage: "Name Req" });
        }
        const book = new Books_1.default({
            name,
            pages
        });
        book
            .save()
            .then(data => {
            res.status(201).json({ data });
        })
            .catch(error => {
            res.status(500).json({ error });
        });
    }
    update(req, res) {
        const name = req.params.name;
        const d = req.params;
        Books_1.default.findOneAndUpdate({ name }, req.body)
            .then(data => {
            res.status(200).json({ data: req.body });
        })
            .catch(error => {
            res.status(500).json({ error });
        });
    }
    routes() {
        this.router.get("/", this.all);
        this.router.get("/:name", this.one);
        this.router.put("/:name", this.update);
        this.router.post("/", this.create);
        this.router.post("/find", this.find);
    }
}
exports.BookRouter = BookRouter;
//# sourceMappingURL=BookRouter.js.map