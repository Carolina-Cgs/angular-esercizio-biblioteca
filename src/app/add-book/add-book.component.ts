import { Component, OnInit } from '@angular/core';

import {  } from '@angular/forms';
import { Book } from '../moduls/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  
  bookToBeAdded: Book = {
    ISBN: '',
    title: '',
    author: '',
    publisher:'',
    publicationDate:'',
    coverUrl:'',
  }

  constructor(private bookService: BookService) {
    
  }

  ngOnInit(): void {
  }

  onBookSubmit() {
    this.bookService.addBook(this.bookToBeAdded);
  }

}
