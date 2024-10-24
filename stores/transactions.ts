import { TransactionType } from '~/constants/transaction';
import type { ITotalTransactionSum, ITransaction } from '~/types/transaction';
import type { IChartCategory } from '~/types/chart';
import dayjs from 'dayjs';

interface State {
  transactions: ITransaction[];
}

export const useTransactionsStore = defineStore('transactionsStore', {
  state: (): State => ({
    transactions: [],
  }),
  getters: {
    lastTransactions: (state) => state.transactions.slice(0, 3),
    incomeCategories: (state): IChartCategory =>
      state.transactions.reduce((result: IChartCategory, currentTransaction: ITransaction) => {
        if (currentTransaction.type !== TransactionType.INCOME) {
          return result;
        }

        const isCategoryExist = currentTransaction.category in result;
        const categorySum = isCategoryExist
          ? currentTransaction.sum + result[currentTransaction.category]
          : currentTransaction.sum;

        return { ...result, [currentTransaction.category]: categorySum };
      }, {}),
    outcomeCategories: (state): IChartCategory =>
      state.transactions.reduce((result: IChartCategory, currentTransaction: ITransaction) => {
        if (currentTransaction.type !== TransactionType.OUTCOME) {
          return result;
        }

        const isCategoryExist = currentTransaction.category in result;
        const categorySum = isCategoryExist
          ? currentTransaction.sum + result[currentTransaction.category]
          : currentTransaction.sum;

        return { ...result, [currentTransaction.category]: categorySum };
      }, {}),
    totalTransactionsSum: (state): ITotalTransactionSum =>
      state.transactions.reduce(
        (result: ITotalTransactionSum, currentTransaction: ITransaction) => {
          const incomeTotalSum =
            currentTransaction.type === TransactionType.INCOME
              ? result.income + currentTransaction.sum
              : result.income;
          const outcomeTotalSum =
            currentTransaction.type === TransactionType.OUTCOME
              ? result.outcome + currentTransaction.sum
              : result.outcome;

          return {
            total: result.total + currentTransaction.sum,
            income: incomeTotalSum,
            outcome: outcomeTotalSum,
          };
        },
        { total: 0, income: 0, outcome: 0 }
      ),
    incomeCategoriesSortedBySum() {
      return Object.entries(this.incomeCategories).sort(([, sum1], [, sum2]) => sum2 - sum1);
    },
    outcomeCategoriesSortedBySum() {
      return Object.entries(this.outcomeCategories).sort(([, sum1], [, sum2]) => sum2 - sum1);
    },
  },
  actions: {
    async fetch() {
      // const transactions = await $fetch<ITransaction[]>('https://api.nuxt.com/modules/pinia');
      const transactions: ITransaction[] = [
        {
          id: 'transaction1',
          category: 'New',
          date: '10.10.2024',
          sum: 100,
          type: TransactionType.INCOME,
        },
        {
          id: 'transaction2',
          category: 'New',
          date: '09.10.2024',
          sum: 999,
          type: TransactionType.OUTCOME,
        },
        {
          id: 'transaction3',
          category: 'Another category',
          date: '01.10.2024',
          sum: 5000,
          type: TransactionType.OUTCOME,
        },
        {
          id: 'transaction4',
          category: 'New',
          date: '30.09.2024',
          sum: 1120,
          type: TransactionType.INCOME,
        },
        {
          id: 'transaction5',
          category: 'Old',
          date: '10.09.2024',
          sum: 20,
          type: TransactionType.OUTCOME,
        },
        {
          id: 'transaction6',
          category: 'Simple one',
          date: '01.09.2024',
          sum: 15000,
          type: TransactionType.INCOME,
        },
        {
          id: 'transaction7',
          category: 'Digital',
          date: '30.08.2024',
          sum: 3888,
          type: TransactionType.OUTCOME,
        },
      ];

      this.transactions = transactions;
    },
    addTransaction(newTransaction: ITransaction) {
      const getIndexBySortedDate = (startIndex: number, endIndex: number): number => {
        let index = startIndex;

        if (
          startIndex === endIndex ||
          dayjs(newTransaction.date).isAfter(dayjs(this.transactions[startIndex].date)) ||
          newTransaction.date === this.transactions[startIndex].date
        ) {
          return index;
        } else if (
          dayjs(newTransaction.date).isBefore(dayjs(this.transactions[endIndex].date)) ||
          newTransaction.date === this.transactions[endIndex].date
        ) {
          index = endIndex + 1;
        } else {
          index = getIndexBySortedDate(startIndex + 1, endIndex - 1);
        }

        return index || 0;
      };

      if (!this.transactions.length) {
        this.transactions.push(newTransaction);
      } else {
        const index = getIndexBySortedDate(0, this.transactions.length - 1);
        this.transactions.splice(index, 0, newTransaction);
      }
    },
  },
});
