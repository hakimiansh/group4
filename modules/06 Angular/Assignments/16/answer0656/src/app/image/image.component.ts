import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
@Input() imageSrc:string;
@Input() imgSrcIndex:number;
@Output() showBigImgEvent=new EventEmitter<number>();;
  constructor() { }

  ngOnInit() {
    
  }

  showBigImage(){
    this.showBigImgEvent.emit(this.imgSrcIndex);
  }

}
