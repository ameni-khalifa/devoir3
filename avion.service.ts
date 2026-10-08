import { Injectable } from '@angular/core';

import { Avion } from '../model/avion.model';

@Injectable({
  providedIn: 'root'
})
export class AvionService {

  avions: Avion[];

  constructor() {

    this.avions = [

      {
        idAvion: 1,
        modele: 'Airbus A320',
        compagnie: 'Tunisair',
        capacite: 180,
        dateMiseEnService: new Date('2015-03-12')
      },

      {
        idAvion: 2,
        modele: 'Boeing 737',
        compagnie: 'Nouvelair',
        capacite: 189,
        dateMiseEnService: new Date('2018-07-01')
      },

      {
        idAvion: 3,
        modele: 'Airbus A330',
        compagnie: 'Air France',
        capacite: 290,
        dateMiseEnService: new Date('2012-11-20')
      }

    ];
  }

  listeAvions(): Avion[] {
    return this.avions;
  }

  ajouterAvion(j: Avion): void {
    this.avions.push(j);
  }

  supprimerAvion(j: Avion): void {
    const index = this.avions.indexOf(j);

    if (index > -1) {
      this.avions.splice(index, 1);
    }
  }

  consulterAvion(id: number): Avion | undefined {

    for (let i = 0; i < this.avions.length; i++) {

      if (this.avions[i].idAvion === id) {
        return this.avions[i];
      }

    }

    return undefined;
  }

  updateAvion(j: Avion): void {

    const index = this.avions.indexOf(j);

    if (index > -1) {
      this.avions[index] = j;
    }

  }

}
