<script setup lang="ts">
import { useTransactionsStore } from '~/stores/transactions';

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Добавить новую запись` : 'Добавить новую запись';
  },
});

const route = useRoute();
const isInFrame = computed(() => route.query.inframe === 'true');

onBeforeMount(() => {
  window.addEventListener('message', (evt) => console.log(evt, 'EVENT MESSAGE'));
  if (isInFrame.value) {
    console.log('isInFrame');

    window.parent?.postMessage({
      event: 'bb-loaded',
      text: 'parent message',
    });

    window.top?.postMessage({
      event: 'bb-loaded',
      text: 'top message',
    });
  }
});

const store = useTransactionsStore();
</script>

<template>
  <div class="main-page">
    <TransactionsForm />
    <section class="main-page__section">
      <h2 class="main-page__section-title">Последние добавленные записи</h2>
      <TransactionsList
        v-if="store.lastTransactions.length"
        :transactions="store.lastTransactions"
        :delete-transaction="store.deleteTransaction"
      />
      <p v-else class="main-page__section-text">Нет данных</p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.main-page {
  display: grid;
  align-content: start;
  gap: $mobile-outer-gap;

  @include desktop() {
    gap: $desktop-outer-gap;
  }
}

.main-page__section {
  display: grid;
  align-content: start;
  gap: $mobile-inner-gap;

  @include desktop() {
    gap: $desktop-inner-gap;
  }
}

.main-page__section-title {
  @include subtitle();
  text-align: center;
}

.main-page__section-text {
  @include text();
  text-align: center;
}
</style>
