import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Avion } from '../model/avion.model';
import { AvionService } from '../services/avion.service';

@Component({
  selector: 'app-update-avion',
  imports: [FormsModule],
  templateUrl: './update-avion.html',
  styleUrl: './update-avion.css'
})
export class UpdateAvion implements OnInit {
  currentAvion = new Avion();
  dateMiseEnServiceStr = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private avionService: AvionService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    const avion = this.avionService.consulterAvion(id);
    if (avion) {
      this.currentAvion = { ...avion };
      this.dateMiseEnServiceStr = formatDate(avion.dateMiseEnService, 'yyyy-MM-dd', 'en');
    }
  }

  updateAvion(): void {
    this.currentAvion.dateMiseEnService = new Date(this.dateMiseEnServiceStr);
    this.avionService.updateAvion(this.currentAvion);
    this.router.navigate(['avions']);
  }
}
