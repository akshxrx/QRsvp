<template>
  <div class="row justify-center items-center q-mt-xl">
    <q-card>
      <q-card-section>
        <div class="text-h6">Create event</div>
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
        <q-btn class="col-6" label="Submit" color="primary" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const event = reactive({
      title: '',
      date: new Date(),
      time: new Date().toTimeString().slice(0, 5),
      duration: 0,
      location: '',
    });
    return { event };
  },
});
</script>
