import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  
  books: Book[] = []
  newTitle:string = ''
  newAuthor:string = ''

  ngOnInit(): void {
    const books = localStorage.getItem('books');
    this.books = books?JSON.parse(books):[]
  }

  addBook(){
    if(this.newTitle.trim.length<=0 && this.newAuthor.trim.length<=0){
      const book: Book = {
        id: Date.now(),
        title: this.newTitle,
        author: this.newAuthor
      }
      this.books.push(book)
      localStorage.setItem('books',JSON.stringify(this.books))
      this.newTitle=''
      this.newAuthor=''
    }
  }

  deleteBook(i:number){
    this.books.splice(i,1)
    localStorage.setItem('books',JSON.stringify(this.books))
  }
}
