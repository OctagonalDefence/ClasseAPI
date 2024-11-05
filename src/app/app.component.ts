import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OneToRuleThemAll';

  books!:{_id:string,name:string}[];

  constructor (private bookService:BookService, private router: Router) {};

  ngOnInit() {
    this.bookService.getBooks().subscribe((data:any)=> {
      console.log(data);
      this.books = data.docs;
    })
  }

  viewBook(bookId: string) {
    this.router.navigate([`/book/${bookId}`]);
  }

}
