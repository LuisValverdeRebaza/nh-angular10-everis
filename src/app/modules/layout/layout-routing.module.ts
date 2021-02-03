import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'books',
        loadChildren: () => import('../books/books.module').then(m => m.BooksModule)
      },
    ]
  },
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
      },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {

}