import type { IncomingMessage, ServerResponse } from "http";

import DataFetcher from "./../../data/dataFetcher";
import Stripe from "stripe";

// let bodyParser = require('body-parser')



const pk = import.meta.env.VITE_STRIPE_SK as string;
const stripe = new Stripe(pk, {} as any);
const storeItems = new Map([
  [1, { priceInCents: 10000, name: "Learn React Today" }],
  [2, { priceInCents: 20000, name: "Learn CSS Today" }],
]);

export default async (req: IncomingMessage, res: ServerResponse) => {
  let returnData = "" as any;
  const body = await readBody(req as any);
  console.log("body", body);
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: body.items.map((item) => {
        let storeItem = DataFetcher({ type: "shoes", value: { type: "id", value: item.id, final: true } });
        if (storeItem) storeItem = storeItem[0];
        storeItem.quantity = item.quantity;
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.price,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `http://localhost:3000`,
      cancel_url: `http://localhost:3000`,
    });
    returnData = ({ url: session.url });
  } catch (e) {
    console.log(e);
    // res.status(500).json({ error: e.message });
  }
  return returnData;
};

// require("dotenv").config()

// const express = require("express")
// const app = express()
// const cors = require("cors")
// app.use(express.json())
// app.use(
//   cors({
//     origin: "http://localhost:5500",
//   })
// )

// const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

// const storeItems = new Map([
//   [1, { priceInCents: 10000, name: "Learn React Today" }],
//   [2, { priceInCents: 20000, name: "Learn CSS Today" }],
// ])

// app.post("/create-checkout-session", async (req, res) => {
//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",
//       line_items: req.body.items.map(item => {
//         const storeItem = storeItems.get(item.id)
//         return {
//           price_data: {
//             currency: "usd",
//             product_data: {
//               name: storeItem.name,
//             },
//             unit_amount: storeItem.priceInCents,
//           },
//           quantity: item.quantity,
//         }
//       }),
//       success_url: `${process.env.CLIENT_URL}/success.html`,
//       cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
//     })
//     res.json({ url: session.url })
//   } catch (e) {
//     res.status(500).json({ error: e.message })
//   }
// })

// app.listen(3000)
