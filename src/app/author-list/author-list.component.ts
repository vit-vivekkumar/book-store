import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-list',
  imports: [NgFor],
  templateUrl: './author-list.component.html',
  styleUrl: './author-list.component.css'
})


export class AuthorListComponent implements OnInit {
  books: any[] = [];

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.loadAuthor();
  }

  loadBooks() {
    this.authorService.getBooks().subscribe((data: any) => {
      this.books = data;
      console.log(this.books);
    });
  }

  deleteBook(id: number) {
    this.authorService.deleteBook(id).subscribe(() => {
      this.loadBooks();
    });
  }
}
