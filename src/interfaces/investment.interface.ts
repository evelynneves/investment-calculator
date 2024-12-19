/******************************************************************************
*                                                                             *
* Creation Date : 10/12/2024                                                  *
*                                                                             *
* Property : (c) This program, code or item is the Intellectual Property of   *
* Evelyn Neves Barreto. Any use or copy of this code is prohibited without    *
* the express written authorization of Evelyn. All rights reserved.           *
*                                                                             *
*******************************************************************************/

export interface IInvestmentInput {
    initialAmount: number;
    monthlyContribution: number;
    annualInterestRate: number;
    investmentYears: number;
}

export interface IYearlyBalance {
    year: number;
    balance: number;
    totalContributed: number;
    interestEarned: number;
}