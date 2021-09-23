import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Drzave } from '../interfaces/drzave';
import { ApiService } from '../servisi/api.service';

@Component({
  selector: 'app-drzave',
  templateUrl: './drzave.component.html',
  styleUrls: ['./drzave.component.scss']
})
export class DrzaveComponent implements OnInit {

  listaDrzava: Drzave[] = [];
  rastuciPoredak : boolean = true;
  ukupanBrojStanovnika: number = 0;
  ukupnaPovrsina : number = 0;
  terminZaPretragu : string = '';
  listaDrzavaZaDisplay: Drzave[] = [];
  regije: string[] = [];
  greska : string = "";
  uspjeh : string = "";
  ucitavanjeUToku : boolean = false;

  constructor(private api : ApiService) { }

  ngOnInit(): void {

    this.ucitavanjeUToku = true;

    this.api.getDrzave().subscribe((odgovor) => {
      this.listaDrzava = odgovor;
      this.listaDrzavaZaDisplay=odgovor;
      this.uspjeh="Uspješno ste očitali podatke";
      this.ucitavanjeUToku = false;

      this.regije = [... new Set(this.listaDrzava.map((drzava)=>{return drzava.region}))].filter((regija)=> regija!== "");

      // moze i ovako: const spreadOperator = [... setStringova];
      //i ovako: const setStringova = [... new Set(this.listaDrzava.map((drzava)=>{return drzava.region}))]


      this.ukupanBrojStanovnika = this.listaDrzava.reduce((ukupno, drzava) => {
        ukupno=ukupno+drzava.population;
        return ukupno;
      },0);
      this.ukupnaPovrsina = this.listaDrzava.reduce(
        (ukupnopovrsina, drzava) => {
          ukupnopovrsina += drzava.area;

          return ukupnopovrsina;
        }, 0);
    }, (greska) => {
      this.greska = 'Greška u radu: ' + greska.status;
    });


  }

  sortiraj(){
    if(this.rastuciPoredak){
      this.listaDrzavaZaDisplay.sort((a,b) => {
          if(a.name<b.name){
            return -1;
          }
          else if(a.name==b.name){
            return 0;
          }
          return 1;
      });
    }
    else{
      this.listaDrzavaZaDisplay.sort((a,b) => {
        if(a.name>b.name){
          return -1;
        }
        else if(a.name==b.name){
          return 0;
        }
        return 1;
      });
    }
    this.rastuciPoredak=!this.rastuciPoredak;
  }

  sortirajPoBrojuStanovnika(){
    if(this.rastuciPoredak){
      this.listaDrzavaZaDisplay.sort((a,b) => {
          if(a.population<b.population){
            return -1;
          }
          else if(a.population==b.population){
            return 0;
          }
          return 1;
      });
    }
    else{
      this.listaDrzavaZaDisplay.sort((a,b) => {
        if(a.population>b.population){
          return -1;
        }
        else if(a.population==b.population){
          return 0;
        }
        return 1;
      });
    }
    this.rastuciPoredak=!this.rastuciPoredak;
  }

  filtriraj(){

      this.listaDrzavaZaDisplay = this.listaDrzava.filter((drzava) => drzava.name.toLowerCase().includes(this.terminZaPretragu.toLowerCase()));

  }

  ponistiPretragu(){
    this.listaDrzavaZaDisplay=this.listaDrzava;
    this.terminZaPretragu="";
  }

  pretraga(event: string){

      this.listaDrzavaZaDisplay = this.listaDrzava.filter((drzava) => drzava.name.toLowerCase().includes(event.toLowerCase()));

  }

  filterPoRegiji(regija : string){
      this.listaDrzavaZaDisplay = this.listaDrzava.filter((drzava)=>drzava.region==regija);
  }

}
