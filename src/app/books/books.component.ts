import { Component, OnInit } from '@angular/core';

interface Book{
  name: string;
  author: string;
  src: string;
}
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books:Book[] = [
  {name:  "Clean Code",
  author: "David Thomas",
  src: "https://images-eu.ssl-images-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_ML2_.jpg", },
  {name:  "Pragmatic Programmer",
  author: "Robert C Martin",
  src: "https://m.media-amazon.com/images/P/B07VRS84D1.01._SCLZZZZZZZ_SX500_.jpg" }
];

myName: string = "";
isShowing: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
