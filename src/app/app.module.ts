import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componests/shared/header/header.component';
import { FooterComponent } from './componests/shared/footer/footer.component';
import { NavComponent } from './componests/shared/nav/nav.component';
import { BookstoreAppComponent } from './componests/bookstore-app/bookstore-app.component';
import { FiltersComponent } from './componests/bookstore-app/filters/filters.component';
import { ProductListComponent } from './componests/bookstore-app/product-list/product-list.component';
import { ProductItemComponent } from './componests/bookstore-app/product-list/product-item/product-item.component';
import { BookService } from './componests/bookstore-app/product-list/product-list.component.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BookstoreAppComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
