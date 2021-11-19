export class Voiture {

    id: number;
    marque: string;
    couleur: string;
    prix: number;
    image: string;

    constructor(id: number, marque: string, couleur: string, prix: number, image: string) {
        this.id = id;
        this.marque = marque;
        this.couleur = couleur;
        this.prix = prix;
        this.image = image;
    }

}