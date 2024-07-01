import { Component } from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent {
  data: any[] = [
    { image: 'assets/images/about.jpg' },
    { image: 'assets/images/about.jpg' },
    { image: 'assets/images/about.jpg' },
    { image: 'assets/images/about.jpg' }
  ]
  owlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplayHoverPause: false,
    autoplayTimeout: 2500,
    autoplaySpeed: 600,

    navSpeed: 60,
    navText: [
      '',
      ''
    ],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      760: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
    // nav: true,
  };
}
