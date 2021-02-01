import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListSimpleExampleComponent } from './book-list-simple-example.component';

describe('BookListSimpleExampleComponent', () => {
  let component: BookListSimpleExampleComponent;
  let fixture: ComponentFixture<BookListSimpleExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListSimpleExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListSimpleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
