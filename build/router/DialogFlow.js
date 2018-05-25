"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const DialogResponse_1 = require("./../models/DialogResponse");
// tslint:disable:arrow-parens
const express_1 = require("express");
const Books_1 = require("../models/Books");
const DialogResponse_2 = require("../models/DialogResponse");
class DialogFlow {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    intent(req, res) {
        Books_1.default.find()
            .then(data => {
            res.status(200).json({ data });
        })
            .catch(error => {
            res.status(500).json({ error });
        });
    }
    getNember(req, res, next) {
        const promise = new Promise((resolve, reject) => {
            resolve(5);
        });
        const result = promise;
        req.algo = 5;
        next();
    }
    routes() {
        this.router.post("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
            // todos
            function allBooks() {
                return __awaiter(this, void 0, void 0, function* () {
                    const promise = new Promise((resolve, reject) => {
                        Books_1.default.find()
                            .then(data => {
                            const arrName = [];
                            data.forEach((item, i) => {
                                arrName[i] = item.name;
                            });
                            resolve(arrName);
                        })
                            .catch(error => {
                            res.status(500).json({ error });
                        });
                    });
                    const result = yield promise;
                    return result;
                });
            }
            const data1 = yield allBooks();
            const list = DialogResponse_2.ResponseItems;
            list.payload.google.richResponse.items[0] = {
                simpleResponse: {
                    textToSpeech: "Libros",
                    displayText: data1.toString()
                }
            };
            // const app1 = dialogflow({ debug: true });
            // app1.intent("prueba", async conv => {
            //   // const data = await scrapePage();
            //   conv.close(
            //     new SimpleResponse({
            //       text: `El ultimo episodio fue este`,
            //       speech: `El ultimo episodio fue este `
            //     })
            //   );
            //   // conv.ask(
            //   //   new BasicCard({
            //   //     title: 'Watch the latest Episode',
            //   //     image: new Image({
            //   //       url: 'https://goo.gl/Fz9nrQ',
            //   //       alt: 'AngularFirebase Logo'
            //   //     }),
            //   //     buttons: new Button({
            //   //       title: 'Watch',
            //   //       url: 'https://angularfirebase.com/lessons'
            //   //     })
            //   //   })
            //   // );
            // });
            // respuesta final
            const ya = DialogResponse_1.Simple;
            ya.payload.google.richResponse.items[0].simpleResponse.displayText = data1.toString();
            res.json(ya);
        }));
    }
}
exports.DialogFlow = DialogFlow;
//# sourceMappingURL=DialogFlow.js.map