<template>
  <div class="" style="gap: 20px">
    <div>
      <div>
        <h1>This is an about page</h1>
      </div>
    </div>
    <Error />
    <div>
      <v-btn color="blue"> Button </v-btn>
    </div>
    <div>
      <Alert />
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
