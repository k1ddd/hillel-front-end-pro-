const empty = "empty__field";
const arr = [];
function addNumbers() {
  for (let i = 0; i < 5; i++) {
    arr[i] = +prompt("Enter numbers", +i);
    if (arr[i] === null) return;
  }
}
addNumbers();
console.log(arr);

// Відсортувати масив за зростанням. //

arr.sort(function (a, b) {
  return a - b;
});
console.log(arr + " ");

// // Масив покупок //

const shoppingList = [
  { productName: "bread", productPrice: 14.5, productQuantity: 2 },
  { productName: "milk", productPrice: 32, productQuantity: 10 },
  { productName: "water", productPrice: 11, productQuantity: 5 },
  { productName: "orange", productPrice: 35, productQuantity: 4 },
  { productName: "pasta", productPrice: 28, productQuantity: 1 },
  { productName: "apple", productPrice: 17, productQuantity: 3 },
];

// Порахувати загальну вартість корзини та вивести суму у зрозумілому форматі //

const totalAmoutn = shoppingList.reduce(
  (sumProduct, currentValue) =>
    sumProduct + currentValue.productPrice * currentValue.productQuantity,
  0
);
console.log(`The total amount of your cart is ${totalAmoutn}`);

// Порахувати найменшу кількість продукту, який потрібно купити //

const minAmountProduct = shoppingList.sort(
  (sumProduct, currentValue) =>
    sumProduct.productQuantity - currentValue.productQuantity
)[0];

console.log(
  `Required amount of ${minAmountProduct.productName} to purchase ${minAmountProduct.productQuantity}`
);

// Порахувати загальну кількість продуктів //

const totalProducts = shoppingList.reduce(
  (sumProduct, currentValue) => sumProduct + currentValue.productQuantity,
  0
);

console.log(`The total amount of your cart is ${totalProducts}`);

// Знайти найдорожчий продукт //

const mostExpensive = shoppingList.sort(
  (sumProduct, currentValue) =>
    currentValue.productPrice - sumProduct.productPrice
)[0];

console.log(
  `The most expensive product on this list is ${mostExpensive.productName} its price ${mostExpensive.productPrice}`
);

// Створити функцію, яка повинна додавати новий продукт в існуючий масив , та Дані про новий продукт - користувач вводить із prompt //

const addNewProduct = () => {
  const new__Product = {
    productName: "",
    productPrice: 0,
    productQuantity: 0,
  };

  for (const [key] of Object.entries(new__Product)) {
    const answer = prompt([key]);
    if (answer === null || answer === ``) {
      new__Product[key] = empty;
    } else if (key === "productPrice" || key === "productQuantity") {
      new__Product[key] = Number(answer) ? Number(answer) : empty;
    } else {
      new__Product[key] = answer;
    }
  }

  shoppingList.push(new__Product);
  return shoppingList;
};
addNewProduct();
console.log(shoppingList);

// Створити функцію, яка повинна видаляти конкретний продукт із існуючого масиву продуктів //

const deleteProduct = () => {
  const myIndex = prompt("Which product to delete");
  if (myIndex === null || myIndex === ``) return "Enter product";
  {
    const elementsOfList = shoppingList.findIndex(
      (elementWithList) => elementWithList.productName === myIndex
    );

    if (elementsOfList === -1) return "No such product, please try again";
    shoppingList.splice(elementsOfList, 1);
    return shoppingList;
  }
};

deleteProduct();

const newArray = [
  16, -3, 54, -4, 72, -56, 47, -12, 4, -16, 25, -37, 46, 4, -51, 27, -8, 4, -54,
  76, -4, 12, 6, -35,
];

// Знайти суму та кількість позитивних елементів. //

const positivNum = newArray.filter((num) => num >= 0);
const totalPositiveNum = positivNum.reduce((sum, num) => sum + num);
console.log(
  `Sum positive elements is ${positivNum.length} and amount of ${totalPositiveNum}`
);

// Знайти мінімальний елемент масиву та його порядковий номер. //

const minNumber = Math.min(...newArray);
const serialNumber = newArray.indexOf(minNumber);
console.log(
  `Minimal element ${minNumber} his serial number is ${serialNumber}`
);

// Знайти максимальний елемент масиву та його порядковий номер. //

const MaxNumber = Math.max(...newArray);
const serialMaxNumber = newArray.indexOf(MaxNumber);
console.log(
  `Maximal element ${MaxNumber} his serial number is ${serialMaxNumber}`
);

// Визначити кількість негативних елементів. //

const negativeNum = newArray.filter((num) => num < 0);
console.log(`Amount of negative elements is equal to ${negativeNum.length}`);

// Знайти кількість непарних позитивних елементів. //

const oddNumber = newArray.filter((num) => num % 2 !== 0);
console.log(`Positive odd elements is equal to ${oddNumber.length}`);

// Знайти суму парних позитивних елементів. //

const evenNumber = newArray.filter((num) => num % 2 === 0);
const sumEvenNumber = evenNumber.reduce((sum, num) => sum + num);

console.log(`The sum of even elements is equal to ${sumEvenNumber}`);

// Знайти добуток позитивних елементів. //

const productPositiveNum = positivNum.reduce(
  (num__1, num__2) => num__1 * num__2,
  1
);

console.log(`Product positive elements is equal to ${productPositiveNum}`);
