import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../../app.component';
import { provideHttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { BookService } from '../../services/book.service';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideHttpClient(),
        BookService
      ]
    }).compileComponents();
  });

  it('Llistat de tots els llibres', () => {
    const bookService:BookService = TestBed.inject(BookService);
    const fixture:ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const component:AppComponent = fixture.componentInstance;

    const mockData = {
      docs:[
        {
          "_id": "5cf5805fb53e011a64671582",
          "name": "The Fellowship Of The Ring"
        },
        {
          "_id": "5cf58077b53e011a64671583",
          "name": "The Two Towers"
        },
        {
          "_id": "5cf58080b53e011a64671584",
          "name": "The Return Of The King"
        }
    ]};

    spyOn(bookService,"getBooks").and.returnValue(of( mockData ));

    component.ngOnInit();
    fixture.detectChanges();

    const compiled:HTMLElement = fixture.nativeElement as HTMLElement;
    const listItems:HTMLElement[] = compiled.querySelectorAll("td") as unknown as HTMLElement[];

    expect(listItems.length).toBe(mockData.docs.length);

    mockData.docs.forEach((book,index) => {
        expect(listItems[index].textContent).toContain(book.name);
    });
  });

  it('Llistat de tots els llibres', () => {
    const bookService:BookService = TestBed.inject(BookService);
    const fixture:ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const component:AppComponent = fixture.componentInstance;

    const mockData = {
      docs:[
        {
          "_id": "5cf5805fb53e011a64671582",
          "name": "The Fellowship Of The Ring"
        },
        {
          "_id": "5cf58077b53e011a64671583",
          "name": "The Two Towers"
        },
        {
          "_id": "5cf58080b53e011a64671584",
          "name": "The Return Of The King"
        }
    ]};

    spyOn(bookService,"getBooks").and.returnValue(of( mockData ));

    component.ngOnInit();
    fixture.detectChanges();

    const compiled:HTMLElement = fixture.nativeElement as HTMLElement;
    const listItems:HTMLElement[] = compiled.querySelectorAll("td") as unknown as HTMLElement[];

    expect(listItems.length).toBe(mockData.docs.length);

    mockData.docs.forEach((book,index) => {
        expect(listItems[index].textContent).toContain(book.name);
    });
  });

});
