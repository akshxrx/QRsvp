<template>
  <div class="works-body">
    <div class="title">how it works</div>
        <div class="row justify-between">
          <div class="col-12 col-md">
              <q-card class="rectangle">
              <q-img src="https://theeducationhub.org.nz/wp-content/uploads/2020/03/discover1.png" :ratio="3.14/3"/>
              <q-card-section>
                <div class="text-h6 card-text">1. Create your event anonymously or you can log in to see your saved events!</div>
              </q-card-section>
            </q-card> 
          </div>
          <div class="col-12 col-md">
              <q-card class="rectangle">
              <q-img src="https://accan.org.au/images/content/Talking%20Telco/Choosing%20a%20SMB%20NBN%20Internet%20Plan/ChoosingASmallBusinessNBNInternetPlan-Graphics-23.png"/>

              <q-card-section>
                <div class="text-h6 card-text">2. Choose what your invitees can access with their QR code (e.g connecting to wifi, special sub-events)</div>
              </q-card-section>
            </q-card> 
          </div>

          <div class="col-12 col-md">
              <q-card class="rectangle">
              <q-img src="https://mifactura.com.uy/wp-content/uploads/2018/09/la-solucion-mas-completa-mi-factura.png" :ratio="3.14/3"/>

              <q-card-section>
                <div class="text-h6 card-text">3. Send out your QR code(s) and enjoy partying all with a scan!</div>
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
    font-size:5em;
    margin-left:5%;
    margin-right:5%;
    padding-bottom:10%;
    margin-bottom:20%;
    height: 450px;
    padding-bottom: 8em;
  }

  .row{
    margin-left:15%;
    margin-right:15%;
  }

  .rectangle:hover{
    box-shadow: 5px 5px 30px #6d688a;
  }

  .card-text{
    margin-top: 2em;
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

