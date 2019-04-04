import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string ;
  imgSrc: string[] ;
  imgsArr = [];

  constructor() {
    this.title = 'answer0615';
    this.imgSrc = ['assets/pic1.jpg', 'assets/pic2.jpg', 'assets/pic3.jpg',
  'assets/pic4.jpg', 'assets/pic5.jpg', 'assets/pic6.jpg', 'assets/pic7.jpg',
  'assets/pic8.jpg', 'assets/pic9.jpg', 'assets/pic10.jpg'];

  }

}
