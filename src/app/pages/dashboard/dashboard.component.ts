import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router'; // Importa RouterModule

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],  // Corregido styleUrl -> styleUrls
  standalone: true,
  imports: [SharedModule, RouterModule]  // Agrega RouterModule a los imports
})
export class DashboardComponent {
  constructor(private appComponent: AppComponent) {
    // Lógica del componente
  }
}
