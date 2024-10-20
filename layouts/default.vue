<template>
  <div class="main-layout">
    <Header />
    <slot />
  </div>
</template>

<style scoped>
.main-layout {
  align-content: start;
  display: grid;
  min-height: 100vh;
}

</style>
