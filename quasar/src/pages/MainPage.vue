<template>
  <div class="q-pa-lg main text-secondary">
    <h3 class="fn-800 fn-xl q-my-md text-white op-80">RuHacks 2022</h3>
    <div class="col-12 row q-col-gutter-lg">
      <!-- QR -->
      <EventModule imgSrc="/slc.jpeg" title="Event Details" class="col-8">
        <div class="col-12">
          <q-btn dark flat class="fit border-round" no-caps dense>
            <div class="fit row">
              <div class="column col-grow">
                <div class="fn-800 fn-xl text-left text-white op-80">
                  Who we are
                </div>
                <div class="fn-700 op-80 fn-sm text-left text-white op-60">
                  RU Hacks is Ryerson University’s student-run hackathon, an
                  event open to anyone around the globe! Going into our sixth
                  year, we invite you to join us in an array of stellar
                  workshops, events and mentorship opportunities, all hosted by
                  a variety of incredible and diverse individuals! As an
                  opportunity to meet new people and showcase your hard work, we
                  hope to see you there!
                </div>
                <q-space />
              </div>
            </div>
          </q-btn>
        </div>
      </EventModule>
      <!-- QR -->
      <EventModule title="Event Countdown" class="col-4" cardClass="bg-dark">
        <div class="col-12 row items-center">
          <div class="column col-grow q-mb-md">
            <div class="fn-700 fn-xxl text-center">4:18:19:{{ num }}</div>
            <div class="fn-600 col-grow fn-lg text-center op-80">
              January 2nd 2022
            </div>
          </div>
        </div>
      </EventModule>
      <!-- PANELS -->
      <EventModule
        title="Offered Workshops"
        cardClass="bg-secondary op-80"
        class="col-5 item-stretch"
      >
        <div class="column col-12 q-gutter-y-xs">
          <q-btn
            class="border-round bg-blur q-pa-sm"
            dense
            unelevated
            v-for="i in [1, 2, 3]"
            :key="i"
          >
            <div class="fit row justify-between border-round text-white">
              <div class="fn-800 fn-80">MLH Workshop</div>
              <div class="fn-600 op-40">2:00pm</div>
            </div>
          </q-btn>
        </div>
      </EventModule>
      <!-- AVAILABLE -->
      <EventModule cardClass="op-80" title="Event Statistics" class="col-7">
        <div class="col-12">
          <div class="row q-col-gutter-sm fit">
            <div
              class="col-3 row justify-center"
              v-for="(value, key, i) in stats"
              :key="i"
            >
              <div flat class="fit text-dark">
                <div class="fit column">
                  <div class="col-grow column">
                    <!-- <div class="fn-600 q-my-none">MLH Workshop</div> -->
                    <div
                      class="fn-400 text-white op-80 text-center q-mt-xs fn-sm"
                    >
                      {{ key }}
                    </div>
                    <div class="fn-800 text-white text-center fn-xl">
                      {{ value }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </EventModule>
      <!-- OPTIONS -->
      <EventModule title="Actions" class="col-6">
        <div class="col-12 column">
          <div class="col-grow" />
          <div class="row col-grow q-col-gutter-sm">
            <div class="col-6">
              <q-btn
                class="fit text-white bg-primary fn-700 fn-sm op-80 border-round"
                unelevated
                >Share Event with Friends</q-btn
              >
            </div>
            <div class="col-6">
              <q-btn
                class="fit text-white bg-accent fn-700 fn-sm op-80 border-round"
                unelevated
                >View Organizer Website</q-btn
              >
            </div>
            <div class="col-6">
              <q-btn
                class="fit text-white bg-secondary fn-700 fn-sm border-round"
                unelevated
                >Contact Organizer</q-btn
              >
            </div>

            <div class="col-6">
              <q-btn
                class="fit text-white bg-secondary fn-700 fn-sm op-80 border-round"
                unelevated
                >Report Abuse</q-btn
              >
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

// function addLeadingZeros(num: number, totalLength: number) {
//   return String(num).padStart(totalLength, '0');
// }

export default defineComponent({
  components: { EventModule },
  setup() {
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
