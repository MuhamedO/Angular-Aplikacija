import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servisi/api.service';
import { Zaposleni } from '../zaposleni';

@Component({
  selector: 'app-lista-zaposlenih',
  templateUrl: './lista-zaposlenih.component.html',
  styleUrls: ['./lista-zaposlenih.component.scss']
})
export class ListaZaposlenihComponent implements OnInit {

  zaposleni : Zaposleni[] = [];
  
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getZaposleni().subscribe((odgovor) => {
      this.zaposleni = odgovor;
    })
  }

}
