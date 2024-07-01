import { Component } from '@angular/core';
import { LanguagesService } from '../services/languages.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss'],
})
export class ScreenComponent {
  textDirection: Observable<string>;
  constructor(private LanguagesService: LanguagesService) {
    this.textDirection = this.LanguagesService.getCurrentLanguageDirection();
  }
}
