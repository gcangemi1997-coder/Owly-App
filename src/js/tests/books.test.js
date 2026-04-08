import { describe, it, expect } from "vitest";
import { BookService } from "../src/js/api.js";

describe("BookService Logic", () => {
  it("should correctly format book details", () => {
    const mockBook = {
      title: "Harry Potter",
      authors: [{ name: "J.K. Rowling" }],
    };
    const formattedBook = BookService.formatBookDetails(mockBook);
    expect(formattedBook.title).toBe("Harry Potter");
    expect(formattedBook.author).toBe("J.K. Rowling");
  });

  it("should handle books with no authors", () => {
    const brokenBook = {
      title: "It",
      authors: [],
    };
    const formattedBook = BookService.formatBookDetails(brokenBook);
    expect(formattedBook.author).toBe("Autore sconosciuto");
  });

  it("should extract description correctly when it is an object", () => {
    const mockData = {
      description: { value: "A beautiful story about a wizard." },
    };
    const description = BookService.formatDescription(mockData);
    expect(description).toBe("A beautiful story about a wizard.");
  });

  it("should return a fallback message when description is missing", () => {
    const mockData = {};
    const description = BookService.formatDescription(mockData);
    expect(description).toBe("Descrizione non disponibile.");
  });
});
