import {DialogController} from 'aurelia-dialog';
import {inject, bindable} from 'aurelia-framework';

@inject(DialogController)
export class Prompt {
    
  @bindable answer;
  
  answerChanged() {
      console.log("prompt: answer changed");
  }


  constructor(controller) {
    this.controller = controller;
    this.answer = null;

    controller.settings.lock = false;
  }

  activate(question) {
    this.question = question;
  }
}