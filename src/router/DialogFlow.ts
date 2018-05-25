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
  Suggestions
} from "actions-on-google";
import { IncomingMessage } from "actions-on-google/dist/service/dialogflow/incoming";

export class DialogFlow {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }
  public intent(req: Request, res: Response) {
    Books.find()

      .then(data => {
        res.status(200).json({ data });
      })
      .catch(error => {
        res.status(500).json({ error });
      });
  }
  public getNember(req: any, res: any, next: any) {
    const promise = new Promise((resolve, reject) => {
      resolve(5);
    });
    const result = promise;
    req.algo = 5;
    next();
  }

  public routes() {
    this.router.post("/", async (req: Request, res: Response) => {
      // todos
      async function allBooks() {
        const promise = new Promise((resolve, reject) => {
          Books.find()

            .then(data => {
              const arrName: string[] = [];
              data.forEach((item, i) => {
                arrName[i] = item.name;
              });
              resolve(arrName);
            })
            .catch(error => {
              res.status(500).json({ error });
            });
        });
        const result = await promise;
        return result;
      }
      const data1 = await allBooks();
      const list = ResponseItems;
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
      const ya = Simple;
      ya.payload.google.richResponse.items[0].simpleResponse.displayText = data1.toString();
      res.json(ya);
    });
  }
}
