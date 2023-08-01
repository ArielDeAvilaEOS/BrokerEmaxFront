<template>
  <div class="app">
    <HeaderApp />
    <div class="app__container">
      <MenuApp />
      <router-view></router-view>
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
}
</style>
