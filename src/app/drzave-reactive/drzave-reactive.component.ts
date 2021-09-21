import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Drzave } from '../interfaces/drzave';
import { ApiService } from '../servisi/api.service';

@Component({
  selector: 'app-drzave-reactive',
  templateUrl: './drzave-reactive.component.html',
  styleUrls: ['./drzave-reactive.component.scss']
})
export class DrzaveReactiveComponent implements OnInit {

  // drzavaForm: FormGroup = new FormGroup({
  //   naziv: new FormControl('')
  // });

  drzave : Drzave[] = [];

  drzaveNovaForma : FormGroup = this.formBuilder.group({
    naziv: '',
  });

  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void { 
    this.drzaveNovaForma.valueChanges.subscribe((vrijednost)=> {
        this.api.getDrzavePoNazivu(vrijednost).subscribe( (odgovor) => {
            this.drzave = odgovor;
        });
    });
  }

  onSubmit(){
    this.api.getDrzavePoNazivu(this.drzaveNovaForma.value).subscribe((odgovor)=>{
      this.drzave = odgovor;
    });
  }

}
