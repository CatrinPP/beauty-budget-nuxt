<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue';

interface Props {
  inputProps: InputHTMLAttributes;
}

const { inputProps } = defineProps<Props>();

const model = defineModel();
</script>

<template>
  <input class="ui-input" v-bind="inputProps" v-model="model" />
</template>

<style lang="scss" scoped>
.ui-input {
  @include input();
}
</style>
