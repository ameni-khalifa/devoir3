import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Avion } from '../model/avion.model';
import { AvionService } from '../services/avion.service';

@Component({
  selector: 'app-avions',
  imports: [DatePipe, RouterLink],
  templateUrl: './avions.html',
  styleUrl: './avions.css'
})
export class Avions {
  avions: Avion[];

  constructor(private avionService: AvionService) {
    this.avions = this.avionService.listeAvions();
  }

  supprimerAvion(j: Avion): void {
    if (confirm('Etes-vous sur de vouloir supprimer cet avion ?')) {
      this.avionService.supprimerAvion(j);
      this.avions = this.avionService.listeAvions();
    }
  }
}
