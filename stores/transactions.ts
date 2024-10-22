import { TransactionType } from '~/constants/transaction';
import type { ITransaction } from '~/types/transaction';

interface State {
  transactions: ITransaction[];
}

export const useTransactionsStore = defineStore('transactionsStore', {
  state: (): State => ({
    transactions: [],
  }),
  getters: {
    lastTransactions: (state) => state.transactions.slice(0, 3),
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
      this.transactions.push(newTransaction);
    },
  },
});
