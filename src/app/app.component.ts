import { Component } from '@angular/core';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QuestionnaireComponent],
  template: `<app-questionnaire></app-questionnaire>`
})
export class AppComponent {}
