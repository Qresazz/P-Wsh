<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>PİWish</title>
<style>
  /* Reset & base */
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #6a0dad, #f4d03f);
    color: #333;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  header {
    background-color: #4b0082; /* dark purple */
    color: #f4d03f; /* bright yellow */
    padding: 20px 30px;
    text-align: center;
    font-weight: 700;
    font-size: 2em;
    user-select: none;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  }
  main {
    flex-grow: 1;
    max-width: 1200px;
    margin: 30px auto;
    background: rgba(255 255 255 / 0.95);
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.25);
    padding: 30px;
  }
  /* Navigation buttons */
  nav {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 30px;
  }
  nav button {
    background-color: #4b0082;
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    color: #f4d03f;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.3s ease;
    user-select: none;
    margin-left: 15px;
  }
  nav button:hover {
    background-color: #350059;
  }
  /* Product Grid */
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
    gap: 25px;
  }
  .product-card {
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 6px 18px rgba(0,0,0,0.12);
    overflow: hidden;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 320px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 26px rgba(0,0,0,0.18);
  }
  .product-image {
    flex-shrink: 0;
    height: 180px;
    background-position: center;
    background-size: cover;
    border-bottom: 1px solid #eee;
  }
  .product-info {
    flex-grow: 1;
    padding: 15px 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .product-name {
    font-weight: 700;
    font-size: 1.2em;
    margin: 0 0 12px 0;
    color: #4b0082;
  }
  .product-price {
    font-weight: 700;
    color: #f4d03f;
    font-size: 1.3em;
  }
  /* Product Detail */
  .product-detail {
    background: white;
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.16);
    padding: 25px;
    max-width: 600px;
    margin: 0 auto;
  }
  .product-detail img {
    width: 100%;
    border-radius: 15px;
    height: 320px;
    object-fit: cover;
    box-shadow: 0 6px 15px rgba(0,0,0,0.15);
  }
  .product-detail h2 {
    margin: 18px 0 10px 0;
    color: #4b0082;
  }
  .product-detail p {
    margin: 12px 0 18px 0;
    line-height: 1.4em;
    color: #333;
  }
  .product-detail .price {
    font-weight: 700;
    font-size: 1.7em;
    color: #f4d03f;
    margin-bottom: 24px;
  }
  .product-detail button {
    width: 100%;
    background-color: #4b0082;
    color: #f4d03f;
    border: none;
    padding: 15px;
    font-weight: 700;
    border-radius: 12px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .product-detail button:hover {
    background-color: #350059;
  }
  /* Cart */
  .cart-item {
    background: white;
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.12);
    margin-bottom: 20px;
    padding: 15px 18px;
    display: flex;
    align-items: center;
  }
  .cart-item img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
    margin-right: 20px;
  }
  .cart-item-info {
    flex-grow: 1;
  }
  .cart-item-name {
    font-weight: 700;
    margin: 0 0 8px 0;
    color: #4b0082;
    font-size: 1.1em;
  }
  .cart-item-price {
    color: #f4d03f;
    font-weight: 700;
    font-size: 1.1em;
  }
  .cart-item-controls {
    text-align: right;
  }
  .cart-item-controls button {
    background-color: #e63946;
    border: none;
    color: white;
    padding: 8px 14px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 700;
    margin-left: 10px;
    transition: background-color 0.3s ease;
  }
  .cart-item-controls button:hover {
    background-color: #ab2834;
  }
  .cart-empty {
    font-weight: 700;
    text-align: center;
    margin-top: 80px;
    color: #444;
    font-size: 1.3em;
  }
  .cart-total {
    text-align: right;
    font-weight: 700;
    font-size: 1.4em;
    margin-top: 25px;
    color: #f4d03f;
  }
  .cart-checkout-btn {
    margin-top: 25px;
    width: 100%;
    background-color: #4b0082;
    color: #f4d03f;
    border: none;
    padding: 15px;
    font-weight: 700;
    border-radius: 15px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .cart-checkout-btn:hover {
    background-color: #350059;
  }
  /* Checkout */
  form {
    background: white;
    padding: 25px 30px;
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.16);
    max-width: 600px;
    margin: 0 auto;
  }
  form label {
    display: block;
    margin-bottom: 8px;
    font-weight: 700;
    color: #4b0082;
    font-size: 1.1em;
  }
  form input, form textarea {
    width: 100%;
    padding: 10px 14px;
    margin-bottom: 18px;
    border-radius: 10px;
    border: 1.8px solid #ccc;
    font-size: 1em;
    font-family: inherit;
    transition: border-color 0.2s ease;
  }
  form input:focus, form textarea:focus {
    border-color: #4b0082;
    outline: none;
  }
  form textarea {
    resize: vertical;
    min-height: 90px;
  }
  form button {
    background-color: #4b0082;
    color: #f4d03f;
    border: none;
    padding: 16px;
    border-radius: 15px;
    font-weight: 700;
    font-size: 1.15em;
    cursor: pointer;
    user-select: none;
    transition: background-color 0.3s ease;
    width: 100%;
  }
  form button:hover {
    background-color: #350059;
  }
  /* Confirmation */
  .thank-you {
    text-align: center;
    color: #4b0082;
    font-weight: 700;
    margin-top: 100px;
    font-size: 1.6em;
  }
  /* Responsive */
  @media (max-width: 768px) {
    main {
      margin: 20px 15px;
      padding: 20px;
      border-radius: 12px;
    }
    .product-grid {
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }
    .product-card {
      height: 280px;
    }
  }
  @media (max-width: 480px) {
    .product-grid {
      grid-template-columns: 1fr;
      gap: 15px;
    }
    nav {
      justify-content: center;
      gap: 15px;
    }
    nav button {
      margin-left: 0;
    }
  }
</style>
</head>
<body>
<header>PİWish</header>
<nav>
  <button id="btnHome" aria-label="Ana Sayfa">Ana Sayfa</button>
  <button id="btnCart" aria-label="Alışveriş Sepeti">Sepet (<span id="cart-count">0</span>)</button>
</nav>
<main id="mainContent" role="main" tabindex="0">

<!-- Content will be dynamically injected here -->

</main>

<script>
  // Product data
  const products = [
    {
      id: 1,
      name: "Pizone Dizüstü Bilgisayar",
      description: "Yüksek performanslı iş ve oyun dizüstü bilgisayarı.",
      price: 12000,
      imageUrl: "https://via.placeholder.com/320x220?text=Laptop"
    },
    {
      id: 2,
      name: "iPhone 16 Pro Max 256GB",
      description: "Son model, harika kameralı akıllı telefon.",
      price: 8000,
      imageUrl: "< img src=”("C:\Users\ramaz\OneDrive\Masaüstü\images.jpeg")”>"
    },
    {
      id: 3,
      name: "Pizone Kulaklık",
      description: "Kablosuz, gürültü engelleme özellikli kulaklık.",
      price: 1500,
      imageUrl: "https://via.placeholder.com/320x220?text=Headphones"
    },
    {
      id: 4,
      name: "Pizone Akıllı Saat",
      description: "Şık tasarım, fitness takip özellikli akıllı saat.",
      price: 2200,
      imageUrl: "https://via.placeholder.com/320x220?text=Smartwatch"
    }
  ];

  // Cart stored in localStorage key: pizone_cart, format: [{ productId, quantity }]
  function getCart() {
    const cart = localStorage.getItem('pizone_cart');
    return cart ? JSON.parse(cart) : [];
  }

  function saveCart(cart) {
    localStorage.setItem('pizone_cart', JSON.stringify(cart));
    updateCartCount();
  }

  function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
  }

  // Utility to find product by ID
  function findProduct(id) {
    return products.find(p => p.id === id);
  }

  // Render Home Page - Product List
  function renderHome() {
    const main = document.getElementById('mainContent');
    main.innerHTML = '';
    const grid = document.createElement('div');
    grid.className = 'product-grid';

    products.forEach(product => {
      const card = document.createElement('article');
      card.className = 'product-card';
      card.tabIndex = 0;
      card.setAttribute('aria-label', `${product.name}, Fiyat: ${product.price.toLocaleString('tr-TR')} TL`);
      card.onclick = () => renderProductDetail(product.id);
      card.onkeypress = (e) => { if(e.key === 'Enter') renderProductDetail(product.id); };

      const imgDiv = document.createElement('div');
      imgDiv.className = 'product-image';
      imgDiv.style.backgroundImage = `url('${product.imageUrl}')`;
      card.appendChild(imgDiv);

      const infoDiv = document.createElement('div');
      infoDiv.className = 'product-info';

      const nameEl = document.createElement('h2');
      nameEl.className = 'product-name';
      nameEl.textContent = product.name;

      const priceEl = document.createElement('div');
      priceEl.className = 'product-price';
      priceEl.textContent = product.price.toLocaleString('tr-TR', {style:'currency', currency:'TRY'});

      infoDiv.appendChild(nameEl);
      infoDiv.appendChild(document.createElement('p')).textContent = product.description;
      infoDiv.appendChild(priceEl);

      card.appendChild(infoDiv);
      grid.appendChild(card);
    });

    main.appendChild(grid);
    main.focus();
  }

  // Render Product Detail Page
  function renderProductDetail(productId) {
    const product = findProduct(productId);
    if (!product) return;

    const main = document.getElementById('mainContent');
    main.innerHTML = '';

    const detail = document.createElement('section');
    detail.className = 'product-detail';

    const img = document.createElement('img');
    img.src = product.imageUrl;
    img.alt = product.name;

    const nameEl = document.createElement('h2');
    nameEl.textContent = product.name;

    const desc = document.createElement('p');
    desc.textContent = product.description;

    const price = document.createElement('div');
    price.className = 'price';
    price.textContent = product.price.toLocaleString('tr-TR', {style:'currency', currency:'TRY'});

    const btnAdd = document.createElement('button');
    btnAdd.textContent = 'Sepete Ekle';
    btnAdd.onclick = () => {
      addToCart(productId);
      alert(`${product.name} sepete eklendi.`);
    };

    detail.appendChild(img);
    detail.appendChild(nameEl);
    detail.appendChild(desc);
    detail.appendChild(price);
    detail.appendChild(btnAdd);

    main.appendChild(detail);
    main.focus();
  }

  // Add product to cart with quantity = 1 if new, else increment
  function addToCart(productId) {
    const cart = getCart();
    const index = cart.findIndex(item => item.productId === productId);
    if (index >= 0) {
      cart[index].quantity++;
    } else {
      cart.push({productId, quantity:1});
    }
    saveCart(cart);
  }

  // Remove product from cart completely
  function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.productId !== productId);
    saveCart(cart);
    renderCart();
  }

  // Change quantity of a cart item
  function changeQuantity(productId, delta) {
    const cart = getCart();
    const index = cart.findIndex(item => item.productId === productId);
    if (index >= 0) {
      cart[index].quantity += delta;
      if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
      }
      saveCart(cart);
      renderCart();
    }
  }

  // Render Shopping Cart Page
  function renderCart() {
    const main = document.getElementById('mainContent');
    main.innerHTML = '';

    const cart = getCart();
    if (cart.length === 0) {
      const emptyMsg = document.createElement('div');
      emptyMsg.className = "cart-empty";
      emptyMsg.textContent = "Sepetiniz boş.";
      main.appendChild(emptyMsg);
      main.focus();
      return;
    }

    cart.forEach(item => {
      const product = findProduct(item.productId);
      if (!product) return;

      const itemDiv = document.createElement('article');
      itemDiv.className = 'cart-item';

      const img = document.createElement('img');
      img.src = product.imageUrl;
      img.alt = product.name;

      const info = document.createElement('div');
      info.className = 'cart-item-info';
      const name = document.createElement('h3');
      name.className = 'cart-item-name';
      name.textContent = product.name;
      const price = document.createElement('div');
      price.className = 'cart-item-price';
      const totalPrice = product.price * item.quantity;
      price.textContent = `${item.quantity} x ${product.price.toLocaleString('tr-TR', {style:'currency', currency:'TRY'})} = ${totalPrice.toLocaleString('tr-TR', {style:'currency', currency:'TRY'})}`;

      info.appendChild(name);
      info.appendChild(price);

      const controls = document.createElement('div');
      controls.className = 'cart-item-controls';
      const btnDec = document.createElement('button');
      btnDec.textContent = '-';
      btnDec.title = 'Azalt';
      btnDec.onclick = () => changeQuantity(product.id, -1);
      const btnInc = document.createElement('button');
      btnInc.textContent = '+';
      btnInc.title = 'Arttır';
      btnInc.onclick = () => changeQuantity(product.id, +1);
      const btnRemove = document.createElement('button');
      btnRemove.textContent = 'X';
      btnRemove.title = 'Kaldır';
      btnRemove.onclick = () => removeFromCart(product.id);

      controls.appendChild(btnDec);
      controls.appendChild(btnInc);
      controls.appendChild(btnRemove);

      itemDiv.appendChild(img);
      itemDiv.appendChild(info);
      itemDiv.appendChild(controls);

      main.appendChild(itemDiv);
    });

    // Total price
    const total = cart.reduce((sum, item) => {
      const pr = findProduct(item.productId);
      return pr ? sum + pr.price * item.quantity : sum;
    }, 0);

    const totalEl = document.createElement('div');
    totalEl.className = 'cart-total';
    totalEl.textContent = `Toplam: ${total.toLocaleString('tr-TR', {style:'currency', currency:'TRY'})}`;
    main.appendChild(totalEl);

    // Checkout button
    const checkoutBtn = document.createElement('button');
    checkoutBtn.className = 'cart-checkout-btn';
    checkoutBtn.textContent = 'Siparişi Tamamla';
    checkoutBtn.onclick = renderCheckout;

    main.appendChild(checkoutBtn);
    main.focus();
  }

  // Render Checkout Form Page
  function renderCheckout() {
    const main = document.getElementById('mainContent');
    main.innerHTML = '';

    const cart = getCart();
    if (cart.length === 0) {
      const emptyMsg = document.createElement('div');
      emptyMsg.className = "cart-empty";
      emptyMsg.textContent = "Sepetiniz boş. Sipariş veremezsiniz.";
      main.appendChild(emptyMsg);
      main.focus();
      return;
    }

    const form = document.createElement('form');
    form.setAttribute('aria-label', 'Sipariş Formu');

    // Name
    const labelName = document.createElement('label');
    labelName.textContent = 'Adınız Soyadınız:';
    labelName.setAttribute('for', 'nameInput');
    const inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.id = 'nameInput';
    inputName.required = true;

    // Phone
    const labelPhone = document.createElement('label');
    labelPhone.textContent = 'Telefon Numaranız:';
    labelPhone.setAttribute('for', 'phoneInput');
    const inputPhone = document.createElement('input');
    inputPhone.type = 'tel';
    inputPhone.id = 'phoneInput';
    inputPhone.required = true;
    inputPhone.pattern = "\\\\\\d{10,15}";

    // Address
    const labelAddress = document.createElement('label');
    labelAddress.textContent = 'Adresiniz:';
    labelAddress.setAttribute('for', 'addressInput');
    const textareaAddress = document.createElement('textarea');
    textareaAddress.id = 'addressInput';
    textareaAddress.required = true;
    textareaAddress.rows = 3;

    // Submit button
    const btnSubmit = document.createElement('button');
    btnSubmit.type = 'submit';
    btnSubmit.textContent = 'Siparişi Gönder';

    form.appendChild(labelName);
    form.appendChild(inputName);

    form.appendChild(labelPhone);
    form.appendChild(inputPhone);

    form.appendChild(labelAddress);
    form.appendChild(textareaAddress);

    form.appendChild(btnSubmit);

    form.onsubmit = function(event) {
      event.preventDefault();
      btnSubmit.disabled = true;
      btnSubmit.textContent = 'Gönderiliyor...';

      setTimeout(() => {
        localStorage.removeItem('pizone_cart');
        updateCartCount();
        renderThankYou(inputName.value);
      }, 1500);
    };

    main.appendChild(form);
    main.focus();
  }

  // Thank you page
  function renderThankYou(customerName) {
    const main = document.getElementById('mainContent');
    main.innerHTML = '';

    const thanksDiv = document.createElement('div');
    thanksDiv.className = 'thank-you';
    thanksDiv.setAttribute('tabindex', -1);
    thanksDiv.textContent = `${customerName}, siparişiniz için teşekkür ederiz! En kısa zamanda sizinle iletişime geçeceğiz.`;

    main.appendChild(thanksDiv);
    main.focus();
  }

  // Navigation buttons
  document.getElementById('btnHome').addEventListener('click', renderHome);
  document.getElementById('btnCart').addEventListener('click', renderCart);

  // Load cart count on start
  updateCartCount();

  // Default render home page
  renderHome();
</script>
</body>
</html>

