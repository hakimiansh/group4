import { Component, OnInit } from '@angular/core';
import { Video } from './video.model';
import {VIDEOS} from './mock-videos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  videos:Video[];
  player: Video;

  constructor(){
    this.player={
      title:"",
      description:"",
      url:"",
      artist:"",
      imgSrc:""
    }
  }

  ngOnInit(): void {
    this.videos=VIDEOS;
    let dataStorge = JSON.parse(localStorage.getItem("Itube"));
    //this.dataStorge = JSON.parse(localStorage.getItem("Itube"));
    if (dataStorge) {
      this.player =
        {
          title: dataStorge.title,
          description: dataStorge.description,
          url: dataStorge.url,
          artist: dataStorge.artist,
          imgSrc: dataStorge.imgSrc
        }
    }
    else{
      this.player = this.videos[0];
    }
  }

  onVideoChangeEvent(video:Video){
    this.player=video;
    localStorage.setItem("Itube",JSON.stringify(video));
  }

  
}
