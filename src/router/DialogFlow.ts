import { ItemsSimpleResponse } from "./../models/DialogResponse";
// tslint:disable:arrow-parens
import { Request, Response, Router } from "express";
import Books, { BooksInterface } from "../models/Books";
import { ResponseItems } from "../models/DialogResponse";

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

      // respuesta final
      res.status(200).json(list);
    });
  }
}
