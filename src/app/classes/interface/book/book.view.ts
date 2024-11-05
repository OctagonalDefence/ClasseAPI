import { Book } from "../../model/book/book";

export interface BookView extends Book {
    row: number;
}