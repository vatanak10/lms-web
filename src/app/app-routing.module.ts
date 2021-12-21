
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookShelfComponent } from './book-shelf/book-shelf.component';
import { ManageBookComponent } from './manage-book/manage-book.component';
import { ReadMoreComponent } from './read-more/read-more.component';

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
