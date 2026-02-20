const toggleBtn = document.getElementById("themeToggle");
const html = document.documentElement;


// QUANTITY
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const quantityDisplay = document.getElementById("quantity");


// CART
const addToCartBtn = document.getElementById("addToCartBtn");
const cartIcon = document.getElementById("cart-icon");
const cartBox = document.getElementById("cart-box");
const cartContent = document.getElementById("cart-content");
const cartCount = document.getElementById("cart-count");
const closeBox = document.getElementById("close-box");


// MOBILE MENU
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");


// PRODUCT
const product = {
  name: "Fall Limited Edition Sneakers",
  price: 125,
  image: "/images/image-product-1-thumbnail.jpg",
};




// ---------------- MOBILE MENU ----------------

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});

mobileMenu.addEventListener("click", (e) => {
  if (e.target === mobileMenu) {
    mobileMenu.classList.add("hidden");
  }
});




toggleBtn.addEventListener("click", () => {
  html.classList.toggle("dark");

  toggleBtn.textContent = html.classList.contains("dark")
    ? "Light Mode"
    : "Dark Mode";
    logo.style.fill="white"

});


let quantity = 0;
let cartQty = 0;


plusBtn.addEventListener("click", () => {
  quantity++;
  quantityDisplay.textContent = quantity;
});


minusBtn.addEventListener("click", () => {
  if (quantity > 0) {
    quantity--;
    quantityDisplay.textContent = quantity;
  }
});




// ---------------- CART ----------------

addToCartBtn.addEventListener("click", () => {

  if (quantity === 0) return;

  cartQty += quantity;

  updateCartUI();

  quantity = 0;
  quantityDisplay.textContent = 0;
});


cartIcon.addEventListener("click", () => {
  cartBox.classList.toggle("hidden");
});


closeBox.addEventListener("click", () => {
  cartBox.classList.add("hidden");
});




function updateCartUI() {

  cartCount.classList.remove("hidden");
  cartCount.textContent = cartQty;


  cartContent.innerHTML = `

    <div class="flex items-center gap-3">

      <img src="${product.image}" class="w-12 rounded" />

      <div class="flex-1">

        <p>${product.name}</p>

        <p>
          $${product.price} x ${cartQty}
          <span class="font-bold">
            $${product.price * cartQty}
          </span>
        </p>

      </div>

      <img
        id="delete-btn"
        src="/images/icon-delete.svg"
        class="w-4 cursor-pointer"
      />

    </div>


    <button
      class="mt-4 w-full bg-orange-500 text-white py-2 rounded"
    >
      Checkout
    </button>

  `;


  document
    .getElementById("delete-btn")
    .addEventListener("click", clearCart);
}




function clearCart() {

  cartQty = 0;

  cartCount.classList.add("hidden");

  cartContent.textContent = "Your cart is empty.";

}




// ---------------- GALLERY ----------------

const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumb");


thumbnails.forEach((thumb) => {

  thumb.addEventListener("click", () => {

    mainImage.src = thumb.src;

  });

});
// ---------------- LIGHTBOX ----------------

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");


// Open Lightbox
mainImage.addEventListener("click", () => {
  lightbox.classList.remove("hidden");
  lightboxImage.src = mainImage.src;
});


// Close Lightbox
closeLightbox.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});


// Change image inside lightbox
document.querySelectorAll("#lightbox .thumb").forEach((thumb) => {

  thumb.addEventListener("click", () => {

    lightboxImage.src = thumb.src;

  });

});