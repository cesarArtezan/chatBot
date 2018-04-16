"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Books_1 = require("../models/Books");
var BookRouter = /** @class */ (function () {
    function BookRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    BookRouter.prototype.all = function (req, res) {
        Books_1.default.find()
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    BookRouter.prototype.find = function (req, res) {
        var pagesGt = req.body.pagesGt;
        var pagesLt = req.body.pagesLt;
        Books_1.default.find()
            .where('pages')
            .gt(pagesGt)
            .lt(pagesLt)
            .sort('-pages')
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    BookRouter.prototype.one = function (req, res) {
        var name = req.params.name;
        Books_1.default.findOne({ name: name })
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    BookRouter.prototype.create = function (req, res) {
        var name = req.body.name;
        var pages = req.body.pages;
        if (!name) {
            res.status(422).json({ mensage: 'Name Req' });
        }
        var book = new Books_1.default({
            name: name, pages: pages
        });
        book.save()
            .then(function (data) {
            res.status(201).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    BookRouter.prototype.update = function (req, res) {
        var name = req.params.name;
        var d = req.params;
        Books_1.default.findOneAndUpdate({ name: name }, req.body)
            .then(function (data) {
            res.status(200).json({ data: req.body });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    BookRouter.prototype.routes = function () {
        this.router.get('/', this.all);
        this.router.get('/:name', this.one);
        this.router.put('/:name', this.update);
        this.router.post('/', this.create);
        this.router.post('/find', this.find);
    };
    return BookRouter;
}());
exports.BookRouter = BookRouter;
//# sourceMappingURL=BookRouter.js.map