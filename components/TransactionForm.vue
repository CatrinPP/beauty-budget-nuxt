<script setup lang="ts">
import { ref } from 'vue';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import type { ITransaction } from '~/types/transaction';
import type { TransactionType } from '~/constants/transaction';

const category = ref('');
const selected = ref('');
const date = ref(dayjs().format('YYYY-MM-DD'));
const sum = ref();
const store = useTransactionsStore();

const handleSubmit = (evt: Event) => {
  evt.preventDefault();

  const newTransaction: ITransaction = {
    id: `T${date.value.replace('0', '')}${uuidv4()}`,
    category: category.value,
    date: date.value,
    sum: getSubunitsAmountFromMainCurrency(sum.value),
    type: selected.value as TransactionType,
  };

  store.addTransaction(newTransaction);
};
</script>

<template>
  <form class="transaction-form" method="post" @submit.prevent="handleSubmit">
    <fieldset class="transaction-form__fieldset" name="transaction">
      <UIInput
        v-model.trim="category"
        :input-props="{
          class: 'transaction-form__input',
          id: 'transaction-category',
          autocapitalize: 'sentences',
          placeholder: 'Категория',
          required: true,
        }"
      />
      <UISelect
        v-model="selected"
        :select-props="{
          class: 'transaction-form__input',
          id: 'transaction-type',
          required: true,
        }"
      />
      <UIInput
        v-model="sum"
        :input-props="{
          class: 'transaction-form__input',
          id: 'transaction-amount',
          inputmode: 'numeric',
          placeholder: 'Сумма',
          type: 'number',
          required: true,
        }"
      />
      <UIInput
        v-model="date"
        :input-props="{
          class: 'transaction-form__input',
          id: 'transaction-date',
          placeholder: 'Дата',
          type: 'date',
          required: true,
        }"
      />
    </fieldset>

    <UIButton element-class="transaction-form__button" text="Добавить" type="submit" />
  </form>
</template>

<style scoped lang="scss">
.transaction-form {
  display: grid;
  gap: $mobile-inner-gap;

  @include desktop() {
    gap: $desktop-inner-gap;
  }
}

.transaction-form__fieldset {
  display: grid;
  gap: 16px;
  margin: 0;
  padding: 0;

  border: none;

  @include desktop() {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

.transaction-form__button {
  justify-self: center;
}
</style>
