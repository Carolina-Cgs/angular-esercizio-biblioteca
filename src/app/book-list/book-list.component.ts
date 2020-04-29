import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../moduls/book';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    let myObservable: Observable<Book[]> =  this.bookService.getBooks();
    myObservable.subscribe(data => this.books = data);
    //this.books = this.bookService.getBooks();
  }

  editBook(book: Book): void {
    this.bookService.selectedBook = book;
  }
}
