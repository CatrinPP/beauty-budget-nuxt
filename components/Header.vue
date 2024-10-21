<script setup lang="ts">

</script>

<template>
  <header class="header" >
    <HeaderLink to="/" title="Главная" icon="home" />
    <nav class="header__nav">
      <HeaderLink to="/history" title="История транзакций" icon="history" />
      <HeaderLink to="/dashboard" title="Графики" icon="chart" />
      <HeaderLink to="/settings" title="Настрокйки" icon="cog" />
    </nav>
  </header>
</template>

<style scoped>
  .header {
    display: grid;
    gap: 20px;
    grid-auto-flow: column;
    align-items: center;
    justify-content: space-between;
  }

  .header__nav {
    display: grid;
    gap: 20px;
    grid-auto-flow: column;
  }
</style>
