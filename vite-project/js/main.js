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

function removeItems(selector) {
  document.querySelectorAll(selector).forEach((item) => item.remove());
}

function resetButtons(selector) {
  document.querySelectorAll(selector).forEach((btn) => {
    btn.style.color = "black";
    btn.style.backgroundColor = "white";
  });
}

function displayFilteredItems(filterType, targetValue) {
  gpuData
    .filter((gpu) => gpu[filterType].includes(targetValue))
    .forEach((filteredGPU) => {
      addCard(
        filteredGPU.imgLink,
        filteredGPU.name,
        filteredGPU.brand,
        filteredGPU.desc,
        filteredGPU.price
      );
      console.log(filteredGPU);
    });
}

function highlightButton(btnID) {
  document.getElementById(btnID).style.color = "white";
  document.getElementById(btnID).style.backgroundColor = "black";
}

function activateFilter(btnID, filterType, targetValue) {
  resetButtons(".filter-btn");
  highlightButton(btnID);
  removeItems(".item-card");
  displayFilteredItems(filterType, targetValue);
}

function resetAll() {
  removeItems(".item-card");
  gpuData.forEach((gpu) =>
    addCard(gpu.imgLink, gpu.name, gpu.brand, gpu.desc, gpu.price)
  );
  resetButtons(".filter-btn");
  console.log("reset");
}

document.querySelectorAll(".filter-btn").forEach((btn) => {
  if ((btn.id == "reset-btn")) {
    document.getElementById("reset-btn").addEventListener("click", function () {
      resetAll();
    });
  } else {
    console.log("Filter Button Event Listener");
  }
});
