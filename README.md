# E2E Testing in Cypress Bug Reproduction

See [this issue](https://github.com/stripe/react-stripe-js/issues/396) for more details.

## To test the error demonstrated here

1. Build the application

```shell
$ npm install
```

2. Create a copy of the `.env.example` file, named `.env`, with valid keys and a valid product price ID

3. Run the application

```shell
$ npm run dev
```

4. In a separate terminal, run `npm run cypress`

5. Select E2E Testing

6. Select a browser and click "Start E2E Testing in ..."

7. Select the `pay.cy.js` test.

8. Observe that no elements can be selected by Cypress.
