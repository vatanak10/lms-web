import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnDestroy {
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
      icon: 'import_contacts',
      title: 'Book Shelf',
      link: '/'
    },
    {
      icon: 'widgets',
      title: 'Genres',
      link: '.'
    },
    {
      icon: 'person_outline',
      title: 'Authors',
      link: '.'
    },
    {
      icon: 'assignment_outline',
      title: 'Issued Books',
      link: '.'
    },
    {
      icon: 'favorite_outline',
      title: 'Favorite',
      link: '.'
    },
  ];

  botMenu = [
    {
      icon: 'settings_outline',
      title: 'Settings',
      link: '.'
    },
    {
      icon: 'directions_walk_outline',
      title: 'Log Out',
      link: '.'
    },
  ]
}
