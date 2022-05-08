<template>
  <qrcode-vue
    size="150"
    :value="`https://renegadetickets.fans/qr/${'wallet'}/${ticketId}/${'secret'}`"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import QrcodeVue from 'qrcode.vue';

export default defineComponent({
  name: 'TicketQrCode',
  props: {
    ticketId: String,
  },
  components: { QrcodeVue },
  setup() {
    const time = ref(Date.now());
    // const resetEvery15 = setInterval(() => {
    //   time.value = Date.now();
    // }, 15000);
    return { time };
  },
});
</script>
