import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  peliculasEnCines;
  peliculasProxEstrenos;
  constructor() { }

  ngOnInit(): void {
    this.peliculasEnCines = [{
      titulo: 'Spider Man',
      fechalanzamiento: new Date(),
      precio:1400.99
  
    },
    {
      titulo: 'Moana',
      fechalanzamiento: new Date('2016-11-14'),
      precio:400.99
    }]  

  //   this.peliculasProxEstrenos = [{
  //     titulo: 'Avengers End Game',
  //     fechalanzamiento: new Date(),
  //     precio:1400.99
  
  //   },
  //   {
  //     titulo: 'Inception',
  //     fechalanzamiento: new Date('2016-11-14'),
  //     precio:400.99
  //   },
  //   {
  //     titulo: 'Rocky',
  //     fechalanzamiento: new Date('2016-11-14'),
  //     precio:400.99
  //   }
  // ]  

  this.peliculasProxEstrenos = []
  }

  ocultar = false;

}
