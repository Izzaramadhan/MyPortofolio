<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const skills = ref([])
const isLoading = ref(true)
const selectedCategory = ref('All')
const visibleItems = ref([])

function handleImageError(event) {
  event.target.src = '/default-skill.png'
}

function observeVisibility(index) {
  return (el) => {
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visibleItems.value[index] = true
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
  }
}

const categories = computed(() => {
  const allCategories = skills.value.map((s) => s.category)
  return ['All', ...new Set(allCategories)]
})

const filteredSkills = computed(() => {
  if (selectedCategory.value === 'All') return skills.value
  return skills.value.filter((s) => s.category === selectedCategory.value)
})

const chartData = computed(() => ({
  labels: filteredSkills.value.map((s) => s.name),
  datasets: [
    {
      label: 'Tingkat Skill (%)',
      backgroundColor: '#3b82f6',
      data: filteredSkills.value.map((s) => s.percent),
      borderRadius: 6
    }
  ]
}))

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true }
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 100
    }
  }
}

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/skills')
    skills.value = response.data
  } catch (error) {
    console.error('Gagal mengambil data skills:', error)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <section
    id="skill"
    class="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-500 scroll-mt-28"
  >
    <SectionTitle title="Skills" />

    <!-- Filter -->
    <div class="flex flex-wrap justify-center gap-4 mt-8">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="selectedCategory = cat"
        class="px-4 py-2 rounded-full border font-medium text-sm transition-all duration-300"
        :class="[
          selectedCategory === cat
            ? 'bg-blue-600 text-white dark:bg-blue-500'
            : 'bg-white text-gray-700 border-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600'
        ]"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Loading -->
    <div v-if="isLoading" class="text-center py-10 text-gray-500 dark:text-gray-400 animate-pulse">
      Memuat keahlian...
    </div>

    <!-- Empty -->
    <div
      v-else-if="filteredSkills.length === 0"
      class="text-center py-10 text-gray-500 dark:text-gray-400"
    >
      Tidak ada skill dalam kategori <strong>{{ selectedCategory }}</strong>.
    </div>

    <!-- Skills -->
    <div
      v-else
      class="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6"
    >
      <div
        v-for="(skill, index) in filteredSkills"
        :key="index"
        :ref="observeVisibility(index)"
        class="group p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 relative transform opacity-0 translate-y-8"
        :class="{ 'opacity-100 translate-y-0': visibleItems[index] }"
      >
        <!-- Header -->
        <div class="flex items-center gap-4 mb-5">
          <img
            :src="skill.image"
            @error="handleImageError"
            :alt="`Logo ${skill.name}`"
            class="w-12 h-12 object-contain rounded-full ring-2 ring-blue-300 dark:ring-blue-500"
          />
          <div>
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white">{{ skill.name }}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-300">{{ skill.level }}</p>
          </div>
        </div>

        <!-- Progress -->
        <div class="relative w-full h-2.5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden group">
          <div
            class="h-2.5 rounded-full transition-all duration-1000 ease-in-out"
            :class="{
              'bg-gradient-to-r from-blue-500 to-blue-400': skill.percent >= 70,
              'bg-gradient-to-r from-yellow-400 to-yellow-300': skill.percent >= 40 && skill.percent < 70,
              'bg-gradient-to-r from-red-400 to-red-300': skill.percent < 40
            }"
            :style="{ width: visibleItems[index] ? skill.percent + '%' : '0%' }"
          ></div>
        </div>

        <p class="text-xs font-medium text-right mt-2 text-gray-600 dark:text-gray-300">
          {{ skill.percent }}%
        </p>
      </div>
    </div>

    <!-- Chart -->
    <div class="max-w-4xl mx-auto mt-16 px-6">
      <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-4 text-center">
        Chart Skill
      </h3>
      <Bar :data="chartData" :options="chartOptions" />
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out both;
}
</style>
