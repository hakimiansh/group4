import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/service/questions.service';
import { async } from 'q';

@Component({
  selector: 'app-score-submitter',
  templateUrl: './score-submitter.component.html',
  styleUrls: ['./score-submitter.component.css']
})
export class ScoreSubmitterComponent implements OnInit {
name:string;
score:number;

  constructor( public questionsService: QuestionsService) {
    this.score= questionsService.correctAnswers;

  }

  ngOnInit() {
  }
  async sendToServer()

  {
    console.log("name",this.name);
    console.log("name",this.score);
    const url='http://localhost:8080';
    await fetch(url,{
      method:'POST',
      headers:{'content-Type':'application/json'},
      body:JSON.stringify({
        score: this.score,
        name: this.name
      })
    });
  }

}
