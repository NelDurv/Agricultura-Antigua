<template>
  <div id="app">
    <Header />
    <main style="min-height: 80vh; padding-top: 80px;">
      <div style="max-width: 1200px; margin: 0 auto; padding: 0 24px;">
        <router-view />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>