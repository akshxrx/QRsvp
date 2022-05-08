<template>
  <q-page class="row items-center justify-evenly">
    <!-- <network-q-r-form />
    <firebase-test /> -->
    <sub-event-module />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NetworkQRForm from 'components/forms/NetworkQRForm.vue';
import FirebaseTest from 'src/components/FirebaseTest.vue';
import SubEventModule from 'src/components/SubEventModule.vue';
export default defineComponent({
  name: 'IndexPage',
  components: { NetworkQRForm, FirebaseTest, SubEventModule },
  setup() {
    return {};
  },
});
</script>
