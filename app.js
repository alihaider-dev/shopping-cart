function updateNumber(product, price, isIncreasing) {
  const productInput = document.getElementById(`${product}-number`);
  let productNumber = productInput.value;
  if (isIncreasing == true) {
    productNumber = parseInt(productNumber) + 1;
  }
  else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber

  // Update Produc Total price
  const productTotal = document.getElementById(`${product}-total`);
  productTotal.innerText = productNumber * price;

  //Calculate Total
  calculateTotal();
}

function getInputValue(product) {
  const productInput = document.getElementById(`${product}-number`);
  const productNumber = parseInt(productInput.value);
  return productNumber;
}
function calculateTotal() {
  const phoneTotal = getInputValue('phone') * 1219;
  const caseTotal = getInputValue('case') * 59;
  const subTotal = phoneTotal + caseTotal;
  const taxTotal = subTotal / 10;
  const grandTotal = subTotal + taxTotal;
  // Update on the HTML
  document.getElementById('sub-total').innerText = subTotal;
  document.getElementById('tax-total').innerText = taxTotal;
  document.getElementById('grand-total').innerText = grandTotal;
}

// Phone  plus and minus event handler 
document.getElementById('phone-plus').addEventListener('click', function () {
  updateNumber('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function () {
  updateNumber('phone', 1219, false)
})

// Case  plus and minus event handler 
document.getElementById('case-plus').addEventListener('click', function () {
  updateNumber('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', function () {
  updateNumber('case', 59, false);
})

