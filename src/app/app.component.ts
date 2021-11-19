import { Component } from '@angular/core';
import { Voiture } from './models/voitures';
import { VoitureService } from './services/voiture.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoapi';

  //voiture: Voiture;

  constructor(/*private service: VoitureService*/) {

    // this.voiture = this.service.voitures;
  }
}
