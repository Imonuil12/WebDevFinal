let shop = document.getElementById("shop");

/**
 * ! Basket to hold all the selected items
 * ? the getItem part is retrieving data from the local storage
 * ? if local storage is blank, basket becomes an empty array
 */

let basket = JSON.parse(localStorage.getItem("data")) || [];

/**
 * ! Generates the shop with product cards composed of
 * ! images, title, price, buttons, description
 */

 let generateShop = () => {
    return (shop.innerHTML = shopItemsData
      .map((x) => {
        let { id, name, desc, img, price } = x;
        let search = basket.find((y) => y.id === id) || [];
        return `
      <div id=product-id-${id} class="item">
        <img width="220" src=${img} alt="">
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
            <h2>$ ${price} </h2>
            <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">${
          search.item === undefined ? 0 : search.item
        }</div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
    </div>
      `;
      })
      .join(""));
  };
  
  generateShop();