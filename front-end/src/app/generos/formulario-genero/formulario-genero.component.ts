import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';

import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.css']
})
export class FormularioGeneroComponent implements OnInit {

  
  
  form:FormGroup;// conjunto de campos con sus validaciones
  @Input()
  modelo:generoCreacionDTO;
  @Output()
  submit:EventEmitter<generoCreacionDTO> = new EventEmitter<generoCreacionDTO>();
  constructor( private router:Router,private formBuilder:FormBuilder) { }
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre:['',{
        validators:[Validators.required,primeraLetraMayuscula()]
      }]
    });

    if(this.modelo !== undefined){
      // se encarga de hacer el match de las propiedades del objeto que se pasa al form
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios(){
     this.submit.emit(this.form.value);

  }
  obtenerErrorCampoNombre(){
    var campo = this.form.get('nombre');
    if(campo.hasError('required')){
      return 'El campo nombre no es valido';
    }

    if (campo.hasError('primeraLetraMayuscula')){
      return campo.getError('primeraLetraMayuscula').mensaje;
    }
    return '';
  }


}
