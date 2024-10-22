<script setup lang="ts">
import { ref } from 'vue';
import dayjs from 'dayjs';
import type { ITransaction } from '~/types/transaction';
import type { TransactionType } from '~/constants/transaction';

const id = useId();
const category = ref('New');
const selected = ref('');
const date = ref(dayjs().format('YYYY-MM-DD'));
const sum = ref(900);
const store = useTransactionsStore();

const handleSubmit = (evt: Event) => {
  evt.preventDefault();

  const newTransaction: ITransaction = {
    id: `T${date.value}${id}`,
    category: category.value,
    date: date.value,
    sum: sum.value,
    type: selected.value as TransactionType,
  };

  store.addTransaction(newTransaction);
};
</script>

<template>
  <form class="transaction-form" method="post" @submit.prevent="handleSubmit">
    <fieldset class="transaction-form__fieldset" name="transaction">
      <legend class="transaction-form__legend">Добавляем транзакцию</legend>
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

    <button class="transaction-form__button" type="submit">Добавить</button>
  </form>
</template>

<style scoped>
.transaction-form {
  display: grid;
  gap: 20px;
}

.transaction-form__fieldset {
  border: none;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 0;
  padding: 20px;
}
</style>
