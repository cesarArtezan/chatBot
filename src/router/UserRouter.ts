import { Request, Response, Router } from "express";
import User from "../models/User";
/**
 * @apiDefine UserResponsePArams
 * @apiSuccess {Date} createdAt
 * @apiSuccess {Date} [updatedAt]
 * @apiSuccess {ObjectId} _id
 * @apiSuccess {string} firstName
 * @apiSuccess {string} lastName
 * @apiSuccess {string} username
 * @apiSuccess {string} email
 * @apiSuccess {string} password
 * @apiSuccess {Books} books
 * @apiSuccess {Post} post
 */
export class UserRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }
  /**
   * @api {GET} /users/ Request all
   * @apiVersion  0.1.0
   * @apiName get
   * @apiGroup Users
   *
   *
   * @apiSampleRequest /users/
   *
   * @apiSuccessExample {json} Success-Response a JSON-Array<user>:
   * {"data":[{"createdAt":"2018-07-27T15:13:59.451Z","updatedAt":"2018-07-27T15:13:59.451Z","firstName":"Cesar","lastName":"Artezan","username":"cesarartezan","email":"algo@a.com","password":"123","posts":[],"books":[],"_id":"5abc0051734d1d56e2046bd6"},{"createdAt":"2018-04-15T21:46:50.337Z","updatedAt":"2018-04-15T21:46:50.337Z","firstName":"user2","lastName":"lastname2","username":"username1","email":"algo@a.com","password":"5636","posts":[],"books":[],"_id":"5ad3c84afddb2b2cc4ffbb0f","__v":0}]}
   */
  public all(req: Request, res: Response): void {
    User.find()
      .populate("posts")
      .populate("books")
      .then(data => {
        res.status(200).json({ data });
      })
      .catch(error => {
        res.status(500).json({ error });
      });
  }

  public one(req: Request, res: Response): void {
    const username: string = req.params.username;

    User.findOne({ username })
      .populate("books posts")
      .then(data => {
        res.status(200).json({ data });
      })
      .catch(error => {
        res.status(500).json({ error });
      });

    /*User.findOne({ username }).select('lastName')
      .then((data) => {
        res.status(200).json({ data });
      })
      .catch((error) => {
        res.status(500).json({ error });
      });*/
  }

  public create(req: Request, res: Response): void {
    const firstName: string = req.body.firstName;
    const lastName: string = req.body.lastName;
    const username: string = req.body.username;
    const email: string = req.body.email;
    const password: string = req.body.password;
    const posts: string[] = req.body.posts;
    const books: string[] = req.body.books;

    const user = new User({
      firstName,
      lastName,
      username,
      email,
      password,
      posts,
      books
    });

    user
      .save()
      .then(data => {
        res.status(201).json({ data });
      })
      .catch(error => {
        res.status(500).json({ error });
      });
  }

  public update(req: Request, res: Response): void {
    const username: string = req.params.username;

    User.findOneAndUpdate({ username }, req.body)
      .then(data => {
        res.status(200).json({ data });
      })
      .catch(error => {
        res.status(500).json({ error });
      });
  }

  public delete(req: Request, res: Response): void {
    const username: string = req.params.username;

    User.findOneAndRemove({ username })
      .then(() => {
        res.status(204).end();
      })
      .catch(error => {
        res.status(500).json({ error });
      });
  }

  // set up our routes
  public routes() {
    this.router.get("/", this.all);
    this.router.get("/:username", this.one);
    this.router.post("/", this.create);
    this.router.put("/:username", this.update);
    this.router.delete("/:username", this.delete);
  }
}
