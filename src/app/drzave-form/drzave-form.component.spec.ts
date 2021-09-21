import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrzaveFormComponent } from './drzave-form.component';

describe('DrzaveFormComponent', () => {
  let component: DrzaveFormComponent;
  let fixture: ComponentFixture<DrzaveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrzaveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrzaveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
