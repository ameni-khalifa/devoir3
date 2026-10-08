import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Avion } from '../model/avion.model';
import { AvionService } from '../services/avion.service';

@Component({
  selector: 'app-consulter-avion',
  imports: [DatePipe, RouterLink],
  templateUrl: './consulter-avion.html',
  styleUrl: './consulter-avion.css'
})
export class ConsulterAvion implements OnInit {
  avion?: Avion;

  constructor(private route: ActivatedRoute, private avionService: AvionService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.avion = this.avionService.consulterAvion(id);
  }
}
