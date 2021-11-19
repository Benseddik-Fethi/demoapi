import {Component, OnInit} from '@angular/core';
import {Voiture} from 'src/app/models/voitures';
import {VoitureService} from 'src/app/services/voiture.service';

@Component({
    selector: 'app-voitures',
    templateUrl: './voitures.component.html',
    styleUrls: ['./voitures.component.css']
})
export class VoituresComponent implements OnInit {

    voitures: Voiture[] = [];

    constructor(private service: VoitureService) {
    }

    ngOnInit(): void {
        this.initListeVoitures()
    }

    initListeVoitures() {
        this.service.findAll().subscribe(data => {
            this.voitures = data;
        })
    }

    supprimervoiture(id: number) {
        this.service.delete(id).subscribe(data => {
            this.initListeVoitures();
        })
    }
}
