<template>
  <div class="">
    <q-layout view="lHh lpr ">
      <q-header elevated style="height:6em;">
        <q-toolbar class="text-white">
          <img style="width:13em; height:5.6em; padding-top:1.2em; padding-left:5em; padding-bottom:1em;" src="https://cdn.discordapp.com/attachments/908036079528058930/972649293934633050/logo.png">
          <q-space />
          <q-btn-toggle 
            v-model="model"
            flat stretch
            toggle-color="white"
            :options="options"
            style="font-family: var(--font-family-atkinson_hyperlegible);"
          />


        </q-toolbar>
      </q-header>
      <router-view/>
    </q-layout>


  </div>
  
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      model: ref('one'),

      options: [
        { label: 'about', value: 'about' },
        { label: 'how does it work?', value: 'how it works' },
      ]
    }
  }
}
</script>


