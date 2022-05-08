<template>
  <div>
    <h6>RSVP For event: {{ asset }}</h6>
    <q-input label="Name" v-model="rsvp.name" />
    <q-input label="Number" v-model="rsvp.phone" />
    <q-btn label="Confirm Attending event" @click="createContact(scanId)" />
    <q-btn label="trigger" @click="getAssetByScanId(scanId)" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useHttpsCallable } from '@gcto/firebase-hooks/lib';
export default defineComponent({
  setup() {
    const $route = useRoute();
    const rsvp = reactive({
      name: '',
      isAttending: false,
      phone: null,
    });

    const asset = ref('');

    async function getAssetByScanId(scanId) {
      console.log('Sending', scanId);
      const assetData = await useHttpsCallable('getAssetByScan', () => scanId);
      console.log('getAssetScan', assetData);
      asset.value = assetData.data;
    }
    async function createContact(scanId) {
      const contactData = useHttpsCallable('createContactByScan', () => ({
        scanId,
        name: rsvp.name,
        phone: rsvp.phone,
      }));
      console.log(contactData);
    }
    onBeforeMount(async () => {
      await getAssetByScanId($route.params.scanId);
    });
    return {
      hash: $route.params,
      asset,
      scanId: $route.params.scanId,
      getAssetByScanId,
      rsvp,
      createContact,
    };
  },
});
</script>
