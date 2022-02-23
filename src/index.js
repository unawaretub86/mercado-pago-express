const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// SDK mercadopago
const mercadopago = require("mercadopago");

// middleware
app.use(bodyParser.urlencoded({ extended: false }));

// credentials
mercadopago.configure({
  access_token:
    "APP_USR-5019664569474928-022220-2aba4d61f8e644f329cbf79c49beedb4-1078868164",
});

// routes
app.post("/checkout", (req, res) => {
  // Crea un objeto de preferencia
  let preference = {
    items: [
      {
        title: "Mi producto",
        unit_price: 75000,
        quantity: 2,
      },
    ],
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      // Este valor reemplazará el string "<%= global.id %>" en tu HTML
      // global.id = response.body.id;
      res.redirect(response.body.init_point);
    })
    .catch(function (error) {
      console.log(error);
    });
});

// server
app.listen(3000, () => {
  console.log("Server on port 3000");
});
