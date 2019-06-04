import { Component, Input } from '@angular/core';
import { Video } from '../video.model';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent {
@Input() videoDetailsI:Video;
  constructor() { }


}
