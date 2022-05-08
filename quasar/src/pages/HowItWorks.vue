<template>
  <div class="works-body">
    <div class="title">how it works</div>
    <div class="boxes-row">

      <div class="col-12 col-md">
        <div class="q-pa-md">
          <q-card class="rectangle">
            <img src="https://cdn.quasar.dev/img/mountains.jpg">

            <q-card-section>
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
          </q-card> 
        </div> 
      </div>

      <div class="col-12 col-md">
        <div class="q-pa-md">
          <q-card class="rectangle">
            <img src="https://cdn.quasar.dev/img/mountains.jpg">

            <q-card-section>
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
          </q-card> 
        </div> 
      </div>

      <div class="col-12 col-md">
        <div class="q-pa-md">
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
      padding-bottom: 3%;
  }

  .boxes-row{
    align-items: flex-start;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding-right: 15%;
    padding-left: 17%;
    color:white;
  }

  .rectangle{
    background-color:#7871aab6;
    border-radius: 6px;
    width: 80%;
    height: 400px;
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

