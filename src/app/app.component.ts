import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LanguagesService } from './services/languages.service';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  constructor(
    private LanguagesService: LanguagesService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }
  title = 'NSIT';
  textDirection: any;
  currentLang: string;
  staticWebsiteCredentials = {
    email: 'developer@mophx.com',
    pass: 'Qh28xDqiwoS0',
  };

  ngOnInit(): void {
    this.LanguagesService.getCurrentLang()
      .subscribe({
        next: (lang: string) => {
          this.currentLang = lang;
          document.documentElement.lang = lang;
        },
      });

    this.router.events.subscribe({
      next: (event) => {
        if (event instanceof NavigationStart) {
          this.spinner.show();
        }
        if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {
          this.spinner.hide();
        }
      },
    });
    this.textDirection = this.LanguagesService.getCurrentLanguageDirection();
  }
}
