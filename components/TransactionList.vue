<script setup lang="ts">
import dayjs from 'dayjs';
import { TransactionSign } from '~/constants/transaction';
import type { ITransaction } from '~/types/transaction';

interface Props {
  transactions: ITransaction[];
}

const { transactions } = defineProps<Props>();
</script>

<template>
  <ul class="transaction-list">
    <li v-for="transaction in transactions" :key="transaction.id" class="transaction-list__item">
      <span class="transaction-list__item-data">{{
        `${TransactionSign[transaction.type]}${transaction.sum}`
      }}</span>
      <span class="transaction-list__item-data">{{ transaction.category }}</span>
      <span class="transaction-list__item-data">{{
        dayjs(transaction.date).format('DD.MM.YYYY')
      }}</span>
    </li>
  </ul>
</template>

<style scoped>
.transaction-list {
  display: grid;
  align-content: start;
  gap: 20px;
}

.transaction-list__item {
  display: grid;
  grid-template-columns: minmax(100px, 30%) 1fr minmax(100px, 30%);
  gap: 20px;

  list-style: none;
}
</style>
