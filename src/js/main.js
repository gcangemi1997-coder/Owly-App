import { BookService } from "./api.js";
import { renderBooks } from "./ui.js";

const searchBtn = document.getElementById("search-Btn");
const searchInput = document.getElementById("categoryInput");
const resultsDiv = document.getElementById("results");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageDisplay = document.getElementById("pageDisplay");

let currentPage = 1;
let currentCategory = "";
const descriptionCache = {};

const paginationWrapper = document.getElementById("pagination-wrapper");
const performSearch = async (page = 1) => {
  const category = searchInput.value.trim();
  if (!category) return;

  paginationWrapper.classList.add("hidden");
  resultsDiv.innerHTML = `<div class="loading-state">
    <div class="loader-spin"></div> 
    Cercando i tuoi libri...
  </div>
`;
  if (category !== currentCategory) {
    currentPage = 1;
    currentCategory = category;
  } else {
    currentPage = page;
  }

  try {
    const books = await BookService.getBookByCategory(
      currentCategory,
      currentPage,
    );

    if (books.length === 0) {
      resultsDiv.innerHTML =
        "<p class= 'loading-state'>Nessun libro trovato. Prova un'altra categoria.</p>";
      updatePaginationControls(0);
    } else {
      renderBooks(books);

      paginationWrapper.classList.remove("hidden");

      updatePaginationControls(books.length);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (error) {
    resultsDiv.innerHTML = "<p>Errore di connessione.</p>";
    console.error(error);
  }
};

const updatePaginationControls = (booksFound) => {
  pageDisplay.textContent = `Pagina ${currentPage}`;

  prevBtn.disabled = currentPage === 1;

  nextBtn.disabled = booksFound < 12;
};

searchBtn.addEventListener("click", () => performSearch(1));

searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") performSearch(1);
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) performSearch(currentPage - 1);
});

nextBtn.addEventListener("click", () => {
  performSearch(currentPage + 1);
});

resultsDiv.addEventListener("click", async (event) => {
  if (event.target.classList.contains("info-btn")) {
    const btn = event.target;
    const key = btn.getAttribute("data-key");
    const cleanId = `desc-${key.replace(/\//g, "")}`;
    const container = document.getElementById(cleanId);

    if (container.innerHTML !== "") {
      container.innerHTML = "";
      btn.textContent = "Mostra descrizione";
      return;
    }

    btn.textContent = "Nascondi descrizione";
    if (descriptionCache[key]) {
      container.innerHTML = descriptionCache[key];
      return;
    }

    container.innerHTML = `
  <div class="description-container" style="background: rgba(0,0,0,0.05); padding: 15px;">
    <div class="skeleton-loader" style="height: 14px; width: 100%;"></div>
    <div class="skeleton-loader" style="height: 14px; width: 85%;"></div>
    <div class="skeleton-loader" style="height: 14px; width: 60%;"></div>
  </div>
`;

    try {
      const description = await BookService.getBookDetails(key);
      descriptionCache[key] = description;
      container.innerHTML = description;
    } catch (error) {
      container.innerHTML = "Descrizione non disponibile.";
    }
  }
});
