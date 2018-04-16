"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var compression = require("compression");
var cookieParser = require("cookie-parser");
var cors = require("cors");
var express = require("express");
var helmet = require("helmet");
var mongoose = require("mongoose");
var logger = require("morgan");
var BookRouter_1 = require("./router/BookRouter");
var PostRouter_1 = require("./router/PostRouter");
var UserRouter_1 = require("./router/UserRouter");
var Server = /** @class */ (function () {
    function Server() {
        this.postRouter = new PostRouter_1.PostRouter();
        this.userRouter = new UserRouter_1.UserRouter();
        this.BookRouter = new BookRouter_1.BookRouter();
        this.app = express();
        this.config();
        this.routes();
    }
    // application config
    Server.prototype.config = function () {
        var MONGO_URI = 'mongodb://cesar:180292@ds117469.mlab.com:17469/cesar';
        mongoose.connect(MONGO_URI || process.env.MONGODB_URI);
        // express middleware
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.app.use(logger('dev'));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
        // cors
        this.app.use(function (req, res, next) {
            res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            // tslint:disable-next-line:max-line-length
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
            res.header('Access-Control-Allow-Credentials', 'true');
            next();
        });
    };
    // application routes
    Server.prototype.routes = function () {
        var router = express.Router();
        this.app.use('/', router);
        this.app.use('/api/v1/posts', this.postRouter.router);
        this.app.use('/api/v1/users', this.userRouter.router);
        this.app.use('/api/v1/books', this.BookRouter.router);
    };
    return Server;
}());
// export
exports.default = new Server().app;
//# sourceMappingURL=server.js.map