function copyUPI(id) {
  const text = document.getElementById(id).textContent;
  navigator.clipboard.writeText(text);
  alert("✅ UPI copied: " + text);
}

window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const product = urlParams.get('product');
  if (product) {
    document.getElementById('productName').innerText = "Selected Loan: " + product;
  }
};
