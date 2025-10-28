const showBtn = document.getElementById("aBtn");

const product = document.getElementById("products");
product.style.display = "none";

showBtn.addEventListener("click", () => {
    showBtn.style.display = "none";
    product.style.display = "block";
});

const tea = document.getElementById("teaBtn");
const teaItems = document.getElementById("teaItems");

teaItems.style.display = "none";

tea.addEventListener("click", () => {
    tea.style.display = "none";
    teaItems.style.display = "block";
})