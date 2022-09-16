for (let i = 10; i <= 25; i = i + 0.5) {
  console.log(i);
}


const number = +prompt("Уведіть ваше число?");
let remainder = 0;

for (let i = 1; i <= 100; i++) {
  if (number % i === 0) {
    ++remainder;
  }
  if (i === 100) {
    console.log(`Число ${number} ${remainder > 2 ? "не" : "є"} просте`);
    console.log(remainder);
  }
}

const discount = +prompt(`Ваша сума покупки ?`);

if (discount < 100) {
  console.log(`Ваша знижка 3%`);
} else if (discount > 100 && discount < 200) {
  console.log(`Ваша знижка 5%`);
} else if (discount >= 200) {
  console.log(`Ваша знижка 7%`);
}

for (let i = 2; i <= 9; i++) {
  console.log("Таблиця множення на :", i);
  for (let k = 1; k <= 10; k++) {
    console.log(`${i}* ${k} = ${i * k}`);
}
}

const oneDollar = 36.76;

for (let i = 10; i <= 100; i += 10) {
  console.log(`По курсу НБУ ${i} $ дорівнює ${(oneDollar * i).toFixed(2)} ₴ `);
}

let numPositive = 0;
let numNegative = 0;
let numOdd = 0;
let numEven = 0;
let numZero = 0;

for (let i = 1; i < 15; i++) {
  const num = +prompt(`Введіть будь-яке число 15 раз`);
  if (num > 0) {
    ++numPositive;
  } else if (num < 0) {
    ++numNegative;
  } else {
    ++numZero;
  }
  if (num % 2) {
    ++numEven;
  } else {
    ++numOdd;
  }
}

console.log(
  `Додатніх чисел ${numPositive}, Від’ємних ${numNegative}, Нулів ${numZero}, а також парних ${numEven} і не парних ${numOdd}`
);
