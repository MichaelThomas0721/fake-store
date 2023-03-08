import type { IncomingMessage, ServerResponse } from "http";

import Stripe from "stripe";

const pk = import.meta.env.VITE_STRIPE_SK as string;
const stripe = new Stripe(pk, {} as any);

export default async (req: IncomingMessage, res: ServerResponse) => {
  const body = await readBody(req as any);
  const session = await stripe.checkout.sessions.retrieve(body.sessionId);
  // const customer = await stripe.customers.retrieve(session.customer as string);
  console.log("Returning data", session);
  return JSON.stringify({
    session,
  });
};
