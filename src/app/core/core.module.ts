import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { MainComponent } from './shell/main/main.component';
import { FooterComponent } from './shell/footer/footer.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectsComponent } from '../projects/projects/projects.component';


@NgModule({
  declarations: [ShellComponent, HeaderComponent, MainComponent, FooterComponent, NotFoundComponent, ProjectsComponent],
  imports: [CommonModule, RouterModule],
  exports: [ShellComponent]
})
export class CoreModule {
}
