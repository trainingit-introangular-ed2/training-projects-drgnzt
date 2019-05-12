import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';
import { ViewerComponent } from './viewer/viewer.component';
import { ProjectsRoutingModule } from './projects-routing.module';



@NgModule({
  declarations: [NewComponent, ViewerComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
