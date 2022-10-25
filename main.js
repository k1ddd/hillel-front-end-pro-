const UA = `./UA.png`;
const USA = `./USA.png`;
const CHZ = `./CHZ.png`;

const productLists = [
  {
    productName: "Bread",
    productData: {
      weight: 200,
      certificate: true,
      dateOfExpiry: "27/10/22",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: UA,
    productPrice: 11.75,
  },
  {
    productName: "Water",
    productData: {
      weight: 1500,
      certificate: true,
      dateOfExpiry: "21/12/23",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: UA,
    productPrice: 17,
  },
  {
    productName: "Wine",
    productData: {
      weight: 750,
      certificate: true,
      dateOfExpiry: "21/12/22",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: USA,
    productPrice: 150,
  },
  {
    productName: "Apple",
    productData: {
      weight: 2000,
      certificate: true,
      dateOfExpiry: "11/01/23",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: UA,
    productPrice: 18,
  },
  {
    productName: "Flour",
    productData: {
      weight: 1000,
      certificate: false,
      dateOfExpiry: "10/10/23",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: UA,
    productPrice: 80,
  },
  {
    productName: "Egg",
    productData: {
      weight: 300,
      certificate: true,
      dateOfExpiry: "21/11/22",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: UA,
    productPrice: 60,
  },
  {
    productName: "Milk",
    productData: {
      weight: 1000,
      certificate: true,
      dateOfExpiry: "22/12/22",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: CHZ,
    productPrice: 11.75,
  },
  {
    productName: "Rice",
    productData: {
      weight: 1000,
      certificate: true,
      dateOfExpiry: "23/12/23",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: UA,
    productPrice: 59,
  },
  {
    productName: "Buckwheat",
    productData: {
      weight: 1000,
      certificate: true,
      dateOfExpiry: "15/12/23",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: UA,
    productPrice: 70,
  },
  {
    productName: "Bun",
    productData: {
      weight: 150,
      certificate: true,
      dateOfExpiry: "29/10/22",
      sugarFree: false,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: UA,
    productPrice: 25,
  },
  {
    productName: "Tea",
    productData: {
      weight: 200,
      certificate: false,
      dateOfExpiry: "21/11/22",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: CHZ,
    productPrice: 45.5,
  },
  {
    productName: "Coffee",
    productData: {
      weight: 250,
      certificate: false,
      dateOfExpiry: "21/01/23",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: UA,
    productPrice: 140,
  },
  {
    productName: "Beer",
    productData: {
      weight: 550,
      certificate: true,
      dateOfExpiry: "11/02/23",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: UA,
    productPrice: 51,
  },
  {
    productName: "Seasoning",
    productData: {
      weight: 400,
      certificate: true,
      dateOfExpiry: "29/10/23",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: CHZ,
    productPrice: 78.5,
  },
  {
    productName: "Vegetables",
    productData: {
      weight: 3000,
      certificate: true,
      dateOfExpiry: "10/11/22",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: USA,
    productPrice: 275,
  },
];

const div = document.createElement("div");

const ul = document.createElement("ul");
document.body.append(div);
div.append(ul);

function groceryBasket(
  productName,
  productPrice,
  certificate,
  productCountry,
  weight,
  dateOfExpiry,
  sugarFree,
  productProvider
) {
  return `<div class ="product__item">
   <span class = "name__product">${productName}</span>
    <span> Price : ${productPrice} </span>
    <span> Country <img src = "${productCountry}" alt = "IMG"> </span> 
  </div>
  <div>
    Date of expiry: ${dateOfExpiry},  Sugar Free: ${sugarFree}, Product provider: ${productProvider}, Weight: ${weight}, 
    Sertificate: ${certificate} <span class= "warning">${
    certificate ? "" : "!"
  }</span>
  </div>`;
}

productLists.forEach((product) => {
  const {
    productName,
    productPrice,
    productData,
    productCountry,
    productProvider,
  } = product;

  const li = document.createElement("li");
  li.className = "product";
  li.innerHTML = `${groceryBasket(
    productName,
    productPrice,
    productData.certificate,
    productCountry,
    productData.weight,
    productData.dateOfExpiry,
    productData.sugarFree,
    productProvider
  )}`;
  ul.append(li);
});

const totalAmoutn = productLists.reduce(
  (sumProduct, currentValue) => sumProduct + currentValue.productPrice,
  0
);

const mostExpensive = productLists.sort(
  (sumProduct, currentValue) =>
    currentValue.productPrice - sumProduct.productPrice
)[0];

const averagePriceOfAllProducts = +(totalAmoutn / productLists.length).toFixed(
  1
);

const textData = [
  `<span class="sum"> The total amount of your cart is : ${totalAmoutn}.</span>`,
  `<span class="sum">The most expensive product on this list is: ${mostExpensive.productName} its price : ${mostExpensive.productPrice}.</span>`,
  `<span class="sum"> Arage price of a grocery basket : ${averagePriceOfAllProducts}.</span>`,
];

function createAndAddToInnerHTML() {
  textData.forEach((element) => {
    const h4 = document.createElement("h4");
    h4.innerHTML = element;
    div.append(h4);
  });
}

createAndAddToInnerHTML();
