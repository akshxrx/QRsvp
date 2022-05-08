<template>
  <div class="">
    <q-layout view="lHh lpr fFf">
      <q-header elevated style="height:5em;" class="bg-primary text-white">
        <q-toolbar style="width: 80%;">
          <q-toolbar-title>
            <img class="clickable q-mt-sm gt-sm" @click="navigateElse('/')" style="width:6em; height:auto;" src="https://cdn.discordapp.com/attachments/908036079528058930/972649293934633050/logo.png">
          </q-toolbar-title>
          <div/>
          <div class="q-gutter-md">
            <q-btn  outline text-color="white" size="lg" label="Create" /> 
           <q-btn label="login" color="white" text-color="primary" size="lg"/>
          </div>

           
        </q-toolbar>
      </q-header>
      <router-view/>
    </q-layout>
    </div>
</template>

<script lang="ts">
import { ref} from 'vue'
import {useRouter} from 'vue-router';
export default {
  setup () {
    const $route = useRouter();
    function navigateElse(route: string){
      $route.push(route)
    }
    return {
      model: ref('one'),
      navigateElse
    }
  }
}
</script>



