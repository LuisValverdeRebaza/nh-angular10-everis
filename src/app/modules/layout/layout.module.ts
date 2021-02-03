import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    LayoutAdminComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
  ]
})
export class LayoutModule {

}
