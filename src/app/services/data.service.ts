import { Injectable } from '@angular/core';
import { Question } from '../models/Question'

@Injectable()
export class DataService {

  questions : Question[];
  constructor() { 
    this.questions=[
      {
        text: 'What is your name?',
        answer: 'My name is Saw!',
        hide: true
      },
      {
        text: 'What is your favourite color?',
        answer: 'My favorite color is red!',
        hide: true
      },
      {
        text: 'What is your favorite language?',
        answer: 'My favorite language is JS!',
        hide: true
      }
    ];
  }

  getQuestion(){
    return this.questions;
  }
  addQuestion(question:Question){
    this.questions.unshift(question);
  }
}
