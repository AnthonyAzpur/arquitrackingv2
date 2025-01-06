// src/app/pages/dashboard/dashboard-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../../guards/auth.guard';  // Asegúrate de importar correctamente el AuthGuard

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard]  // Protege la ruta con el AuthGuard
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // Usa 'forChild' para rutas hijas
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
