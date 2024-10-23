import type { TransactionType } from '~/constants/transaction';

export interface ITransaction {
  id: string;
  category: string;
  date: string;
  sum: number;
  type: TransactionType;
}

export interface ITotalTransactionSum {
  total: number;
  income: number;
  outcome: number;
}
