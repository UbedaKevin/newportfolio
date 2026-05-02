<script setup>
import { aboutData } from "@/lib/portfolioData"

import { onMounted, nextTick } from "vue"
import AOS from "aos"

onMounted(async () => {
  await nextTick()
  AOS.refreshHard()
})

</script>

<template>
  <section id="apropos" class="relative py-32 px-6 lg:px-[8vw]">

    <!-- Circuit line -->
    <div class="absolute left-[8vw] top-0 w-px h-32 circuit-line hidden lg:block"></div>

    <div class="max-w-7xl mx-auto">

      <!-- HEADER -->
      <div class="mb-16" data-aos="fade-up">
        <span class="font-mono text-primary text-sm uppercase tracking-widest">
          // À propos
        </span>

        <h2 class="font-heading text-4xl lg:text-5xl font-bold text-white mt-4">
          Qui suis-je<span class="text-primary">.</span>
        </h2>
      </div>

      <div class="grid lg:grid-cols-2 gap-16">

        <!-- LEFT -->
        <div class="space-y-6" data-aos="fade-right">

          <p class="font-body text-lg leading-relaxed text-foreground">
            {{ aboutData.intro }}
          </p>

          <p class="font-body text-foreground leading-relaxed">
            {{ aboutData.objective }}
          </p>

          <div class="pt-4 flex flex-wrap gap-3">

            <div class="px-4 py-2 border border-border bg-card font-mono text-xs text-muted-foreground">
              Niveau :
              <span class="text-primary">{{ aboutData.level }}</span>
            </div>

            <div class="px-4 py-2 border border-border bg-card font-mono text-xs text-muted-foreground">
              Status :
              <span class="text-primary">Disponible</span>
            </div>

          </div>
        </div>

        <!-- RIGHT -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-left">

          <div
            v-for="(item, i) in aboutData.highlights"
            :key="i"
            class="group p-6 border border-border bg-card hover:border-primary/40 transition-all duration-500"
            data-aos="fade-up"
            :data-aos-delay="i * 100"
          >

            <!-- ICONS SVG INLINE -->
            <div class="w-5 h-5 text-primary mb-4 group-hover:scale-110 transition-transform">

              <!-- Target -->
              <svg v-if="i === 0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-width="1.5" d="M12 2v4m0 12v4m8-10h-4M8 12H4m14.95 7.95l-2.83-2.83M7.88 7.88 5.05 5.05m12.1 0-2.83 2.83M7.88 16.12l-2.83 2.83"/>
              </svg>

              <!-- Zap -->
              <svg v-if="i === 1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-width="1.5" d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/>
              </svg>

              <!-- Branch -->
              <svg v-if="i === 2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-width="1.5" d="M6 3v12m0 0a3 3 0 1 0 3 3m-3-3a3 3 0 1 1-3 3m12-15v6m0 0a3 3 0 1 0 3 3m-3-3a3 3 0 1 1-3 3"/>
              </svg>

              <!-- Eye -->
              <svg v-if="i === 3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-width="1.5" d="M2.25 12S5.25 5.25 12 5.25 21.75 12 21.75 12 18.75 18.75 12 18.75 2.25 12 2.25 12z"/>
                <circle cx="12" cy="12" r="3" stroke-width="1.5"/>
              </svg>

            </div>

            <p class="font-body text-sm text-foreground leading-relaxed">
              {{ item }}
            </p>

          </div>

        </div>

      </div>
    </div>
  </section>
</template>