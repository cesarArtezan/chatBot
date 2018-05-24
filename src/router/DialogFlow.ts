// Google Assistant deps
import {
  BasicCard,
  Button,
  dialogflow,
  Image,
  SimpleResponse
} from 'actions-on-google';
import { IncomingMessage } from 'actions-on-google/dist/service/dialogflow/incoming';
import { Request, Response, Router } from 'express';
// aSSIST
const app1 = dialogflow({ debug: true });

export class DialogFlow {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }
  public all(req: Request, res: Response): void {
    // Capture Intent
    app1.intent('prueba', async (conv) => {
      // const data = await scrapePage();
      conv.close(
        new SimpleResponse({
          text: `El ultimo episodio fue este`,
          speech: `El ultimo episodio fue este `
        })
      );
      conv.ask(
        new BasicCard({
          title: 'Watch the latest Episode',
          image: new Image({
            url: 'https://goo.gl/Fz9nrQ',
            alt: 'AngularFirebase Logo'
          }),
          buttons: new Button({
            title: 'Watch',
            url: 'https://angularfirebase.com/lessons'
          })
        })
      );
    });

    res.json(app1);
  }
  public demo(req: Request, res: Response) {
      res.json({
          speech: 'algo1',
          displayText: 'algo2',
          source: 'fuente'
      });
  }
  public demo1(req: Request, res: Response) {
    return  res.json({
          speech: 'algo1',
          displayText: 'algo2',
          source: 'fuente'
      });
  }
  public demo2(req: Request, res: Response) {
    res.json({
      text: `El ultimo episodio fue este`,
      speech: `El ultimo episodio fue este `
      });
  }

  public routes() {
    this.router.get('/', this.all);
    this.router.get('/demo', this.demo);
    this.router.get('/demo1', this.demo1);
    this.router.get('/demo2', this.demo2);
  }
}
