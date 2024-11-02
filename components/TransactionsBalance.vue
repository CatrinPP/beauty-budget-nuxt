<script setup lang="ts">
const store = useTransactionsStore();
</script>

<template>
  <p class="balance">
    Текущий баланс:<span class="balance__amount">{{ formatSum(store.balance) }}</span>
  </p>
</template>

<style scoped lang="scss">
.balance {
  display: flex;
  align-items: baseline;
  justify-content: end;
  flex-wrap: wrap;
  margin: 0;

  @include subtitle();
}

.balance__amount {
  min-width: 20px;
  padding-left: 10px;

  text-align: end;
}
</style>
