
let result = document.querySelector("#result");

function calculate() {
  const bill = Number(document.querySelector("#bill").value);
  const tippercent = Number(document.querySelector("#tip").value);
  
  let tipAmount = (bill * tippercent) / 100;
  let total = bill + tipAmount;
  result.innerText = `Tip:₹${tipAmount} | total: ₹${total}`;
}

