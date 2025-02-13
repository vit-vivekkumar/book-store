import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:8000/api/books/';

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get(this.apiUrl);
  }

  createBook(book: any) {
    return this.http.post(this.apiUrl, book);
  }

  updateBook(id: number, book: any) {
    return this.http.put(`${this.apiUrl}${id}/`, book);
  }

  deleteBook(id: number) {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
}