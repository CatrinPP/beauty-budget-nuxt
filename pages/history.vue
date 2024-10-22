<script setup lang="ts">
import { TransactionType } from '~/constants/transaction';
import type { ITransaction } from '~/types/transaction';

const mockTransactions: ITransaction[] = [
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
];
</script>

<template>
  <div>
    <h1>История транзакций</h1>
    <TransactionList :transactions="mockTransactions" />
  </div>
</template>
