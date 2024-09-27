import { Injectable } from "@angular/core";
import { InvestmentInput, InvestmentList } from "./investment-list.model";

@Injectable({providedIn: 'root'})
export class InvestmentListService{
  resultsData?: InvestmentList[];
  
  CalculateInvestmentResults(data: InvestmentInput){
        const { initialInvestment, annualInvestment, expectedReturn, duration} = data;
        const annualData = [];
        let investmentValue = initialInvestment;
    
        for(let i = 0; i < duration; i++){
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (expectedReturn / 100);
            investmentValue += interestEarnedInYear + annualInvestment;
            const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
    
            annualData.push({
                year: year,
                interest: interestEarnedInYear,
                valueEndOfYear: interestEarnedInYear,
                annualInvestment: annualInvestment,
                totalInterest: totalInterest,
                totalAmountInvested: initialInvestment + annualInvestment * year,
            })
        }
        this.resultsData = annualData;
    }
}