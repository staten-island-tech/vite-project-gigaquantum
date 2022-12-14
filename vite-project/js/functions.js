import { gpuData } from "./gpuData.js";

const products = {
  addCard: function (
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
  },
  addAllCards: function () {
    gpuData.forEach((gpu) =>
      products.addCard(gpu.imgLink, gpu.name, gpu.brand, gpu.desc, gpu.price)
    );
  },
  removeAllCards: function (selector) {
    document.querySelectorAll(selector).forEach((item) => item.remove());
  },
  resetAll: function () {
    products.removeAllCards(".item-card");
    products.addAllCards();
    buttons.resetButtons(".filter-btn");
    console.log("reset");
  },
};

const filterFunctions = {
  filterByMatch: function (filterType, targetValue) {
    gpuData
      .filter((element) => element[filterType] == targetValue)
      .forEach((filteredGPU) => {
        products.addCard(
          filteredGPU.imgLink,
          filteredGPU.name,
          filteredGPU.brand,
          filteredGPU.desc,
          filteredGPU.price
        );
        console.log(filteredGPU);
      });
  },

  compareGreater: function (filterType, targetValue) {
    gpuData
      .filter((gpu) => gpu[filterType] > targetValue)
      .forEach((filteredGPU) => {
        products.addCard(
          filteredGPU.imgLink,
          filteredGPU.name,
          filteredGPU.brand,
          filteredGPU.desc,
          filteredGPU.price
        );
      });
  },

  compareLess: function (filterType, targetValue) {
    gpuData
      .filter((gpu) => gpu[filterType] < targetValue)
      .forEach((filteredGPU) => {
        products.addCard(
          filteredGPU.imgLink,
          filteredGPU.name,
          filteredGPU.brand,
          filteredGPU.desc,
          filteredGPU.price
        );
      });
  },

  filterByCompare: function (filterType, targetValue, greaterOrLess) {
    if (greaterOrLess == "greater") {
      filterFunctions.compareGreater(filterType, targetValue);
    } else {
      filterFunctions.compareLess(filterType, targetValue);
    }
  },

  displayFilteredItems: function (
    filterType,
    targetValue,
    filterMethod,
    greaterOrLess
  ) {
    if (filterMethod == "match") {
      filterFunctions.filterByMatch(filterType, targetValue);
    }
    if (filterMethod == "compare") {
      filterFunctions.filterByCompare(filterType, targetValue, greaterOrLess);
    }
  },
};

const buttons = {
  resetButtons: function (selector) {
    document.querySelectorAll(selector).forEach((btn) => {
      btn.style.color = "var(--accent-color)";
      btn.style.backgroundColor = "var(--button-background)";
    });
  },

  highlightButton: function (btnID) {
    document.getElementById(btnID).style.color = "var(--text-highlighted)";
    document.getElementById(btnID).style.backgroundColor =
      "var(--button-highlighted)";
  },

  activateFilter: function (
    btnID,
    filterType,
    targetValue,
    filterMethod,
    greaterOrLess
  ) {
    buttons.resetButtons(".filter-btn");
    buttons.highlightButton(btnID);
    products.removeAllCards(".item-card");
    filterFunctions.displayFilteredItems(
      filterType,
      targetValue,
      filterMethod,
      greaterOrLess
    );
  },
  filterEventListener: function (
    btnID,
    filterType,
    targetValue,
    filterMethod,
    greaterOrLess
  ) {
    document.getElementById(btnID).addEventListener("click", function () {
      buttons.activateFilter(
        document.getElementById(btnID).id,
        filterType,
        targetValue,
        filterMethod,
        greaterOrLess
      );
    });
  },
  toggleTheme: function () {
    if (document.body.classList.contains("main-theme")) {
      document.body.classList.remove("main-theme");
      document.body.classList.add("alt-theme");
    } else {
      document.body.classList.remove("alt-theme");
      document.body.classList.add("main-theme");
    }
  },
};

export { products, filterFunctions, buttons };
