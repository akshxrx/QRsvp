<template>
  <div class="">
    <q-layout view="lHh lpr ">
      <q-header elevated style="height:5em;">
        <q-toolbar class="text-white">
          <img style="width:7em; height:5em; padding-top:1.2em; padding-bottom:1em;" src="https://cdn.discordapp.com/attachments/908036079528058930/972649293934633050/logo.png">
          <q-space />
          <q-btn-toggle 
            style="font-size:100em;"
            v-model="model"
            flat stretch
            toggle-color="white"
            :options="options"
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
        { label: 'how it works', value: 'how it works' },
      ]
    }
  }
}
</script>


