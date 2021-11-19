import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Voiture} from 'src/app/models/voitures';
import {VoitureService} from 'src/app/services/voiture.service';
import {FormBuilder, FormGroup} from "@angular/forms";


@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

    voiture?: Voiture;
    id: number;
    voitureForm: FormGroup;


    constructor(private route: ActivatedRoute,
                private service: VoitureService,
                private formBuilder: FormBuilder,) {
        this.id = this.route.snapshot.params['id']
        this.voitureForm = this.formBuilder.group({
            marque: '',
            couleur: '',
            prix: '',
            image: '',
        });
    }

    ngOnInit(): void {
        this.findById();
    }

    findById() {
        this.service.findById(this.id).subscribe(data => {
            this.voiture = data;
            this.voitureForm.patchValue(this.voiture);
        })
    }

    updateVoiture() {
        this.service.update(this.id,this.voitureForm.value).subscribe(data => {
            this.voiture = data;
        })
    }
}
