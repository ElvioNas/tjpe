import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    experimentalStudio: true, // ← habilita o botão Record
    setupNodeEvents(on, config) {
      // implement event listeners here
    },
  },
})