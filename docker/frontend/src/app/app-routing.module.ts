import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListBooksComponent} from '../app/list-books/list-books.component';

const routes: Routes = [
  {path: 'books', component: ListBooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
