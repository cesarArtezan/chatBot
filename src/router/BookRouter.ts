import { Request, Response, Router } from "express";
import Books from "../models/Books";
/**
 * @apiDefine BookResponseParams
 * @apiSuccess {Date} createdAt
 * @apiSuccess {ObjectId} _id
 * @apiSuccess {string} name
 * @apiSuccess {number} pages
 */

export class BookRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }
  public all(req: Request, res: Response): void {
    Books.find()
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
  public find(req: Request, res: Response): void {
    const pagesGt: number = req.body.pagesGt;
    const pagesLt: number = req.body.pagesLt;
    Books.find()
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
  public one(req: Request, res: Response): void {
    const name: string = req.params.name;

    Books.findOne({ name })
      .then(data => {
        res.status(200).json({ data });
      })
      .catch(error => {
        res.status(500).json({ error });
      });
  }
  public create(req: Request, res: Response): void {
    const name: string = req.body.name;
    const pages: number = req.body.pages;

    if (!name) {
      res.status(422).json({ mensage: "Name Req" });
    }
    const book = new Books({
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
  public update(req: Request, res: Response): void {
    const name: string = req.params.name;
    const d: any = req.params;

    Books.findOneAndUpdate({ name }, req.body)
      .then(data => {
        res.status(200).json({ data: req.body });
      })
      .catch(error => {
        res.status(500).json({ error });
      });
  }
  public routes() {
    this.router.get("/", this.all);
    this.router.get("/:name", this.one);
    this.router.put("/:name", this.update);
    this.router.post("/", this.create);
    this.router.post("/find", this.find);
  }
}
