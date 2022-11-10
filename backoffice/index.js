const params = new URLSearchParams(window.location.search);
const id = params.get("id");

//   let generateID = () => {
//     let array = new Uint32Array(8);
//     window.crypto.getRandomValues(array);
//     let str = "";
//     for (let i = 0; i < array.length; i++) {
//       str += (i < 2 || i > 5 ? "" : "-") + array[i].toString(16).slice(-4);
//     }
//     return str;
//   };

//   TODO: write a function to generate current date
// function generateCurrentDate

window.onload = async () => {
  //TODO: fix for editing the product..
  if (id) {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/product/${id}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmI2NWQ0YmUzZDAwMTU4NDYwMmIiLCJpYXQiOjE2NjgwODY2MjksImV4cCI6MTY2OTI5NjIyOX0.TamAcG1oYuQj5l9U-hIKdU_vmPqKfceiGpckjYXJ2OY",
        },
      }
    );
    const product = await response.json();

    let submitButton = document.querySelector("#submit-button");
    submitButton.innerText = "Edit Product";

    document.querySelector("#product-name").value = product.name;
    document.querySelector("#product-description").value = product.description;
    document.querySelector("#product-brand").value = product.brand;
    document.querySelector("#product-img").value = product.imageUrl;
    document.querySelector("#product-price").value = product.price;
  }
};

/////////////////////////////////////////////////

async function onFormSubmit(event) {
  event.preventDefault();

  const newProduct = {
    name: document.querySelector("#product-name").value,
    description: document.querySelector("#product-description").value,
    brand: document.querySelector("#product-brand").value,
    imageUrl: document.querySelector("#product-img").value,
    price: document.querySelector("#product-price").value,
    id: "2376842983020",
    //TODO: Get the current created/updated date as timestamp format from a function!
    createdAt: "2016-07-27T07:45:00Z",
    updatedAt: "2016-07-27T07:45:00Z",
  };

  //   const options = {
  //     method: id ? "PUT" : "POST",
  //     body: JSON.stringify(newProduct),
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmI2NWQ0YmUzZDAwMTU4NDYwMmIiLCJpYXQiOjE2NjgwODY2MjksImV4cCI6MTY2OTI5NjIyOX0.TamAcG1oYuQj5l9U-hIKdU_vmPqKfceiGpckjYXJ2OY",
  //     },
  //   };

  try {
    if (id) {
      await fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
        method: "PUT",
        body: JSON.stringify(newProduct),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmI2NWQ0YmUzZDAwMTU4NDYwMmIiLCJpYXQiOjE2NjgwODY2MjksImV4cCI6MTY2OTI5NjIyOX0.TamAcG1oYuQj5l9U-hIKdU_vmPqKfceiGpckjYXJ2OY",
        },
      });
      console.log("Product Updated!");
    } else {
      await fetch("https://striveschool-api.herokuapp.com/api/product/", {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmI2NWQ0YmUzZDAwMTU4NDYwMmIiLCJpYXQiOjE2NjgwODY2MjksImV4cCI6MTY2OTI5NjIyOX0.TamAcG1oYuQj5l9U-hIKdU_vmPqKfceiGpckjYXJ2OY",
        },
      });
      console.log("Product Created!");
      console.log("newProduct:", newProduct);
      console.log("getProgucts():", getProducts());
    }
  } catch (error) {
    console.error(error);
  }
}
async function getProducts() {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/product/",
    {
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
