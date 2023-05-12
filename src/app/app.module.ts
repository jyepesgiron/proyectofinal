import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Component/inicio/inicio.component';
import { CreateAnteproyectComponent } from './Component/create-anteproyect/create-anteproyect.component';
import { ShowAnteproyectComponent } from './Component/show-anteproyect/show-anteproyect.component';
import { CreateItemComponent } from './Component/create-item/create-item.component';
import { ShowCorrectionComponent } from './Component/show-correction/show-correction.component';
import { LogueoComponent } from './Component/logueo/logueo.component';
import { DescrpcionComponent } from './Component/Items/descrpcion/descrpcion.component';
import { PlanteamientoComponent } from './Component/Items/planteamiento/planteamiento.component';
import { HipotesisComponent } from './Component/Items/hipotesis/hipotesis.component';
import { ObjetivoGeneralComponent } from './Component/Items/objetivo-general/objetivo-general.component';
import { TituloTentativoComponent } from './Component/Items/titulo-tentativo/titulo-tentativo.component';
import { JustificacionComponent } from './Component/Items/justificacion/justificacion.component';
import { BienvenidoComponent } from './Component/bienvenido/bienvenido.component';

@NgModule({
  declarations: [
    AppComponent,
    LogueoComponent,
    InicioComponent,
    CreateAnteproyectComponent,
    ShowAnteproyectComponent,
    CreateItemComponent,
    ShowCorrectionComponent,
    DescrpcionComponent,
    PlanteamientoComponent,
    HipotesisComponent,
    ObjetivoGeneralComponent,
    TituloTentativoComponent,
    JustificacionComponent,
    BienvenidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
