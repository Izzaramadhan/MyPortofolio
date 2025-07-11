<script setup>
import SectionTitle from './SectionTitle.vue'
import { ref } from 'vue'
import { Github, Instagram, Facebook, Mail } from 'lucide-vue-next'

const name = ref('')
const email = ref('')
const message = ref('')
const alert = ref('')

function submitForm() {
  if (!name.value || !email.value || !message.value) {
    alert.value = 'Mohon lengkapi semua bidang.'
    return
  }

  alert.value = 'Pesan berhasil dikirim. Terima kasih!'
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<template>
  <footer
    id="kontak"
    class="bg-gradient-to-br from-white via-blue-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 transition-colors duration-500 text-gray-900 dark:text-white"
  >
    <div class="container mx-auto px-6">
      <!-- Judul -->
      <div v-intersect="'animate-fade-up'">
        <SectionTitle title="Kontak" />
      </div>

      <!-- Formulir Kirim Pesan -->
      <div class="mt-12 max-w-3xl mx-auto" v-intersect="'animate-fade-up'">
        <h3 class="text-2xl font-semibold text-center mb-6">Kirim Pesan</h3>
        <form @submit.prevent="submitForm" class="space-y-4">
          <input
            v-model="name"
            type="text"
            placeholder="Nama Lengkap"
            class="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            v-model="message"
            rows="4"
            placeholder="Tulis pesan Anda di sini..."
            class="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition"
          >
            Kirim Pesan
          </button>

          <p v-if="alert" class="text-sm mt-2 text-center text-green-500 dark:text-green-400">
            {{ alert }}
          </p>
        </form>
      </div>

      <!-- Info Kontak -->
      <div class="grid md:grid-cols-3 gap-10 text-center md:text-left mt-20" v-intersect="'animate-fade-up'">
        <!-- Hubungi Saya -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Hubungi Saya</h3>
          <p class="mb-2 text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong>Alamat:</strong><br />
            KJF GROUP, Jalan Punung - Pringkuku, Mojo, Pacitan, Jawa Timur 63553
          </p>
          <p class="mb-2 flex justify-center md:justify-start items-center gap-2 text-gray-700 dark:text-gray-300">
            <Mail class="w-5 h-5 animate-bounce" />
            <a
              href="mailto:izzuddinramadhan84@gmail.com"
              class="hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
            >
              izzuddinramadhan84@gmail.com
            </a>
          </p>
        </div>

        <!-- Sosial Media -->
        <div class="flex flex-col items-center">
          <h3 class="text-xl font-semibold mb-4">Sosial Media</h3>
          <div class="flex justify-center gap-6">
            <a
              href="https://github.com/Izzaramadhan"
              target="_blank"
              class="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-transform transform hover:scale-125"
            >
              <Github class="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/izzudnakml/"
              target="_blank"
              class="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition-transform transform hover:scale-125"
            >
              <Instagram class="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100086737512581"
              target="_blank"
              class="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-transform transform hover:scale-125"
            >
              <Facebook class="w-6 h-6" />
            </a>
          </div>
        </div>

        <!-- Tentang Saya -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Tentang Saya</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Saya Izzuddin Akmal Daffani Ramadhan (NIM 23.11.5483), mahasiswa Informatika dari Universitas Amikom Yogyakarta.
            Saya antusias dalam pengembangan web dan desain antarmuka yang interaktif untuk pengalaman pengguna yang optimal.
          </p>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-12 border-t border-gray-300 dark:border-gray-700 pt-6 text-center text-xs text-gray-500 dark:text-gray-400">
        &copy; 2025 Izzuddin Akmal. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<style scoped>
@keyframes fade-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-up {
  animation: fade-up 0.8s ease-out forwards;
}
</style>
