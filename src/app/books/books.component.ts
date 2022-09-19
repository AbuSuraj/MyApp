import { Component, OnInit } from '@angular/core';

interface Book{
  name: string;
  author: string;
  src: string;
  price: number;
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
  src: "https://images-eu.ssl-images-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_ML2_.jpg", 
  price: 250
},
  {name:  "Pragmatic Programmer",
  author: "Robert C Martin",
  src: "https://m.media-amazon.com/images/P/B07VRS84D1.01._SCLZZZZZZZ_SX500_.jpg",
price: 200 },
 {
  name: "Javascript for begginers",
  author: "John J. MALANDADO", 
  src: "https://images-na.ssl-images-amazon.com/images/I/51fRKyqPWDL.jpg",
  price: 550
 },
 {
  name: "Eloquent javaScript",
  author: "marjin haverbeke", 
  src: "https://hackr.io/blog/media/eloquent-javascript-a-modern-introduction-to-programming-min.png",
  price: 750
 },
 {
  name: "Begginer C++ praogramming",
  author: "Packt", 
  src: "https://i.pinimg.com/originals/7b/6b/86/7b6b86e343aa655febd561ebb759aeae.png",
  price: 150
 },
 {
  name: "effective modern c++",
  author: "Scott Meyers", 
  src: "https://hackr.io/blog/uploads/images/1570190912RUSrlpIo0u.jpg",
  price: 150
 }
];

myName: string = "";
isShowing: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
