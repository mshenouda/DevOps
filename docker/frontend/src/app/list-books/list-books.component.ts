import { Component } from '@angular/core';
import { ApiService } from '../ApiService';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent {
  constructor(private apiservice: ApiService) {}
  
  books: any=[];

  listBooks() {
    this.apiservice.getBooks().subscribe({
      next: (values)=>{this.books = values;},
      error: (error: any)=> {console.error("Error fetching results")},
      complete: ()=> {console.log(`Fetched ${this.books.length} values`)}
    });
  }
}
