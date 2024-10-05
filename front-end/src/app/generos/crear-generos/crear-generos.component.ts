import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../genero';



@Component({
  selector: 'app-crear-generos',
  templateUrl: './crear-generos.component.html',
  styleUrls: ['./crear-generos.component.css']
})
export class CrearGenerosComponent implements OnInit {

  constructor( private router:Router) { }
  
  ngOnInit(): void {
    
  }

  guardarCambios(genero:generoCreacionDTO){
    // guardar los cambios
    console.log(genero);
    this.router.navigate(['generos/']);
  }



}
