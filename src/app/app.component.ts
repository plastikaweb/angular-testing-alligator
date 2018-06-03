import { Component } from '@angular/core';
import { Question } from '../models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  questions: Array<Question>;

  constructor() {
    this.questions = [
      {
        controlType: 'radio',
        id: 'doyou',
        label: 'Do you like pizza?',
        options: [
          { label: 'Yes', value: 1 },
          { label: 'Of course', value: 2 }
        ],
        required: true
      },
      {
        controlType: 'select',
        id: 'favorite',
        label: 'Which is your favorite pizza?',
        options: [
          { label: '', value: 'no-answer' },
          { label: 'Anchovie', value: 'fish' },
          { label: 'Hawaiian', value: 'pineapple-ham' },
          { label: 'Meat Lover\'s', value: 'meat lover' },
          { label: 'Veggie', value: 'vegetable' }
        ],
        required: false
      },
      {
        controlType: 'textarea',
        id: 'more',
        label: 'Gives us your thoughts on pizza:',
        required: false
      }
    ];
  }
}
