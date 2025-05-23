<script setup lang="ts">
const { title, total, values } = defineProps<{
  title: string;
  total: number;
  values: [string, number][];
}>();
const valuesCount = values.length;

function getValueCharSum(value: string): number {
  let charResult = 0;

  for (let i = 0; i < value.length; i++) {
    charResult += value.charCodeAt(i);
  }

  return charResult;
}

function getValueGradientPercent(value: number): number {
  return Math.floor((value * 100) / total);
}

function generateChartColors() {
  const result = [];

  for (let i = 0; i < valuesCount; i++) {
    const newColor = Math.floor((getValueCharSum(values[i][0]) % 100) * 100 * 256);
    result.push(`hsl(${newColor} 50% 50%)`);
  }

  return result;
}

function getDiagramStyle(colors: string[]) {
  let gradient = '';
  let lastPercent = 0;

  for (let i = 0; i < valuesCount; i++) {
    const valuePercentage = getValueGradientPercent(values[i][1]);
    const newColor = colors[i];
    lastPercent = lastPercent + valuePercentage;
    gradient =
      gradient +
      `${newColor} 0, ${newColor} ${i === valuesCount - 1 ? '100%' : `${lastPercent}%, `}`;
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

const diagramColors = generateChartColors();
const diagramStyle = getDiagramStyle(diagramColors);
</script>

<template>
  <figure class="chart">
    <h2 class="chart__title">{{ title }}</h2>
    <div class="chart__diagram" :style="diagramStyle" />
    <figcaption class="chart__caption">
      <ul v-if="values.length" class="chart__list">
        <li v-for="([name, sum], idx) in values" :key="name" class="chart__list-item">
          <span class="chart__list-item-indicator" :style="{ background: diagramColors[idx] }" />{{
            name
          }}
          - {{ formatSum(sum) }}
        </li>
      </ul>
      <span v-else class="chart__caption-stub">Нет данных</span>
    </figcaption>
  </figure>
</template>

<style scoped lang="scss">
.chart {
  @include chart();

  @include wide-mobile() {
    grid-template-areas:
      'title title'
      'caption diagram';
    grid-template-columns: 0.5fr minmax(240px, 1fr);
    row-gap: 8px;
  }
}

.chart__title {
  @include subtitle();
  text-align: center;

  @include wide-mobile() {
    grid-area: title;
  }
}

.chart__caption {
  align-self: center;

  @include wide-mobile() {
    grid-area: caption;
  }
}

.chart__caption-stub {
  @include text();
  text-align: center;
}

.chart__list {
  @include chart-caption-list();
}

.chart__list-item {
  @include chart-caption-item();
}

.chart__list-item-indicator {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);

  width: 10px;
  height: 10px;

  border: 1px solid var(--color-border);
  border-radius: 2px;
}

.chart__diagram {
  min-height: 300px;
  min-width: 240px;

  @include small-mobile() {
    transform: scale(0.8);
  }

  @include wide-mobile() {
    grid-area: diagram;
  }
}
</style>
