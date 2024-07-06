import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  allServices: any[] = []
  constructor(private $sev: ServicesService) { }
  ngOnInit() {
    this.$sev.getData().then(data => {
      this.allServices = data.services
    })
  }
}
