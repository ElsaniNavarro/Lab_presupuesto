import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PregutnasComponent} from "./pregutnas/pregutnas.component";
import {ContactoComponent} from "./contacto/contacto.component";

// Componentes
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';
import { GastosComponent } from './components/gastos/gastos.component';


const routes: Routes = [
  { path: '', redirectTo: '/ingresarPresupuesto', pathMatch: 'full' },
  { path: 'ingresarPresupuesto', component: IngresarPresupuestoComponent },
  { path: 'gastos', component: GastosComponent },
  { path: 'preguntas', component: PregutnasComponent},
  {path: 'contacto', component: ContactoComponent},
  { path: '**', redirectTo: '/ingresarPresupuesto', pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
