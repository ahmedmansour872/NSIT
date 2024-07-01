import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerComponent } from './partner/partner.component';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';
import { HeadSliderComponent } from './head-slider/head-slider.component';

@NgModule({
  declarations: [
    PartnerComponent,
    ContactUsFormComponent,
    HeadSliderComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    PartnerComponent,
    ContactUsFormComponent,
    HeadSliderComponent
  ],
})
export class SharedModule {}
