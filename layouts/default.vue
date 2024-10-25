<template>
  <div class="main-layout">
    <div class="main-layout__wrapper">
      <PageHeader />
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-layout {
  box-sizing: border-box;
  display: grid;
  min-height: 100vh;
  padding: $mobile-outer-gap calc($mobile-outer-gap * 2);

  background-color: var(--color-main-light);

  @include desktop() {
    padding: $desktop-outer-gap calc($desktop-outer-gap * 2);
  }
}

.main-layout__wrapper {
  box-sizing: border-box;
  display: grid;
  align-content: start;
  gap: $mobile-inner-gap;
  margin: 0 auto;
  padding: $mobile-outer-gap;
  width: 100%;
  max-width: 700px;

  background-color: white;
  border-radius: 24px;
  box-shadow: $box-shadow;

  @include desktop() {
    max-width: 860px;
    gap: $desktop-inner-gap;
    padding: $desktop-outer-gap;
  }
}
</style>
