import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ChapterService } from '../../services/chapter/chapter.service';


describe('Chapter Service', () => {
  let chapterService: ChapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),provideHttpClientTesting()
      ]
    });
    chapterService = TestBed.inject(ChapterService);
  });

  it('should be created', () => {
    expect(chapterService).toBeTruthy();
  });

  it('Request has token authentication', () => {
    const mockData = [{}];
    const httpTestingController = TestBed.inject(HttpTestingController);
    
    spyOn(chapterService,"getChapter").and.callThrough();

    chapterService.getChapter().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpTestingController.expectOne("https://the-one-api.dev/v2/chapter");

    expect(req.request.method).toBe('GET');
    expect(req.request.headers.get("Authorization")).toBeTruthy();
    req.flush(mockData);

  });
});
