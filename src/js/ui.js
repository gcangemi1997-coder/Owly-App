import { BookService } from "./api.js";

export function renderBooks(booksArray) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";
  booksArray.forEach((book) => {
    const formatted = BookService.formatBookDetails(book);
    const bookKey = book.key;
    const coverId = book.cover_id || book.cover_i;
    const coverUrl = book.cover_id
      ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
      : "https://via.placeholder.com/150x200?text=No+Cover";
    const bookCard = `
      <div class='book-card'>
        <img src="${coverUrl}" class="book-cover" alt="Copertina di ${formatted.title}">
        <h3>${formatted.title}</h3>
        <p><strong>${formatted.author}</strong></p>
        <button class='info-btn' data-key='${bookKey}'>Mostra descrizione</button>
        <div class='description-container' id='desc-${bookKey.replace(/\//g, "")}'></div>
      </div>
  `;
    resultsContainer.innerHTML += bookCard;
  });
}
