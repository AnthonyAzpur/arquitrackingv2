import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone: true,  // Si el Dashboard también es standalone
 
})
export class DashboardComponent {
  constructor(private appComponent: AppComponent) {
    
  }
}
