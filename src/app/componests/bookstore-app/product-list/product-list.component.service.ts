import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Book} from "./model/Book";
import { Observable,} from 'rxjs';
import { BookList } from "./model/book-list";



// export const books: Book[] = [
//     { id: '1', name: 'Book1' , price: 10, quantity: 1, category: "Acao", img:"img1"},
//     { id: '2', name: 'Book2' , price: 10, quantity: 1, category: "Acao", img:"img2"},
//     { id: '3', name: 'Book3' , price: 10, quantity: 1, category: "Acao", img:"img3"},

//   ];

@Injectable()


export class BookService {

  private url = 'https://api.itbook.store/1.0/new';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  }
    
   constructor( private http: HttpClient){}
    // getBooks(){
    //     return books;
    // }

    getBook():Observable<BookList>{
      return this.http.get<BookList>(this.url) ;
    }

}
