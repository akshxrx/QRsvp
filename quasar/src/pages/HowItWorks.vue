<template>
  <div class="works-body">
    <div class="title">how it works</div>
        <div class="row justify-between">
          <div class="col-12 col-md">
              <q-card class="rectangle">
              <img src="https://cdn.quasar.dev/img/mountains.jpg">

              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>
            </q-card> 
          </div>
          <div class="col-12 col-md">
              <q-card class="rectangle">
              <img src="https://cdn.quasar.dev/img/mountains.jpg">

              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>
            </q-card> 
          </div>

          <div class="col-12 col-md">
              <q-card class="rectangle">
              <img src="https://cdn.quasar.dev/img/mountains.jpg">

              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>
            </q-card> 
          </div>

        </div>  
  </div>
</template>


<style>
  .title {
      font-family: 'Atkinson Hyperlegible', sans-serif;
      font-size: 5em;
      font-weight: 700;
      text-align: center;
      color:#7871aa;
      padding-top: 2%;
      padding-bottom: 5%;
  }

  

  .rectangle{
    background-color:#7871aab6;
    border-radius: 6px;
    text-align: center;
    color:white;
    margin-left:5%;
    margin-right:5%;
    padding-bottom:10%;
    margin-bottom:20%;
  }

  .row{
    margin-left:15%;
    margin-right:15%;
  }

  .rectangle:hover{
    box-shadow: 5px 5px 30px #6d688a;
  }
  


</style>


<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        return {};
    },
})
</script>

