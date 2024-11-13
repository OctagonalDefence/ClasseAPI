import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { BookComponent } from '../../components/book/book.component';
import { ActivatedRoute, convertToParamMap, provideRouter, Router } from '@angular/router';
import { routes } from '../../app.routes';
import { of, Subscription } from 'rxjs';
import { ChapterService } from '../../services/chapter/chapter.service';


describe('Chapter component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideRouter(routes),
        provideHttpClient()
      ],
      imports: [BookComponent],
    }).compileComponents();
  });

  it("Get chapters of book", async ()=> {
    const chapterService: ChapterService = TestBed.inject(ChapterService);
    console.log("START Get chapters of book");
    const router:Router = TestBed.inject(Router);
    const route = TestBed.inject(ActivatedRoute);


    const mockData={
        "docs": [
            {
                "_id": "6091b6d6d58360f988133b8b",
                "chapterName": "A Long-expected Party",
                "book": "5cf5805fb53e011a64671582"
            },
            {
                "_id": "6091b6d6d58360f988133b8c",
                "chapterName": "The Shadow of the Past",
                "book": "5cf5805fb53e011a64671582"
            },
            {
              "_id": "6091b6d6d58360f988133b93",
              "chapterName": "At the Sign of The Prancing Pony",
              "book": "5cf5805fb53e011a64671582"
            },
            {
              "_id": "6091b6d6d58360f988133b94",
              "chapterName": "Strider",
              "book": "5cf5805fb53e011a64671582"
            },
            {
                "_id": "6091b6d6d58360f988133ba6",
                "chapterName": "The King of the Golden Hall",
                "book": "5cf58077b53e011a64671583"
            },
            {
                "_id": "6091b6d6d58360f988133ba7",
                "chapterName": "Helm's Deep",
                "book": "5cf58077b53e011a64671583"
            }
        ]};

    spyOn(chapterService, "getChapter").and.returnValue(of( mockData ));

    spyOn(route.paramMap,"subscribe").and.callFake((fn: (paramMap: any) => void) => {
      fn(convertToParamMap({id: "5cf5805fb53e011a64671582"}));
      return new Subscription();
    })    
    
    const fixture = TestBed.createComponent(BookComponent);

    await router.navigate(["/book/5cf5805fb53e011a64671582"]);
    await fixture.whenStable();
    fixture.detectChanges();
    await fixture.whenStable();


    const compiled: HTMLElement = fixture.nativeElement as HTMLElement;
    console.log("BODY CHAPTERS",compiled);
    const table: HTMLElement = compiled.querySelector("table") as HTMLElement;

    const rows: NodeListOf<HTMLElement> = compiled.querySelectorAll("td");
    expect(table).toBeTruthy();
    expect(rows.length).toBe(4);
    console.log("END Get chapters of book");

  });
})
