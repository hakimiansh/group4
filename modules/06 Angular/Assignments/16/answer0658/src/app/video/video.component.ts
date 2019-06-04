import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../video.model';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent{
@Input() videoI:Video;
@Output() videoChangeEvent=new EventEmitter<Video>();
  constructor() { }

  videoChange(){
    this.videoChangeEvent.emit(this.videoI);
  }
}
