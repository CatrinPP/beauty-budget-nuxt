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

<style scoped lang="scss">
.transaction-list {
  @include reset-list();
}

.transaction-list__item {
  @include reset-list-item();
  display: grid;
  grid-template-columns: minmax(80px, 30%) 1fr minmax(80px, 30%);
  gap: $mobile-inner-gap;
  padding: 14px 0;

  @include text();

  border-bottom: 1px solid var(--color-main-light);

  @include wide-mobile() {
    padding-left: 30px;
    padding-right: 30px;
  }
}

.transaction-list__item-data:last-child {
  text-align: end;
}
</style>
