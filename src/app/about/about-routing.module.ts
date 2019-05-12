import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LinksComponent } from './about/links/links.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    children: [
      {
      path: 'links',
      component: LinksComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
