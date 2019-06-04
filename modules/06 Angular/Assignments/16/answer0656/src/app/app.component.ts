import { Component, OnInit } from '@angular/core';
import { imagesDB } from '../assets/mock-images';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'answer0656';

  images: string[];
  imgSrcIndex: number;

  constructor() {
    this.images = [];
    this.imgSrcIndex = 0;

  }

  ngOnInit() {
    this.images = imagesDB;
    this.imgSrcIndex = Number(localStorage.getItem("imgSrcIndex"));
    this.imgSrcIndex = this.imgSrcIndex ? this.imgSrcIndex : 0;
  }

  saveData() {
    localStorage.setItem("imgSrcIndex", this.imgSrcIndex.toString());
  }

  showImage(d: string) {
    switch (d) {
      case "l": if (this.imgSrcIndex === this.images.length - 1) {
        return;
      }
      else {
        this.imgSrcIndex++;
        this.saveData();
      }
        break;
      case "r": if (this.imgSrcIndex === 0) { return; }
      else {
      this.imgSrcIndex--;
        this.saveData();
      }
    }
  }

  onshowBigImg(imgSrcIndex: number){
    this.imgSrcIndex=imgSrcIndex;
    this.saveData();
  }
}
