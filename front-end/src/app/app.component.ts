import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  peliculas;
  ngOnInit(): void {

    setTimeout(() => {
      this.peliculas = [{
        titulo: 'Spider Man',
        fechalanzamiento: new Date(),
        precio:1400.99
    
      },
      {
        titulo: 'Moana',
        fechalanzamiento: new Date('2016-11-14'),
        precio:400.99
      }]  
    }, 5000);
    
  }
  title = 'front-end';
  


}
