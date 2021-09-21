import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaZaposlenihComponent } from './lista-zaposlenih.component';

describe('ListaZaposlenihComponent', () => {
  let component: ListaZaposlenihComponent;
  let fixture: ComponentFixture<ListaZaposlenihComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaZaposlenihComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaZaposlenihComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
