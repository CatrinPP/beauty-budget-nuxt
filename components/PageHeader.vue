<script setup lang="ts">
import { AppRoute } from '~/constants/app-route';

const route = useRoute();

function getTitle() {
  switch (route.path) {
    case AppRoute.ROOT:
      return 'Главная';
    case AppRoute.HISTORY:
      return 'История транзакций';
    case AppRoute.CHARTS:
      return 'Графики';
    case AppRoute.SETTINGS:
      return 'Настройки';
    default:
      return '';
  }
}

const title = ref(getTitle());

watch(
  () => route.path,
  () => {
    title.value = getTitle();
  }
);
</script>

<template>
  <header class="page-header">
    <nav class="page-header__nav">
      <HeaderLink :to="AppRoute.ROOT" :title icon="home" />
      <HeaderLink :to="AppRoute.HISTORY" :title icon="history" />
      <HeaderLink :to="AppRoute.CHARTS" :title icon="chart" />
      <HeaderLink :to="AppRoute.SETTINGS" :title icon="cog" />
    </nav>
    <h1 class="page-header__title">{{ title }}</h1>
  </header>
</template>

<style scoped lang="scss">
.page-header {
  display: grid;
  gap: $mobile-inner-gap;
  align-content: start;
  justify-items: center;

  @include desktop() {
    gap: $desktop-inner-gap;
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
