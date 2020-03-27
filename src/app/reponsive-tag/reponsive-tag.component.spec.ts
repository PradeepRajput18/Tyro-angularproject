import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponsiveTagComponent } from './reponsive-tag.component';

describe('ReponsiveTagComponent', () => {
  let component: ReponsiveTagComponent;
  let fixture: ComponentFixture<ReponsiveTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReponsiveTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReponsiveTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
