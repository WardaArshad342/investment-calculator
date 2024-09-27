import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { InvestmentList } from '../investment-list/investment-list.model';
import { InvestmentListService } from '../investment-list/investment-list.service';
import { InvestmentListComponent } from "../investment-list/investment-list.component";

@Component({
  selector: 'app-calculate',
  standalone: true,
  imports: [FormsModule, CommonModule, InvestmentListComponent],
  templateUrl: './calculate.component.html',
  styleUrl: './calculate.component.scss'
})
export class CalculateComponent {
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  constructor(private investmentListService: InvestmentListService) {}

  onSubmit(){
    this.investmentListService.CalculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestment,
    });
    this.enteredInitialInvestment = '0';
    this.enteredAnnualInvestment = '0';
    this.enteredExpectedReturn = '5';
    this.enteredDuration = '10';
  }

  resultsData?: InvestmentList[];
  

}
