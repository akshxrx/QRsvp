<template>
  <div class="q-pa-lg main text-secondary">
    <h3 class="fn-800 fn-xl q-my-md text-white op-80">Hello Sammy!</h3>
    <div class="col-12 row q-col-gutter-lg">
      <!-- QR -->
      <EventModule title="Upcoming RSVP'd Event" class="col-8">
        <div class="col-12">
          <q-btn dark flat class="fit" dense>
            <div class="fit row">
              <div class="col-4 self-stretch q-mr-md">
                <q-skeleton dark class="fit" />
              </div>

              <div class="column col-grow">
                <div class="fn-700 fn-xl text-left">4:18:19:{{ num }}</div>
                <div class="fn-700 fn-md text-left text-dark">CuHacks 3030</div>
                <div
                  class="fn-400 op-80 fn-sm text-left text-dark fn-500 op-60"
                >
                  Cu University is hosting a hackathon this 2030.
                </div>
                <q-space />
              </div>
            </div>
          </q-btn>
        </div>
      </EventModule>
      <!-- PANELS -->
      <EventModule title="My RSVP'd Panels" class="col-4 item-stretch">
        <div class="column col-12 border-round bg-blur q-pa-md">
          <q-btn dense flat v-for="i in [1, 2, 3]" :key="i">
            <div class="fit row justify-between border-round text-dark">
              <div class="fn-800">MLH Workshop</div>
              <div class="fn-600 op-40">2:00pm</div>
            </div>
          </q-btn>
        </div>
      </EventModule>
      <!-- AVAILABLE -->
      <EventModule
        cardClass="bg-secondary op-80"
        title="Available Events"
        class="col-6"
      >
        <div class="col-12">
          <div class="row q-col-gutter-sm fit">
            <div
              class="col-3 row justify-center"
              v-for="i in [1, 2, 3, 4]"
              :key="i"
            >
              <q-btn dense flat class="fit text-dark">
                <div class="fit column">
                  <q-skeleton dark class="col-8" />
                  <div class="col-grow column">
                    <!-- <div class="fn-600 q-my-none">MLH Workshop</div> -->
                    <div class="fn-800 text-white text-left q-mt-xs fn-sm">
                      MLH Test
                    </div>
                    <div class="fn-400 text-white op-80 text-left fn-xs">
                      09/08/2020
                    </div>
                  </div>
                </div>
              </q-btn>
            </div>
          </div>
        </div>
      </EventModule>

      <!-- RSVP -->
      <EventModule title="RSVP with QR" class="col-3">
        <div class="col-12 column text-dark">
          <div>
            <div class="q-mb-xs fn-800">See an event or panel invitation?</div>
            <div class="op-80">
              RSVP Your spot by scanning the QR code with either the camera app
              or our webapp
            </div>
          </div>
          <q-space />
          <div class="row justify-center items-center">
            <q-btn unelevated class="border-round bg-secondary text-white"
              >Access Device Camera</q-btn
            >
          </div>
        </div>
      </EventModule>
      <!-- HOST -->
      <EventModule
        title="Host an Event"
        cardClass="bg-dark op-80"
        class="col-3"
      >
        <div class="col-12 column">
          <div>
            <h3 class="q-mb-xs q-mt-none text-center">Need QR RSVPs?</h3>
            <div class="text-center fn-400 op-80">
              Use our Platform to handle your RSVPs
            </div>
          </div>
          <q-space />
          <div class="row justify-center items-center">
            <q-btn unelevated class="border-round text-white bg-accent" outline
              >Learn More</q-btn
            >
          </div>
        </div>
      </EventModule>
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
import { defineComponent, ref } from '@vue/runtime-core';

import EventModule from 'src/components/EventModule.vue';

export default defineComponent({
  components: { EventModule },
  setup() {
    const num = ref(60);
    setInterval(function () {
      num.value = num.value == 0 ? 60 : num.value - 1;
    }, 1000);
    return { num };
  },
});
</script>
