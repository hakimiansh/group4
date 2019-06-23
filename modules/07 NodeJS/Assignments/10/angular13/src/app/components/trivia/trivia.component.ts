import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/service/questions.service';
import { NgForm } from '@angular/forms';


import{Router} from '@angular/router';


@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {
inTopTen:boolean;
  submit: boolean;

  constructor(public questionsService: QuestionsService, private router:Router) {
    this.submit = false;
  }

  ngOnInit() {
  }
  onSubmit(form: NgForm,event:Event) {
event.preventDefault();
    this.questionsService.checkAnswers(form);

    this.inTopTen=this.questionsService.checkTopTen(this.questionsService.correctAnswers);

    this.submit = true;
    // if(ethis.inTopTn)
    // {
    //   // this.router.navigate(['../score-submitter']);
    // }


  }
}
