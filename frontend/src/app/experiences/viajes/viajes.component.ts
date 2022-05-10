import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})
export class ViajesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  mostrarViaje(): void {
    this.router.navigate(["experiences/viajes/viaje"]);
  }

}
