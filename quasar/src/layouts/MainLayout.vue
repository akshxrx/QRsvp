<template>
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf">
      <q-header elevated>
        <q-toolbar class=" text-white">
          <img style="width:9.5em; height:4.5em; padding-top:1em; padding-left:3em; padding-bottom:1em;" src="https://cdn.discordapp.com/attachments/972303957668003880/972581619607150673/logo.png">
          <q-space />
          <q-btn-toggle
            v-model="model"
            flat stretch
            :options="options"
          />
        </q-toolbar>
      </q-header>
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
        { label: 'how does it work?', value: 'functionality' },
      ]
    }
  }
}
</script>


