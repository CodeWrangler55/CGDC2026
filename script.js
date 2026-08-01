const yearNode = document.querySelector(".site-footer p");

if (yearNode) {
  yearNode.textContent = `CGDC2026 | ${new Date().getFullYear()}`;
}
