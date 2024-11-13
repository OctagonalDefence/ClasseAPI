import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChapterService } from '../../services/chapter/chapter.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {
  selectedChapters!:any[]; 

  constructor(private route:ActivatedRoute, private chapterService: ChapterService) {};

  ngOnInit():void {
    this.route.paramMap.subscribe( parametres => {
      const idBook = parametres.get("id");
      if (idBook) {
        this.getChapters(idBook);
      }
    })
  };

  private getChapters(id:string) {
    this.chapterService.getChapter().subscribe((data:any) => {
      const allChapters:any[] = data.docs;
      this.selectedChapters = allChapters.filter((chapter) => chapter.book == id);
    });
  }
}
