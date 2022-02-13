function updateNumber(product, isIncreasing) {
  const caseInput = document.getElementById(`${product}-number`);
  let caseNumber = caseInput.value;
  if (isIncreasing == true) {
    caseNumber = parseInt(caseNumber) + 1;
  }
  else if (caseNumber > 0) {
    caseNumber = parseInt(caseNumber) - 1;
  }
  caseInput.value = caseNumber
  // Update Case Total
  const caseTotal = document.getElementById(`${product}-total`);
  caseTotal.innerText = caseNumber * 59;
}

// Phone  plus and minus event handler 
document.getElementById('phone-plus').addEventListener('click', function () {
  updateNumber('phone', true)
})
document.getElementById('phone-minus').addEventListener('click', function () {
  updateNumber('phone', false)
})

// Case  plus and minus event handler 
document.getElementById('case-plus').addEventListener('click', function () {
  updateNumber('case', true);
})

document.getElementById('case-minus').addEventListener('click', function () {
  updateNumber('case', false);
})

