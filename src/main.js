import { createApp } from 'vue'
import App from './App.vue'
import AOS from "aos"
import "aos/dist/aos.css"
import emailjs from "@emailjs/browser"

emailjs.init("rB9_BY8oMO1V87CS7")

AOS.init({
  duration: 800,
  once: true
})

createApp(App).mount('#app')
