
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
const educationHistory = ref([]);
const API_URL = import.meta.env.PROD ? '/api/education' : 'http://localhost:3000/api/education';
onMounted(async () => {
  try {
    const response = await axios.get(API_URL);
    educationHistory.value = response.data;
  } catch (error) {
    console.error('Failed to fetch education data:', error);
  }
});
</script>

<template>
  <section
    id="pendidikan"
    v-intersect="'animate-fade-in-up'"
    class="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-500 scroll-mt-28"
    aria-labelledby="pendidikan-title"
  >
    <SectionTitle title="Pendidikan" id="pendidikan-title" />

    <div class="relative max-w-3xl mx-auto mt-12 border-l-4 border-blue-300 dark:border-blue-500 pl-6">
      <!-- Garis glowing -->
      <div class="absolute w-1 bg-gradient-to-b from-blue-400 to-purple-500 left-[-2px] top-0 h-full rounded-full blur-sm"></div>

      <!-- Loading -->
      <div
        v-if="isLoading"
        class="text-center py-12 text-gray-500 dark:text-gray-400 flex justify-center items-center"
        role="status"
        aria-live="polite"
      >
        <svg class="animate-spin w-6 h-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
        Memuat data pendidikan...
      </div>

      <!-- Jika tidak ada data -->
      <div v-else-if="educationHistory.length === 0" class="text-center text-gray-500 dark:text-gray-400">
        Tidak ada data pendidikan untuk ditampilkan.
      </div>

      <!-- Timeline -->
      <ul v-else class="space-y-12" role="list" aria-label="Riwayat pendidikan">
        <li
          v-for="item in educationHistory"
          :key="item.id"
          v-intersect="'animate-fade-in-up'"
          class="relative group opacity-0 translate-y-8 transition-opacity transition-transform duration-700"
        >
          <!-- Titik timeline -->
          <span
            class="absolute -left-[29px] top-1 w-6 h-6 rounded-full border-4 border-blue-400 dark:border-blue-500 bg-white dark:bg-gray-900 z-10 shadow"
          ></span>

          <!-- Card -->
          <div
            class="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
          >
            <div class="flex flex-wrap items-start gap-4">
              <!-- Logo -->
              <img
                :src="item.image"
                loading="lazy"
                @error="handleImageError"
                :alt="`Logo institusi ${item.institution}`"
                class="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-contain ring-2 ring-blue-300 dark:ring-blue-500 shrink-0"
              />

              <!-- Info -->
              <div class="flex-1 min-w-0">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                  🎓 {{ item.institution }}
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-1 break-words">
                  {{ item.major }}
                </p>
                <span
                  class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                  :class="item.period.toLowerCase().includes('sekarang')
                    ? 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100'
                    : 'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100'"
                >
                  {{ item.period }}
                </span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
