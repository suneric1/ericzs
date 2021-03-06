import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    data: { state: 'home' },
    pathMatch: 'full',
  },
  { path: 'contact', component: ContactComponent, data: { state: 'contact' } },
  {
    path: 'projects/:id',
    component: ProjectComponent,
    data: { state: 'project' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
