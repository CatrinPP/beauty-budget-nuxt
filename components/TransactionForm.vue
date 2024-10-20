<script setup lang="ts">
import { ref } from 'vue';
import dayjs from 'dayjs';

const category = ref('New');
const selected = ref('');
const date = ref(dayjs().format('YYYY-MM-DD'));
const sum = ref(900);

const handleSubmit = (evt: Event) => {
  alert(JSON.stringify(evt.target));
};
</script>

<template>
  <form class="transaction-form" method="post" @submit.prevent="handleSubmit">
    <fieldset class="transaction-form__fieldset" name="transaction">
      <legend class="transaction-form__legend">Добавляем транзакцию</legend>
      <Input
        :input-props="{
          class: 'transaction-form__input',
          id: 'transaction-category',
          autocapitalize: 'sentences',
          placeholder: 'Категория',
          required: true,
        }"
        v-model.trim="category"
      />
      <Select
        :select-props="{
          class: 'transaction-form__input',
          id: 'transaction-type',
          required: true,
        }"
        v-model="selected"
      />
      <Input
        :input-props="{
          class: 'transaction-form__input',
          id: 'transaction-amount',
          inputmode: 'numeric',
          placeholder: 'Сумма',
          type: 'number',
          required: true,
        }"
        v-model="sum"
      />
      <Input
        :input-props="{
          class: 'transaction-form__input',
          id: 'transaction-date',
          placeholder: 'Дата',
          type: 'date',
          required: true,
        }"
        v-model="date"
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
