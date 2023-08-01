<template>
  <nav class="menu">
    <ul v-for="(route, index) in routes" :key="index">
      <li>
        <router-link class="menu__routes" :to="{ name: route.route }">{{ route.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const routes = [
  {
    route: 'dashboard',
    name: 'Dashboard'
  },
  {
    route: 'ebank',
    name: 'E-Bank'
  },
  {
    route: 'accounts',
    name: 'Accounts'
  },
  {
    route: 'promotion',
    name: 'Promotion'
  }
]
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-direction: column;
  li {
    display: inline-block;
  }
  &__routes {
    display: block;
  }
}
</style>
