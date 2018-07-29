"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
const logger = require("morgan");
const BookRouter_1 = require("./router/BookRouter");
const DialogFlow_1 = require("./router/DialogFlow");
const PostRouter_1 = require("./router/PostRouter");
const UserRouter_1 = require("./router/UserRouter");
class Server {
    constructor() {
        this.postRouter = new PostRouter_1.PostRouter();
        this.userRouter = new UserRouter_1.UserRouter();
        this.BookRouter = new BookRouter_1.BookRouter();
        this.dialogRouter = new DialogFlow_1.DialogFlow();
        this.app = express();
        this.config();
        this.routes();
    }
    // application config
    config() {
        const MONGO_URI = "mongodb://cesar:180292@ds117469.mlab.com:17469/cesar";
        mongoose.connect(MONGO_URI || process.env.MONGODB_URI);
        // express middleware
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.app.use(logger("dev"));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(express.static("doc"));
        // cors
        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "http://localhost:8080");
            res.header("Access-Control-Allow-Origin", "http://localhost:8100");
            res.header("Access-Control-Allow-Origin", "http://localhost:4200");
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
            // tslint:disable-next-line:max-line-length
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
            res.header("Access-Control-Allow-Credentials", "true");
            next();
        });
    }
    // application routes
    routes() {
        const router = express.Router();
        this.app.use("/", router);
        this.app.use("/api/v1/posts", this.postRouter.router);
        this.app.use("/api/v1/users", this.userRouter.router);
        this.app.use("/api/v1/books", this.BookRouter.router);
        this.app.use("/api/v1/dialog", this.dialogRouter.router);
    }
}
// export
exports.default = new Server().app;
//# sourceMappingURL=server.js.map