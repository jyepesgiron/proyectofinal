import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogueoComponent } from './Component/logueo/logueo.component';
import { InicioComponent } from './Component/inicio/inicio.component';
import { CreateAnteproyectComponent } from './Component/create-anteproyect/create-anteproyect.component';
import { CreateItemComponent } from './Component/create-item/create-item.component';
import { ShowAnteproyectComponent } from './Component/show-anteproyect/show-anteproyect.component';
import { ShowCorrectionComponent } from './Component/show-correction/show-correction.component';
import { DescrpcionComponent } from './Component/Items/descrpcion/descrpcion.component';
import { HipotesisComponent } from './Component/Items/hipotesis/hipotesis.component';
import { JustificacionComponent } from './Component/Items/justificacion/justificacion.component';
import { ObjetivoGeneralComponent } from './Component/Items/objetivo-general/objetivo-general.component';
import { TituloTentativoComponent } from './Component/Items/titulo-tentativo/titulo-tentativo.component';
import { PlanteamientoComponent } from './Component/Items/planteamiento/planteamiento.component';
import { BienvenidoComponent } from './Component/bienvenido/bienvenido.component';

const routes: Routes = [
  {path:'', redirectTo: 'Login', pathMatch: 'full'},
  {path:'Login', component: LogueoComponent},
  {path:'Start', component: InicioComponent,
    children:[
      {path:'', component: BienvenidoComponent},
      {path:'AnteProyecto', component: ShowAnteproyectComponent},
      {path:'Correcciones', component: ShowCorrectionComponent}
    ]
  },
  {path:'RegistroAnteProyecto', component: CreateAnteproyectComponent},
  {path:'RegistroItem', component: CreateItemComponent,
  children:[
    {path:'', component: DescrpcionComponent},
    {path:'Hipotesis', component: HipotesisComponent},
    {path:'Justificacion', component: JustificacionComponent},
    {path:'ObjetivoGeneral', component: ObjetivoGeneralComponent},
    {path:'TituloTentativo', component: TituloTentativoComponent},
    {path:'PlaneamientoProblema', component: PlanteamientoComponent}
  ]},
  {path:'**', redirectTo: 'Login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
