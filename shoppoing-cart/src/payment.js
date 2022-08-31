// --------------------Payment page--------------------

// Gets total cart price
window.onload = function () {
  getTotalCartPrice();
};

const selectedMoney = document.getElementsByClassName("money");
const totalOutput = document.getElementsByClassName("total-output")[0];
const paidOutput = document.getElementsByClassName("paid-output")[0];
const restOutput = document.getElementsByClassName("rest-output")[0];
const receiveOutput = document.getElementsByClassName("receive-output")[0];

// Back button function
function backButton() {
  window.location.replace(
    window.location.href.replace("/src/payment.html", "")
  );
}

// Loops through the selected money value
for (let i = 0; i < selectedMoney.length; i++) {
  let money = selectedMoney[i];
  money.addEventListener("click", function () {
    moneyValue = parseFloat(money.getElementsByClassName("value")[0].innerText);
    moneyPaid(moneyValue);

    restToBePaid();
    restToReceive();
  });
}

// Calculates the total money paid until now and verifies if the paid value is bigger than the total value
function moneyPaid(moneyValue) {
  let paid = parseFloat(paidOutput.innerText);

  if (paid > parseFloat(totalOutput.innerText)) {
    alert("Valoarea platita depaseste totalul de plata");
  } else {
    paid += moneyValue;
  }

  paidOutput.innerText = paid.toFixed(2);
}

// Calculates the rest to be paid by the client
function restToBePaid() {
  rest = parseFloat(totalOutput.innerText) - paidOutput.innerText;

  if (rest < 0) {
    restOutput.innerText = (0.0).toFixed(2);
  } else {
    restOutput.innerText = rest.toFixed(2);
  }
}

// Calculates the rest to be received by the client
function restToReceive() {
  receive = paidOutput.innerText - parseFloat(totalOutput.innerText);

  if (receive < 0) {
    receiveOutput.innerText = (0.0).toFixed(2);
  } else {
    receiveOutput.innerText = receive.toFixed(2);
  }
}

// Gets the total cart price from the local storage
function getTotalCartPrice() {
  totalOutput.innerText = parseFloat(localStorage.getItem("cartPrice")).toFixed(
    2
  );
}
