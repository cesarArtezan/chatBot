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
// tslint:disable:arrow-parens
const express_1 = require("express");
const Books_1 = require("../models/Books");
// Google Assistant deps
const actions_on_google_1 = require("actions-on-google");
class DialogFlow {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        // Google
        const app = actions_on_google_1.dialogflow({ debug: true });
        // Register handlers for Dialogflow intents
        app.intent("Listar libros", (conv) => __awaiter(this, void 0, void 0, function* () {
            this.booksNames = yield this.getAll();
            const bookList = {};
            this.booksNames.forEach(book => {
                bookList[book] = {
                    title: book,
                    synonyms: [book],
                    description: "Este es el " + book
                };
            });
            conv.ask("Estos son los libros en la base de datos");
            // Create a list
            conv.ask(new actions_on_google_1.List({
                title: "Lista de Libros",
                items: bookList
            }));
        }));
        app.intent("book-select", (conv, params, option) => __awaiter(this, void 0, void 0, function* () {
            if (!option) {
                conv.ask("No se seleccionó nada");
            }
            else {
                const bookSelect = yield this.getOne(option.toString());
                this.booksNames.forEach(bookName => {
                    if (bookName === option) {
                        conv.ask("Este es la información de " + bookSelect.name);
                        conv.ask(new actions_on_google_1.BasicCard({
                            title: "Este es la información de " + bookSelect.name,
                            text: `**Paginas:**
                  ${bookSelect.pages}  \n ***Fecha:*** ${bookSelect.createAt}`,
                            image: new actions_on_google_1.Image({
                                url: "http://theartezan.xyz/books.png",
                                alt: "Image alternate text"
                            })
                        }));
                    }
                });
            }
        }));
        // list
        app.intent("ask_with_list", conv => {
            conv.ask("This is a simple response for a list.");
            conv.ask(new actions_on_google_1.Suggestions([
                "Basic Card",
                "Browse Carousel",
                "Carousel",
                "List",
                "Media",
                "Suggestions"
            ]));
            // Create a list
            conv.ask(new actions_on_google_1.List({
                title: "Things to learn about",
                items: {
                    // Add the first item to the list
                    MATH_AND_PRIME: {
                        synonyms: ["math", "math and prime", "prime numbers", "prime"],
                        title: "Title of the First List Item",
                        description: "42 is an abundant number",
                        image: new actions_on_google_1.Image({
                            url: "https://example.com/math_and_prime.jpg",
                            alt: "Math & prime numbers"
                        })
                    },
                    // Add the second item to the list
                    EGYPT: {
                        synonyms: ["religion", "egypt", "ancient egyptian"],
                        title: "Ancient Egyptian religion",
                        description: "42 gods ruled on the fate of the dead in the afterworld",
                        image: new actions_on_google_1.Image({
                            url: "http://example.com/egypt",
                            alt: "Egypt"
                        })
                    },
                    // Add the last item to the list
                    RECIPES: {
                        synonyms: ["recipes", "recipe", "42 recipes"],
                        title: "42 recipes in 42 ingredients",
                        description: "A beautifully simple recipe",
                        image: new actions_on_google_1.Image({
                            url: "http://example.com/recipe",
                            alt: "Recipe"
                        })
                    }
                }
            }));
        });
        app.intent("res", (conv, params, option) => {
            // Get the user's selection
            // Compare the user's selections to each of the item's keys
            if (!option) {
                conv.ask("You did not select any item from the list or carousel");
            }
            else if (option === "MATH_AND_PRIME") {
                conv.ask("42 is an abundant number because the sum of its...");
            }
            else if (option === "EGYPT") {
                conv.ask("42 gods who ruled on the fate of the dead in the ");
            }
            else if (option === "RECIPES") {
                conv.ask(`Here's a beautiful simple recipe that's full `);
            }
            else {
                conv.ask("You selected an unknown item from the list, or carousel");
            }
        });
        // Intent in Dialogflow called `Goodbye`
        app.intent("prueba2", conv => {
            conv.close("See you later!");
        });
        app.intent("Default Fallback Intent", conv => {
            conv.ask(`I didn't understand. Can you tell me something else?`);
        });
        this.router.use("/", app);
    }
    getAll() {
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
                    // error
                });
            });
            const result = yield promise;
            return result;
        });
    }
    getOne(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const promise = new Promise((resolve, reject) => {
                Books_1.default.findOne({ name })
                    .then(data => {
                    resolve(data);
                })
                    .catch(error => {
                    // error
                });
            });
            const result = yield promise;
            return result;
        });
    }
    getNember() {
        return __awaiter(this, void 0, void 0, function* () {
            const promise = new Promise((resolve, reject) => {
                resolve(5);
            });
            const result = promise;
            return result;
        });
    }
}
exports.DialogFlow = DialogFlow;
//# sourceMappingURL=DialogFlow.js.map