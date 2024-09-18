import { Injectable } from "@angular/core";
import { InvestmentList } from "./investment-list.model";

@Injectable({providedIn: 'root'})
export class InvestmentListService{
private investmentList: InvestmentList[] = [
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
]

getInvestmentList(){
    return this.investmentList;
}

}