import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../../app.component';
import { provideHttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { BookService } from '../../services/book.service';
import { routes } from '../../app.routes';
import { provideRouter, Router } from '@angular/router';


describe('AppComponent', () => {

  let router: Router;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideRouter(routes),
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

    //component.ngOnInit();
    fixture.detectChanges();

    const compiled:HTMLElement = fixture.nativeElement as HTMLElement;
    const listItems:HTMLElement[] = compiled.querySelectorAll("tr td:first-child") as unknown as HTMLElement[];

    expect(listItems.length).toBe(mockData.docs.length);

    mockData.docs.forEach((book,index) => {
        expect(listItems[index].textContent).toContain(book.name);
    });
  });

  it('Es visualitza el botó amb el link correcte', () => {
    const bookService:BookService = TestBed.inject(BookService);
    const fixture:ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const component:AppComponent = fixture.componentInstance;

    router = TestBed.inject(Router);

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
    const navigateSpy = spyOn(router,"navigate");

    component.ngOnInit();
    fixture.detectChanges();

    const compiled:HTMLElement = fixture.nativeElement as HTMLElement;
    const listButtons:HTMLButtonElement[] = compiled.querySelectorAll("td button") as unknown as HTMLButtonElement[];

    expect(listButtons.length).toBe(mockData.docs.length);

    mockData.docs.forEach((book,index) => {
        listButtons[index].click();
        fixture.detectChanges();
        expect(navigateSpy).toHaveBeenCalledWith([`/book/${mockData.docs[index]._id}`]);
    });
  });

});


