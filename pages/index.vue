<script setup lang="ts">
import { useTransactionsStore } from '~/stores/transactions';

const store = useTransactionsStore();
</script>

<template>
  <div>
    <TransactionForm />
    <section>
      <h2>Последние транзакции</h2>
      <TransactionList :transactions="store.lastTransactions" />
    </section>
  </div>
</template>
