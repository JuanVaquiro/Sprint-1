document.addEventListener("DOMContentLoaded", function () {
  const cartButton = document.getElementById("cart-button");
  const cartSidebar = document.getElementById("cart-sidebar");
  const closeCartButton = document.getElementById("close-cart-button");

  cartButton.addEventListener("click", function () {
    cartSidebar.classList.add("open");
  });

  closeCartButton.addEventListener("click", function () {
    cartSidebar.classList.remove("open");
  });
});


class ShoppingCart {
  constructor(products) {
    this.products = products
    this.selectItems = []
  }

  addItemCart(id) {
    this.selectItems.push(this.products[id])

    this.showItems()
  }

  removeItemCart(id) {
    this.selectItems.slice(id, 1)
    this.selectItems.splice(id, 1)

    this.showItems()
  }

  showItems() {
    let newProductHTML = ''
    let total = 0
    for (let i = 0; i < this.selectItems.length; i++) {
      let selectProduct = `
      <li class="list-group-item d-flex flex-row justify-content-evenly  align-items-center">
      <img 
        class="w-25 p-2"
        src="${this.selectItems[i].img}"
        alt="${this.selectItems[i].name}"
      />
      <p clas="fs-4">${this.selectItems[i].name}</p>
      <p class="fs-6"a>$${this.selectItems[i].price}</p>

      <button type="button" class="p-2 btn btn-danger"
        onclick="toRemoveItemClick(${i})">
      Eliminar
      </button>
      </li>
      `
      newProductHTML += selectProduct
      total += this.selectItems[i].price

    }
    document.getElementById("cart-items").innerHTML = newProductHTML

    document.getElementById("total-cart").textContent = `Total: $${total}`;

  }
}
