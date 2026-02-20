const toggleBtn = document.getElementById("themeToggle");
const html = document.documentElement;
const body=document.documentElement

const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const quantityDisplay = document.getElementById("quantity");


const addToCartBtn = document.getElementById("addToCartBtn");
const cartIcon = document.getElementById("cart-icon");
const cartBox = document.getElementById("cart-box");
const cartContent = document.getElementById("cart-content");
const cartCount = document.getElementById("cart-count");
const closeBox = document.getElementById("close-box");


const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");
const discount=document.querySelector("discount")

const product = {
  name: "Fall Limited Edition Sneakers",
  price: 125,
  image: "/Product_Page/images/image-product-1-thumbnail.jpg",
};





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
    logo.classList.toggle("logo")
    discount.classList.toggle("discount")
  toggleBtn.textContent = html.classList.contains("dark")
    ? "Light Mode"
    : "Dark Mode";
  
});


let quantity = 1;
let cartQty = 0;


plusBtn.addEventListener("click", () => {
  quantity++;
  quantityDisplay.textContent = quantity;
});


minusBtn.addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    quantityDisplay.textContent = quantity;
  }
});





addToCartBtn.addEventListener("click", () => {

  if (quantity === 0) return;

  cartQty += quantity;

  updateCartUI();

  quantity = quantity;
  quantityDisplay.textContent = quantity;
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
        src="/Product_Page/images/icon-delete.svg"
        class="w-4 cursor-pointer"
      />

    </div>


    <button
      class="mt-4 w-full bg-orange-500 text-white py-2 rounded cursor-pointer"
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





const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumb");


thumbnails.forEach((thumb) => {

  thumb.addEventListener("click", () => {

    mainImage.src = thumb.src;

  });

});

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");


mainImage.addEventListener("click", () => {
  lightbox.classList.remove("hidden");
  lightboxImage.src = mainImage.src;
  
});


closeLightbox.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});


document.querySelectorAll("#lightbox .thumb").forEach((thumb) => {

  thumb.addEventListener("click", () => {

    lightboxImage.src = thumb.src;

  });
  lightbox.addEventListener("click", (e) => {
  // If user clicks on the background (not the image)
  if (e.target === lightbox) {
    lightbox.classList.add("hidden");
  }
});

}); 