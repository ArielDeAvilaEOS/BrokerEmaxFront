<template>
  <header class="header">
    <div class="header__box">
      <img class="header__logo" src="@/assets/svg/logo.svg" alt="" />
      <h6 class="h6-bold text-white text-capitalize">{{ $route.name }}</h6>
    </div>
    <div class="header__box">
      <!-- Settings -->
      <i class="emax-settings"></i>
      <!-- Bell -->
      <i class="emax-bell"></i>
      <!-- Dropdown -->
      <v-container fluid>
        <v-row justify="center">
          <v-menu min-width="200px" rounded>
            <template v-slot:activator="{ props }">
              <v-btn icon v-bind="props">
                <v-avatar color="brown" size="large">
                  <span class="text-h5">{{ user.initials }}</span>
                </v-avatar>
              </v-btn>
            </template>
            <v-card class="mt-1">
              <v-card-text>
                <div class="mx-auto text-center">
                  <v-avatar color="brown">
                    <span class="text-h5">{{ user.initials }}</span>
                  </v-avatar>
                  <h3>{{ user.fullName }}</h3>
                  <p class="text-caption mt-1">
                    {{ user.email }}
                  </p>
                  <v-divider class="my-3"></v-divider>
                  <v-btn rounded variant="text"> Edit Account </v-btn>
                  <v-divider class="my-3"></v-divider>
                  <v-btn rounded variant="text"> Disconnect </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-menu>
        </v-row>
      </v-container>
    </div>
  </header>
</template>

<script setup lang="ts">
const user = {
  initials: 'JD',
  fullName: 'John Doe',
  email: 'john.doe@doe.com'
}
</script>

<style lang="scss" scoped>
.header {
  background-color: #223b67;
  padding: 1rem 1.5rem;
  border-radius: 0 0 1rem 1rem;
  display: flex;
  justify-content: space-between;
  &__box {
    display: flex;
    align-items: center;
    gap: 1rem;
    i {
      padding: 0.75rem;
      font-size: 1.5rem;
      color: #fff;
      cursor: pointer;
      &:hover {
        filter: brightness(60%);
      }
    }
  }
}
</style>
