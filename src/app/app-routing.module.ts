import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: 'example',
    loadChildren: () => import('./modules/example/example.module').then(m => m.ExampleModule)
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
