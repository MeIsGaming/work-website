<template>
  <div class="contact">
    <h1>This is an contact page</h1>
    <h2>Kontakt</h2>

    <div class="buttons">
      <a href="tel:+4917647018976" target="telefon"
        ><prime-button class="telefon p-0" aria-label="Telefon">
          <i class="pi pi-phone px-2"></i>
          <span class="px-3">Telefon (+49 176 47018976)</span>
        </prime-button>
      </a>

      <a href="mailto:info@meisgaming.net">
        <prime-button class="e-mail p-0" aria-label="E-Mail">
          <i class="pi pi-envelope px-2"></i>
          <span class="px-3">E-Mail</span>
        </prime-button>
      </a>

      <a href="https://t.me/meis_gaming" target="telegram">
        <prime-button class="telegram p-0" aria-label="Telegram">
          <i class="pi pi-telegram px-2"></i>
          <span class="px-3">Telegram</span>
        </prime-button>
      </a>

      <a href="https://threema.id/VXVUK3E5" target="threema">
        <prime-button class="threema p-0" aria-label="Threema">
          <i class="pi pi-lock px-2"></i>
          <span class="px-3">Threema</span>
        </prime-button>
      </a>

      <prime-button class="youtube p-0" aria-label="Youtube">
        <i class="pi pi-youtube px-2"></i>
        <span class="px-3">Youtube</span>
      </prime-button>

      <prime-button class="twitter p-0" aria-label="Twitter">
        <i class="pi pi-twitter px-2"></i>
        <span class="px-3">Twitter</span>
      </prime-button>

      <a href="https://wa.me/+4917647018976" target="whatsapp">
        <prime-button class="whatsapp p-0" aria-label="Whatsapp">
          <i class="pi pi-whatsapp px-2"></i>
          <span class="px-3">Whatsapp</span>
        </prime-button>
      </a>

      <a href="https://discordapp.com/users/871497360658800640" target="discord"
        ><prime-button class="discord p-0" aria-label="Discord">
          <i class="pi pi-discord px-2"></i>
          <span class="px-3">Discord</span>
        </prime-button>
      </a>

      <a href="" target="facebook"
        ><prime-button class="facebook p-0" aria-label="Facebook">
          <i class="pi pi-facebook px-2"></i>
          <span class="px-3">Facebook</span>
        </prime-button>
      </a>
    </div>
  </div>
</template>

<script>
import Button from "primevue/button";

export default {
  name: "ContactView",
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped src="./ContactView.scss" />
