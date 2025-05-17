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


  tshirtDescriptionIndex: number = -1;
  hasChosenBInTshirt = false;
  descriptions = [
    `• You're shopping for a basic T-shirt.
• A lenient return policy makes it easy to return the product if you're not satisfied — it's more convenient and customer-friendly.
• A strict return policy is less flexible — returns may be limited or harder to complete, you can incur some extra costs, and in general, the policy is less convenient.
• Please choose the option you would prefer if you were making this purchase.`,

    `• You're shopping for a basic T-shirt.
• This T-shirt was highly evaluated by other online customers
• A lenient return policy makes it easy to return the product if you're not satisfied — it's more convenient and customer-friendly.
• A strict return policy is less flexible — returns may be limited or harder to complete, you can incur some extra costs, and in general, the policy is less convenient.
• Please choose the option you would prefer if you were making this purchase.`,

    `• You're shopping for a basic T-shirt.
• This T-shirt had average evaluation by other online customers (not too good, not too bad)
• A lenient return policy makes it easy to return the product if you're not satisfied — it's more convenient and customer-friendly.
• A strict return policy is less flexible — returns may be limited or harder to complete, you can incur some extra costs, and in general, the policy is less convenient.
• Please choose the option you would prefer if you were making this purchase.`,

    `• You're shopping for a basic T-shirt.
• This T-shirt was badly evaluated by other online customers
• A lenient return policy makes it easy to return the product if you're not satisfied — it's more convenient and customer-friendly.
• A strict return policy is less flexible — returns may be limited or harder to complete, you can incur some extra costs, and in general, the policy is less convenient.
• Please choose the option you would prefer if you were making this purchase.`
  ];

  deskDescriptionIndex: number = -1;
  hasChosenBInDesk = false;
  deskDescriptions = [
    `•	You're shopping for an office desk / working table.
•	A lenient return policy makes it easy to return the product if you're not satisfied — it's more convenient and customer-friendly.
•	A strict return policy is less flexible — returns may be limited or harder to complete, you can incure some extra costs, and in general, the policy is less convenient.
•	Please choose the option you would prefer if you were making this purchase.
`,

    `• You're shopping for an office desk / working table.
•	This office desk was highly evaluated by other online customers 
•	A lenient return policy makes it easy to return the product if you're not satisfied — it's more convenient and customer-friendly.
•	A strict return policy is less flexible — returns may be limited or harder to complete, you can incure some extra costs, and in general, the policy is less convenient.
•	Please choose the option you would prefer if you were making this purchase.
`,

    `• You're shopping for an office desk / working table.
•	This office desk had average evaluation by other online customers (not too good, not too bad)
•	A lenient return policy makes it easy to return the product if you're not satisfied — it's more convenient and customer-friendly.
•	A strict return policy is less flexible — returns may be limited or harder to complete, you can incure some extra costs, and in general, the policy is less convenient.
•	Please choose the option you would prefer if you were making this purchase.
`,

    `• You're shopping for an office desk / working table.
•	This office desk was badly evaluated by other online customers
•	A lenient return policy makes it easy to return the product if you're not satisfied — it's more convenient and customer-friendly.
•	A strict return policy is less flexible — returns may be limited or harder to complete, you can incure some extra costs, and in general, the policy is less convenient.
•	Please choose the option you would prefer if you were making this purchase.
`
  ];
  tvDescriptionIndex: number = -1;
  hasChosenBInTV = false;
  tvDescriptions = [
    `• You're shopping for a fancy TV.
•	A lenient return policy makes it easy to return the product if you're not satisfied — it's more convenient and customer-friendly.
•	A strict return policy is less flexible — returns may be limited or harder to complete, you can incure some extra costs, and in general, the policy is less convenient.
•	Please choose the option you would prefer if you were making this purchase.
`,

    `• You're shopping for a fancy TV.
•	This TV was highly evaluated by other online customers 
•	A lenient return policy makes it easy to return the product if you're not satisfied — it's more convenient and customer-friendly.
•	A strict return policy is less flexible — returns may be limited or harder to complete, you can incure some extra costs, and in general, the policy is less convenient.
•	Please choose the option you would prefer if you were making this purchase.

`,

    `• You're shopping for a fancy TV.
•	This TV had average evaluation by other online customers (not too good, not too bad)
•	A lenient return policy makes it easy to return the product if you're not satisfied — it's more convenient and customer-friendly.
•	A strict return policy is less flexible — returns may be limited or harder to complete, you can incure some extra costs, and in general, the policy is less convenient.
•	Please choose the option you would prefer if you were making this purchase.
`,

    `• You're shopping for a fancy TV.
•	This TV was badly evaluated by other online customers
•	A lenient return policy makes it easy to return the product if you're not satisfied — it's more convenient and customer-friendly.
•	A strict return policy is less flexible — returns may be limited or harder to complete, you can incure some extra costs, and in general, the policy is less convenient.
•	Please choose the option you would prefer if you were making this purchase.
`
  ];

  questions = [
    {
      type: 'intro',
      question: 'Introduction',
      description: 'Welcome and thank you for participating in this survey Your responses will be temporarily stored and analyzed anonymously. The collected data will be used solely for academic research in the context of a master`s thesis and will not be shared with any third parties. By ticking the box below, you confirm that you understand this and give your consent to participate.',
      fields: {
        // name: '',
        // email: '',
        consent: false
      }
    },
    
    {
      type: 'info',
      question: 'What to expect',
      description: `In this short and interactive experiment, you will step into the shoes of an online shopper deciding whether or not to purchase certain items. The experiment consists of two short stages:
    
1. A quick game to measure your preferences in decision-making.
2. A few rounds of shopping tasks across three different product categories.
    
The whole experience takes about 5 minutes. At the end, two randomly selected participants (out of all participants who filled in the survey) will receive a monetary prize.
    
As a fun bonus, you'll also receive a personalized result revealing “what type of shopper you are.” Try to answer thoughtfully — the more accurate your answers, the more meaningful your result will be.
    
Ready to find out more about yourself?`,
      fields: {
        consent: false
      }
    },
    {
      type: 'info',
      question: 'First phase rules',
      description: `Welcome to the first phase of the experiment! In this stage, you will see a series of paired options. Each option represents a lottery with a chance to win a certain amount of money.

For each row, you must choose either Option A or Option B:

•	Option A is the safer choice: it offers a smaller reward with less risk.
•	Option B is the riskier choice: it offers a chance of a higher reward, but also a higher chance of getting nothing.

Your task is to go through the list and make your choices for each pair.
There are no right or wrong answers — just choose the option you would prefer if the lottery was real.
Your choices will help us understand how you approach risk in decision-making.
`,
      fields: {
        consent: false
      }
    },
    // {
    //   type: 'personal',
    //   question: 'Введите свои данные',
    //   fields: {
    //     name: '',
    //     email: '',
    //     consent: false
    //   }
    // },
    
    
    {
      type: 'matrix',
      question: 'Which option do you prefer in each row?',
      description: 'Select either Option A or Option B for each decision below.',
      columns: ['Option A (Safer)', 'Option B (Riskier)'],
      rows: [
        { id: 1,  optionA: '10% chance of €20, 90% of €15',  optionB: '10% chance of €50, 90% of €0', selected: '' },
        { id: 2,  optionA: '20% chance of €20, 80% of €15',  optionB: '20% chance of €50, 80% of €0', selected: '' },
        { id: 3,  optionA: '30% chance of €20, 70% of €15',  optionB: '30% chance of €50, 70% of €0', selected: '' },
        { id: 4,  optionA: '40% chance of €20, 60% of €15',  optionB: '40% chance of €50, 60% of €0', selected: '' },
        { id: 5,  optionA: '50% chance of €20, 50% of €15',  optionB: '50% chance of €50, 50% of €0', selected: '' },
        { id: 6,  optionA: '60% chance of €20, 40% of €15',  optionB: '60% chance of €50, 40% of €0', selected: '' },
        { id: 7,  optionA: '70% chance of €20, 30% of €15',  optionB: '70% chance of €50, 30% of €0', selected: '' },
        { id: 8,  optionA: '80% chance of €20, 20% of €15',  optionB: '80% chance of €50, 20% of €0', selected: '' },
        { id: 9,  optionA: '90% chance of €20, 10% of €15',  optionB: '90% chance of €50, 10% of €0', selected: '' },
        { id: 10, optionA: '100% chance of €20',            optionB: '100% chance of €50',           selected: '' }
      ]
    },
    {
      type: 'info',
      question: 'Second phase rules',
      description: `Great, you’re halfway done! Now let’s see what happens in the second phase. In this part of the experiment, you will be presented with three short shopping scenarios, each featuring a different product:
a T-shirt, an office desk, and a television.

For each product, you will see two buying options. The product is the same in both cases, but the purchase conditions will differ slightly — for example, in terms of return policy or other details. The purchasing conditions will slightly change after each decision is made, but the product that you’re “buying” (within each of three scenarios) will remain unchanged. 

Your task is simple:
Choose the option that you would prefer if you were actually buying this product.
There are no right or wrong answers — just go with what feels most appealing or realistic to you. Simply click on one of the two options with varying purchase conditions untill the website takes you to the next shopping scenario.

You will complete this task three times — once for each product category.

Please pay close attention to all the information provided with each option.
Some small but important details may be added that could influence your decision. Always first read the description and only then pick an option.

Take your time, and try to respond as you would in a real online shopping situation. The more thoughtful your answers are, the more accurate your shopper personality test will be.
Enjoy your online shopping!

`,
      fields: {
        consent: false
      }
    },
    {
      type: 'visual-compare-tshirt',
      question: 'Second phase',
      descriptionIndex: -1,
      selected: '',
      optionA: {
        title: 'A',
        // image: 'assets/a.jpg',
        description: 'Purchase this product under lenient return policy for',
        subtitle: '12€',
        description2: 'amount'
      },
      optionB: {
        title: 'B',
        // image: 'assets/b.jpg',
        description: 'Purchase this product under strict return policy for',
        subtitle: '12€',
        description2: 'amount'
      }
    },
    {
      type: 'visual-compare-tshirt',
      question: 'Second phase',
      descriptionIndex: -1,
      selected: '',
      optionA: {
        title: 'A',
        description: 'Purchase this product under lenient return policy for',
        subtitle: '12€',
      },
      optionB: {
        title: 'B',
        description: 'Purchase this product under strict return policy for',
        subtitle: '11€',
      }
    },
    {
      type: 'visual-compare-tshirt',
      question: 'Second phase',
      descriptionIndex: -1,
      selected: '',
      optionA: {
        title: 'A',
        description: 'Purchase this product under lenient return policy for',
        subtitle: '12€',
      },
      optionB: {
        title: 'B',
        description: 'Purchase this product under strict return policy for',
        subtitle: '10€',
      }
    },
    {
      type: 'visual-compare-tshirt',
      question: 'Second phase',
      descriptionIndex: -1,
      selected: '',
      optionA: {
        title: 'A',
        description: 'Purchase this product under lenient return policy for',
        subtitle: '12€',
      },
      optionB: {
        title: 'B',
        description: 'Purchase this product under strict return policy for',
        subtitle: '9€',
      }
    },
    {
      type: 'visual-compare-tshirt',
      question: 'Second phase',
      descriptionIndex: -1,
      selected: '',
      optionA: {
        title: 'A',
        description: 'Purchase this product under lenient return policy for',
        subtitle: '12€',
      },
      optionB: {
        title: 'B',
        description: 'Purchase this product under strict return policy for',
        subtitle: '8€',
      }
    },
    {
      type: 'visual-compare-tshirt',
      question: 'Second phase',
      descriptionIndex: -1,
      selected: '',
      optionA: {
        title: 'A',
        description: 'Purchase this product under lenient return policy for',
        subtitle: '12€',
      },
      optionB: {
        title: 'B',
        description: 'Purchase this product under strict return policy for',
        subtitle: '7€',
      }
    },
    {
      type: 'visual-compare-tshirt',
      question: 'Second phase',
      descriptionIndex: -1,
      selected: '',
      optionA: {
        title: 'A',
        description: 'Purchase this product under lenient return policy for',
        subtitle: '12€',
      },
      optionB: {
        title: 'B',
        description: 'Purchase this product under strict return policy for',
        subtitle: '6€',
      }
    },
    {
      type: 'visual-compare-tshirt',
      question: 'Second phase',
      descriptionIndex: -1,
      selected: '',
      optionA: {
        title: 'A',
        description: 'Purchase this product under lenient return policy for',
        subtitle: '12€',
      },
      optionB: {
        title: 'B',
        description: 'Purchase this product under strict return policy for',
        subtitle: '5€',
      }
    },
    {
      type: 'visual-compare-tshirt',
      question: 'Second phase',
      descriptionIndex: -1,
      selected: '',
      optionA: {
        title: 'A',
        description: 'Purchase this product under lenient return policy for',
        subtitle: '12€',
      },
      optionB: {
        title: 'B',
        description: 'Purchase this product under strict return policy for',
        subtitle: '4€',
      }
    },
    {
      type: 'visual-compare-tshirt',
      question: 'Second phase',
      descriptionIndex: -1,
      selected: '',
      optionA: {
        title: 'A',
        description: 'Purchase this product under lenient return policy for',
        subtitle: '12€',
      },
      optionB: {
        title: 'B',
        description: 'Purchase this product under strict return policy for',
        subtitle: '3€',
      }
    },
    {
      type: 'visual-compare-desk',
      question: 'Second phase',
      descriptionIndex: -1,
      selected: '',
      optionA: {
        title: 'A',
        // image: 'assets/a.jpg',
        subtitle: '160€',
        description: 'Purchase this product under lenient return policy for',
        // description: 'Описание варианта A'
      },
      optionB: {
        title: 'B',
        // image: 'assets/b.jpg',
        subtitle: '160€',
        description: 'Purchase this product under strict return policy for',
        // description: 'Описание варианта B'
      }
    },
    {
      type: 'visual-compare-desk',
      question: 'Second phase',
      descriptionIndex: -1,
      selected: '',
      optionA: {
        title: 'A',
        subtitle: '160€',
        description: 'Purchase this product under lenient return policy for',
      },
      optionB: {
        title: 'B',
        
        subtitle: '150€',
        description: 'Purchase this product under strict return policy for',
      }
    },
    {
      type: 'visual-compare-desk',
      question: 'Second phase',
      descriptionIndex: -1,
      selected: '',
      optionA: {
        title: 'A',
        subtitle: '160€',
        description: 'Purchase this product under lenient return policy for',
      },
      optionB: {
        title: 'B',
        subtitle: '140€',
        description: 'Purchase this product under strict return policy for',
      }
    },
    {
      type: 'visual-compare-desk',
      question: 'Second phase',
      descriptionIndex: -1,
      selected: '',
      optionA: {
        title: 'A',
        subtitle: '160€',
        description: 'Purchase this product under lenient return policy for',
      },
      optionB: {
        title: 'B',
        subtitle: '130€',
        description: 'Purchase this product under strict return policy for',
      }
    },
    {
      type: 'visual-compare-desk',
      question: 'Second phase',
      descriptionIndex: -1,
      selected: '',
      optionA: {
        title: 'A',
        subtitle: '160€',
        description: 'Purchase this product under lenient return policy for',
      },
      optionB: {
        title: 'B',
        subtitle: '120€',
        description: 'Purchase this product under strict return policy for',
      }
    },
    {
      type: 'visual-compare-desk',
      question: 'Second phase',
      descriptionIndex: -1,
      selected: '',
      optionA: {
        title: 'A',
        subtitle: '160€',
        description: 'Purchase this product under lenient return policy for',
      },
      optionB: {
        title: 'B',
        subtitle: '110€',
        description: 'Purchase this product under strict return policy for',
      }
    },
    {
      type: 'visual-compare-desk',
      question: 'Second phase',
      descriptionIndex: -1,
      selected: '',
      optionA: {
        title: 'A',
        subtitle: '160€',
        description: 'Purchase this product under lenient return policy for',
      },
      optionB: {
        title: 'B',
        subtitle: '100€',
        description: 'Purchase this product under strict return policy for',
      }
    },
    {
      type: 'visual-compare-desk',
      question: 'Second phase',
      descriptionIndex: -1,
      selected: '',
      optionA: {
        title: 'A',
        subtitle: '160€',
        description: 'Purchase this product under lenient return policy for',
      },
      optionB: {
        title: 'B',
        subtitle: '90€',
        description: 'Purchase this product under strict return policy for',
      }
    },
    {
      type: 'visual-compare-desk',
      question: 'Second phase',
      descriptionIndex: -1,
      selected: '',
      optionA: {
        title: 'A',
        subtitle: '160€',
        description: 'Purchase this product under lenient return policy for',
      },
      optionB: {
        title: 'B',
        subtitle: '80€',
        description: 'Purchase this product under strict return policy for',
      }
    },
    {
      type: 'visual-compare-desk',
      question: 'Second phase',
      descriptionIndex: -1,
      selected: '',
      optionA: {
        title: 'A',
        subtitle: '160€',
        description: 'Purchase this product under lenient return policy for',
      },
      optionB: {
        title: 'B',
        subtitle: '70€',
        description: 'Purchase this product under strict return policy for',
      }
    },
    {
      type: 'visual-compare-tv',
      question: 'Second phase',
      descriptionIndex: -1,
      selected: '',
      optionA: {
        title: 'A',
        // image: 'assets/a.jpg',
        subtitle: '850€',
        description: 'Purchase this product under lenient return policy for',
        // description: 'Описание варианта A'
      },
      optionB: {
        title: 'B',
        // image: 'assets/b.jpg',
        subtitle: '850€',
        // description: 'Описание варианта B'
        description: 'Purchase this product under strict return policy for',
      }
    },
    {
      type: 'visual-compare-tv',
      question: 'Second phase',
      descriptionIndex: -1,
      selected: '',
      optionA: {
        title: 'A',
        subtitle: '850€',
        description: 'Purchase this product under lenient return policy for',
      },
      optionB: {
        title: 'B',
        subtitle: '800€',
        description: 'Purchase this product under strict return policy for',
      }
    },
    {
      type: 'visual-compare-tv',
      question: 'Second phase',
      descriptionIndex: -1,
      selected: '',
      optionA: {
        title: 'A',
        subtitle: '850€',
        description: 'Purchase this product under lenient return policy for',
      },
      optionB: {
        title: 'B',
        subtitle: '750€',
        description: 'Purchase this product under strict return policy for',
      }
    },
    {
      type: 'visual-compare-tv',
      question: 'Second phase',
      descriptionIndex: -1,
      selected: '',
      optionA: {
        title: 'A',
        subtitle: '850€',
        description: 'Purchase this product under lenient return policy for',
      },
      optionB: {
        title: 'B',
        subtitle: '700€',
        description: 'Purchase this product under strict return policy for',
      }
    },
    {
      type: 'visual-compare-tv',
      question: 'Second phase',
      descriptionIndex: -1,
      selected: '',
      optionA: {
        title: 'A',
        subtitle: '850€',
        description: 'Purchase this product under lenient return policy for',
      },
      optionB: {
        title: 'B',
        subtitle: '650€',
        description: 'Purchase this product under strict return policy for',
      }
    },
    {
      type: 'visual-compare-tv',
      question: 'Second phase',
      descriptionIndex: -1,
      selected: '',
      optionA: {
        title: 'A',
        subtitle: '850€',
        description: 'Purchase this product under lenient return policy for',
      },
      optionB: {
        title: 'B',
        subtitle: '600€',
        description: 'Purchase this product under strict return policy for',
      }
    },
    {
      type: 'visual-compare-tv',
      question: 'Second phase',
      descriptionIndex: -1,
      selected: '',
      optionA: {
        title: 'A',
        subtitle: '850€',
        description: 'Purchase this product under lenient return policy for',
      },
      optionB: {
        title: 'B',
        subtitle: '550€',
        description: 'Purchase this product under strict return policy for',
      }
    },
    {
      type: 'visual-compare-tv',
      question: 'Second phase',
      descriptionIndex: -1,
      selected: '',
      optionA: {
        title: 'A',
        subtitle: '850€',
        description: 'Purchase this product under lenient return policy for',
      },
      optionB: {
        title: 'B',
        subtitle: '400€',
        description: 'Purchase this product under strict return policy for',
      }
    },
    {
      type: 'visual-compare-tv',
      question: 'Second phase',
      descriptionIndex: -1,
      selected: '',
      optionA: {
        title: 'A',
        subtitle: '850€',
        description: 'Purchase this product under lenient return policy for',
      },
      optionB: {
        title: 'B',
        subtitle: '350€',
        description: 'Purchase this product under strict return policy for',
      }
    },
    {
      type: 'visual-compare-tv',
      question: 'Second phase',
      descriptionIndex: -1,
      selected: '',
      optionA: {
        title: 'A',
        subtitle: '850€',
        description: 'Purchase this product under lenient return policy for',
      },
      optionB: {
        title: 'B',
        subtitle: '300€',
        description: 'Purchase this product under strict return policy for',
      }
    },
    {
      type: 'outro',
      question: 'Outro',
      description: `Thank you for your participation!
    You're almost finished — we just need a few more details.
    
    Your involvement in this study means a lot to us. The choices you made help us better understand how people make decisions when shopping online, and your input is a valuable part of this research.
    
    Please take a moment to complete the final short section, where we ask for your personal details.
    
    Your email address is especially important to us, as this is how we will contact you for compensation in case you have been randomly selected.
    
    This information will not influence your personality test results and will only be used for 2 purposes:
    
    1. To contact participants randomly selected for the compensation prize, and
    2. For general demographic analysis to support the academic findings of this study.
    
    All responses will be treated confidentially and will not be shared beyond the scope of this research. The data that you provide will be used exclusively for this study.
    
    We truly appreciate your time and contribution!`,
    fields: {
      name: '',
      lastname: '',
      age: '',
      gender: '',
      nationality: '',
      education: '',
      email: '',
      experienceRating: '',
      feedback: '',
      consent: false
    }
    
    },
    
    // {
    //   type: 'single',
    //   question: 'Ты лох?',
    //   description: 'Выбери правду.',
    //   answers: ['Да', 'Конечно', 'Безусловно', 'Абсолютно'],
    //   selected: ''
    // },
    
    
  ];
  isAnswerSelected(): boolean {
    const current = this.questions[this.currentIndex];
  
    if (current.type === 'matrix') {
      return Array.isArray(current.rows) &&
             current.rows.every((row: any) => row.selected === 'A' || row.selected === 'B');
    }
  
    return !!current.selected;
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
    const current = this.questions[this.currentIndex];
  
    if (current.type === 'visual-compare-tshirt' && current.selected === 'B') {
      this.hasChosenBInTshirt = true;
    }
    if (current.type === 'visual-compare-desk' && current.selected === 'B') {
      this.hasChosenBInDesk = true;
    }
    if (current.type === 'visual-compare-tv' && current.selected === 'B') {
      this.hasChosenBInTV = true;
    }
  
    if (this.currentIndex < this.questions.length - 1) {
      this.direction = 'forward';
      do {
        this.currentIndex++;
      } while (
        this.currentIndex < this.questions.length &&
        (
          this.shouldSkipTshirt(this.currentIndex) ||
          this.shouldSkipDesk(this.currentIndex) ||
          this.shouldSkipTV(this.currentIndex)
        )
      );
    } else {
      this.showResults = true;
    }
  }
  
  
  
  
  shouldSkipTshirt(index: number): boolean {
    const question = this.questions[index];
  
    if (question.type !== 'visual-compare-tshirt') return false;
  
    const firstBIndex = this.questions.findIndex(
      q => q.type === 'visual-compare-tshirt' && q.selected === 'B'
    );
  
    return firstBIndex !== -1 && index > firstBIndex && question.selected === '';
  }
  shouldSkipDesk(index: number): boolean {
    const question = this.questions[index];
  
    if (question.type !== 'visual-compare-desk') return false;
  
    const firstBIndex = this.questions.findIndex(
      q => q.type === 'visual-compare-desk' && q.selected === 'B'
    );
  
    return firstBIndex !== -1 && index > firstBIndex && question.selected === '';
  }
  shouldSkipTV(index: number): boolean {
    const question = this.questions[index];
  
    if (question.type !== 'visual-compare-tv') return false;
  
    const firstBIndex = this.questions.findIndex(
      q => q.type === 'visual-compare-tv' && q.selected === 'B'
    );
  
    return firstBIndex !== -1 && index > firstBIndex && question.selected === '';
  }
  
  

  previous() {
    if (this.currentIndex > 0) {
      this.direction = 'backward';
      do {
        this.currentIndex--;
      } while (
        this.currentIndex > 0 &&
        (
          this.shouldSkipTshirt(this.currentIndex) ||
          this.shouldSkipDesk(this.currentIndex) ||
          this.shouldSkipTV(this.currentIndex)
        )
      );
    }
  }
  
  

  get question() {
    const current = this.questions[this.currentIndex];
    if (current.type === 'visual-compare-tshirt') {
      if (this.tshirtDescriptionIndex === -1) {
        const saved = localStorage.getItem('tshirtDescriptionIndex');
        const index = saved !== null ? parseInt(saved, 10) : Math.floor(Math.random() * this.descriptions.length);
        this.tshirtDescriptionIndex = index;
        localStorage.setItem('tshirtDescriptionIndex', index.toString());
      }
      current.description = this.descriptions[this.tshirtDescriptionIndex];
    }
    if (current.type === 'visual-compare-desk') {
      if (this.deskDescriptionIndex === -1) {
        const saved = localStorage.getItem('deskDescriptionIndex');
        const index = saved !== null ? parseInt(saved, 10) : Math.floor(Math.random() * this.deskDescriptions.length);
        this.deskDescriptionIndex = index;
        localStorage.setItem('deskDescriptionIndex', index.toString());
      }
      current.description = this.deskDescriptions[this.deskDescriptionIndex];
    }
    if (current.type === 'visual-compare-tv') {
      if (this.tvDescriptionIndex === -1) {
        const saved = localStorage.getItem('tvDescriptionIndex');
        const index = saved !== null ? parseInt(saved, 10) : Math.floor(Math.random() * this.tvDescriptions.length);
        this.tvDescriptionIndex = index;
        localStorage.setItem('tvDescriptionIndex', index.toString());
      }
      current.description = this.tvDescriptions[this.tvDescriptionIndex];
    }
    return current;
  }

  handleVisualSelectTshirt(choice: 'A' | 'B') {
    this.question.selected = choice;
  }
  handleVisualSelectDesk(choice: 'A' | 'B') {
    this.question.selected = choice;
  }
  handleVisualSelectTV(choice: 'A' | 'B') {
    this.question.selected = choice;
  }
  get personalFields() {
    return {
      name: this.question.fields?.name || '',
      lastname: this.question.fields?.lastname || '',
      age: this.question.fields?.age || '',
      gender: this.question.fields?.gender || '',
      nationality: this.question.fields?.nationality || '',
      education: this.question.fields?.education || '',
      email: this.question.fields?.email || '',
      experienceRating: this.question.fields?.experienceRating || '',
      feedback: this.question.fields?.feedback || '',
      consent: this.question.fields?.consent || false
    };
  }
  get personalConsentFields() {
    return this.question.fields || { consent: false };
  }
  
}
