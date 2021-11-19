import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { VoituresComponent } from './pages/voitures/voitures.component';
import { VoitureCardComponent } from './components/voitures/voiture-card/voiture-card.component';
import { DetailsComponent } from './pages/details/details.component';
import { VoitureFormComponent } from './pages/voiture-form/voiture-form.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    VoituresComponent,
    VoitureCardComponent,
    DetailsComponent,
    VoitureFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
