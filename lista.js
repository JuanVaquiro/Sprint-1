const productList = [
  {
    "name": "Samsung Galaxy S20",
    "description": "The Samsung Galaxy S20 is a high-end Android smartphone developed by Samsung.",
    "price": 999.99,
    "img": "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-fe-5g-1.jpg"
  },
  {
    "name": "iPhone 12",
    "description": "The iPhone 12 is a line of smartphones designed, developed.",
    "price": 1099.99,
    "img": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg"
  },
  {
    "name": "Google Pixel 5",
    "description": "The Google Pixel 5 is a flagship Android smartphone made by Google.",
    "price": 799.99,
    "img": "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-5-5g-1.jpg"
  },
  {
    "name": "OnePlus 8 Pro",
    "description": "The OnePlus 8 Pro is a high-end Android smartphone manufactured by OnePlus.",
    "price": 899.99,
    "img": "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-8-pro-1.jpg"
  },
  {
    "name": "Xiaomi Mi 10",
    "description": "The Xiaomi Mi 10 is a 5G smartphone developed by Xiaomi Inc.",
    "price": 799.99,
    "img": "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-mi-10-5g-1.jpg"
  },
  {
    "name": "Huawei P40 Pro",
    "description": "The Huawei P40 Pro is a high-end Android smartphone manufactured by Huawei.",
    "price": 999.99,
    "img": "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p40-pro-01.jpg"
  },
  {
    "name": "Motorola Edge Plus",
    "description": "The Motorola Edge Plus is a high-end Android smartphone developed.",
    "price": 999.99,
    "img": "https://fdn2.gsmarena.com/vv/pics/motorola/motorola-edge-plus-2023-1.jpg"
  },
  {
    "name": "LG V60 ThinQ",
    "description": "The LG V60 ThinQ is a dual-screen Android smartphone manufactured by LG Electronics.",
    "price": 899.99,
    "img": "https://fdn2.gsmarena.com/vv/pics/lg/lg-v60-thinq-5g-000.jpg"
  },

]

function toItemClick(id) {
  EcommerceShop.addItemCart(id)
}

function toRemoveItemClick(id) {
  console.log('clik')
  EcommerceShop.removeItemCart(id)
}


function showProduct() {
  let newProductHTML = ''
  for (let i = 0; i < productList.length; i++) {
    let product = `
    <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div class="card">
          <img src="${productList[i].img}" class="card-img-top product-img alt="${productList[i].name}">
          <div class="card-body">
            <h5 class="card-title">${productList[i].name}</h5>
            <p class="card-text">${productList[i].description}</p>
            <p class="card-text">${productList[i].price}</p>
            <a href="#" class="btn btn-primary" 
              onclick="toItemClick(${i})">
              Comprar
            </a>
          </div>
        </div>
      </div>
    `
    newProductHTML += product
  }
  document.getElementById("catalogo-producto").innerHTML = newProductHTML
}

showProduct()

let EcommerceShop = new ShoppingCart(productList)