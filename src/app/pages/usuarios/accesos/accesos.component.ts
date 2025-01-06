import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-accesos',
  standalone: true,
  imports: [],
  templateUrl: './accesos.component.html',
  styleUrl: './accesos.component.css'
})
export class AccesosComponent {
  constructor(private appComponent: AppComponent , private modalService: NgbModal) {
    this.appComponent.login = false;
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
}