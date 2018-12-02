import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourceItemComponent } from './cource-item.component';

describe('CourceItemComponent', () => {
  let component: CourceItemComponent;
  let fixture: ComponentFixture<CourceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourceItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
