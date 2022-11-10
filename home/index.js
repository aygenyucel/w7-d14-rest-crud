const newObject = {
  id: "5d318e1a8541744830bef139",
  name: "app test 1",
  description: "somthing longer",
  brand: "nokia",
  imageUrl:
    "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80",
  price: 100,
  userId: "admin",
  createdAt: "2019-07-19T09:32:10.535Z",
  updatedAt: "2019-07-19T09:32:10.535Z",
  __v: 0,
};

//adding first product

// fetch("https://striveschool-api.herokuapp.com/api/product/", {
//   method: "POST",
//   body: JSON.stringify(newObject),
//   headers: {
//     Accept: "application/json, text/plain, */*",
//     "Content-Type": "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmI2NWQ0YmUzZDAwMTU4NDYwMmIiLCJpYXQiOjE2NjgwODY2MjksImV4cCI6MTY2OTI5NjIyOX0.TamAcG1oYuQj5l9U-hIKdU_vmPqKfceiGpckjYXJ2OY",
//   },
// })
//   .then((response) => response.json())
//   .then((response) => console.log("xxhjgjfxxx", response));

async function getProducts() {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/product/",
    {
      // method: "POST",
      // body: JSON.stringify({ firstData }),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmI2NWQ0YmUzZDAwMTU4NDYwMmIiLCJpYXQiOjE2NjgwODY2MjksImV4cCI6MTY2OTI5NjIyOX0.TamAcG1oYuQj5l9U-hIKdU_vmPqKfceiGpckjYXJ2OY",
      },
    }
  );
  const products = await response.json();
  console.log(products);
  return products;
}

function addNewObject(object) {}

function renderProducts(listOfProducts) {
  let list = document.querySelector(".list-group");

  listOfProducts.forEach(
    ({ _id, name, description, imageUrl, price, brand }) => {
      console.log("aa");
      const productLi = document.createElement("li");
      productLi.classList.add("list-group-item");
      productLi.innerHTML = `<div class="card" style="width: 18rem;">
                                      <img class="card-img-top" src="${imageUrl}" alt="Card image cap">
                                      <div class="card-body">
                                        <h5 class="card-title">${name}</h5>
                                        <p class="card-text">${description}</p>
                                        <div class="badge badge-dark">${price}€</div>
                                        <a class"col" href="details.html?productId=${_id}">VIEW DETAILS</a>
                                      </div>
                                    </div>`;

      list.appendChild(productLi);
    }
  );
}

window.onload = async () => {
  console.log("xxxx");
  const products = await getProducts();
  renderProducts(products);
};
