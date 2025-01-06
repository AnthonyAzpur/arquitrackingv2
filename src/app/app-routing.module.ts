import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project imports
import { AuthGuard } from './guards/auth.guard'; // Asegúrate de importar el guard
import { LoginComponent } from './pages/login/login.component'; // Asegúrate de importar el LoginComponent
import { DashboardComponent } from './pages/dashboard/dashboard.component'; // Asegúrate de importar el DashboardComponent

const routes: Routes = [
  {
    path: '',  // Ruta por defecto
    redirectTo: '/login',  // Redirige a la página de login
    pathMatch: 'full'  // Asegura que redirija solo si no hay otras rutas
  },
  {
    path: 'login',
    component: LoginComponent,  // Página de login directamente
  },
  {
    path: 'dashboard',
    component: DashboardComponent,  // Ruta protegida al Dashboard
    canActivate: [AuthGuard], // Aplica el guardia de autenticación
  },
  {
    path: '**', // Redirige cualquier ruta no encontrada al login
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
