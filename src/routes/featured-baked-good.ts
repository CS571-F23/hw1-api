import { Express } from 'express';

import { CS571Route } from "@cs571/f23-api-middleware/src/interfaces/route";
import { BakedGood } from '../model/baked-good';

export class CS571FeaturedBakedGoodRoute implements CS571Route {

    public static readonly ROUTE_NAME: string = '/featured-baked-good';

    private static readonly FEATURE_MAPPER = {
        "Sunday": new BakedGood("Karpatka", 6.99),
        "Monday": new BakedGood("Pirozhki", 5.99),
        "Tuesday": new BakedGood("Basbousa", 8.99),
        "Wednesday": new BakedGood("Povitica", 12.99),
        "Thursday": new BakedGood("Lamington", 3.49),
        "Friday": new BakedGood("Sachertorte", 14.99),
        "Saturday": new BakedGood("Baklava", 2.99)
    }

    public addRoute(app: Express): void {
        app.get(CS571FeaturedBakedGoodRoute.ROUTE_NAME, (req, res) => {
            res.status(200).send((CS571FeaturedBakedGoodRoute.FEATURE_MAPPER as any)[CS571FeaturedBakedGoodRoute.getDayName()]);
        })
    }

    public getRouteName(): string {
        return CS571FeaturedBakedGoodRoute.ROUTE_NAME;
    }

    // https://stackoverflow.com/questions/57187691/javascript-how-to-verify-day-by-getday-when-using-timezone
    private static getDayName(): string {
        return new Date().toLocaleString("en-US", {
            timeZone: "America/Chicago",
            weekday: 'long'
        })
    }
}