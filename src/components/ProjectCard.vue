<script setup>
defineProps({
  project: Object,
  index: Number
})
</script>

<template>
    <div class="max-w-7xl mx-auto ">

  <div
    class="group relative border border-border bg-card hover:border-primary/40 transition-all duration-500 p-6 lg:p-10"
    data-aos="fade-up"
    :data-aos-delay="index * 100"
  >

    <!-- Metric badge -->
    <div class="absolute top-6 right-6 lg:top-10 lg:right-10">
      <span class="font-mono text-xs text-primary bg-primary/10 border border-primary/20 px-3 py-1.5">
        {{ project.metric }}
      </span>
    </div>

    <!-- Category -->
    <span class="font-mono text-xs uppercase tracking-widest text-muted-foreground">
      // {{ project.category }}
    </span>

    <h3 class="font-heading text-2xl lg:text-3xl font-bold text-white mt-3 mb-6 group-hover:text-primary transition-colors duration-300">
      {{ project.title }}
    </h3>

    <!-- Problem / Solution -->
    <div class="space-y-4 mb-8">
      <div>
        <span class="font-mono text-xs text-muted-foreground uppercase tracking-wider">
          Problème
        </span>
        <p class="font-body text-foreground mt-1 leading-relaxed">
          {{ project.problem }}
        </p>
      </div>

      <div>
        <span class="font-mono text-xs text-primary uppercase tracking-wider">
          Solution
        </span>
        <p class="font-body text-foreground mt-1 leading-relaxed">
          {{ project.solution }}
        </p>
      </div>
    </div>

    <!-- Difficulty -->
    <div
      v-if="project.difficulty"
      class="mb-8 p-4 border border-border bg-background/50 flex items-start gap-3"
    >
      <span class="text-yellow-500 mt-0.5">⚠</span>

      <div>
        <span class="font-mono text-xs text-yellow-500/80 uppercase tracking-wider">
          Défi technique
        </span>
        <p class="font-body text-sm text-muted-foreground mt-1 leading-relaxed">
          {{ project.difficulty }}
        </p>
      </div>
    </div>

    <!-- Stack -->
    <div class="flex flex-wrap gap-2 mb-8">
      <span
        v-for="tech in project.stack"
        :key="tech"
        class="px-3 py-1.5 bg-secondary text-primary font-mono text-xs border border-border"
      >
        {{ tech }}
      </span>
    </div>

    <!-- Links -->
    <div class="flex items-center gap-6 pt-4 border-t border-border">
      <a
        :href="project.github"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors font-mono text-sm"
      >
        <span>🐙</span>
        Source
      </a>

      <a
        :href="project.demo"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-mono text-sm"
      >
        <span>↗</span>
        Live Demo
      </a>
    </div>

  </div>
  </div>
</template>