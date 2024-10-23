<script setup lang="ts">
import { useTransactionsStore } from '~/stores/transactions';

const store = useTransactionsStore();
</script>

<template>
  <div>
    <PieChart
      title="Доходы по категориям"
      :values="store.incomeCategoriesSortedBySum"
      :total="store.totalTransactionsSum.income"
    />
    <PieChart
      title="Расходы по категориям"
      :values="store.outcomeCategoriesSortedBySum"
      :total="store.totalTransactionsSum.outcome"
    />
  </div>
</template>
