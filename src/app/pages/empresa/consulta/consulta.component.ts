import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { arquitrackingService } from '../../../services/arquitracking.service';
import { Router } from '@angular/router';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css'
})
export class ConsultaComponent implements OnInit {
  icono:string='lnr-picture';
  coloricono:string='text-primary';
  titulo:string='Consulta Empresa';
  descripcion:string='Registro inicial de las empresas a contactar';

  constructor(private appComponent: AppComponent
    , private modalService: NgbModal
    , private arquitrackingService: arquitrackingService
    , private router: Router

  ) {
    this.appComponent.login = false;
  }

  ngOnInit(): void {
    
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' ,size: 'lg', backdrop: 'static'}).result.then(
      (result) => {
        console.log(`Modal cerrado con: ${result}`);
      },
      (reason) => {
        console.log(`Modal cerrado por: ${reason}`);
      }
    );
  }

  


  // Empresa
  p_tdi_id    : number = 2;
  p_tdi_numero: number = 0;
  p_per_apepat: string = '';
  p_per_apemat: string = '';
  p_per_nombre: string = '';
  p_pai_id    : number = 179;
  p_tpe_id    : number = 2;

  guardarEmpresa() {
    let dataPost = {
      p_tdi_id: this.p_tdi_id,
      p_tdi_numero: this.p_tdi_numero,
      p_per_apepat: this.p_per_apepat,
      p_per_apemat: this.p_per_apemat,
      p_per_nombre: this.p_per_nombre,
      p_pai_id: this.p_pai_id,
      p_tpe_id: this.p_tpe_id,
    };
  
    console.log(dataPost); // Verifica los valores aquí
    // Resto del código...
  }

   // Creamos el formulario con dos campos (RUC y Nombre de Empresa)
  formulario = new FormGroup({
    ruc: new FormControl(''),
    nombreEmpresa: new FormControl(''),
  });

  // Función para guardar la empresa (captura los datos del formulario)
  guardarEmpresa1() {
    console.log('RUC:', this.formulario.get('ruc')?.value);
    console.log('Nombre de la empresa:', this.formulario.get('nombreEmpresa')?.value);
  }
  
}


