import { Routes } from '@angular/router';
import { AuthorListComponent } from './author-list/author-list.component';
import { BookListComponent } from './book-list/book-list.component';
import { GenreListComponent } from './genre-list/genre-list.component';
import { BookFormComponent } from './book-form/book-form.component';

export const routes: Routes = [
    { path: 'books', component: BookListComponent },
    { path: 'authors', component: AuthorListComponent },
    { path: 'genres', component: GenreListComponent },
    { path: 'add-book', component: BookFormComponent },
    { path: '', redirectTo: '/books', pathMatch: 'full' }
];