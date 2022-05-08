<template>
    <div class="main frame-3" >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 320"><path fill="#7871aa" fill-opacity="1" d="M0,0L30,0C60,0,120,0,180,42.7C240,85,300,171,360,186.7C420,203,480,149,540,149.3C600,149,660,203,720,213.3C780,224,840,192,900,165.3C960,139,1020,117,1080,96C1140,75,1200,53,1260,64C1320,75,1380,117,1410,138.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
          <header class="back" >
            <div class="about">about</div>
            <p class="para">
                The QRvsp team noticed that many people spend extravagant amounts on invitations, when this could be solved with a QR-code functions. We created QRsvp to reduce ticketing cost and time, so you can spend more on yourself.
                <br/><br/>
                QRsvp is a platform created to connect everyone. Whether you are just trying to rsvp in to a event or A EVENT ORGANIZER looking create a cool event guest queue, QRsvp is for you.
            </p>
          </header>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7871aa" fill-opacity="1" d="M0,128L30,149.3C60,171,120,213,180,229.3C240,245,300,235,360,213.3C420,192,480,160,540,149.3C600,139,660,149,720,176C780,203,840,245,900,234.7C960,224,1020,160,1080,117.3C1140,75,1200,53,1260,74.7C1320,96,1380,160,1410,192L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
       return {}; 
    },
})
</script>

<style>
     @import url("https://fonts.googleapis.com/css?family=Atkinson+Hyperlegible:400,700");
  
  .main {
    background-image: linear-gradient(0deg, white, #7871aa, white);
  }

  .back{
        background-color: #7871aa;
        align-items: flex-end;
        display: flex;
        flex-direction: column;
        animation-name: fadeIn;
  }

  .frame-3 {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    /* padding: 23px 85px; */
  }

  .about {
    background-color: #7871aa;
    align-self: center;
    color: white;
    font-family: 'Atkinson Hyperlegible', sans-serif;
    font-size: 5em;
    font-weight: 700;
    letter-spacing: 0;
    text-align: center;
  }

  .para {
    background-color: #7871aa;
    align-self: center;
    color: white;
    font-family: 'Atkinson Hyperlegible', sans-serif;
    font-size: 1.9em;
    font-weight: 200;
    letter-spacing: 0em;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    text-align: center;
    width: 82%;
  }
</style>