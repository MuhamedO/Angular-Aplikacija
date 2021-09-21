import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrugaComponent } from './druga/druga.component';
import { DrzaveFormComponent } from './drzave-form/drzave-form.component';
import { DrzaveReactiveComponent } from './drzave-reactive/drzave-reactive.component';
import { DrzaveComponent } from './drzave/drzave.component';
import { ListaZaposlenihComponent } from './lista-zaposlenih/lista-zaposlenih.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { UnesiZaposlenogComponent } from './unesi-zaposlenog/unesi-zaposlenog.component';

const routes: Routes = [
  { path: '', component: PocetnaComponent},
  { path: 'druga', component:DrugaComponent},
  { path: 'drzave', component:DrzaveComponent},
  { path: 'drzaveForm', component:DrzaveFormComponent},
  { path: 'drzaveReactiveForms', component:DrzaveReactiveComponent},
  { path: 'unesiZaposlenog', component: UnesiZaposlenogComponent},
  { path: 'listaZaposlenih', component: ListaZaposlenihComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
