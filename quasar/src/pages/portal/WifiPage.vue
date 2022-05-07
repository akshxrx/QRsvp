<template>
  <div class="row justify-center items-center q-mt-xl">
    <network-q-r-form />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NetworkQRForm from 'components/forms/NetworkQRForm.vue';
export default defineComponent({
  components: {
    NetworkQRForm,
  },
  setup() {
    return {};
  },
});
</script>
