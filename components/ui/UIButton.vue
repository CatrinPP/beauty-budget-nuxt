<script setup lang="ts">
interface Props {
  elementClass?: string;
  text: string;
  type?: 'button' | 'submit';
}

const { text, type = 'button' } = defineProps<Props>();
</script>

<template>
  <button class="ui-button" :class="elementClass" :type>{{ text }}</button>
</template>

<style lang="scss" scoped>
.ui-button {
  @include reset-button();
  padding: 11px 52px;

  @include text($size: 16px, $color: white);
  text-align: center;

  border-radius: $ui-border-radius;
  background-color: var(--color-accent);
  transition: opacity $transition;

  &:hover:not(:disabled) {
    opacity: 0.85;
  }

  &:active:not(:disabled) {
    opacity: 0.95;
  }
}
</style>
