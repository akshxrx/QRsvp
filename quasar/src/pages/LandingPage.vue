<template>
    <div class="row landing-container">
        <div class="landing-body col q-pl-xl">
             <!-- <h2>create <strong>invitations.</strong></h2>
             <h2>do it with <strong>QRvsp.</strong></h2> -->
            <div class="text-h2 q-pb-sm" >Create <span class="text-primary" style="font-weight:600;">invitations.</span></div>
            <div class="text-h2">Do it with <span class="text-primary" style="font-weight:600">QRvsp.</span></div>
            <div class="text-h4 q-py-lg">
                The perfect solution to get RSVP done all with a scan.
            </div>
                <q-btn class="landing-button" filled color="primary" text-color="white" size="xl" label="Try it out!" />
        </div>
        <div class="col gt-sm" id="image" >
            <img src="https://cdn.discordapp.com/attachments/742241236957528104/972733124574343209/main.png" width="550"/>
        </div>
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
    @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap');

    h1, h2, h3{
        font-family: 'Atkinson Hyperlegible', sans-serif;
        /* font-size:340%; */
    }



    .landing-container {
        padding-top: 15em;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        width: 80%;
    }

    .landing-body{
        
        text-align: left;
        width: 100%;
    }
    .landing-button{
        width: 250px;
    }
    #image{
        padding-right:15%;
        padding-left:5%;
        text-align: right;
        width: 40%;
        margin-top:-4em;
    }

    
</style>

