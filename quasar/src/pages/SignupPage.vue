<template>
  <div class="card-left row justify-center">
    <q-card class="col">
      <q-card-section>
        <div class="text-h6">Join QRsvp</div>
        <div class="text-caption">
          Become digital and join the future of QR technology
        </div>
      </q-card-section>
      <q-card-section>
        <q-input label="Email" v-model="account_email" />
        <q-input label="Password" v-model="account_password" />
        <q-btn label="Create an account" @click="createEmailUser" />
        <div class="text-caption">Can't sign in?</div>
      </q-card-section>
      <q-card-section class="row">
        <g-button class="clickable" @click="googleAuth" />
      </q-card-section>
    </q-card>
    <!--  -->
    <q-card class="card-right col"> </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import GButton from '../assets/GButton.vue';
import { useGoogleAuth } from '../lib/firebaseauth';
export default defineComponent({
  components: {
    GButton,
  },
  setup() {
    const $route = useRouter();

    const account_email = ref<string>('');
    const account_password = ref<string>('');
    async function googleAuth() {
      const user = await useGoogleAuth();
      console.log(user);
      if (user) {
        $route.push('/portal');
      }
    }
    // TODO @sam: low priority
    function createEmailUser() {
      return 0;
    }
    return {
      googleAuth,
      account_email,
      account_password,
      createEmailUser,
    };
  },
});
</script>

<style lang="scss" scoped>
.card {
  &-left {
    background-color: white;
  }
  &-right {
    background-color: $primary;
  }
}
</style>
