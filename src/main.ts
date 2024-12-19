/******************************************************************************
*                                                                             *
* Creation Date : 10/12/2024                                                  *
*                                                                             *
* Property : (c) This program, code or item is the Intellectual Property of   *
* Evelyn Neves Barreto. Any use or copy of this code is prohibited without    *
* the express written authorization of Evelyn. All rights reserved.           *
*                                                                             *
*******************************************************************************/

import { updateResultsTable } from "./table.js";
import { simulateInvestment } from "./investment-calculator.js";
import { IInvestmentInput } from "./interfaces/investment.interface";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('investment-form') as HTMLFormElement;

    form.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        setLoading(true);

        const input: IInvestmentInput = {
            initialAmount: getInputValue('initial-amount'),
            monthlyContribution: getInputValue('monthly-contribution'),
            annualInterestRate: getInputValue('annual-interest'),
            investmentYears: getInputValue('investment-years'),
        };

        setTimeout(() => {
            const results = simulateInvestment(input);
            updateResultsTable(results);
            setLoading(false)
        }, 500);
    })
});

function setLoading(loading: boolean): void {
    const button = document.getElementById('calculate-btn') as HTMLButtonElement;
    button.disabled = loading;
    button.textContent = loading ? 'Calculating...' : 'Calculate Investment';
}

function getInputValue(id: string): number {
    const input = document.getElementById(id) as HTMLInputElement;
    return parseFloat(input.value) || 0;
}

