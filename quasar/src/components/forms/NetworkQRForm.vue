<template>
  <q-card class="row" style="width: 600px">
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
      <div v-if="!image" class="row justify-center full-height items-center">
        <div class="flex justify-center">
          <q-icon name="qr_code_scanner" size="10rem" class="low-opacity" />
          <div class="text-caption text-center q-pt-none">
            Input your wifi credentials to generate a QR!
          </div>
        </div>
      </div>
      <div v-else>
        <q-img :src="image" />
        <div class="flex justify-center">Scan your QR code to test it</div>
        <div class="row justify-center">
          <q-btn
            class="row justify-center"
            @click="saveCodeDashboard"
            label="Save QR to dashboard"
          />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import QRCode from 'qrcode';
import { fs } from 'src/lib/firebase';
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

    function saveCodeDashboard() {
      // Implement firestore update doc
      return 0;
    }
    return {
      wifi,
      canShow,
      generaeteQR,
      saveCodeDashboard,
      image,
    };
  },
});
</script>
