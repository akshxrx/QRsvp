<template>
  <q-btn
    class="fn-sm q-py-md"
    :color="providerInfo[provider || 'google'].color"
    :text-color="providerInfo[provider || 'google'].text"
    v-bind="$attrs"
    @click="signIn"
  >
    <q-icon :name="providerInfo[provider || 'google'].icon" />

    <div class="fn-xxs">
      {{ label || 'use ' + providerInfo[provider || 'google'].name }}
    </div>
  </q-btn>
  <!-- DIALOG FOR EMAIL LINK -->
  <q-dialog v-model="emailPrompt" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Your address</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          dense
          v-model="email"
          autofocus
          @keyup.enter="emailPrompt = false"
        ></q-input>
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" v-close-popup></q-btn>
        <q-btn flat label="Add address" v-close-popup></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';
import firebase from 'firebase/app';
import 'firebase/auth';
export const currentPathUrl = process.env.DEV
  ? 'http://localhost:8080'
  : 'TODO MAIN';
export const isValidEmail = (val: string) => {
  const emailPattern =
    /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
  return emailPattern.test(val);
};

export default defineComponent({
  name: 'AuthGmailConnect',
  props: { label: String, provider: String },
  emits: ['onCloseDialog'],
  setup(props, { emit }) {
    const $q = useQuasar();
    // const error = ref('');
    const emailPrompt = ref(false);
    const email = ref('');

    const sendEmailPrompt = () => {
      emailPrompt.value = true;
    };
    const providerInfo = Object.freeze({
      fb: {
        name: 'Facebook',
        color: 'blue',
        text: 'grey-3',
        icon: 'facebook',
      },
      google: {
        name: 'Google',
        color: 'red-5',
        text: 'grey-3',
        icon: 'ion-logo-google',
      },
      email: {
        name: 'Email',
        color: 'blue-grey-2',
        text: 'grey-8',
        icon: 'mail',
      },
    });

    async function signIn() {
      if (props.provider === 'email') {
        $q.dialog({
          title: 'Passwordless Email Sign-in',
          message:
            'We will send a link to your email that you may use to sign in',
          color: 'primary',
          prompt: {
            label: 'Email',
            model: '',
            isValid: (val: string) => isValidEmail(val), // << here is the magic
            type: 'text', // optional
          },
          cancel: true,
          class: 'bg-dark',
          dark: true,

          persistent: true,
        }).onOk(async (data: string) => {
          try {
            await firebase.auth().sendSignInLinkToEmail(data, {
              url: `${currentPathUrl}/finishSignUp`,
              handleCodeInApp: true,
            });
            window.localStorage.setItem('emailForSignIn', data);
          } catch (err) {}
          $q.dialog({
            title: 'Authentication Email Sent',
            message: 'Check your inbox for the magic login link!',
            class: 'bg-dark',
            color: 'primary',
            dark: true,
          });
        });
        return;
      }
      const provider =
        props.provider === 'fb'
          ? new firebase.auth.FacebookAuthProvider()
          : new firebase.auth.GoogleAuthProvider();
      const res = await firebase.auth().signInWithPopup(provider);
      // .catch((err: Error) => {
      //   error = err.message;
      // });
      if (res && res.user) {
        emit('onCloseDialog');
      }
    }

    return { signIn, sendEmailPrompt, emailPrompt, email, providerInfo };
  },
});
</script>
