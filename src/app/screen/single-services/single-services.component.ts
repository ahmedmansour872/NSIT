import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-single-services',
  templateUrl: './single-services.component.html',
  styleUrls: ['./single-services.component.scss']
})
export class SingleServicesComponent {
  singleServices: any
  someDes: string = ''
  constructor(private $sev: ServicesService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id')
    this.$sev.getData().then(data => {
      this.singleServices = data.services.find((ele: any) => ele.id == id)
      this.someDes = this.singleServices.description.slice(0, 100)
    })
  }
}
