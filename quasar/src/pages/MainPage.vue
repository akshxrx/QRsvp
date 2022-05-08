<template>
  <div class="q-pa-lg main text-secondary">
    <h3 class="fn-800 fn-xl q-my-md text-white text-center op-80">
      Whether you're ..
    </h3>
    <div class="col-12 row q-col-gutter-lg">
      <!-- QR -->
      <EventModule class="col-grow">
        <div class="col-12">
          <div class="fit row">
            <div class="column col-grow">
              <div class="fn-800 fn-xl text-center text-white q-mb-sm op-80">
                An Event Goer
              </div>

              <q-img
                fit="contain"
                height="300px"
                class="col-grow"
                src="/goer.png"
              />
            </div>
          </div>
        </div>
      </EventModule>
      <!-- QR -->
      <div class="column">
        <div
          class="column op-60 justify-center fn-700 text-white fn-xl col-grow"
        >
          or
        </div>
      </div>
      <EventModule class="col-grow">
        <div class="col-12">
          <div class="fit row">
            <div class="column col-grow">
              <div class="fn-800 fn-xl text-center text-white q-mb-sm op-80">
                An Event Coordinator
              </div>
              <q-img
                fit="contain"
                height="300px"
                class="col-grow"
                src="/coordinator.png"
              />
              <q-space />
            </div>
          </div>
        </div>
      </EventModule>
      <div class="col-12">
        <h3 class="fn-800 fn-xl q-my-md text-white text-center op-80">
          You can Benefit From
        </h3>
      </div>
      <!-- QR -->
      <EventModule class="col-grow">
        <div class="col-12 q-pa-lg row justify-center">
          <div class="fn-700 op-80 col-shrink fn-md text-left text-white op-60">
            - Fast and accessible RSVP to Events using QR codes <br />
            - Quick signup to an event's workshops, panels, and subevents<br />
            - Current or on-going events schedules and news at the palm of your
            hands<br />
          </div>
        </div>
      </EventModule>
      <div class="column op-0">
        <div class="column justify-center fn-700 text-white fn-xl col-grow">
          or
        </div>
      </div>
      <!-- QR -->
      <EventModule class="col-grow">
        <div class="col-12 row justify-center q-pa-lg">
          <div class="fn-700 op-80 col-shrink fn-md text-left text-white op-60">
            - Event and Sub-Event management <br />
            - use QR Codes to allow registration to main and sub-events <br />
            - Send QR Codes to panel or workshop hosts to let them edit their
            subevent details <br />
            - Detailed event and sub-event analytics<br />
          </div>
        </div>
      </EventModule>
      <div class="col-12 row">
        <login-google-btn
          class="col-12 border-round"
          label="Login using Google"
        />
      </div>
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
</style>

<script lang="ts">
import { useFirebaseUser } from '@gcto/firebase-hooks/lib';
import { defineComponent, ref, watchEffect } from '@vue/runtime-core';
import LoginGoogleBtn from 'src/components/auth/LoginGoogleBtn.vue';

import EventModule from 'src/components/EventModule.vue';
import { useRouter } from 'vue-router';

// function addLeadingZeros(num: number, totalLength: number) {
//   return String(num).padStart(totalLength, '0');
// }

export default defineComponent({
  components: { EventModule, LoginGoogleBtn },
  setup() {
    const user = useFirebaseUser();
    const router = useRouter();

    const num = ref(60);

    const stats = {
      // "Event Goers": 215
      Hackers: 120,
      'Prize Pool': '16.2k',
      Workshops: 15,
      Sponsors: 9,
      Judges: 4,
      Duration: '48h',
      Location: 'V',
    };
    setInterval(function () {
      num.value = num.value == 0 ? 60 : num.value - 1;
    }, 1000);
    return { num, stats };
  },
});
</script>
