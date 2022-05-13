import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('itemAnimation', [
      transition('void => *', [
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.85)',
          'margin-bottom': 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }),

        animate(
          '50ms',
          style({
            height: '*',
            'margin-bottom': '*',
            paddingTop: '*',
            paddingBottom: '*',
            paddingLeft: '*',
            paddingRight: '*',
          })
        ),
        animate(800),
      ]),
      transition('*=>void', [
        animate(
          50,
          style({
            transform: 'scale(1.05)',
          })
        ),
        animate(
          50,
          style({
            transform: 'scale(1)',
            opacity: 0.75,
          })
        ),
        animate(
          '120ms ease-out',
          style({
            transform: 'scale(0.68)',
            opacity: 0,
          })
        ),

        animate(
          '150ms ease-out',
          style({
            height: 0,
            'margin-bottom': 0,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  searchWord: string = '';
  categories = ['fasion', 'home devices', 'food'];
  products = [
    {
      name: 'product1',
      category: 'fasion',
      date: '22-7-12',
      desc: 'belongs to fasion category',
    },
    {
      name: 'product2',
      category: 'home devices',
      date: '22-4-10',
      desc: 'belongs to home devices category',
    },
    {
      name: 'product3',
      category: 'food',
      date: '22-7-9',
      desc: 'belongs to food category',
    },
    {
      name: 'product4',
      category: 'fasion',
      date: '22-8-12',
      desc: 'belongs to fasion category',
    },
    {
      name: 'product5',
      category: 'home devices',
      date: '22-6-10',
      desc: 'belongs to home devices category',
    },
    {
      name: 'product6',
      category: 'food',
      date: '22-5-9',
      desc: 'belongs to food category',
    },
    {
      name: 'product7',
      category: 'fasion',
      date: '22-4-12',
      desc: 'belongs to fasion category',
    },
    {
      name: 'product8',
      category: 'home devices',
      date: '22-5-20',
      desc: 'belongs to home devices category',
    },
    {
      name: 'product9',
      category: 'food',
      date: '22-9-9',
      desc: 'belongs to food category',
    },
    {
      name: 'product10',
      category: 'fasion',
      date: '22-4-12',
      desc: 'belongs to fasion category',
    },
  ];
  constructor() {}
  search(e: any) {
    this.searchWord = e;
  }
}
