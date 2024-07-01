import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenRoutingModule } from './screen-routing.module';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { ScreenComponent } from './screen.component';
import { TranslateModule } from '@ngx-translate/core';
import { HeadComponent } from './head/head.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { SingleServicesComponent } from './single-services/single-services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PartnersComponent } from './partners/partners.component';

@NgModule({
  declarations: [
    ScreenComponent,
    HomepageComponent,
    HeadComponent,
    AboutComponent,
    ServicesComponent,
    SingleServicesComponent,
    ContactUsComponent,
    PartnersComponent,
  ],
  imports: [
    CommonModule,
    ScreenRoutingModule,
    SharedModule,
    CoreModule,
    RouterModule,
    TranslateModule,
  ],
})
export class ScreenModule { }
