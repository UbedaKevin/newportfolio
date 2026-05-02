<script setup>
defineProps({
  text: String
})
</script>

<template>
  <div class="inline-flex items-center gap-2 px-4 py-2 border border-border bg-secondary/50 backdrop-blur-sm">
    
    <span class="relative flex h-2 w-2">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
      <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
    </span>

    <span class="font-mono text-xs uppercase tracking-widest text-primary">
      {{ text }}
    </span>

  </div>
</template>