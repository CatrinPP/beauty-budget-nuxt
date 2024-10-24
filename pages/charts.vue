<script setup lang="ts">
import { useTransactionsStore } from '~/stores/transactions';
import type { IBarChartValue } from '~/types/chart';

const store = useTransactionsStore();
const barChartValues: IBarChartValue[] = [
  ['Доходы', store.totalTransactionsSum.income],
  ['Расходы', store.totalTransactionsSum.outcome],
];
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
    <BarChart
      title="Доходы vs Расходы"
      :total="store.totalTransactionsSum.total"
      :values="barChartValues"
    />
  </div>
</template>
