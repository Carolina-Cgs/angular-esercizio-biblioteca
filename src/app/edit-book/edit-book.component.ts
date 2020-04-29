import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  constructor(public service: BookService) { }

  ngOnInit(): void {
  }

  onBookSave() {
    this.service.selectedBook = null;
  }

}
