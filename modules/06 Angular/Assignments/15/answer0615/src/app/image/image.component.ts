import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../image/image.model';
import { SafeMethodCall } from '@angular/compiler';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() image: Image;
isSmallImg:boolean;
isMediumImg: boolean;
isLargeImg: boolean;

constructor(){
  this.isSmallImg = false;
  this.isMediumImg = false;
  this.isLargeImg = false;
}

ngOnInit() {
}

increse_likes() {
  this.image.likeCount++;
}

get_likes() {
  return this.image.likeCount;
}

setSize{
  if (this.image.likeCount === 0) {
   return "small";
  }
  else if(this.image.likeCount > 0 && this.image.likeCount < 10)
  return "medium";
  else
  return "large"
}

setMediunImg() {
  if (this.image.likeCount > 0 && this.image.likeCount < 10) {
    this.isMediumImg = true;
    this.isLargeImg=false;
    this.isSmallImg=false;
  }
}

setLargeImg() {
  if (this.image.likeCount > 10) {
    this.isLargeImg = true;
    this.isSmallImg=false;
    this.isMediumImg=false;
  }
}
}
