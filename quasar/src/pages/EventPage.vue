<template>
  <div class="q-pa-lg main text-brown">
    <h3 class="fn-800 fn-xl text-brown">RuHacks 2022</h3>
    <div class="col-12 row q-col-gutter-lg">
      <!-- QR -->
      <EventModule class="col-8">
        <div class="row q-gutter-md">
          <Qrcode :ticketId="'123'" />
          <div class="column">
            <div class="fn-700 fn-lg">Access Ticket</div>
            <div class="fn-400 op-80 fn-sm">
              Use this access QR code as your ticket to any events you RSVP'd
              for
            </div>
            <q-space />
            <div>
              <div class="fn-700 fn-md">Ticket Owner</div>
              <div class="op-80">Sammy</div>
            </div>
          </div>
        </div>
      </EventModule>
      <!--  -->
      <EventModule title="My RSVP'd Events" class="col-4 item-stretch">
        <div class="column col-12">
          <div v-for="i in [1, 2, 3, 4]" :key="i" class="row justify-between">
            <div class="fn-600">MLH Workshop</div>
            <div class="fn-400 op-80">2:00pm</div>
          </div>
        </div>
      </EventModule>
      <EventModule title="Available Events" class="col-6"> </EventModule>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$height: 600px;
.card {
  border-radius: 10px 00px 00px 10px;
}
.card-inner {
  max-width: 800px;
}
.img-container {
  max-height: $height;
}
.main {
  // min-height: $height;
  // width: 100%;
  // background: linear-gradient(
  //     180deg,
  //     rgba(49, 153, 215, 0.2) 0%,
  //     rgba(0, 15, 23, 0.2) 100%
  //   ),
  //   linear-gradient(
  //     257.44deg,
  //     rgba(255, 255, 255, 0.2) 0%,
  //     rgba(26, 57, 75, 0.2) 100%
  //   ),
  //   #132d3c10;
}
</style>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

import EventModule from 'src/components/EventModule.vue';
import Qrcode from 'src/components/Qrcode.vue';

export default defineComponent({
  setup() {
    return {};
  },
  components: { EventModule, Qrcode },
});
</script>
