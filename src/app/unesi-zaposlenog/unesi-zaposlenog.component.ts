import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../servisi/api.service';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-unesi-zaposlenog',
  templateUrl: './unesi-zaposlenog.component.html',
  styleUrls: ['./unesi-zaposlenog.component.scss']
})
export class UnesiZaposlenogComponent implements OnInit {

  zaposleniForm : FormGroup = this.fb.group({
    ime: ['', Validators.required],
    starost: ['', Validators.required],
    radnoMjesto: ['', Validators.required]
  })
  
  constructor(private fb : FormBuilder, private api: ApiService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.api.postZaposleni(this.zaposleniForm.value).subscribe((odgovor) => {
        console.log(odgovor);
        this.router.navigate(['/listaZaposleni']);
        this.snackBar.open('Uspješno ste unijeli podatke', 'Zatvori');
    })
  }
}
