import { Component } from '@angular/core';
import { InvestmentListService } from './investment-list.service';
import { InvestmentList } from './investment-list.model';

@Component({
  selector: 'app-investment-list',
  standalone: true,
  imports: [],
  templateUrl: './investment-list.component.html',
  styleUrl: './investment-list.component.scss'
})
export class InvestmentListComponent {
  constructor(private investmentListService: InvestmentListService){
    this.investmentListService = investmentListService;
  }

  investmentList: InvestmentList[] = [
    {
        year: 1,
        investmentValue: 5,
        interest: 7,
        totalInterest: 9,
        capital: 58
    },
    {
        year: 2,
        investmentValue: 5,
        interest: 7,
        totalInterest: 9,
        capital: 58
    },
    {
        year: 3,
        investmentValue: 5,
        interest: 7,
        totalInterest: 9,
        capital: 58
    },
    {
        year: 4,
        investmentValue: 5,
        interest: 7,
        totalInterest: 9,
        capital: 58
    },
    {
        year: 5,
        investmentValue: 5,
        interest: 7,
        totalInterest: 9,
        capital: 58
    }
];

  getInvestmentList(){
    return this.investmentListService.getInvestmentList();
  }
}
