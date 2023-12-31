import express, { Express } from 'express';

import { CS571Initializer } from '@cs571/f23-api-middleware'
import { CS571FeaturedBakedGoodRoute } from './routes/featured-baked-good';

console.log("Welcome to HW1!");

const app: Express = express();

const appBundle = CS571Initializer.init(app, {
  allowNoAuth: [],
  skipAuth: false
});

appBundle.router.addRoutes([
  new CS571FeaturedBakedGoodRoute()
])

app.listen(appBundle.config.PORT, () => {
  console.log(`Running at :${appBundle.config.PORT}`);
});
