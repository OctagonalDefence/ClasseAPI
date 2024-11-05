import { BookApiJSON } from "../../interface/book/book.api";

export class Book {
    private _id!:string;
    private _name!:string;

    set id(id:string) { this._id = id; }
    set name(name:string) { this._name = name; }

    get id() { return this._id; }
    get name() { return this._name; }

}