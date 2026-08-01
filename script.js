const yearNode = document.querySelector(".site-footer p");
const printButton = document.querySelector(".print-button");

if (yearNode) {
  yearNode.textContent = `CGDC2026 | ${new Date().getFullYear()}`;
}

if (printButton) {
  printButton.addEventListener("click", () => {
    window.print();
  });
}
