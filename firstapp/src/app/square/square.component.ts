import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button *ngIf='value == "X"' mat-raised-button color="warn">
      {{ value }}
    </button>
    <button *ngIf='value == "O"' mat-raised-button color="primary">
      {{ value }}
    </button>
    <button *ngIf='!value' mat-raised-button></button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }'
  ]
})
export class SquareComponent {

  @Input() value: 'X' | 'O'

}
