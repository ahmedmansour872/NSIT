import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ScreenComponent } from './screen.component';
import { ServicesComponent } from './services/services.component';
import { SingleServicesComponent } from './single-services/single-services.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  {
    path: '', component: ScreenComponent,
    children: [
      { path: 'home', component: HomepageComponent },
      { path: 'about-us', component: AboutComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'service/:id', component: SingleServicesComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'partners', component: PartnersComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScreenRoutingModule { }
