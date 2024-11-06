// book.dto.ts
import { BookApi, BookApiJSON } from "../../interface/book/book.api";
import { BookView } from "../../interface/book/book.view";

export class BookDTO {
    static ToViewBook(book: BookApi): BookView[] {
        return book.docs.map((b: BookApiJSON, index: number) => BookDTO.fromApiJSON(b, index));
    }

    private static fromApiJSON(apiBook: BookApiJSON, row: number): BookView {
        return {
            id: apiBook._id,
            name: apiBook.name,
            row: row + 1
        };
    }
}
