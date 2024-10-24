<script setup lang="ts">
import type { IBarChartValue } from '~/types/chart';

interface Props {
  title: string;
  total: number;
  values: IBarChartValue[];
}

const { title, total, values } = defineProps<Props>();

const getHeightPercentage = (value: number) => {
  return value > 0 ? `${Math.floor((value * 100) / total)}%` : '0%';
};
</script>

<template>
  <figure class="bar-chart">
    <h2 class="bar-chart__title">{{ title }}</h2>
    <div className="bar-chart__diagram">
      <ul className="bar-chart__diagram-items">
        <li
          v-for="[name, sum] in values"
          :key="name"
          class="bar-chart__diagram-item"
          :style="{ height: getHeightPercentage(sum) }"
        />
      </ul>
    </div>
    <figcaption>
      <ul class="bar-chart__list">
        <li v-for="[name, sum] in values" :key="name" class="bar-chart__list-item">
          {{ name }} {{ sum }}
        </li>
      </ul>
    </figcaption>
  </figure>
</template>

<style scoped lang="scss">
.bar-chart {
  position: relative;
  width: 500px;
  min-height: 350px;
  margin: 0;
  outline: 1px solid #ccc;
}

.bar-chart__title {
  @include subtitle();
}

.bar-chart__diagram {
  height: 300px;
  padding: 16px 16px 0;

  border-bottom: 1px solid rgba(30, 93, 151, 0.12);
  border-left: 1px solid rgba(30, 93, 151, 0.12);
}

.bar-chart__diagram-items {
  display: grid;
  align-items: end;
  justify-content: start;
  gap: 8%;
  grid-auto-flow: column;
  height: 100%;
  width: 100%;
  margin: 0;

  list-style: none;
}

.bar-chart__diagram-item {
  height: 100%;
  transition: height 0.2s ease;
  width: 30px;
}

.bar-chart__diagram-item:nth-child(2n - 1) {
  background-color: green;
}

.bar-chart__diagram-item:nth-child(2n) {
  background-color: blue;
}

.bar-chart__list {
  list-style: none;
}

.bar-chart__list-item {
  @include text(14px);
}
</style>
