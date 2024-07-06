import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  peliculasEnCines;
  peliculasProxEstrenos;
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
  
  title = 'front-end';
  


}
