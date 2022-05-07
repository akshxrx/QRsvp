<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <div class="text-h6 q-pa-md">Welcome Sam</div>
      <q-separator />
      <q-list>
        <q-item clickable v-ripple to="/portal">
          <q-item-label header>
            <q-icon name="dashboard" size="2rem" />
            Dashboard
          </q-item-label>
        </q-item>
        <q-item clickable v-ripple to="/portal/events">
          <q-item-label header>
            <q-icon name="event" size="2rem" />
            Create Events
          </q-item-label>
        </q-item>
        <q-item clickable v-ripple to="/portal/wifi">
          <q-item-label header>
            <q-icon name="wifi" size="2rem" />
            Wifi QRs
          </q-item-label>
        </q-item>
        <q-item clickable v-ripple to="/portal/settings">
          <q-item-label header>
            <q-icon name="settings" size="2rem" />
            Settings
          </q-item-label>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container class="full-height">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
