
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './book-page/add-book/add-book.component';
import { BookShelfComponent } from './book-page/book-shelf/book-shelf.component';
import { ManageBookComponent } from './book-page/manage-book/manage-book.component';
import { ReadMoreComponent } from './book-page/read-more/read-more.component';

const routes: Routes = [
 {path: '', redirectTo:'bookshelf', pathMatch:'full'},
 {path: 'bookshelf', component:BookShelfComponent},
 {path: 'bookshelf/add-new-book', component: AddBookComponent},
 {path: 'manage-book', component:ManageBookComponent},
 {path: 'view-book', component:ReadMoreComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
