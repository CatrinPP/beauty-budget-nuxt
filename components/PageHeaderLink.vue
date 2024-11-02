<script setup lang="ts">
interface Props {
  to: string;
  title: string;
  icon: string;
}

const { to, title, icon } = defineProps<Props>();
</script>

<template>
  <NuxtLink class="link" active-class="link_active" :to :title>
    <svg
      class="link__icon"
      viewBox="-2 0 34 34"
      width="34"
      height="34"
      role="presentation"
    >
      <use :href="`/sprite.svg#${icon}`" />
    </svg>
  </NuxtLink>
</template>

<style scoped lang="scss">
.link {
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;

  text-decoration: none;

  &:hover {
    .link__icon {
      opacity: 0.85;
    }
  }

  &:active {
    .link__icon {
      opacity: 0.95;
    }
  }
}

.link_active {
  .link__icon {
    fill: var(--color-accent);
  }
}

.link__icon {
  height: 34px;
  width: 34px;

  fill: var(--color-text);
  transition: opacity $transition;

  @include desktop() {
    height: 44px;
    width: 44px;
  }
}
</style>
