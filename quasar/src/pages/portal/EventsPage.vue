<template>
  <div class="row justify-center items-center q-mt-xl">
    <q-card>
      <q-card-section v-if="!canShowSuccess">
        <q-card-section class="q-pb-none">
          <div class="text-h6">Create and manage an event</div>
          <div class="text-caption">
            Provide information about your event and view created events in the
            dashboard
          </div>
          <q-separator />
        </q-card-section>
        <q-card-section class="row">
          <q-input v-model="event.title" label="Title" class="col-12" />
        </q-card-section>
        <q-card-section class="row q-gutter-md">
          <q-input v-model="event.date" label="Date" type="date">
            <template v-slot:prepend>
              <q-icon name="today" />
            </template>
          </q-input>
          <q-input v-model="event.time" label="Time" type="time">
            <template v-slot:prepend>
              <q-icon name="schedule" />
            </template>
          </q-input>
          <q-input
            v-model="event.duration"
            label="Duration"
            hint="Hours"
            type="number"
          >
            <template v-slot:prepend>
              <q-icon name="timer" />
            </template>
          </q-input>
        </q-card-section>
        <q-card-section>
          <q-input v-model="event.location" label="Location" />
        </q-card-section>
        <q-card-section class="row justify-center">
          <q-btn
            class="col-6"
            label="Create event"
            color="primary"
            @click="createEvent"
          />
        </q-card-section>
      </q-card-section>
      <q-card-section v-else>
        <q-card-section class="row justify-center items-center">
          <div class="text-h6">Event {{ event.title }} created!</div>
        </q-card-section>
        <q-card-section class="row justify-center items-center">
          <q-icon name="check_circle" size="3rem" color="green" />
        </q-card-section>
        <q-card-section class="row justify-center items-center">
          <q-btn label="Go to dashboard" @click="navigateDash" />
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { fs } from 'src/lib/firebase';
import { useRouter } from 'vue-router';
export default defineComponent({
  setup() {
    const event = reactive({
      title: '',
      date: new Date(),
      time: new Date().toTimeString().slice(0, 5),
      duration: 0,
      location: '',
    });

    const $route = useRouter();
    function navigateDash() {
      $route.push('/portal');
    }

    const canShowSuccess = ref(false);
    async function createEvent() {
      const res = await fs.collection('events').add({
        title: event.title,
        date: event.date,
        time: event.time,
        duration: event.duration,
        location: event.location,
      });

      if (res) {
        canShowSuccess.value = true;
      }
    }
    return { event, createEvent, canShowSuccess, navigateDash };
  },
});
</script>
