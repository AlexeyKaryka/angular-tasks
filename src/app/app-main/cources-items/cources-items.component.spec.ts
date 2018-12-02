import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourcesItemsComponent } from './cources-items.component';

describe('CourcesItemsComponent', () => {
  let component: CourcesItemsComponent;
  let fixture: ComponentFixture<CourcesItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourcesItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourcesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
