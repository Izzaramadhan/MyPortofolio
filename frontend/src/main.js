// src/main.js
import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Optional: directive lokal untuk animasi scroll
import animateOnScroll from './directives/animateOnScroll';
import scrollAnimate from './directives/scroll-animate';

// ✅ Buat instance Vue
const app = createApp(App);

// ✅ Register directive global
app.directive('animate-on-scroll', animateOnScroll);
app.directive('scroll-animate', scrollAnimate);

// ✅ v-intersect untuk animasi saat scroll
app.directive('intersect', {
  mounted(el, binding) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(binding.value || 'animate-fade-up');
          observer.unobserve(el); // hanya jalankan sekali
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
  }
});

// ✅ Gunakan plugin router
app.use(router);

// ✅ Mount app
app.mount('#app');
