import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseAddComponent } from './reverse-add.component';

describe('ReverseAddComponent', () => {
  let component: ReverseAddComponent;
  let fixture: ComponentFixture<ReverseAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReverseAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReverseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
