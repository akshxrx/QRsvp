<template>
  <q-card class="row" style="width: 500px">
    <q-card-section class="col">
      <q-card-section class="row">
        <div class="text-h6">Create WiFi QR</div>
      </q-card-section>
      <q-separator />
      <q-card-section class="row">
        <q-input
          label="Wifi name (SSID)"
          filled
          v-model="wifi.ssid"
          :rules="[(val) => val.length > 0 || 'Required Field']"
        />
      </q-card-section>
      <q-card-section class="row">
        <q-input
          v-model="wifi.password"
          filled
          label="Password"
          :type="canShow ? 'text' : 'password'"
        >
          <template v-slot:append>
            <q-icon
              :name="canShow ? 'visibility' : 'visibility_off'"
              class="cursor-pointer"
              @click="canShow = !canShow"
            />
          </template>
        </q-input>
      </q-card-section>
      <q-card-section>
        <q-btn label="Submit" @click="generaeteQR" />
      </q-card-section>
    </q-card-section>
    <q-card-section class="col">
      <q-img :src="image" />
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import QRCode from 'qrcode';
export default defineComponent({
  setup() {
    const wifi = reactive({ ssid: '', password: '' });
    const canShow = ref(false);
    const image = ref<string>();
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
