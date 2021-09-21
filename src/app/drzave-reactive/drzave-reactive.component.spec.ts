import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrzaveReactiveComponent } from './drzave-reactive.component';

describe('DrzaveReactiveComponent', () => {
  let component: DrzaveReactiveComponent;
  let fixture: ComponentFixture<DrzaveReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrzaveReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrzaveReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
