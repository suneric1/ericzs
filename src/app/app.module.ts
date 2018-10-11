import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ParticlesCircleComponent } from './particles-circle/particles-circle.component';
import { ParticlesRectComponent } from './particles-rect/particles-rect.component';
import { FireParticlesDirective } from './shared/fireParticles.directive';
import { ProjectComponent } from './project/project.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { ProjectInfoComponent } from './project/project-info/project-info.component';
import { SocialLinksComponent } from './social-links/social-links.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    ParticlesCircleComponent,
    ParticlesRectComponent,
    FireParticlesDirective,
    ProjectComponent,
    ThumbnailComponent,
    ProjectInfoComponent,
    SocialLinksComponent
  ],
  entryComponents: [ParticlesRectComponent, ParticlesCircleComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
