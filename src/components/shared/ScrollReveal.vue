<template>
  <div
    ref="element"
    class="scroll-reveal"
    :class="{
      'animate__animated animate__fadeInUp': isVisible
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ScrollReveal',
  data() {
    return {
      isVisible: false,
      observer: null
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isVisible = true
            this.observer.unobserve(this.$refs.element)
          }
        })
      },
      { threshold: 0.1 }
    )
    this.observer.observe(this.$refs.element)
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect()
    }
  }
}
</script>

<style scoped>
.scroll-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-reveal.animate__animated {
  opacity: 1;
  transform: translateY(0);
}
</style>