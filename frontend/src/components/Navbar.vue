<template>
  <!-- Scroll progress bar -->
  <div v-if="scrolled" class="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-[60]"></div>

  <header
    :class="[
      'fixed w-full z-50 transition-all duration-300 backdrop-blur-md',
      scrolled ? 'bg-white/90 dark:bg-gray-900/90 shadow-md' : 'bg-transparent'
    ]"
  >
    <nav class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <a href="#" class="flex items-center space-x-3 group">
        <img
          src="/Logo.png"
          alt="Logo"
          class="h-10 w-10 sm:h-12 sm:w-12 object-contain rounded-full shadow-md
                 group-hover:scale-110 transition-transform duration-300
                 dark:shadow-[0_0_10px_rgba(59,130,246,0.6)]"
          onerror="this.src='fallback-logo.png'"
        />
        <span
          class="hidden sm:inline text-lg font-semibold text-gray-800 dark:text-gray-200
                 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
        >
          BRODIN
        </span>
      </a>

      <!-- Mobile -->
      <div class="md:hidden flex items-center gap-4">
        <DarkModeToggle :is-dark="isDark" @toggle="toggleDarkMode" />

        <button
          @click="toggleMenu"
          :aria-expanded="menuOpen.toString()"
          aria-controls="mobile-menu"
          aria-label="Menu"
        >
          <svg
            :class="menuOpen ? 'rotate-90 scale-110 transition-transform' : ''"
            class="w-6 h-6 text-gray-800 dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              :d="menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
            />
          </svg>
        </button>
      </div>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex items-center gap-8 font-medium">
        <li v-for="item in navItems" :key="item.id">
          <a
            :href="'#' + item.id"
            @click.prevent="scrollTo(item.id)"
            :class="[
              'relative nav-item transition-all duration-300',
              activeSection === item.id ? 'active' : ''
            ]"
          >
            {{ item.label }}
          </a>
        </li>
        <li>
          <DarkModeToggle :is-dark="isDark" @toggle="toggleDarkMode" />
        </li>
      </ul>
    </nav>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div
        v-if="menuOpen"
        id="mobile-menu"
        class="md:hidden px-6 pb-4"
        ref="mobileMenu"
      >
        <ul class="flex flex-col space-y-4 text-gray-700 dark:text-gray-200">
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="'#' + item.id"
              @click.prevent="scrollTo(item.id); toggleMenu()"
              :class="activeSection === item.id ? 'text-blue-500 font-semibold' : ''"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import DarkModeToggle from './DarkModeToggle.vue'

const menuOpen = ref(false)
const isDark = ref(false)
const scrolled = ref(false)
const activeSection = ref('')
const mobileMenu = ref(null)

const navItems = [
  { id: 'profil', label: 'Profil' },
  { id: 'pendidikan', label: 'Pendidikan' },
  { id: 'skill', label: 'Skills' },
  { id: 'proyek', label: 'Proyek' },
  { id: 'kontak', label: 'Kontak' },
]

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function scrollTo(id) {
  const section = document.getElementById(id)
  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function toggleDarkMode() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

// ✅ Perbaikan scroll spy dengan getBoundingClientRect dan buffer
function handleScroll() {
  scrolled.value = window.scrollY > 20

  const buffer = window.innerHeight / 3
  let currentSection = ''

  for (const item of navItems) {
    const section = document.getElementById(item.id)
    if (section) {
      const rect = section.getBoundingClientRect()
      if (rect.top <= buffer && rect.bottom > buffer) {
        currentSection = item.id
        break
      }
    }
  }

  activeSection.value = currentSection
}

function handleClickOutside(event) {
  if (menuOpen.value && mobileMenu.value && !mobileMenu.value.contains(event.target)) {
    menuOpen.value = false
  }
}

watch(menuOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

onMounted(() => {
  const theme = localStorage.getItem('theme')
  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }

  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.nav-item::after {
  content: '';
  position: absolute;
  width: 0%;
  height: 2px;
  left: 0;
  bottom: -4px;
  background: linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899);
  transition: width 0.3s ease;
}
.nav-item:hover::after,
.nav-item.active::after {
  width: 100%;
}
.nav-item.active {
  @apply text-blue-600 dark:text-blue-400 font-semibold;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
