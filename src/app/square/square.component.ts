import { Component, Input,} from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!warde">{{ warde }}</button>
    <button nbButton hero status="success" *ngIf="warde == 'X'">{{ warde }}</button>
    <button nbButton hero status="info" *ngIf="warde == 'O'">{{ warde }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})

export class SquareComponent {

  @Input() warde:  'X' | 'O';


}
