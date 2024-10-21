<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue';

interface Props {
  inputProps: InputHTMLAttributes;
}

const { inputProps } = defineProps<Props>();
const model = defineModel<string | number>();
</script>

<template>
  <!-- prettier-ignore -->
  <input v-model="model" class="ui-input" v-bind="inputProps" >
</template>

<style lang="scss" scoped>
.ui-input {
  @include input();
}
</style>
