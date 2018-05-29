import { ItemsSimpleResponse, Simple } from "./../models/DialogResponse";
// tslint:disable:arrow-parens
import { Request, Response, Router } from "express";
import Books, { BooksInterface } from "../models/Books";
import { ResponseItems } from "../models/DialogResponse";
// Google Assistant deps
import {
  dialogflow,
  SimpleResponse,
  BasicCard,
  Button,
  Image,
  List,
  Suggestions,
  OptionItem
} from "actions-on-google";
import { IncomingMessage } from "actions-on-google/dist/service/dialogflow/incoming";
import * as express from "express";
import {
  OptionItems,
  Table,
  TableOptions
} from "actions-on-google/dist/service/actionssdk";

export class DialogFlow {
  public router: Router;
  booksNames: string[];
  isName: boolean;
  nameBook: string;
  pagesBook: number;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes() {
    // Google
    const app = dialogflow();
    // Register handlers for Dialogflow intents
    app.intent("Listar libros", async conv => {
      this.booksNames = await this.getAll();
      const bookList: OptionItems = {};
      this.booksNames.forEach(book => {
        bookList[book] = {
          title: book,
          synonyms: [book],
          description: "Este es el " + book
        };
      });
      conv.ask("Estos son los libros en la base de datos");
      // Create a list
      conv.ask(
        new List({
          title: "Lista de Libros",
          items: bookList
        })
      );
    });
    app.intent("book-select", async (conv, params, option) => {
      if (!option) {
        conv.ask("No se seleccionó nada");
      } else {
        const bookSelect = await this.getOne(option.toString());
        // this.booksNames.forEach(bookName => {
        //   if (bookName === option) {
        conv.ask("Este es la información de " + bookSelect.name);
        conv.ask(
          new BasicCard({
            title: "Este es la información de " + bookSelect.name,
            text: `**Paginas:**
                  ${bookSelect.pages}  \n ***Fecha:*** ${bookSelect.createAt}`,
            image: new Image({
              url: "http://theartezan.xyz/books.png",
              alt: "Image alternate text"
            })
          })
        );
        //   }
        // });
      }
    });
    // list
    app.intent("ask_with_list", conv => {
      conv.ask("This is a simple response for a list.");
      conv.ask(
        new Suggestions([
          "Basic Card",
          "Browse Carousel",
          "Carousel",
          "List",
          "Media",
          "Suggestions"
        ])
      );
      // Create a list
      conv.ask(
        new List({
          title: "Things to learn about",
          items: {
            // Add the first item to the list
            MATH_AND_PRIME: {
              synonyms: ["math", "math and prime", "prime numbers", "prime"],
              title: "Title of the First List Item",
              description: "42 is an abundant number",
              image: new Image({
                url: "https://example.com/math_and_prime.jpg",
                alt: "Math & prime numbers"
              })
            },
            // Add the second item to the list
            EGYPT: {
              synonyms: ["religion", "egypt", "ancient egyptian"],
              title: "Ancient Egyptian religion",
              description:
                "42 gods ruled on the fate of the dead in the afterworld",
              image: new Image({
                url: "http://example.com/egypt",
                alt: "Egypt"
              })
            },
            // Add the last item to the list
            RECIPES: {
              synonyms: ["recipes", "recipe", "42 recipes"],
              title: "42 recipes in 42 ingredients",
              description: "A beautifully simple recipe",
              image: new Image({
                url: "http://example.com/recipe",
                alt: "Recipe"
              })
            }
          }
        })
      );
    });

    app.intent("res", (conv, params, option) => {
      // Get the user's selection
      // Compare the user's selections to each of the item's keys
      if (!option) {
        conv.ask("You did not select any item from the list or carousel");
      } else if (option === "MATH_AND_PRIME") {
        conv.ask("42 is an abundant number because the sum of its...");
      } else if (option === "EGYPT") {
        conv.ask("42 gods who ruled on the fate of the dead in the ");
      } else if (option === "RECIPES") {
        conv.ask(`Here's a beautiful simple recipe that's full `);
      } else {
        conv.ask("You selected an unknown item from the list, or carousel");
      }
    });

    // listar libros por paginas
    app.intent("list-page-books", async (conv, params, option) => {
      if (+params.number >= +params.number1) {
        conv.ask("El primer numero debe de se el menor y el segundo el mayor");
      } else {
        const arrResult = await this.findByPages(
          +params.number,
          +params.number1
        );
        if (arrResult.length === 0) {
          conv.ask("No se encontraron libros en ese rango, intenta con otro");
        } else if (arrResult.length > 1) {
          const tableOutput = [];
          const listOutput: OptionItems = {};
          arrResult.forEach(item => {
            tableOutput.push([item.name, item.pages.toString()]);
            listOutput[item.name] = {
              title: item.name,
              synonyms: [item.name],
              description: "Paginas:" + item.pages.toString()
            };
          });

          conv.ask(
            `Se encontraron ${arrResult.length.toString()} libros en la base de datos`
          );
          // conv.ask(
          //   new Table({
          //     dividers: false,
          //     columns: ["Nombre", "Paginas"],
          //     rows: tableOutput
          //   })
          // );
          // Create a list
          conv.ask(
            new List({
              title: "Lista de Libros",
              items: listOutput
            })
          );
        } else if (arrResult.length === 1) {
          conv.ask("Solo se encontró un libro");
          conv.ask(
            new BasicCard({
              title: "Este es la información de " + arrResult[0].name,
              text: `**Paginas:**
                    ${arrResult[0].pages}  \n ***Fecha:*** ${
                arrResult[0].createAt
              }`,
              image: new Image({
                url: "http://theartezan.xyz/books.png",
                alt: "Image alternate text"
              })
            })
          );
        }
      }
    });
    // new Book
    app.intent("new-book", async conv => {
      this.isName = true;
      this.nameBook = undefined;
      conv.ask("Ok. ¿Cuál es el nombre del libro?");
    });
    app.intent("new-book-name", async (conv, params) => {
      if (this.isName) {
        this.nameBook = params.nameBook.toString();
        this.isName = false;
        conv.ask("Ok. ¿Cúantas páginas tiene el libro?");
      }
    });
    app.intent("new-book-pages", async (conv, params) => {
      if (!this.isName) {
        this.pagesBook = +params.pagesBook;
        conv.ask("Libro creado correctamente");
        // Create book
        const isCreate = await this.newBook();
        if (isCreate) {
          this.booksNames = await this.getAll();
          const bookList: OptionItems = {};
          this.booksNames.forEach(book => {
            bookList[book] = {
              title: book,
              synonyms: [book],
              description: "Este es el " + book
            };
          });
          // Create a list
          conv.ask(
            new List({
              title: "Lista de Libros",
              items: bookList
            })
          );
        } else {
        }
      }
    });

    // exporta app
    this.router.use("/", app);
  }
  // -------- helpers
  public async getAll() {
    const promise = new Promise<string[]>((resolve, reject) => {
      Books.find()
        .then(data => {
          const arrName: string[] = [];
          data.forEach((item, i) => {
            arrName[i] = item.name;
          });
          resolve(arrName);
        })
        .catch(error => {
          // error
        });
    });
    const result = await promise;
    return result;
  }
  public async getOne(name: string) {
    const promise = new Promise<BooksInterface>((resolve, reject) => {
      Books.findOne({ name })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          // error
        });
    });
    const result = await promise;
    return result;
  }
  public async findByPages(greaterThan: number, lessThan: number) {
    const promise = new Promise<BooksInterface[]>((resolve, reject) => {
      Books.find()
        .where("pages")
        .gt(greaterThan)
        .lt(lessThan)
        .sort("-pages")
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          // error
        });
    });
    const result = await promise;
    return result;
  }
  public async newBook() {
    const name: string = this.nameBook;
    const pages: number = this.pagesBook;
    const book = new Books({
      name,
      pages
    });
    const promise = new Promise<boolean>((resolve, reject) => {
      book
        .save()
        .then(data => {
          resolve(true);
        })
        .catch(error => {
          // error
        });
    });
    const result = await promise;
    return result;
  }
  public async getNember() {
    const promise = new Promise((resolve, reject) => {
      resolve(5);
    });
    const result = promise;
    return result;
  }
}
