import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project imports
import { AuthGuard } from './guards/auth.guard'; // Asegúrate de importar el guard
import { LoginComponent } from './pages/login/login.component'; // Asegúrate de importar el LoginComponent
import { DashboardComponent } from './pages/dashboard/dashboard.component';  // Cambiado a importación con {}
import ConsultaComponent from './pages/empresa/consulta/consulta.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/login',  
    pathMatch: 'full'  
  },
  {
    path: 'login',
    component: LoginComponent,  // Asegúrate de redirigir al LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]  // Protege la ruta con el AuthGuard
  },
  {
    path: '**',  // Redirige cualquier ruta no encontrada al login
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}