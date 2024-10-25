<script setup lang="ts">
import { AppRoute } from '~/constants/app-route';

const PageTitle = {
  [AppRoute.ROOT]: 'Добавить запись',
  [AppRoute.HISTORY]: 'Список транзакций',
  [AppRoute.CHARTS]: 'Графики',
  [AppRoute.SETTINGS]: 'Настройки',
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
  <header class="page-header">
    <nav class="page-header__nav">
      <HeaderLink :to="AppRoute.ROOT" :title="PageTitle[AppRoute.ROOT]" icon="home" />
      <HeaderLink :to="AppRoute.HISTORY" :title="PageTitle[AppRoute.HISTORY]" icon="history" />
      <HeaderLink :to="AppRoute.CHARTS" :title="PageTitle[AppRoute.CHARTS]" icon="chart" />
      <HeaderLink :to="AppRoute.SETTINGS" :title="PageTitle[AppRoute.SETTINGS]" icon="cog" />
    </nav>
    <h1 class="page-header__title">{{ title }}</h1>
  </header>
</template>

<style scoped lang="scss">
.page-header {
  display: grid;
  gap: $mobile-outer-gap;
  align-content: start;
  justify-items: center;

  @include desktop() {
    gap: $desktop-outer-gap;
  }
}

.page-header__title {
  @include text(18px);
  margin: 0;

  @include desktop() {
    font-size: 24px;
  }
}

.page-header__nav {
  display: grid;
  gap: 20px;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
}
</style>
