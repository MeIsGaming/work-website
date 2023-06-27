<template>
  <div>
    <h5>Template</h5>
    <div class="template">
      <prime-button class="google p-0" aria-label="Google">
        <i class="pi pi-google px-2"></i>
        <span class="px-3">Google</span>
      </prime-button>
      <prime-button class="youtube p-0" aria-label="Youtube">
        <i class="pi pi-youtube px-2"></i>
        <span class="px-3">Youtube</span>
      </prime-button>
      <prime-button class="vimeo p-0" aria-label="Vimeo">
        <i class="pi pi-vimeo px-2"></i>
        <span class="px-3">Vimeo</span>
      </prime-button>
      <prime-button class="facebook p-0" aria-label="Facebook">
        <i class="pi pi-facebook px-2"></i>
        <span class="px-3">Facebook</span>
      </prime-button>
      <prime-button class="twitter p-0" aria-label="Twitter">
        <i class="pi pi-twitter px-2"></i>
        <span class="px-3">Twitter</span>
      </prime-button>
      <prime-button class="slack p-0" aria-label="Slack">
        <i class="pi pi-slack px-2"></i>
        <span class="px-3">Slack</span>
      </prime-button>
      <prime-button class="amazon p-0" aria-label="Amazon">
        <i class="pi pi-amazon px-2"></i>
        <span class="px-3">Amazon</span>
      </prime-button>
      <prime-button class="discord p-0" aria-label="Discord">
        <i class="pi pi-discord px-2"></i>
        <span class="px-3">Discord</span>
      </prime-button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const loading = ref([false, false, false]);
    const load = (index) => {
      loading.value[index] = true;
      setTimeout(() => (loading.value[index] = false), 1000);
    };

    return { loading, load };
  },
};
</script>

<style lang="scss" scoped src="./TestView.scss" />
