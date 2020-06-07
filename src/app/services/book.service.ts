import { Injectable } from '@angular/core';
import { Book } from '../moduls/book';
import { BOOKS } from './mockBooks';
import { Observable, of } from 'rxjs';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[]; // copia del mock BOOKS
  selectedBook: Book;

  constructor(private localStorage:LocalStorageService) {
    // Copio il mock BOOKS perché non lo voglio modificare
    this.books = BOOKS;
   }

  /* getBooks(): Book[] {
    return this.books;
  } */

  getBooks(): Observable<Book[]> {
    this.books = this.localStorage.retrieve('books') || BOOKS;
    return of(this.books) //BOOKS
  }

  addBook(book: Book) {
    // Modifico la mia variabile locale books (e non BOOKS)
    this.books.push(book);
    this.saveBooksInLocalStorage();
  }

  saveBooksInLocalStorage() {
    this.localStorage.store('books', this.books);
  }
}

