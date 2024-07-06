import { AfterViewInit, Component } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements AfterViewInit {
  ngAfterViewInit() {
    const options = {
      strings: ['where innovation meets reliability', 'We are a forward-thinking IT services and consulting company dedicated to introducing innovative products and cutting-edge cloud solutions to our clients'],
      typeSpeed: 50,
      backSpeed: 10,
      loop: true
    };

    const typed = new Typed('.typed-element', options);
  }

}
