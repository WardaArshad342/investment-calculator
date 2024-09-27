import { Component, Input } from '@angular/core';
import { InvestmentListService } from './investment-list.service';
import { InvestmentList } from './investment-list.model';
import { CalculateComponent } from "../calculate/calculate.component";
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-list',
  standalone: true,
  imports: [CalculateComponent, CurrencyPipe],
  templateUrl: './investment-list.component.html',
  styleUrl: './investment-list.component.scss'
})
export class InvestmentListComponent {
  constructor(private investmentListService: InvestmentListService){}

  get results(){
    return this.investmentListService.resultsData;
  }
}
