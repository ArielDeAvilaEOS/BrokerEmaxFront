<template>
  <nav class="menu">
    <ul class="menu__routes">
      <li v-for="(route, index) in routes" :key="index">
        <router-link class="menu__routes-item" active-class="active" :to="{ name: route.route }">
          <i class="emax-dashboard"></i>
          {{ route.name }}</router-link
        >
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
  gap: 3rem;
  background-color: #fff;
  border-right: 1px solid #ecf1f5;
  min-height: calc(100vh - 6.25rem);
  padding: 1.5rem 0;
  position: sticky;
  li {
    display: inline-block;
  }
  &__routes {
    display: grid;
    gap: 1rem;
    &-item {
      padding: 1rem;
      display: grid;
      gap: 0.5rem;
      justify-items: center;
      text-decoration: none;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
      color: #397ea6;
      &.active {
        border-right: 2px solid #397ea6;
        background: rgba(52, 166, 232, 0.05);
      }
    }
  }
}
</style>
