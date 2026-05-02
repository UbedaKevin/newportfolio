<script setup>
import { ref, onMounted, nextTick } from "vue"
import { developerInfo } from "@/lib/portfolioData"
import AOS from "aos"
import emailjs from "@emailjs/browser"

onMounted(async () => {
  await nextTick()

  setTimeout(() => {
    AOS.refreshHard()
  }, 50)
})

const form = ref({
  name: "",
  email: "",
  message: ""
})

const sending = ref(false)
const successMessage = ref("")
const errorMessage = ref("")

const handleSubmit = async (e) => {
  e.preventDefault()

  if (sending.value) return

  sending.value = true
  successMessage.value = ""
  errorMessage.value = ""

  try {
    if (!form.value.name || !form.value.email || !form.value.message) {
      errorMessage.value = "Champs manquants"
      return
    }

    const captchaResponse = window.grecaptcha.getResponse()

    if (!captchaResponse) {
      errorMessage.value = "Veuillez valider le captcha"
      return
    }

    await emailjs.send(
      "service_y78050q",
      "template_zjgvled",
      {
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
        "g-recaptcha-response": captchaResponse // 👈 important (optionnel mais propre)
      },
      "rB9_BY8oMO1V87CS7"
    )

    window.grecaptcha.reset()

    successMessage.value = "Message envoyé avec succès !"

    form.value = { name: "", email: "", message: "" }

    setTimeout(() => {
      successMessage.value = ""
    }, 4000)

  } catch (err) {
    console.error(err)
    errorMessage.value = "Erreur lors de l’envoi du message."
  }

  sending.value = false
}
</script>

<template>
  <section id="contact" class="relative py-32 px-6 lg:px-[8vw]">

    <div class="absolute left-[8vw] top-0 w-px h-32 circuit-line hidden lg:block"></div>

    <div class="max-w-7xl mx-auto">

      <!-- HEADER -->
      <div class="mb-16" data-aos="fade-up">
        <span class="font-mono text-primary text-sm uppercase tracking-widest">
          // Get in Touch
        </span>

        <h2 class="font-heading text-4xl lg:text-5xl font-bold text-white mt-4">
          Discutons<span class="text-primary">.</span>
        </h2>

        <p class="font-body text-foreground mt-4 max-w-xl">
          Vous avez un projet en tête ou une opportunité ? Discutons ensemble.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-16">

        <!-- FORM -->
        <form @submit="handleSubmit" class="space-y-6" data-aos="fade-right">

          <!-- SUCCESS -->
          <div
            v-if="successMessage"
            class="p-4 border border-primary/30 bg-primary/10 text-primary font-mono text-sm"
          >
            {{ successMessage }}
          </div>

          <!-- ERROR -->
          <div
            v-if="errorMessage"
            class="p-4 border border-red-500/30 bg-red-500/10 text-red-400 font-mono text-sm"
          >
            {{ errorMessage }}
          </div>

          <!-- NAME -->
          <div>
            <label class="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
              Nom
            </label>
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full h-12 bg-card border border-border text-white px-3 focus:border-primary outline-none"
            />
          </div>

          <!-- EMAIL -->
          <div>
            <label class="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
              Email
            </label>
            <input
              v-model="form.email"
              type="email"
              required
              class="w-full h-12 bg-card border border-border text-white px-3 focus:border-primary outline-none"
            />
          </div>

          <!-- MESSAGE -->
          <div>
            <label class="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
              Message
            </label>
            <textarea
              v-model="form.message"
              rows="5"
              required
              class="w-full bg-card border border-border text-white p-3 resize-none focus:border-primary outline-none"
            ></textarea>
          </div>
          <div class="g-recaptcha" data-sitekey="6Le2udUsAAAAAE9br3vNm50v3dZyFhvbv1aQ8aU9"></div>
          <!-- BUTTON -->
          <button
            type="submit"
            :disabled="sending"
            class="w-full h-12 bg-primary text-primary-foreground font-heading font-semibold text-sm uppercase tracking-wider hover:bg-primary/90 transition-all glow-cyan"
          >
            <span v-if="sending" class="flex items-center justify-center gap-2">
              <span class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              Envoi...
            </span>

            <span v-else>
              Envoyer le message
            </span>
          </button>
          
        </form>

        <!-- LINKS -->
        <div class="space-y-8 lg:pl-8" data-aos="fade-left">

          <h3 class="font-heading text-xl font-semibold text-white mb-6">
            Liens directs
          </h3>

          <a :href="`mailto:${developerInfo.email}`"
             class="flex items-center gap-4 p-4 border border-border bg-card hover:border-primary/40 transition">
            <span>✉</span>
            <div class="flex-1">
              <p class="font-mono text-xs text-muted-foreground uppercase">Email</p>
              <p class="text-white text-sm">{{ developerInfo.email }}</p>
            </div>
            <span>↗</span>
          </a>

          <a :href="developerInfo.linkedin" target="_blank"
             class="flex items-center gap-4 p-4 border border-border bg-card hover:border-primary/40 transition">
            <span>in</span>
            <div class="flex-1">
              <p class="font-mono text-xs text-muted-foreground uppercase">LinkedIn</p>
              <p class="text-white text-sm">Profil</p>
            </div>
            <span>↗</span>
          </a>

          <a :href="developerInfo.github" target="_blank"
             class="flex items-center gap-4 p-4 border border-border bg-card hover:border-primary/40 transition">
            <span>🐙</span>
            <div class="flex-1">
              <p class="font-mono text-xs text-muted-foreground uppercase">GitHub</p>
              <p class="text-white text-sm">Projets</p>
            </div>
            <span>↗</span>
          </a>
          <div class="p-6 border border-primary/20 bg-primary/5" data-aos="fade-up">
            <p class="font-mono text-sm text-primary">
              > Disponible pour collaborations. Réponse sous 24h.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>