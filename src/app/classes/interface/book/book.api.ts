import { Book } from "../../model/book/book";

export interface BookApi extends Book {
    docs: BookApiJSON[];
}

export interface BookApiJSON {
    _id: string;
    name: string;
}