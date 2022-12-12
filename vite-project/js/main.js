import "../styles/style.css";
import { products, filterFunctions, buttons } from "./functions.js";

// Initially add the cards to the html
products.addAllCards();

// Adding event listeners for each filter button
buttons.filterEventListener("nvidia", "brand", "NVIDIA", "match");
buttons.filterEventListener("amd", "brand", "AMD", "match");
buttons.filterEventListener("sale", "sale", true, "match");
buttons.filterEventListener("stock", "inStock", true, "match");
buttons.filterEventListener("ray-tracing", "rayTracing", true, "match");
buttons.filterEventListener("high-ram", "memoryGB", 6, "compare", "greater");
buttons.filterEventListener("low-ram", "memoryGB", 6, "compare", "less");
buttons.filterEventListener("amd", "brand", "AMD", "match");
buttons.filterEventListener("amd", "brand", "AMD", "match");
buttons.filterEventListener("amd", "brand", "AMD", "match");
buttons.filterEventListener("amd", "brand", "AMD", "match");
buttons.filterEventListener("amd", "brand", "AMD", "match");

// Adding event listener for reset button
document.getElementById("reset").addEventListener("click", function () {
  products.resetAll();
});
