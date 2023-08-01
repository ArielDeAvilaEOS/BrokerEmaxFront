<template>
  <section class="login">
  <v-btn @click="toggleTheme">toggle theme</v-btn>
    <div class="login__header">
      <h6 class="h6-semibold text-center">Bienvenido</h6>
      <p class="md-regular text-center text-grey">
        ¡Bienvenido de nuevo! Por favor, introduzca sus datos.
      </p>
    </div>
    <Form class="login__inputs" @submit="onLogin" v-slot="{ isSubmitting }">
      <v-text-field
        v-model="form.email"
        label="Email"
        :rules="rules.email"
        placeholder="Enter your email"
        bg-color="transparent"
      />
      <v-text-field
        label="Password"
        v-model="form.password"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :rules="rules.password"
        placeholder="Enter your password"
        :type="visible ? 'text' : 'password'"
        @click:append-inner="visible = !visible"
        bg-color="transparent"
      />
      <v-btn size="large" class="w-100" @click="onLogin()" :loading="isSubmitting" color="primary"
        >Sign in</v-btn
      >
    </Form>
    <Error />
  </section>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate'
import { ref, reactive } from 'vue'
import { useauthStore } from '../../store/authStore'
import type { loginRequest } from '../../types/storeTypes'

const visible = ref(true)
const authStore = useauthStore()

const form: loginRequest = reactive({
  email: null,
  password: null
})

const rules = reactive({
  email: [(v: string) => !!v || 'Email is required'],
  password: [
    (v: string) => !!v || 'Password is required',
    (v: string) => (v && v.length <= 15) || 'Password must be less than 10 characters'
  ]
  // Puedes agregar más reglas aquí...
})

const onLogin = async () => {
  await authStore.login(form).then((response: any) => {
    console.info(response.token)
  })
}

import { useTheme } from 'vuetify'

const theme = useTheme()

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<style lang="scss" scoped>
.login {
  display: grid;
  gap: 2rem;
  padding: 1.5rem;
  &__header {
    display: grid;
    gap: 0.75rem;
  }
}
</style>
