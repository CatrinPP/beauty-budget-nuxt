<script setup lang="ts">
import { ref } from 'vue';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import type { ITransaction } from '~/types/transaction';
import type { TransactionType } from '~/constants/transaction';
import { ButtonState } from '~/constants/button-state';

const INITIAL_CATEGORY = '';
const INITIAL_TRANSACTION_TYPE = '';
const INITIAL_DATE = dayjs().format('YYYY-MM-DD');
const INITIAL_SUM = undefined;
const INITIAL_STATE = ButtonState.NORMAL;

const category = ref(INITIAL_CATEGORY);
const transactionType = ref(INITIAL_TRANSACTION_TYPE);
const date = ref(INITIAL_DATE);
const sum = ref(INITIAL_SUM);
const state = ref<ButtonState>(INITIAL_STATE);
const store = useTransactionsStore();

const resetForm = () => {
  category.value = INITIAL_CATEGORY;
  transactionType.value = INITIAL_TRANSACTION_TYPE;
  date.value = INITIAL_DATE;
  sum.value = INITIAL_SUM;
};

const handleSuccess = () => {
  resetForm();
  state.value = ButtonState.NORMAL;
};

const handleSubmit = (evt: Event) => {
  evt.preventDefault();
  state.value = ButtonState.PROCESSING;

  const newTransaction: ITransaction = {
    id: `T${date.value.replace('0', '')}${uuidv4()}`,
    created_at: new Date().toString(),
    category: category.value,
    date: date.value,
    sum: getSubunitsAmountFromMainCurrency(sum.value || 0),
    type: transactionType.value as TransactionType,
  };

  setTimeout(() => {
    store.addTransaction(newTransaction);
    state.value = ButtonState.SUCCESS;

    setTimeout(() => {
      handleSuccess();
    }, 400);
  }, 1000);
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
          disabled: state !== ButtonState.NORMAL,
          autocapitalize: 'sentences',
          placeholder: 'Категория',
          required: true,
        }"
      />
      <UISelect
        v-model="transactionType"
        :select-props="{
          class: 'transaction-form__input',
          id: 'transaction-type',
          disabled: state !== ButtonState.NORMAL,
          required: true,
        }"
      />
      <UIInput
        v-model="sum"
        :input-props="{
          class: 'transaction-form__input',
          id: 'transaction-amount',
          disabled: state !== ButtonState.NORMAL,
          inputmode: 'numeric',
          placeholder: 'Сумма',
          type: 'number',
          step: 'any',
          required: true,
        }"
      />
      <UIInput
        v-model="date"
        :input-props="{
          class: 'transaction-form__input',
          id: 'transaction-date',
          disabled: state !== ButtonState.NORMAL,
          placeholder: 'Дата',
          type: 'date',
          required: true,
        }"
      />
    </fieldset>

    <UIButton
      element-class="transaction-form__button"
      :state="state"
      text="Добавить"
      type="submit"
    />
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
