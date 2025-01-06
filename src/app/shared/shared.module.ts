// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { MenuComponent } from '../components/menu/menu.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    MenuComponent,

  ],
  imports: [CommonModule],
  exports: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    MenuComponent,
  ]
})
export class SharedModule {}
