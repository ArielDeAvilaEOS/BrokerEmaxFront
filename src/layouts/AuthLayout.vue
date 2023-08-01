<template>
  <section class="auth" theme="dark">
    <img class="auth__logo" src="@/assets/img/emax.png" alt="" />

    <RouterView />
    <div class="auth__footer">
      <p class="xs-regular">© Emax Markets 2023</p>
      <a class="xs-regular" href="mailto:help@emax.com"><i class="emax-mail"></i> help@emax.com</a>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.auth {
  margin-top: 10rem;
  display: grid;
  gap: 1.5rem;
  &__logo {
    margin: 0 auto;
    display: block;
  }
  &__footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    padding: 32px 24px;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    a {
      text-decoration: none;
    }
    i {
      font-size: 1rem;
    }
    .xs-regular {
      color: #475467;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
}
</style>
