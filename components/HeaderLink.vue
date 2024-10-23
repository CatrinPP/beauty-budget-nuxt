<script setup lang="ts">
interface Props {
  to: string;
  title: string;
  icon: string;
}

const { to, title, icon } = defineProps<Props>();
</script>

<template>
  <NuxtLink class="header-link" active-class="header-link_active" :to :title>
    <svg class="header-link__icon" viewBox="-2 0 34 34" width="34" height="34" :title>
      <use :href="`/sprite.svg#${icon}`" />
    </svg>
  </NuxtLink>
</template>

<style scoped lang="scss">
.header-link {
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;

  text-decoration: none;
}

.header-link_active {
  .header-link__icon {
    fill: var(--color-theme-primary);
  }
}

.header-link__icon {
  height: 34px;
  width: 34px;

  fill: var(--color-text);

  @include desktop() {
    height: 44px;
    width: 44px;
  }
}
</style>
