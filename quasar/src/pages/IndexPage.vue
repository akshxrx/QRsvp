<template>
  <q-page class="row items-center justify-evenly">
    <network-q-r-form />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NetworkQRForm from 'components/forms/NetworkQRForm.vue';
export default defineComponent({
  name: 'IndexPage',
  components: { NetworkQRForm },
  setup() {
    return {};
  },
});
</script>
