import { LanguagesService } from 'src/app/services/languages.service';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  screenWidth = window.innerWidth;
  footerData: any;
  chosenLanguage: any;
  socialMediaData: any[] = [];
  allCategories: any[] = [];
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }
  constructor(
    private LanguagesService: LanguagesService,
  ) {}

  ngOnInit() {
    this.LanguagesService.getCurrentLang().subscribe((res) => {
      this.chosenLanguage = res;
      res === 'en'
        ? (this.chosenLanguage = 'English')
        : (this.chosenLanguage = 'Arabic');
    });
    this.fetchSocial();
    this.fetchAllCategories();
  }

  private fetchSocial() {
    // this.socialMediaService.fetchSocialMedia().subscribe({
    //   next: (res: any) => {
    //     this.socialMediaData = res.Social;
    //   },
    // });
  }

  fetchAllCategories() {
    // this.CategoriesService.fetchAllCategories().subscribe({
    //   next: (res: any) => {
    //     this.allCategories = res.records;
    //   },
    // });
  }
}
