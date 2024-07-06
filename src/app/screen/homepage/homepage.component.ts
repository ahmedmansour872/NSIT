import { ServicesService } from './../../services/services.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})

export class HomepageComponent {
  allServices: any[] = []
  constructor(private $sev: ServicesService) { }
  ngOnInit() {
    this.$sev.getData().then(data => {
      this.allServices = data.services
    })
  }
}
