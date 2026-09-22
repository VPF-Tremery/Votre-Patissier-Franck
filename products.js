// ===============================
// V.P.F. — PRODUITS À MODIFIER
// ===============================
// Pour ajouter/modifier un gâteau, change simplement les informations
// entre guillemets. Tu peux aussi copier une ligne complète.
// "image" doit correspondre à un fichier placé dans le dossier assets.
//
// Exemple :
// {
//   name: "Nouveau gâteau",
//   description: "Une petite description",
//   price: "25 €",
//   image: "assets/mon-gateau.jpg"
// }

const products = [
  {
    name: "Fraisier",
    description: "Un gâteau frais et généreux aux fraises.",
    price: "25 €",
    image: "assets/fraisier.jpg"
  },
  {
    name: "Tout chocolat",
    description: "Une création gourmande pour les amateurs de chocolat.",
    price: "22 €",
    image: "assets/chocolat.jpg"
  },
  {
    name: "Tarte aux fruits",
    description: "Une tarte fruitée et élégante.",
    price: "20 €",
    image: "assets/fruits.jpg"
  }
];

const container = document.getElementById("products");

container.innerHTML = products.map(product => `
  <article class="card">
    <img src="${product.image}" alt="${product.name}">
    <div class="card-body">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="card-price">${product.price}</div>
    </div>
  </article>
`).join("");
