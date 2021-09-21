import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.scss']
})
export class PocetnaComponent implements OnInit, OnDestroy {

  constructor() { }

  brojevi : number[] = [1,2,3,4,5];
  prikaziUl: boolean = true;

  uslov: boolean = false;

  ngOnInit(): void {
    alert('Pozdrav iz funkcije ngOnInit');
  }

  ngOnDestroy(): void {
    alert('Pozdrav iz funkcije ngOnDestroy');
  }
}
