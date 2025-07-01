// book.dto.ts
import { BookApi, BookApiJSON } from "../../interface/book/book.api";
import { BookView } from "../../interface/book/book.view";

export class BookDTO {
    static ToViewBook(book:BookApi):BookView[] {
        const books: Book[] = book.docs.map((b: BookApiJSON) => BookDTO.fromJSONToBook(b)); 
   
        return books.map((b:Book,index:number) => {
            (b as BookView).row = index + 1;
            return b as BookView;
        });
        
    }
    static fromJSONToBook(b: BookApiJSON): Book {
        const book = new Book();
        book.id = b._id;
        book.name = b.name;
        return book;
    }

    
}
