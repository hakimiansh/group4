import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TriviaComponent } from './components/trivia/trivia.component';
import { QuestionComponent } from './components/question/question.component';
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from './components/header/header.component';
import { ScoreSubmitterComponent } from './components/score-submitter/score-submitter.component';

@NgModule({
  declarations: [
    AppComponent,
    TriviaComponent,
    QuestionComponent,
    HeaderComponent,
    ScoreSubmitterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
