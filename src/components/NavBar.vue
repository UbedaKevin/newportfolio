<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import { navLinks } from "@/lib/portfolioData"

const scrolled = ref(false)
const mobileOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>

<template>
  <nav class="w-full  max-w-7xl mx-auto">  
    <div class="mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">

        <!-- Logo -->
        <a href="#hero" class="font-heading font-bold text-white text-lg tracking-tight">
          K<span class="text-primary">.</span>U
        </a>

        <!-- Desktop nav -->
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="font-mono text-xs uppercase tracking-widest text-muted-foreground hover-text-red transition-colors duration-300"
            >
            {{ link.label }}
          </a>

          <a
            href="#contact"
            class="ml-4 px-5 py-2 border border-primary text-primary font-mono text-xs uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Contact
          </a>
        </div>

        <!-- Mobile toggle -->
        <button
          @click="mobileOpen = !mobileOpen"
          class="md:hidden text-white p-2"
        >
          <span v-if="!mobileOpen">☰</span>
          <span v-else>✕</span>
        </button>

      </div>
    </div>

    <!-- Mobile menu -->
    <transition name="fade">
      <div
        v-if="mobileOpen"
        class="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
      >
        <div class="px-6 py-6 flex flex-col gap-4">

          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            @click="mobileOpen = false"
            class="font-mono text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            {{ link.label }}
          </a>

          <a
            href="#contact"
            @click="mobileOpen = false"
            class="mt-2 px-5 py-3 border border-primary text-primary font-mono text-xs uppercase tracking-widest text-center hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Contact
          </a>

        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
@import '../assets/styles.css';

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.hover-text-red {
  &:hover {
    color: var(--primary);
  }
}

</style>