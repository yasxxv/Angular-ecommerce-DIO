import { Component, OnInit } from '@angular/core';
import { BookService } from './product-list.component.service';
import { Book } from './model/Book';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: Array<Book> = [];
  bookService: BookService;

  constructor(  bookService : BookService) {
    this.bookService = bookService;
   }

  ngOnInit(): void {

    this.bookService.getBook().subscribe((data => {
      this.livros = this.formataPrecos(data.books); //Coloca apenas os 6 primeiros livros na pagina.
    }))
  }

  //função criada para tirar simbolo do dolar e formatar a variavel preco para number.
  formataPrecos(lista: Array<Book>) {
    for (let i = 0; i < lista.length; i++) {
      const precoSemSimbolo = lista[i].price.substring(1);
      lista[i].priceInNumber = Number(precoSemSimbolo);
    }
    return lista;
  }
}


