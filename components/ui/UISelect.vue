<script setup lang="ts">
import type { SelectHTMLAttributes } from 'vue';
import { TransactionType } from '~/constants/transaction';

interface Props {
  selectProps: SelectHTMLAttributes;
}

const { selectProps } = defineProps<Props>();
const model = defineModel<string>();
</script>

<template>
  <select v-model="model" class="ui-select" v-bind="selectProps">
    <option disabled value="">Выберите тип</option>
    <option :value="TransactionType.INCOME">+ / доходы</option>
    <option :value="TransactionType.OUTCOME">- / расходы</option>
  </select>
</template>

<style lang="scss" scoped>
.ui-select {
  @include input();
}
</style>
