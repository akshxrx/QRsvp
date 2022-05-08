<template>
  <div>
    <template v-if="!userAuth">
      <div class="column items-center q-py-md">
        <q-icon name="person" color="primary" class="op-60" size="40px" />
        <!-- <div class="fn-sm text-center fn-400 op-80">Sign in</div> -->
      </div>
    </template>
    <template v-else>
      <div class="row justify-center q-py-md">
        <q-btn flat round>
          <q-avatar size="60px" color="grey">
            <q-img :src="userAuth.photoURL" />
          </q-avatar>
        </q-btn>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { useFirebaseUser, useFirestoreDoc } from '@gcto/firebase-hooks/lib';
import { computed, defineComponent } from 'vue';

import { useRouter } from 'vue-router';
import firebase from 'firebase';

export default defineComponent({
  setup() {
    const $router = useRouter();
    const _userAuth = useFirebaseUser();
    const userAuth = computed(() => _userAuth.data.value);
    const userObject = useFirestoreDoc('users', () => userAuth.value?.uid); //usersCollection.watch(() => userAuth.value?.uid);

    function changeRoute(route: string) {
      void (async () => {
        await $router.push(route);
      })();
    }

    function logoutUser() {
      void firebase.auth().signOut();
    }

    return {
      userAuth,
      changeRoute,
      logoutUser,
      userObject,
    };
  },
});
</script>
