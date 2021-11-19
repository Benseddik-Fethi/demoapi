import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Voiture } from 'src/app/models/voitures';
import {VoitureService} from "../../../services/voiture.service";

@Component({
  selector: 'app-voiture-card',
  templateUrl: './voiture-card.component.html',
  styleUrls: ['./voiture-card.component.css']
})
export class VoitureCardComponent implements OnInit {

  @Input() voiture: Voiture;
  @Output() voitureSelected = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  delete() {
   this.voitureSelected.emit(this.voiture.id)
  }
}
