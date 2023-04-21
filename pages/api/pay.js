import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export default async function handler(req, res) {
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [
      {
        price: process.env.STRIPE_PRODUCT_PRICE_ID,
        quantity: 1,
      },
    ],
    // ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
    success_url: `http://${req.headers.host}/pay/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `http://${req.headers.host}/pay/canceled`,
  });
  return res.redirect(303, session.url);
}
