import "../styles/style.css";
import "../styles/variables.css";
import { products, filterFunctions, buttons } from "./functions.js";

// Initially add the cards to the HTML
products.resetAll();

// Adding event listeners for each filter button
buttons.filterEventListener("nvidia", "brand", "NVIDIA", "match");
buttons.filterEventListener("amd", "brand", "AMD", "match");
buttons.filterEventListener("sale", "sale", true, "match");
buttons.filterEventListener("stock", "inStock", true, "match");
buttons.filterEventListener("ray-tracing", "rayTracing", true, "match");
buttons.filterEventListener("high-ram", "memoryGB", 6, "compare", "greater");
buttons.filterEventListener("low-ram", "memoryGB", 6, "compare", "less");

// Adding event listener for reset button
document.getElementById("reset").addEventListener("click", function () {
  products.resetAll();
});

// Adding event listener for theme button
document.getElementById("theme-btn").addEventListener("click", function () {
  buttons.toggleTheme();
});
