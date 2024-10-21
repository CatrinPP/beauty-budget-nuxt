<script setup lang="ts">
  interface Props {
    to: string;
    title: string;
    icon: string;
  }

  const { to, title, icon } = defineProps<Props>();
</script>

<template>
  <NuxtLink class="header-link" activeClass="header-link_active" :to :title>
    <svg class="header-link__icon" :title viewBox="-2 0 44 44" width="44" height="44">
      <use :href="`/sprite.svg#${icon}`"></use>
    </svg>
  </NuxtLink>
</template>

<style scoped>
  .header-link {
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;

    text-decoration: none;
  }

  .header-link_active {
    .header-link__icon {
      fill: red;
    }
  }

  .header-link__icon {
    fill: #000000;
  }
</style>
