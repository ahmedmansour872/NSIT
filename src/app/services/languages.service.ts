import {
  ApplicationRef,
  Injectable,
  Renderer2,
  RendererFactory2,
} from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguagesService {
  private currentLanguageSubject: BehaviorSubject<string>;
  private renderer: Renderer2;

  constructor(
    private translate: TranslateService,
    private applicationRef: ApplicationRef,
    private router: Router,
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    const savedLang = localStorage.getItem('language') || 'en';
    this.currentLanguageSubject = new BehaviorSubject<string>(savedLang);
    this.setFontFamily(savedLang);
  }

  private reloadApp() {
    const currentUrl = this.router.url;
    this.router
      .navigateByUrl('/refresh', { skipLocationChange: true })
      .then(() => {
        this.router.navigateByUrl(`${currentUrl}`);
      });

    this.applicationRef.tick();
  }

  setCurrentLang(language: string) {
    localStorage.setItem('language', language);
    this.translate.use(language);
    this.currentLanguageSubject.next(language);
    this.setFontFamily(language);
    this.reloadApp();
  }

  init() {
    const savedLang = localStorage.getItem('language') || 'en';
    this.translate.setDefaultLang('en');
    this.translate.use(savedLang);
  }

  getCurrentLang() {
    return this.currentLanguageSubject.asObservable();
  }

  getCurrentLangSync() {
    return this.currentLanguageSubject.value;
  }

  getCurrentLanguageDirection() {
    return this.currentLanguageSubject.pipe(
      map((language: string) => (language === 'ar' ? 'rtl' : 'ltr'))
    );
  }
  initialize() {
    const savedLang = localStorage.getItem('language') || 'en';
    this.currentLanguageSubject = new BehaviorSubject<string>(savedLang);
    this.translate.setDefaultLang('en');
    this.translate.use(savedLang);
  }
  getFontFamily(selectedFontFamily: string): string {
    return selectedFontFamily;
  }
  setFontFamily(language: string): void {
    let mainFontFamily: string;
    let headingFontFamily: string;
    let paragraphFontFamily: string;

    switch (language) {
      case 'en':
        mainFontFamily = '"Geologica", sans-serif';
        headingFontFamily = '"Geologica", sans-serif';
        paragraphFontFamily = '"Geologica", sans-serif';
        break;
      case 'ar':
        mainFontFamily = '"Tajawal", sans-serif';
        headingFontFamily = '"Tajawal", sans-serif';
        paragraphFontFamily = '"Tajawal", sans-serif';
        break;
      default:
        // Default to English fonts for other languages
        mainFontFamily = '"Geologica", sans-serif';
        headingFontFamily = '"Geologica", sans-serif';
        paragraphFontFamily = '"Geologica", sans-serif';
        break;
    }
    this.renderer.setStyle(document.body, 'font-family', mainFontFamily);
    this.renderer.setStyle(
      document.documentElement,
      '--heading-font-family',
      headingFontFamily
    );
    this.renderer.setStyle(
      document.documentElement,
      '--paragraph-font-family',
      paragraphFontFamily
    );
  }

  // updateHeadingFontFamily(language: string) {
  //   for (let i = 1; i <= 6; i++) {
  //     const headingVariable = `--font-family-heading-${i}`;
  //     const currentHeadingStyle = getComputedStyle(
  //       document.documentElement
  //     ).getPropertyValue(headingVariable);
  //     const fontFamilyForArabic = '"Cairo", sans-serif;';
  //     const updatedParagraphFontFamily =
  //       language === 'ar' ? fontFamilyForArabic : currentHeadingStyle;
  //     document.documentElement.style.setProperty(
  //       `--font-family-heading-${i}`,
  //       updatedParagraphFontFamily
  //     );
  //   }
  // }
  // updateParagraphFontFamily(language: string) {
  //   const paragraphVariable = `--font-family-paragraph`;

  //   const currentParagraphStyle = getComputedStyle(
  //     document.documentElement
  //   ).getPropertyValue(paragraphVariable);
  //   const fontFamilyForArabic = '"Tajawal", sans-serif;';
  //   const updatedParagraphFontFamily =
  //     language === 'ar' ? fontFamilyForArabic : currentParagraphStyle;
  //   document.documentElement.style.setProperty(
  //     '--font-family-paragraph',
  //     updatedParagraphFontFamily
  //   );
  // }
}
