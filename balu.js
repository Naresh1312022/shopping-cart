// Initialize the cart as an empty array
let cart = [];

// Product data
const products = [
  { id: 1, name: 'Fresh Apples', price: 2.99 },
  { id: 2, name: 'Whole Wheat Bread', price: 1.99 },
  { id: 3, name: 'Organic Milk', price: 3.49 }
];

// Select DOM elements
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const totalPrice = document.getElementById('totalPrice');
const viewCartBtn = document.getElementById('viewCartBtn');
const clearCartBtn = document.getElementById('clearCartBtn');
const closeCartBtn = document.getElementById('closeCartBtn');

// Function to update the cart count and total price
function updateCart() {
  cartCount.textContent = cart.length;
  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  totalPrice.textContent = total;
}

// Function to render cart items in the modal
function renderCart() {
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });
}

// Add product to cart
document.querySelectorAll('.add-to-cart-btn').forEach((button) => {
  button.addEventListener('click', (e) => {
    const productId = e.target.closest('.product-card').dataset.id;
    const product = products.find(p => p.id == productId);
    cart.push(product);
    updateCart();
  });
});

// View cart button click
viewCartBtn.addEventListener('click', () => {
  renderCart();
  cartModal.style.display = 'flex';
});

// Close cart modal
closeCartBtn.addEventListener('click', () => {
  cartModal.style.display = 'none';
});

// Clear cart button click
clearCartBtn.addEventListener('click', () => {
  cart = [];
  updateCart();
  renderCart();
});

// Close cart modal when clicking outside the modal content
window.addEventListener('click', (e) => {
  if (e.target === cartModal) {
    cartModal.style.display = 'none';
  }
});
