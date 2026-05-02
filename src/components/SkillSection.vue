<script setup>
import { skills } from "@/lib/portfolioData"
import { onMounted, nextTick } from "vue"
import AOS from "aos"

onMounted(async () => {
  await nextTick()
  AOS.refreshHard()
})
</script>

<template>
  <section id="competences" class="relative py-32 px-6 lg:px-[8vw]">

    <!-- Circuit line -->
    <div class="absolute left-[8vw] top-0 w-px h-32 circuit-line hidden lg:block"></div>

    <div class="max-w-7xl mx-auto">

      <!-- HEADER -->
      <div class="mb-16" data-aos="fade-up">
        <span class="font-mono text-primary text-sm uppercase tracking-widest">
          // Tech Stack
        </span>

        <h2 class="font-heading text-4xl lg:text-5xl font-bold text-white mt-4">
          Compétences<span class="text-primary">.</span>
        </h2>
      </div>

      <!-- GRID -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <div
          v-for="(category, key, i) in skills"
          :key="key"
          class="group border border-border bg-card p-6 hover:border-primary/40 transition-all duration-500"
          data-aos="fade-up"
          :data-aos-delay="i * 100"
        >

          <!-- ICON -->
          <div class="flex items-center gap-3 mb-6">

            <div class="p-2 bg-primary/10 border border-primary/20">

              <!-- FRONTEND -->
              <svg v-if="key === 'frontend'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 text-primary">
                <path stroke-width="1.5" d="M4 5h16v14H4z"/>
                <path stroke-width="1.5" d="M8 9h8"/>
              </svg>

              <!-- BACKEND -->
              <svg v-else-if="key === 'backend'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 text-primary">
                <path stroke-width="1.5" d="M4 7h16M4 12h16M4 17h16"/>
              </svg>

              <!-- DATABASE -->
              <svg v-else-if="key === 'databases'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 text-primary">
                <path stroke-width="1.5" d="M12 3c4 0 7 1.79 7 4s-3 4-7 4-7-1.79-7-4 3-4 7-4z"/>
                <path stroke-width="1.5" d="M5 7v10c0 2.21 3.134 4 7 4s7-1.79 7-4V7"/>
              </svg>

              <!-- TOOLS -->
              <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 text-primary">
                <path stroke-width="1.5" d="M12 2v20M2 12h20"/>
              </svg>

            </div>

            <h3 class="font-mono text-xs uppercase tracking-widest text-white">
              {{ category.label }}
            </h3>

          </div>

          <!-- SKILLS -->
          <div class="space-y-2">

            <div
              v-for="skill in category.items"
              :key="skill"
              class="flex items-center gap-2 py-1.5 group/item"
            >

              <span class="w-1 h-1 rounded-full bg-primary/60 group-hover/item:bg-primary transition-colors"></span>

              <span class="font-body text-sm text-foreground group-hover/item:text-white transition-colors">
                {{ skill }}
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>