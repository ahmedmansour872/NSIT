import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-head-slider',
  templateUrl: './head-slider.component.html',
  styleUrls: ['./head-slider.component.scss']
})
export class HeadSliderComponent {
  @Input({ required: true }) data: { photo: string, title: string, description: string }
}
