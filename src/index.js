const express = require("express");
const app = express();

// SDK mercadopago
const mercadopago = require("mercadopago");

// credentials
mercadopago.configure({
  access_token:
    "APP_USR-5019664569474928-022220-2aba4d61f8e644f329cbf79c49beedb4-1078868164",
});

// routes
app.get("/checkout", (req, res) => {
  res.send("<h1> Hi from checkout</h1>");
});
// Crea un objeto de preferencia
let preference = {
  items: [
    {
      title: "Mi producto",
      unit_price: 75000,
      quantity: 2,
    },
    {
      title: "Mi producto 1",
      unit_price: 28000,
      quantity: 1,
    },
  ],
};

mercadopago.preferences
  .create(preference)
  .then(function (response) {
    // Este valor reemplazará el string "<%= global.id %>" en tu HTML
    // global.id = response.body.id;
  })
  .catch(function (error) {
    console.log(error);
  });

// server
app.listen(3000, () => {
  console.log("Server on port 3000");
});
