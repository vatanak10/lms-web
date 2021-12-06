import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  title = 'lms-web';

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  midMenu = [
    {
      icon: 'library_books',
      title: 'Book Shelf',
      link: '/books'
    },
    {
      icon: 'dashboard',
      title: 'Genres',
      link: '.'
    },
    {
      icon: 'person',
      title: 'Authors',
      link: '.'
    },
    {
      icon: 'assignment',
      title: 'Issued Books',
      link: '.'
    },
    {
      icon: 'favorite',
      title: 'Wish List',
      link: '.'
    },
  ];

  botMenu = [
    {
      icon: 'settings',
      title: 'Settings',
    },
    {
      icon: 'directions_walk',
      title: 'Log Out',
    },
  ]
}
