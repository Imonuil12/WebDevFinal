let ShoppingCart = document.getElementById("shopping-cart");
let label = document.getElementById("label");

/**
 * ! Basket to hold all the selected items
 * ? the getItem part is retrieving data from the local storage
 * ? if local storage is blank, basket becomes an empty array
 */

 let basket = JSON.parse(localStorage.getItem("data")) || [];

 /**
 * ! To calculate total amount of selected Items
 */

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  };
  
  calculation();

  /**
 * ! Generates the Cart Page with product cards composed of
 * ! images, title, price, buttons, & Total price
 * ? When basket is blank -> show's Cart is Empty
 */

let generateCartItems = () => {
    if (basket.length !== 0) {
      return (ShoppingCart.innerHTML = basket
        .map((x) => {
          let { id, item } = x;
          let search = shopItemsData.find((x) => x.id === id) || [];
          let { img, price, name } = search;
          return `
        <div class="cart-item">
          <img width="100" src=${img} alt="" />
  
          <div class="details">
          
            <div class="title-price-x">
              <h4 class="title-price">
                <p>${name}</p>
                <p class="cart-item-price">$ ${price}</p>
              </h4>
              <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
            </div>
  
            <div class="cart-buttons">
              <div class="buttons">
                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                <div id=${id} class="quantity">${item}</div>
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
              </div>
            </div>
  
            <h3>$ ${item * price}</h3>
          
          </div>
        </div>
        `;
        })
        .join(""));
    } else {
      ShoppingCart.innerHTML = "";
      label.innerHTML = `
      <h2>Cart is Empty</h2>
      <a href="index.html">
        <button class="HomeBtn">Back to Home</button>
      </a>
      `;
    }
  };
  
  generateCartItems();