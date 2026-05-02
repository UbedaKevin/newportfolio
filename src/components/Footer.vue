<script setup>
import { developerInfo } from "@/lib/portfolioData"

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-primary/10 py-8 px-6 lg:px-[8vw] border-footer">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

      <p class="font-mono text-xs text-muted-foreground tracking-wider">
        © {{ year }} {{ developerInfo.name }}. Tous droits réservés.
      </p>

      <p class="font-mono text-xs text-muted-foreground/50 tracking-wider">
        Conçu et développé avec Vue 3 & Tailwind CSS
      </p>

    </div>
  </footer>
</template>

<style scoped>
@import '../assets/styles.css';


.border-footer {
  border: 1px solid var(--border);
}
</style>