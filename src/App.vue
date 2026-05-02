<template>
  <div class="">

    <div class="fixed top-0 left-0 right-0 z-50  mx-auto" :class="scrolled ? 'nav-scrolled' : 'nav-default'">
      <NavBar />

      </div>
    <div id="hero" class="min-h-screen bg-black">
      <HeroSection />
    </div>
    <div id="projets" class="min-h-screen bg-black">
      <ProjectCard v-for="(project, index) in projects" :key="project.id" :project="project" :index="index" class="mb-8"/>
    </div>
    <div id="apropos" class="min-h-screen bg-black">
      <AboutSection />
    </div>
    <div id="competences" class="min-h-screen bg-black">
      <SkillSection />
    </div>
    <div id="contact" class="min-h-screen bg-black">
      <ContactSection />
    </div>
    </div>

</template>

<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectCard from './components/ProjectCard.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { projects } from "@/lib/portfolioData"
import AboutSection from './components/AboutSection.vue'
import SkillSection from './components/SkillSection.vue'
import ContactSection from './components/ContactSection.vue'

const scrolled = ref(false)

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

<style>
@import './assets/styles.css';


.nav-scrolled {
  background: hsla(0, 0%, 2%, 0.8); /* équivalent de bg-background/80 */
  backdrop-filter: blur(20px);      /* équivalent de backdrop-blur-xl */
  -webkit-backdrop-filter: blur(20px); /* support Safari */
  border-bottom: 1px solid var(--border);
}

.nav-default {
  background: transparent;
}
</style>
