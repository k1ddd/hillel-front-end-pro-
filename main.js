console.log(`Sum = `, +(0.1 + 0.2).toFixed(2));

const yourLogin = prompt(`Ведіть Ваш логін`);
const yourPassword = prompt(`Ведіть Ваш пароль`);

const login = "admin";
const password = "12pass33210";

if (yourLogin !== login && yourPassword !== password) {
  console.log(`Нажаль, ви не маєте доступу до адмін-панелі.`);
} else {
  yourLogin === login && yourPassword === password
    ? console.log(`Ви успішно увійшли`)
    : console.log(`Проблема з логіном або паролем`);
}

const money = +prompt(`Скільки в тебе грошей ?`);
const watermelonPrice = 21;
const carrotPrice = 8;
const potatoesPrice = 12;

const watermelon = "кавун";
const carrot = "морква";
const patatoes = "картопля";

console.log(
  `Кавун = ${watermelonPrice} грн`,
  `Морква = ${carrotPrice} грн`,
  `Картопля = ${potatoesPrice} грн`
);

if (money < watermelonPrice && money < carrotPrice && money < potatoesPrice) {
  console.log(
    `На жаль, у Вас недостатньо коштів для купівлі хоча б 1 шт. будь-якого продукту`
  );
} else {
  const product = prompt(`Щоб ви хотіли купити (кавун, морква, картопля)?`);
  const noMoneyToBuy = `У вас недостатньо коштів, для купівлі хоча б 1 шт. ${product}`;

  if (product === watermelon) {
    if (money >= watermelonPrice) {
      console.log(
        `За ${money} грн. Ви можете придбати ${Math.floor(
          money / watermelonPrice
        )} кг даного продукту. У Вас залишиться ${money % watermelonPrice} грн`
      );
    } else {
      console.log(noMoneyToBuy);
    }
  }
  else if (product === carrot) {
    if (money >= carrotPrice)
      console.log(
        `За ${money} грн. Ви можете придбати ${Math.floor(
          money / carrotPrice
        )} кг даного продукту. У Вас залишиться ${money % carrotPrice} грн`
      );
    else {
      console.log(noMoneyToBuy);
    }
  }
  else if (product === patatoes) {
    if (money >= potatoesPrice)
      console.log(
        `За ${money} грн. Ви можете придбати ${Math.floor(
          money / potatoesPrice
        )} кг даного продукту. У Вас залишиться ${money % potatoesPrice} грн`
      );
    else {
      console.log(noMoneyToBuy);
    }
  }
}
const A = +prompt(`Введіть першу сторону трикутника`);
const B = +prompt(`Введіть другу сторону трикутника`);
const C = +prompt(`Введіть третю сторону трикутника`);

A + B > C && A + C > B && B + C > A
  ? console.log("Такий трикутник існує")
  : console.log("Такий трикутник не існує");

2 && 0 && 3 || true && false // false

 false || " " || 3 && true // " "

1 && 1000 && '0' || 0 && 'Bob' // "0"

-1 || 0 || 0 && "" || 1010 // -1
