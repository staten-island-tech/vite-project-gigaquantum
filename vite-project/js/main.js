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

function filterByMatch(filterType, targetValue) {
  gpuData
    .filter((element) => element[filterType] == targetValue)
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

function compareGreater(filterType, targetValue) {
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
    });
}

function compareLess(filterType, targetValue) {
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
    });
}

function filterByCompare(filterType, targetValue, greaterOrLess) {
  if (greaterOrLess == "greater") {
    compareGreater(filterType, targetValue);
  } else {
    compareLess(filterType, targetValue);
  }
}

function displayFilteredItems(
  filterType,
  targetValue,
  filterMethod,
  greaterOrLess
) {
  if (filterMethod == "match") {
    filterByMatch(filterType, targetValue);
  }
  if (filterMethod == "compare") {
  }
}

function highlightButton(btnID) {
  document.getElementById(btnID).style.color = "white";
  document.getElementById(btnID).style.backgroundColor = "black";
}

function activateFilter(
  btnID,
  filterType,
  targetValue,
  filterMethod,
  greaterOrLess
) {
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
  activateFilter(
    document.getElementById("nvidia").id,
    "brand",
    "NVIDIA",
    "match"
  );
});

document.getElementById("amd").addEventListener("click", function () {
  activateFilter(document.getElementById("amd").id, "brand", "AMD", "match");
});

document.getElementById("sale").addEventListener("click", function () {
  activateFilter(document.getElementById("sale").id, "sale", true, "match");
});

document.getElementById("stock").addEventListener("click", function () {
  activateFilter(document.getElementById("stock").id, "inStock", true, "match");
});

document.getElementById("ray-tracing").addEventListener("click", function () {
  activateFilter(
    document.getElementById("ray-tracing").id,
    "rayTracing",
    true,
    "match"
  );
});

document.getElementById("high-ram").addEventListener("click", function () {
  activateFilter(
    document.getElementById("high-ram").id,
    "memoryGB",
    6,
    "compare",
    "greater"
  );
});

document.getElementById("low-ram").addEventListener("click", function () {
  activateFilter(
    document.getElementById("low-ram").id,
    "memoryGB",
    6,
    "compare",
    "less"
  );
});

document.getElementById("reset").addEventListener("click", function () {
  resetAll();
});
