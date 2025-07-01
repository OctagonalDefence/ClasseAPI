import { Book } from "../../model/book/book";

export interface BookApi  {
    docs: BookApiJSON[];
}

export interface BookApiJSON {
    _id: string;
    name: string;
}
