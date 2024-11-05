import { BookApi, BookApiJSON } from "../../interface/book/book.api";
import { BookView } from "../../interface/book/book.view";
import { Book } from "../../model/book/book";

export class BookDTO {
    static ToViewBook(book:BookApi):BookView[] {
        const books: Book[] = book.docs.map((b: BookApiJSON) => Book.fromJSON(b)); // No correcte. La transformació hauria d'estar en un DTO
        
    }
}