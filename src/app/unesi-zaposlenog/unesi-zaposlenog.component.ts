import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../servisi/api.service';

@Component({
  selector: 'app-unesi-zaposlenog',
  templateUrl: './unesi-zaposlenog.component.html',
  styleUrls: ['./unesi-zaposlenog.component.scss']
})
export class UnesiZaposlenogComponent implements OnInit {

  zaposleniForm : FormGroup = this.fb.group({
    ime:'',
    starost: '',
    radnoMjesto: ''
  })
  
  constructor(private fb : FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.api.postZaposleni(this.zaposleniForm.value).subscribe((odgovor) => {
        console.log(odgovor);
    })
  }
}
