import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedBookComponent } from './booked-book.component';

describe('BookedBookComponent', () => {
  let component: BookedBookComponent;
  let fixture: ComponentFixture<BookedBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
