<template>
  <div class="home-page">
    <div class="relative w-full max-w-lg">
      <div class="circle-shape top-0 -left-0 sm:-left-4 bg-purple-300"></div>
      <div
        class="
          circle-shape
          top-0
          -right-0
          sm:-right-4
          bg-yellow-300
          animation-delay-2000
        "
      ></div>

      <div
        class="
          circle-shape
          top-8
          left-16
          sm:left-20
          bg-pink-300
          animation-delay-4000
        "
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
.home-page {
  @apply bg-gray-50 min-h-screen flex items-center justify-center px-16;
}

.circle-shape {
  @apply absolute w-36 h-36 sm:w-72 sm:h-72 mix-blend-multiply rounded-full animate-blob filter blur-xl opacity-50;
}
</style>
