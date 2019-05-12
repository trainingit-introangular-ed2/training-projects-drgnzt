import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
//import { AboutComponent } from './about/about/about.component';
//import { ProjectsComponent } from './projects/projects/projects.component';

const routes: Routes = [
    {
    path: '',
    loadChildren: './home/home.module#HomeModule'
    },
    {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
    //component: AboutComponent
    },
    {
    path: 'projects',
    loadChildren: './projects/projects.module#ProjectsModule'
    //component: ProjectsComponent
    },
    {
    path: 'not-found',
    component: NotFoundComponent
    },
    {
      path: '**',
      redirectTo: 'not-found'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
