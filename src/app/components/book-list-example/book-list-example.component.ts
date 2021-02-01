import { Component, OnInit } from '@angular/core';
import { IBook } from '../book';
import { BookData } from './mock-data';

@Component({
  selector: 'app-book-list-example',
  templateUrl: './book-list-example.component.html',
  styleUrls: ['./book-list-example.component.scss']
})
export class BookListExampleComponent implements OnInit {

  books: IBook[];
  selectedBooks: IBook[];
  selectedBooksA: IBook[];
  selectedBooksB: IBook[];
  selectedBooksC: IBook[];
  constructor() { }

  ngOnInit(): void {
    this.books = this.fetchBook();
    this.selectedBooks = [];
    this.selectedBooksA = [];
    this.selectedBooksB = [];
    this.selectedBooksC = [];
  }

  fetchBook(): IBook[] {
    return BookData;
  }

  selectBook(book: IBook): void {
    this.selectedBooks.push(book);
    if(book.name == "Continuous Delivery"){
      this.selectedBooksA.push(book);
    }
    if(book.name == "Algorithms"){
      this.selectedBooksB.push(book);
    }
    if(book.name == "The Self-Taught Programmer"){
      this.selectedBooksC.push(book);
    }
  }

}
