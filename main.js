const howSec = document.querySelector("#push");
const newNumber = document.querySelector("#new__task input");

howSec.addEventListener("click", function () {
  if (newNumber.value) {
    const newTask = document.createElement("span");
    newTask.classList.add("new__task__to__do");
    newTask.innerHTML = ` the end of Russia will come through ${newNumber.value} sec`;
    newNumber.value = "";
    tasks.prepend(newTask);
  }
});

const btnTime = document.querySelector("#btnTime");
const selectDate = document.querySelector("#startDate");
const countdown = document.querySelector("#countdown");

let calcDate = function () {
  setInterval(() => {
    let now = new Date().getTime();
    let countDownDate = new Date(selectDate.value).getTime();
    let distance = countDownDate - now;

    let years = Math.floor(distance / 31536000000);
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById(
      "countdown"
    ).innerHTML = `${years} Year(s) ${days} day(s) ${hours} hour(s) ${minutes} minute(s) ${seconds} second(s)`;
    if (distance < 0) {
      clearInterval();
      document.getElementById("countdown").innerHTML = "The countdown is over";
    }
  }, 1000);
};

btnTime.addEventListener("click", calcDate);

const phone = document.querySelector("#phone");
const ram = document.querySelector("#RAM");
const builtMemory = document.querySelector("#built__memory");
const calTotalPrice = document.querySelector("#calc__price");
const dataOutput = document.querySelector("#data__output");

function calculatePhoneCost() {
  let sum = 0;

  if (phone.value === "iPhone") {
    sum = 1000;
  } else if (phone.value === "Samsung") {
    sum = 500;
  } else if (phone.value === "Pixel") {
    sum = 250;
  } else if (phone.value === "OnePlus") {
    sum = 150;
  }
  if (ram.value === "2") {
    sum += 20;
  } else if (ram.value === "4") {
    sum += 40;
  } else if (ram.value === "6") {
    sum += 60;
  } else if (ram.value === "8") {
    sum += 80;
  }

  if (builtMemory.value === "64") {
    sum += 50;
  } else if (builtMemory.value === "128") {
    sum += 100;
  } else if (builtMemory.value === "256") {
    sum += 150;
  } else if (builtMemory.value === "512") {
    sum += 200;
  }
  const totalAmountPrice = document.createElement("p");
  totalAmountPrice.innerHTML = `<p>Your ${phone.value} costs : ${sum}$</p>`;
  data__output.append(totalAmountPrice);
}

calTotalPrice.addEventListener("click", calculatePhoneCost);
