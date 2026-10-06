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
    name: "Anniversaire",
    description: "Des gâteaux frais et généreux.",
    image: "assets/Anniversaire.png"
  },
  {
    name: "Baptème, Communion, Mariage",
    description: "Des créations gourmandes.",
    image: "assets/Mariage.png"
  },
  {
    name: "Toutes les Fêtes",
    description: "Des douceurs pour toutes les occasions.",
    image: "assets/FetesDesMeres.png"
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
