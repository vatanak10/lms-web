import { FilterPipe } from './filter/filter.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';

import { BookListComponent } from './book-page/book-list/book-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BookShelfComponent } from './book-page/book-shelf/book-shelf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from './book-page/add-book/add-book.component';
import { ViewBookComponent } from './book-page/view-book/view-book.component';
import { AuthorListComponent } from './author-page/author-list/author-list.component';
import { AddAuthorComponent } from './author-page/add-author/add-author.component';
import { ItemService } from './services/item.service';
import { AuthorService } from './services/author.service';

const appRoutes: Routes = [
  {path: '', component: BookShelfComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BookShelfComponent,
    FilterPipe,
    AddBookComponent,
    BookListComponent,
    ViewBookComponent,
    AuthorListComponent,
    AddAuthorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatDividerModule,
    HttpClientModule,
    MatTableModule,

    RouterModule.forRoot(appRoutes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [ItemService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
