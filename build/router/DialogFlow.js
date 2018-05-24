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
// Google Assistant deps
const actions_on_google_1 = require("actions-on-google");
const express_1 = require("express");
// aSSIST
const app1 = actions_on_google_1.dialogflow({ debug: true });
class DialogFlow {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    all(req, res) {
        // Capture Intent
        app1.intent('prueba', (conv) => __awaiter(this, void 0, void 0, function* () {
            // const data = await scrapePage();
            conv.close(new actions_on_google_1.SimpleResponse({
                text: `El ultimo episodio fue este`,
                speech: `El ultimo episodio fue este `
            }));
            conv.ask(new actions_on_google_1.BasicCard({
                title: 'Watch the latest Episode',
                image: new actions_on_google_1.Image({
                    url: 'https://goo.gl/Fz9nrQ',
                    alt: 'AngularFirebase Logo'
                }),
                buttons: new actions_on_google_1.Button({
                    title: 'Watch',
                    url: 'https://angularfirebase.com/lessons'
                })
            }));
        }));
        res.json(app1);
    }
    demo(req, res) {
        res.json({
            speech: 'algo1',
            displayText: 'algo2',
            source: 'fuente'
        });
    }
    demo1(req, res) {
        return res.json({
            speech: 'algo1',
            displayText: 'algo2',
            source: 'fuente'
        });
    }
    demo2(req, res) {
        res.json({
            text: `El ultimo episodio fue este`,
            speech: `El ultimo episodio fue este `
        });
    }
    routes() {
        this.router.get('/', this.all);
        this.router.get('/demo', this.demo);
        this.router.get('/demo1', this.demo1);
        this.router.get('/demo2', this.demo2);
    }
}
exports.DialogFlow = DialogFlow;
//# sourceMappingURL=DialogFlow.js.map