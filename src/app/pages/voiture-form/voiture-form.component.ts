import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {VoitureService} from "../../services/voiture.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-voiture-form',
    templateUrl: './voiture-form.component.html',
    styleUrls: ['./voiture-form.component.css']
})
export class VoitureFormComponent implements OnInit {
    voitureForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private voitureService: VoitureService,
                private router: Router) {
        this.voitureForm = this.formBuilder.group({
            marque: '',
            couleur: '',
            prix: '',
            image: '',
        });
    }

    ngOnInit(): void {
    }

    create(){
        this.voitureService.save(this.voitureForm.value).subscribe(
            data => {
                this.router.navigateByUrl(`/voitures/${data.id}`);
            },
            error => {
                console.log(error);
            }
        );
    }

}
