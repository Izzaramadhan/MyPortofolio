// src/directives/scroll-animate.js
export default {
  mounted(el, binding) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('animate-fade-in-up')
          if (binding.value && typeof binding.value === 'function') {
            binding.value()
          }
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
  }
}
