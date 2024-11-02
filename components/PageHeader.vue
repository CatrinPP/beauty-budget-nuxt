<script setup lang="ts">
import { AppRoute } from '~/constants/app-route';

const PageTitle = {
  [AppRoute.ROOT]: 'Добавить запись в бюджет',
  [AppRoute.HISTORY]: 'Список всех записей',
  [AppRoute.CHARTS]: 'Графики',
};

const route = useRoute();
const title = ref(PageTitle[route.path] || '');

watch(
  () => route.path,
  () => {
    title.value = PageTitle[route.path] || '';
  }
);
</script>

<template>
  <header class="header">
    <nav class="header__nav">
      <PageHeaderLink :to="AppRoute.ROOT" :title="PageTitle[AppRoute.ROOT]" icon="home" />
      <PageHeaderLink :to="AppRoute.HISTORY" :title="PageTitle[AppRoute.HISTORY]" icon="history" />
      <PageHeaderLink :to="AppRoute.CHARTS" :title="PageTitle[AppRoute.CHARTS]" icon="chart" />
    </nav>
    <TransactionsBalance class="header__balance" />
    <h1 class="header__title">{{ title }}</h1>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: grid;
  gap: $mobile-outer-gap;
  align-content: start;
  justify-items: center;

  @include desktop() {
    gap: $desktop-outer-gap;
  }
}

.header__title {
  margin: 0;
  @include text(18px);

  @include desktop() {
    font-size: 24px;
  }
}

.header__nav {
  display: grid;
  gap: 20px;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
}

.header__balance {
  justify-self: end;
}
</style>
