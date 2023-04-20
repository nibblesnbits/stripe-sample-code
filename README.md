# E2E Testing in Cypress Bug Reproduction

See [this issue](https://github.com/stripe/stripe-node/issues/1767) for more details.

## To test the error demonstrated here

1. Build the application

```shell
$ npm install
```

2. Run the application

```shell
$ STRIPE_WEBHOOK_SECRET=$(stripe listen --print-secret) npm run dev
```

4. In a separate terminal, run `npm run cypress`

5. Select E2E Testing

6. Select a browser and click "Start E2E Testing in ..."

7. Select the `app.cy.js` test.
