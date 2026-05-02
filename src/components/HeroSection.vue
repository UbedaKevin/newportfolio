<script setup>
import { developerInfo } from "@/lib/portfolioData"
import StatusBadge from "./StatusBadge.vue"
import { onMounted } from "vue"
import AOS from "aos"

onMounted(() => {
  AOS.refresh()
})

const scrollToProjets = () => {
  document.querySelector('#projets').scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">

    <!-- Grid overlay -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute left-[8vw] top-0 bottom-0 w-px bg-border/30"></div>
      <div class="absolute right-[8vw] top-0 bottom-0 w-px bg-border/30"></div>
      <div class="absolute left-0 right-0 top-1/2 h-px bg-border/20"></div>
    </div>

    <!-- Ambient glow -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="relative z-10 px-6 w-full max-w-7xl mx-auto">
      <div class="space-y-8" data-aos="fade-up">

        <StatusBadge :text="developerInfo.status" />

        <div class="space-y-4">
          <p
            class="font-mono text-sm text-primary tracking-widest uppercase"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            // {{ developerInfo.role }}
          </p>

          <h1
            class="font-heading text-5xl sm:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-none"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {{ developerInfo.name.split(' ')[0] }}
            <br />
            <span class="text-gradient">
              {{ developerInfo.name.split(' ')[1] }}
            </span>
          </h1>
        </div>

        <p
          class="font-body text-lg lg:text-xl text-foreground max-w-2xl leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {{ developerInfo.tagline }}
        </p>

        <div
          class="flex flex-wrap gap-4 pt-4"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <a
            href="#projets"
            class="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-heading font-semibold text-sm uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 glow-cyan"
          >
            Voir mes projets
            <span class="w-4 h-4 inline-block transition-transform group-hover:translate-y-1">
              ↓
            </span>
          </a>

          <a
            href="#contact"
            class="inline-flex items-center gap-3 px-8 py-4 border border-border text-white font-heading font-semibold text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-all duration-300"
          >
            Me contacter
          </a>
        </div>

      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      class="absolute bottom-10 left-1/2 -translate-x-1/2"
      data-aos="fade-up"
      data-aos-delay="700"
    >
      <div class="animate-bounce">
        <span @click="scrollToProjets" class="w-5 h-5 text-muted-foreground inline-block cursor-pointer">↓</span>
      </div>
    </div>

  </section>
</template>

<style>
</style>