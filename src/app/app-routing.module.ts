import { BookShelfComponent } from './book-page/book-shelf/book-shelf.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './book-page/add-book/add-book.component';
import { BookListComponent } from './book-page/book-list/book-list.component';
import { ViewBookComponent } from './book-page/view-book/view-book.component';

const routes: Routes = [
  { path: '', redirectTo: 'bookshelf', pathMatch: 'full' },
  { path: 'bookshelf', component: BookShelfComponent},
  { path: 'bookshelf/add-new-book', component: AddBookComponent},
  { path: 'manage-book-list', component: BookListComponent},
  { path: 'view-book', component: ViewBookComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
