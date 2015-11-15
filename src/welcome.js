import {Prompt} from './prompt';
import {DialogService} from 'aurelia-dialog';
import {bindable, inject} from 'aurelia-framework';

@inject(DialogService)
export class Welcome {

  constructor(dialogService) {
    this.dialogService = dialogService;
  }
  
  @bindable answer;
  
  answerChanged() {
      console.log("welcome.js: answer changed")
  }

  prompt(question) {
    return this.dialogService.open({viewModel: Prompt, model: question});
  }
}