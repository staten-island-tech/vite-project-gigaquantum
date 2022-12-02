import "/styles/style.css";
import { gpuData } from "./data.js";
console.log(gpuData);

function addCard(
  imageLink,
  productName,
  productBrand,
  productDesc,
  productPrice
) {
  document.getElementById("card-bin").insertAdjacentHTML(
    "beforeend",
    `<div class="item-card">
<img class="card-img" src="${imageLink}" alt="${productBrand} ${productName}">
<h2 class="card-title">${productBrand} ${productName}</h2>
<p class="card-desc">${productDesc}</p>
<p class="card-price">$${productPrice}</p>
</div>`
  );
}

gpuData.forEach((gpu) =>
  addCard(gpu.imgLink, gpu.name, gpu.brand, gpu.desc, gpu.price)
);
