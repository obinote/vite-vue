<template>
  <h1 class="font-extrabold text-3xl mb-6">Home</h1>

  <p class="mb-6">The name from store : {{ name }}</p>

  <input
    type="text"
    v-model="newName"
    class="p-2 border border-gray-600 rounded mr-4"
  />

  <button @click="saveName" class="text-white bg-indigo-600 p-2 rounded">
    Submit
  </button>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const name = computed(() => {
  return store.state.user.name
})

const newName = ref('')

function saveName() {
  store.dispatch('saveName', newName.value)
}
</script>

<style scoped></style>
