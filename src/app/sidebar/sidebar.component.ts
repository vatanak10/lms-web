import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  eng = true;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private translate: TranslateService, ) {
    translate.setDefaultLang('en');
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  

  useLanguage(language: string) {
    this.translate.use(language);
    this.eng = !this.eng
    console.log(this.eng);
  }

  midMenu = [
    {
      icon: 'import_contacts',
      title: this.translate.instant('menu.books'),
      link: '.'
    },
    {
      icon: 'widgets',
      title: this.translate.instant('menu.genres'),
      link: '.'
    },
    {
      icon: 'person_outline',
      title: this.translate.instant('menu.authors'),
      link: '.'
    },
    {
      icon: 'assignment_outline',
      title: this.translate.instant('menu.issued'),
      link: '.'
    },
    {
      icon: 'favorite_outline',
      title: this.translate.instant('menu.fav'),
      link: '.'
    },
  ];

  botMenu = [
    {
      icon: 'settings_outline',
      title: this.translate.instant('menu.setting'),
      link: '.'
    },
    {
      icon: 'directions_walk_outline',
      title: this.translate.instant('menu.logout'),
      link: '.'
    },
  ]
}
