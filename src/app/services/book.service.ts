import { Injectable } from '@angular/core';
import { Book } from '../moduls/book';
import { BOOKS } from './mockBooks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[]; // copia del mock BOOKS
  selectedBook: Book;

  constructor() {
    // Copio il mock BOOKS perché non lo voglio modificare
    this.books = BOOKS;
   }

  /* getBooks(): Book[] {
    return this.books;
  } */

  getBooks(): Observable<Book[]> {
    return of(this.books) //BOOKS
  }

  addBook(book: Book) {
    // Modifico la mia variabile locale books (e non BOOKS)
    this.books.push(book);
  }
}

