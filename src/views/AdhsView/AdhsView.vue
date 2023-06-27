<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <h1>ADHS-Seite</h1>
  <h2>Für all die kleinen süßen ADHS-Kinder von euch :)</h2>
  <div class="adhsclicker">
    <prime-button
      @click="count++"
      class="adhsclicker p-0"
      aria-label="ClickMeButton">
      <i class="pi pi-spin pi-spinner px-2"></i>
      <span class="px-3">Click me UwU Nya~</span>
    </prime-button>
    <h5>{{ count }} mal geklickt ^^</h5>
  </div>
</template>

<style lang="scss" scoped src="./AdhsView.scss" />
