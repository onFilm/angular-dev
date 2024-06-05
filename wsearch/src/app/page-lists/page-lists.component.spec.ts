import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListsComponent } from './page-lists.component';

describe('PageListsComponent', () => {
  let component: PageListsComponent;
  let fixture: ComponentFixture<PageListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageListsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
