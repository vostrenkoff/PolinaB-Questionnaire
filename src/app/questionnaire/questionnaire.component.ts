import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-questionnaire',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
  animations: [
    trigger('slide', [
      transition(':enter', [
        style({ transform: '{{enter}}', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ], { params: { enter: 'translateX(100%)' } }),

      transition(':leave', [
        animate('300ms ease-in', style({ transform: '{{leave}}', opacity: 0 }))
      ], { params: { leave: 'translateX(-100%)' } })
    ])
  ]
})
export class QuestionnaireComponent {
  currentIndex = 0;
  direction: 'forward' | 'backward' = 'forward';
  showResults = false;


  questions = [
    {
      question: 'Какой ваш любимый цвет?',
      answers: ['Da', 'Da', 'Da', 'da'],
      selected: ''
    },
    {
      question: 'Какая кухня вам нравится больше всего?',
      answers: ['Net', 'da', 'nu', 'nu'],
      selected: ''
    },
    {
      question: 'Какой вид транспорта вы предпочитаете?',
      answers: ['nu', 'nu', 'nu', 'nu'],
      selected: ''
    },
    {
      question: 'Какой вид транспорта вы предпочитаете?',
      answers: ['nu', 'da', 'Поезд', 'nu'],
      selected: ''
    },
    {
      question: 'Какой вид транспорта вы предпочитаете?',
      answers: ['ne', 'nu', 'da', 'ne'],
      selected: ''
    },
    {
      question: 'Какой вид транспорта вы предпочитаете?',
      answers: ['ne', 'da', 'Поезд', 'nu'],
      selected: ''
    },
    {
      question: 'Какой вид транспорта вы предпочитаете?',
      answers: ['da', 'Net', 'nu', 'nu'],
      selected: ''
    },
    {
      question: 'Какой вид транспорта вы предпочитаете?',
      answers: ['Net', 'da', 'Net', 'nu'],
      selected: ''
    }
  ];
  isAnswerSelected(): boolean {
    return this.questions[this.currentIndex].selected !== '';
  }
  
  getSlideParams() {
    return {
      value: '',
      params: {
        enter: this.direction === 'forward' ? 'translateX(100%)' : 'translateX(-100%)',
        leave: this.direction === 'forward' ? 'translateX(-100%)' : 'translateX(100%)'
      }
    };
  }

  next() {
    if (this.currentIndex < this.questions.length - 1) {
      this.direction = 'forward';
      this.currentIndex++;
    } else {
      this.showResults = true;
    }
  }
  

  previous() {
    if (this.currentIndex > 0) {
      this.direction = 'backward';
      this.currentIndex--;
    }
  }
}
