import { Component } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common'
import { TemperaturePipe } from './temperature.pipe';
import { SortPipe } from './sort.pipe';

@Component({
  selector: 'app-pipe-practice',
  standalone: true,
  imports: [DatePipe, DecimalPipe, TemperaturePipe, SortPipe],
  templateUrl: './pipe-practice.component.html',
  styleUrl: './pipe-practice.component.scss'
})
export class PipePracticeComponent {
  currentDate = new Date();
  currentTemperaturs = {
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };

  historicTemperatures = [
    25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
  ];

  constructor() {
    this.historicTemperatures.sort((a, b) => a > b ? 1 : -1);
  }
  onReset(index: number) {
    this.historicTemperatures[index] = 18;
    // const arr = [...this.historicTemperatures];
    // arr[index] = 18;
    // this.historicTemperatures = arr;
  }
}
