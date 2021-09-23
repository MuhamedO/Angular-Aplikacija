import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drzave } from '../interfaces/drzave';
import { Zaposleni } from '../zaposleni';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http : HttpClient) { }

  //  key = '?api_key=ef441335-dd05-4ca2-b927-6c64966e126b';

  public getDrzave() : Observable<Drzave[]>{ 
    return this.http.get<Drzave[]>('https://www.angular-kurs.online/api/drzave');
  }

  public getDrzavePoNazivu(drzavaForm: any) : Observable<Drzave[]>{
    //return this.http.get<Drzave[]>('https:\\www.angular-kurs.online/api/drzave/' + drzavaForm.naziv);
    return this.http.get<Drzave[]>(`https://www.angular-kurs.online/api/drzave/${drzavaForm.naziv}`)
  }

  public postZaposleni(zaposleniForm : Zaposleni){
    return this.http.post('https://www.angular-kurs.online/api/zaposlenici', zaposleniForm)
  }

  public getZaposleni() : Observable<Zaposleni[]> {
    return this.http.get<Zaposleni[]>('https://www.angular-kurs.online/api/zaposlenici');
  }

}
