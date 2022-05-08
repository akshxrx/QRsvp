<template>
    <div>
      <landing-page/>
      <about-section/>
      <how-it-works/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AboutSection from './AboutSection.vue';
import LandingPage from './LandingPage.vue';
import HowItWorks from './HowItWorks.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { AboutSection, LandingPage, HowItWorks },
  setup() {
    return {};
  },
});
</script>

