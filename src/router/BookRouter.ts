import { Request, Response, Router } from 'express';
import Books from '../models/Books';

export class BookRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }
    public all(req: Request, res: Response): void {
        Books.find()
            .then((data) => {
                res.status(200).json({ data });
            })
            .catch((error) => {
                res.status(500).json({ error });
            });
    }
    public find(req: Request, res: Response): void {
        const pagesGt: number = req.body.pagesGt;
        const pagesLt: number = req.body.pagesLt;
        Books.find()
            .where('pages')
            .gt(pagesGt)
            .lt(pagesLt)
            .sort('-pages')
            .then((data) => {
                res.status(200).json({ data });
            })
            .catch((error) => {
                res.status(500).json({ error });
            });
    }
    public one(req: Request, res: Response): void {
        const name: string = req.params.name;

        Books.findOne({ name })
            .then((data) => {
                res.status(200).json({ data });
            })
            .catch((error) => {
                res.status(500).json({ error });
            });
    }
    public create(req: Request, res: Response): void {
        const name: string = req.body.name;
        const pages: number = req.body.pages;

        if (!name) {
            res.status(422).json({ mensage: 'Name Req' });
        }
        const book = new Books({
            name, pages
        });
        book.save()
            .then((data) => {
                res.status(201).json({ data });
            })
            .catch((error) => {
                res.status(500).json({ error });
            });
    }
    public update(req: Request, res: Response): void {
        const name: string = req.params.name;
        const d: any = req.params;

        Books.findOneAndUpdate({ name }, req.body)
            .then((data) => {
                res.status(200).json({ data: req.body });
            })
            .catch((error) => {
                res.status(500).json({ error });
            });
    }
    public routes() {
        this.router.get('/', this.all);
        this.router.get('/:name', this.one);
        this.router.put('/:name', this.update);
        this.router.post('/', this.create);
        this.router.post('/find', this.find);

    }
}