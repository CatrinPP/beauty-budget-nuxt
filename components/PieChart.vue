<script setup lang="ts">
interface Props {
  title: string;
  total: number;
  values: [string, number][];
}

const { title, total, values } = defineProps<Props>();
const valuesCount = values.length;

function getValueGradientPercent(value: number): number {
  return Math.floor((value * 100) / total);
}

function generateChartColors() {
  let gradient = '';
  let lastPercent = 0;

  for (let i = 0; i < valuesCount; i++) {
    const valuePercentage = getValueGradientPercent(values[i][1]);
    const newColor = Math.floor(Math.random() * 256);
    lastPercent = lastPercent + valuePercentage;
    gradient =
      gradient +
      `hsl(${newColor} ${lastPercent} ${100 - valuePercentage}%) 0, hsl(${newColor} ${lastPercent} ${100 - valuePercentage}%) ${i === valuesCount - 1 ? '100%' : `${lastPercent}%, `}`;
  }

  return {
    background:
      valuesCount === 0
        ? `radial-gradient(circle closest-side, transparent 120px, white 0),
    conic-gradient(#4e79a7 0, #4e79a7 100%)`
        : `radial-gradient(circle closest-side, transparent 120px, white 0),
    conic-gradient(${gradient})`,
  };
}

const chartStyle = generateChartColors();
</script>

<template>
  <figure class="pie-chart" :style="chartStyle">
    <h2 class="pie-chart__title">{{ title }}</h2>
    <figcaption>
      <ul class="pie-chart__list">
        <li v-for="[name, sum] in values" :key="name" class="pie-chart__list-item">
          {{ name }} {{ sum }}
        </li>
      </ul>
    </figcaption>
  </figure>
</template>

<style scoped lang="scss">
.pie-chart {
  position: relative;
  width: 500px;
  min-height: 350px;
  margin: 0;
  outline: 1px solid #ccc;
}

.pie-chart__title {
  @include subtitle();
}

.pie-chart__list {
  list-style: none;
}

.pie-chart__list-item {
  @include text(14px);
}
</style>
