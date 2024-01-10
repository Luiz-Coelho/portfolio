const contentPt = {};

import contentPt from "./content-pt.js";

const languageButton = document.getElementById("language-button");
let currentLanguage = "en";

languageButton.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "pt" : "en";
  updateContent();
});

function updateContent() {
  const contentFile = `content-${currentLanguage}.js`;
  import(`./${contentFile}`).then((content) => {
    // Atualize o conteúdo da página
    // ...
  });

  // Atualize a inscrição no botão
  languageButton.textContent =
    currentLanguage === "en" ? "Português" : "English";

  // Atualize o conteúdo da página com o conteúdo traduzido
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach((element) => {
    const elementLang = element.dataset.lang;
    element.textContent = contentPt[elementLang];
  });
}
