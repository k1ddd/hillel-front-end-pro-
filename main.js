//1.
function minNumber(parametr_1, parametr_2, parametr_3, parametr_4) {
  const min = Math.min(parametr_1, parametr_2, parametr_3, parametr_4);
  if (!isNaN(min)) return min;
  else {
    console.log("извините не могу посчитать");
  }
}

const searchNumber = minNumber(-1, 3, 4, 10);

//2.

function NOD(num__a, num__b) {
  if (num__b === 0) {
    return num__a;
  }
  return NOD(num__b, num__a % num__b);
}

NOD(120, 50);

//3.

function idealNumber(number) {
  let temp = 0;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      temp += i;
    }
  }

  if (temp === number && temp !== 0) {
    return "It is a perfect number.";
  } else {
    return "It is not a perfect number.";
  }
}
idealNumber(45);

//4.

function amountBetweenNnumbers(sum__1, sum__2) {
  let sum = 0;
  for (let i = sum__1; i <= sum__2; i++) {
    sum += i;
  }
  return sum;
}

amountBetweenNnumbers(-10, 44);
amountBetweenNnumbers(15, 81);

//5.

function convertToFahrenheit(temperature) {
  const celsiusTemp = temperature;
  const celsToFahr = Math.floor(celsiusTemp * 9) / 5 + 32;
  return `${celsiusTemp} °C is ${celsToFahr} °F`;
}
convertToFahrenheit(10);
convertToFahrenheit(-15);

// 6.
const minNum = 0;
const maxNum = 40;
const randomNum = () => {
  return `Випадкове число  від 0 до 40  ${Math.floor(
    Math.random() * (maxNum - minNum + 1) + minNum
  )}`;
};
console.log(randomNum());
