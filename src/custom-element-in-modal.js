import {bindable} from 'aurelia-framework';

export class CustomElementInModal {
  
  @bindable answer;
  
  answerChanged() {
      console.log("custom-element-in-modal.js: answer changed")
  }
}