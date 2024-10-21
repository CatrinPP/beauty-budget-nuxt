<script setup lang="ts">
import type { SelectHTMLAttributes } from 'vue';

interface Props {
  selectProps: SelectHTMLAttributes;
}

const { selectProps } = defineProps<Props>();
const model = defineModel<string>();
</script>

<template>
  <select v-model="model" class="ui-select" v-bind="selectProps">
    <option disabled value="">Выберите тип</option>
    <option>+ / доходы</option>
    <option>- / расходы</option>
  </select>
</template>

<style lang="scss" scoped>
.ui-select {
  @include input();
}
</style>
