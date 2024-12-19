/******************************************************************************
*                                                                             *
* Creation Date : 10/12/2024                                                  *
*                                                                             *
* Property : (c) This program, code or item is the Intellectual Property of   *
* Evelyn Neves Barreto. Any use or copy of this code is prohibited without    *
* the express written authorization of Evelyn. All rights reserved.           *
*                                                                             *
*******************************************************************************/

import { formatCurrency } from "./formatter.js";
import { IYearlyBalance } from "./interfaces/investment.interface.js";

export const createResultRow = (result: IYearlyBalance): HTMLTableRowElement => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${result.year}</td>
        <td>${formatCurrency(result.balance)}</td>
        <td>${formatCurrency(result.totalContributed)}</td>
        <td>${formatCurrency(result.interestEarned)}</td>
    `;
    return row;
}

export const updateResultsTable = (results: IYearlyBalance[]): void => {
    const tableBody = document.getElementById('results-body') as HTMLTableCellElement;
    const noResults = document.getElementById('no-results') as HTMLDivElement;
    const resultsTable = document.getElementById('results-table') as HTMLTableElement;

    if (results.length === 0) {
        noResults.style.display = 'block';
        resultsTable.style.display = 'none';
        return;
    }

    noResults.style.display = 'none';
    resultsTable.style.display = 'table';
    tableBody.innerHTML = '';
    results.forEach(result => {
        tableBody.appendChild(createResultRow(result));
    });
};