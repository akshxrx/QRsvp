<template>
    <div>
      <landing-page/>
      <about-section id="about"/>
      <how-it-works id="how"/>
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
    
    return {}
  },
})</script>
