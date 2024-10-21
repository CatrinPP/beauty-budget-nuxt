<template>
  <div class="main-layout">
    <PageHeader />
    <slot />
  </div>
</template>

<style scoped>
.main-layout {
  display: grid;
  align-content: start;
  margin: 0 auto;
  max-width: 900px;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 24px;

  background-color: #eeeeee;
  border-radius: 24px;
}
</style>
