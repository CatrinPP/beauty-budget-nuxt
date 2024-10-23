<script setup lang="ts">
import { useTransactionsStore } from '~/stores/transactions';

const store = useTransactionsStore();
</script>

<template>
  <div>
    <TransactionList :transactions="store.transactions" />
  </div>
</template>
