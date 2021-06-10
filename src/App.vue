<template>
  <div id="vite-vue-app">
    <nav>
      <h1>
        <router-link to="/">Go to Home</router-link>
        <router-link to="/about">Go to About</router-link>
      </h1>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
