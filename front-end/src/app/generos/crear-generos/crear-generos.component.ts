import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router } from '@angular/router';

@Component({
  selector: 'app-crear-generos',
  templateUrl: './crear-generos.component.html',
  styleUrls: ['./crear-generos.component.css']
})
export class CrearGenerosComponent implements OnInit {

  constructor( private router:Router,private formBuilder:FormBuilder) { }
  form:FormGroup;// conjunto de campos con sus validaciones
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre:''
    });
  }

  guardarCambios(){
    // guardar los cambios
    this.router.navigate(['generos/']);
  }

}
