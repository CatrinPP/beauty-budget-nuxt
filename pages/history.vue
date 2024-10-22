<script setup lang="ts">
import { useTransactionsStore } from '~/stores/transactions';

const store = useTransactionsStore();
</script>

<template>
  <div>
    <h1>История транзакций</h1>
    <TransactionList :transactions="store.transactions" />
  </div>
</template>
