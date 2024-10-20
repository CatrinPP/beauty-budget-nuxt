<script setup lang="ts">
import type { SelectHTMLAttributes } from 'vue';

interface Props {
  selectProps: SelectHTMLAttributes;
}

const { selectProps } = defineProps<Props>();

const model = defineModel();
</script>

<template>
  <select class="ui-select" v-bind="selectProps" v-model="model">
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
