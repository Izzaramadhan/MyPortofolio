<template>
  <button
    @click="$emit('toggle')"
    aria-label="Toggle Dark Mode"
    class="text-gray-700 dark:text-gray-200 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md"
  >
    <span v-if="isDark">☀️</span>
    <span v-else>🌙</span>
  </button>
</template>

<script setup>
defineProps({
  isDark: Boolean
})
</script>
