<template>
  <div>
    <h6>Provide WiFi information</h6>
    <q-input
      label="Wifi name (SSID)"
      v-model="wifi.ssid"
      :rules="[(val) => val.length > 0 || 'Required Field']"
    />
    <div class="row">
      <q-input
        label="Wifi password"
        v-model="wifi.password"
        :type="canShow ? 'text' : 'password'"
        :rules="[(val) => val.length > 0 || 'Required Field']"
      />
      <q-icon
        :name="canShow ? 'visibility' : 'visibility_off'"
        color="black"
        size="4rem"
        @click="canShow = !canShow"
      />
    </div>
    <q-btn label="Submit" @click="generaeteQR" />
    <q-img :src="image" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import QRCode from 'qrcode';
export default defineComponent({
  setup() {
    const wifi = reactive({ ssid: '', password: '' });
    const canShow = ref(false);
    const image = ref(null);
    // Note*: DOES NOT USE OPENSCREEN. Partly due to its lack of ability
    // to encode strings only. Eventually add to firestore as imgUrl
    async function generaeteQR() {
      image.value = await QRCode.toDataURL(
        `WIFI:T:WPA;S:${wifi.ssid};P:${wifi.password};;`
      );
    }
    return {
      wifi,
      canShow,
      generaeteQR,
      image,
    };
  },
});
</script>
