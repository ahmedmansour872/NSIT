import { LanguagesService } from './../../services/languages.service';
import {
  Component,
  HostListener,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  mobileView = false;
  screenWidth: any = window.innerWidth;
  screenheight: any = window.scrollY;
  color: boolean = false;
  currentLang: string;
  chosenLanguage: string;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.screenheight = window.scrollY;
  }

  constructor(
    private LanguagesService: LanguagesService,
  ) { }

  ngOnInit(): void {
    this.LanguagesService.getCurrentLang().subscribe((res) => {
      this.chosenLanguage = res;
      res === 'en'
        ? (this.chosenLanguage = 'English')
        : (this.chosenLanguage = 'Arabic');
    });

  }

  hideMobileMenu(): void {
    this.color = !this.color;
  }

  changeLang(language: string) {
    this.LanguagesService.setCurrentLang(language);
    language === 'en'
      ? (this.chosenLanguage = 'English')
      : (this.chosenLanguage = 'Arabic');
  }

}
