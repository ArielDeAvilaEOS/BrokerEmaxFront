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
    <ul class="menu__routes">
      <li v-for="(route, index) in helps" :key="index">
        <router-link class="menu__routes-item" active-class="active" :to="{ name: route.route }">
          <i class="emax-dashboard"></i>
          {{ route.name }}</router-link
        >
      </li>
      <div class="menu__logout">
        <v-avatar color="surface-variant"></v-avatar>
        <p class="xs-semibold">Olivia Rhye</p>
        <i class="emax-logout"></i>
      </div>
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
const helps = [
  {
    route: 'dashboard',
    name: 'Settings'
  },
  {
    route: 'ebank',
    name: 'Support'
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
  justify-content: space-between;
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
      color: #667085;
      line-height: 24px;
      &.active {
        border-right: 2px solid #397ea6;
        background: rgba(52, 166, 232, 0.05);
        color: #397ea6;
      }
    }
  }
  &__logout {
    display: grid;
    gap: 1rem;
    justify-items: center;
    padding: 2rem 0;
    border-top: 1px solid #ecf1f5;
  }
}

.emax-logout {
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid #eaecf0;
  background: #f9fafb;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  cursor: pointer;
  font-size: 1.25rem;
  color: #667085;
  &:hover {
    filter: brightness(80%);
  }
}
</style>
