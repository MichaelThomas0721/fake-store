import type { IncomingMessage, ServerResponse } from "http";

import DataFetcher from "./../../data/dataFetcher";
import Stripe from "stripe";

const pk = import.meta.env.VITE_STRIPE_SK as string;
const stripe = new Stripe(pk, {} as any);

export default async (req: IncomingMessage, res: ServerResponse) => {
  let returnData = "" as any;
  const body = await readBody(req as any);
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: body.items.map((item) => {
        let storeItem = DataFetcher({
          type: "shoes",
          value: { type: "id", value: item.id, final: true },
        });
        if (storeItem) storeItem = storeItem[0];
        storeItem.quantity = item.quantity;
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.price * 100,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `http://localhost:3000/checkedout?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:3000/cart`,
    });
    returnData = { url: session.url };
  } catch (e) {
    console.log(e);
    // res.status(500).json({ error: e.message });
  }
  return returnData;
};
