<template>
  <div class="app">
    <HeaderApp />
    <div class="app__container">
      <MenuApp />
      <div class="app__content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.app {
  background-color: #f9fafb;
  min-height: 100vh;
  height: 100%;
  &__container {
    display: flex;
  }
  &__content {
    padding: 2rem 1.5rem;
    width: 100%;
  }
}
</style>
