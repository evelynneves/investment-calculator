/******************************************************************************
*                                                                             *
* Creation Date : 10/12/2024                                                  *
*                                                                             *
* Property : (c) This program, code or item is the Intellectual Property of   *
* Evelyn Neves Barreto. Any use or copy of this code is prohibited without    *
* the express written authorization of Evelyn. All rights reserved.           *
*                                                                             *
*******************************************************************************/

import { IInvestmentInput, IYearlyBalance } from "./interfaces/investment.interface"

export const calculateYearlyBalance = (
    initialAmount: number,
    monthlyContribution: number,
    annualInterestRate: number,
    year: number
): IYearlyBalance => {
    const monthlyRate = annualInterestRate / 12 / 100;
    let balance = initialAmount;
    const totalMonths = year * 12;

    for (let month = 1; month <= totalMonths; month++) {
        balance = balance * (1 + monthlyRate) + monthlyContribution;
    }

    const totalContributed = initialAmount + monthlyContribution * totalMonths;
    const interestEarned = balance - totalContributed;

    return {
        year,
        balance,
        totalContributed,
        interestEarned,
    };
};

export const simulateInvestment = ({
    initialAmount,
    monthlyContribution,
    annualInterestRate,
    investmentYears,
}: IInvestmentInput): IYearlyBalance[] => {
    return Array.from({ length: investmentYears }, (_, index) =>
        calculateYearlyBalance(
            initialAmount,
            monthlyContribution,
            annualInterestRate,
            index + 1
        )
    );
};