window.onload = function () {
  const productos = [
    { titulo: "Camiseta dama", precio: 26000, imagen: "assets/34.jpg" },
    { titulo: "Pantalon", precio: 50000, imagen: "assets/200.jpg" },
    { titulo: "Blusa de dama", precio: 46000, imagen: "assets/34.jpg" },
    { titulo: "Pantalon Jean", precio: 70000, imagen: "assets/122.jpg" },
  ];

  for (let i = 0; i < productos.length; i++) {
    const row = document.getElementById("row");
    let col = document.createElement("div");
    col.classList.add("col-md-4");
    row.appendChild(col);
    let card = document.createElement("div");
    card.classList.add("card");
    col.appendChild(card);

    let cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);
    cardHeader.innerHTML = `<h3> ${productos[i].titulo} </h3>`;

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);
    cardBody.innerHTML = `<img src="${productos[i].imagen}">`;
    let priceBox = document.createElement("h4");
    cardBody.appendChild(priceBox);
    priceBox.innerHTML = `Precio $ ${productos[i].precio}`;
    priceBox.classList.add("mt-2");

    let boton = document.createElement("button");
    boton.classList.add("btn", "btn-primary", "btn-block");
    cardBody.appendChild(boton);
    boton.innerText = "Comprar ahora";
  }
};
