document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach(function (element) {
    const key = element.getAttribute("data-lang");
    element.setAttribute("data-original", element.innerHTML); // Armazena o conteúdo original
  });
});

function toggleLanguage() {
  const toggleSwitch = document.getElementById("languageToggle");
  const lang = toggleSwitch.checked ? "pt" : "en";

  const elements = document.querySelectorAll("[data-lang]");

  elements.forEach(function (element) {
    const key = element.getAttribute("data-lang");

    if (lang === "pt" && contentPt[key]) {
      element.innerHTML = contentPt[key]; // Altera para o conteúdo em português
    } else if (lang === "en" && element.hasAttribute("data-original")) {
      element.innerHTML = element.getAttribute("data-original"); // Restaura o conteúdo original em inglês
    }
  });
}
