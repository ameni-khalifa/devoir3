import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Avion } from '../model/avion.model';
import { AvionService } from '../services/avion.service';

@Component({
  selector: 'app-add-avion',
  imports: [FormsModule],
  templateUrl: './add-avion.html',
  styleUrl: './add-avion.css'
})
export class AddAvion {
  newAvion = new Avion();
  dateMiseEnServiceStr = '';

  constructor(private avionService: AvionService, private router: Router) {}

  addAvion(): void {
    this.newAvion.dateMiseEnService = new Date(this.dateMiseEnServiceStr);
    this.avionService.ajouterAvion(this.newAvion);
    this.router.navigate(['avions']);
  }
}
