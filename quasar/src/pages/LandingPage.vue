<template>
    <div class="landing-container">
        <div class="landing-body col">
            <h2>create <strong>invitations.</strong></h2>
            <h2>do it with <strong>QRvsp.</strong></h2>
            <h3>
                The perfect solution to get RSVP done all with a scan.
            </h3>
            <q-btn outline rounded style="margin-left: 0em; color: primary;" text-color="primary" size="xl" label="Create" />
            <q-btn outline rounded style="margin-left: 1em; color: primary;" text-color="primary" size="xl" label="Register" />
        </div>
        <div class="col gt-sm" id="image">
            <img src="https://cdn.discordapp.com/attachments/908036079528058930/972659581056614480/Component_3.png" width="555"/>
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

    strong{
        color: #7871AA;
    }


    .landing-container {
        padding-top: 10em;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        margin-left: 5%;
        width: 90%;
    }

    .landing-body{
        padding-left:15%;
        text-align: left;
        width: 60%;
    }

    #image{
        padding-top:5em;
        padding-right:15%;
        padding-left:5%;
        text-align: right;
        width: 40%;
    }

    
</style>

