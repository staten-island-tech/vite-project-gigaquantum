import "../styles/style.css";
import { gpuData } from "./gpuData.js";
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

function displayFilteredItems(
  filterType,
  targetValue,
  filterMethod,
  greaterOrLess
) {
  if (filterMethod == "match") {
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
  if (filterMethod == sort) {
    if (greaterOrLess == "greater") {
      gpuData
        .filter((gpu) => gpu[filterType] > targetValue)
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
    if (greaterOrLess == "less") {
      gpuData
        .filter((gpu) => gpu[filterType] < targetValue)
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
  }
}

function highlightButton(btnID) {
  document.getElementById(btnID).style.color = "white";
  document.getElementById(btnID).style.backgroundColor = "black";
}

function activateFilter(btnID, filterType, targetValue) {
  resetButtons(".filter-btn");
  highlightButton(btnID);
  removeItems(".item-card");
  displayFilteredItems(filterType, targetValue, filterMethod, greaterOrLess);
}

function resetAll() {
  removeItems(".item-card");
  gpuData.forEach((gpu) =>
    addCard(gpu.imgLink, gpu.name, gpu.brand, gpu.desc, gpu.price)
  );
  resetButtons(".filter-btn");
  console.log("reset");
}

// Adding event listeners for each filter button
document.getElementById("nvidia").addEventListener("click", function () {
  activateFilter(document.getElementById("nvidia").id, "brand", "NVIDIA");
});

document.getElementById("amd").addEventListener("click", function () {
  activateFilter(document.getElementById("amd").id, "brand", "AMD");
});

document.getElementById("sale").addEventListener("click", function () {
  activateFilter(document.getElementById("sale").id, "sale", true);
});

document.getElementById("stock").addEventListener("click", function () {
  activateFilter(document.getElementById("stock").id, "inStock", true);
});

document.getElementById("ray-tracing").addEventListener("click", function () {
  activateFilter(document.getElementById("ray-tracing").id, "rayTracing", true);
});

document.getElementById("nvidia").addEventListener("click", function () {
  activateFilter(document.getElementById("nvidia").id, "brand", "NVIDIA");
});

document.getElementById("nvidia").addEventListener("click", function () {
  activateFilter(document.getElementById("nvidia").id, "brand", "NVIDIA");
});

document.getElementById("nvidia").addEventListener("click", function () {
  activateFilter(document.getElementById("nvidia").id, "brand", "NVIDIA");
});

document.getElementById("nvidia").addEventListener("click", function () {
  activateFilter(document.getElementById("nvidia").id, "brand", "NVIDIA");
});

document.getElementById("nvidia").addEventListener("click", function () {
  activateFilter(document.getElementById("nvidia").id, "brand", "NVIDIA");
});
