<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="text-center animate-fade-in-up">
    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
      {{ title }}
    </h2>
    <div class="mt-2 w-16 h-1 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
  </div>
</template>

<style scoped>
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.7s ease-out both;
}
</style>
