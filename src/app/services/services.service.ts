import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private jsonUrl = 'assets/files/services.json';

  constructor() { }

  getData(): Promise<any> {
    return fetch(this.jsonUrl).then(response => response.json());
  }
  
}
