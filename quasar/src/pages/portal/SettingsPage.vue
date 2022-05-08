<template> 
  <q-card class="row justify-center" style="width: 600px;">
    <q-card-section class="col justify-center">
      <q-card-section class="row">
        <div class="text-h3">Settings</div>
      </q-card-section>
      <q-separator />
      <q-card-section class="row">
        <div class="text-h6">Date: 2022-05-09</div>
      </q-card-section>
      <q-card-section class="row">
        <div class="text-h6">Duration: 3 hours</div>
      </q-card-section>
      <q-card-section class="row">
        <div class="text-h6">Location: Toronto Convention Center</div>
      </q-card-section>
      <q-card-section class="row">
        <div class="text-h6">Time: 21:45</div>
      </q-card-section>
      <q-card-section class="row">
        <div class="text-h6">Tittle: New Event 945</div>
      </q-card-section>
      <q-card-section>
        <q-btn label="Edit"/>
      </q-card-section>
    </q-card-section>
  </q-card>

</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
export default defineComponent({
  setup() {
    const wifi = reactive({ ssid: '', password: '' });
    const canShow = ref(false);
    const image = ref<string>();
    // Note*: DOES NOT USE OPENSCREEN. Partly due to its lack of ability
    // to encode strings only. Eventually add to firestore as imgUrl

    function saveCodeDashboard() {
      // Implement firestore update doc
      return 0;
    }
    return {
      wifi,
      canShow,
      saveCodeDashboard
    };
  },
});
</script>
