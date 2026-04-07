import axios from "axios";
import _ from "lodash";

export const BookService = {
  async getBookByCategory(category, page = 1) {
    const limit = 12;
    const offset = (page - 1) * limit;
    try {
      const response = await axios.get(
        `https://openlibrary.org/subjects/${category.toLowerCase()}.json?limit=${limit}&offset=${offset}`,
      );
      return _.get(response.data, "works", []);
    } catch (error) {
      throw error;
    }
  },

  async getBookDetails(bookKey) {
    try {
      const cleanKey = bookKey.startsWith("/") ? bookKey : `/${bookKey}`;
      const response = await axios.get(
        `https://openlibrary.org${cleanKey}.json`,
      );

      const rawDescription = _.get(response.data, "description");

      if (!rawDescription) {
        return "Nessuna descrizione disponibile per questo volume.";
      }

      return typeof rawDescription === "object"
        ? _.get(rawDescription, "value", "Descrizione non trovata.")
        : rawDescription;
    } catch (error) {
      console.error("Errore nel caricamento dei dettagli!", error);
      return "Spiacenti, si è verificato un errore nel recupero della descrizione.";
    }
  },

  formatBookDetails(book) {
    const authorName =
      _.get(book, "authors[0].name") ||
      _.get(book, "authors[0]") ||
      "Autore sconosciuto";

    return {
      title: _.get(book, "title", "Titolo non disponibile"),
      author: typeof authorName === "object" ? authorName.name : authorName,
    };
  },
};
