import { rest } from "msw";
import * as data from "../sundae-options.json";

export const handlers = [
  rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data.iceCreamFlavors));
  }),
];
