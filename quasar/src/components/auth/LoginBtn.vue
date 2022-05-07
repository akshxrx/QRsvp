<template>
  <div>
    <template v-if="!userAuth">
      <q-btn
        flat
        dark
        class="fn-sm text-center q-py-sm q-px-md bg-white text-black"
        no-caps
        dense
      >
        Register / Sign in
        <q-menu
          fit
          anchor="bottom right"
          self="top right"
          class="text-dark bg-transparent column"
        >
          <login-google-btn
            class="fn-xs"
            align="left"
            v-bind="$attrs"
            provider="fb"
          />
          <login-google-btn class="fn-xs" align="left" v-bind="$attrs" />
          <login-google-btn
            class="fn-xs"
            align="left"
            v-bind="$attrs"
            provider="email"
          />
        </q-menu>
      </q-btn>
    </template>
    <template v-else>
      <q-btn flat round>
        <q-avatar size="50px" color="grey">
          <q-img :src="userAuth.photoURL" />
        </q-avatar>
      </q-btn>
      <q-menu anchor="bottom right" self="top right" class="text-dark fn-400">
        <q-list style="min-width: 100px">
          <q-item v-close-popup clickable @click="changeRoute(`/admin`)">
            <q-item-section>Admin</q-item-section>
          </q-item>
          <q-item
            v-close-popup
            clickable
            @click="changeRoute(`/organizer-admin`)"
          >
            <q-item-section>Manage organizations</q-item-section>
          </q-item>
          <q-item
            v-close-popup
            clickable
            @click="
              changeRoute(
                `/user/${
                  userObject.data
                    ? userObject.id
                    : 'B7OjVqtoMLZB4MRUgprx3NJ1X323'
                }`
              )
            "
          >
            <q-item-section>My profile</q-item-section>
          </q-item>

          <q-item v-close-popup clickable @click="logoutUser">
            <q-item-section>Log out</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useFirebaseUser, logoutUser } from 'src/shared/firebase-auth';
import { useRouter } from 'vue-router';
import LoginGoogleBtn from './LoginGoogleBtn.vue';
import { usersCollection } from 'src/collections/userCollection';

export default defineComponent({
  name: 'Login',
  components: { LoginGoogleBtn },
  setup() {
    const $router = useRouter();
    const userAuth = useFirebaseUser();
    const userObject = usersCollection.watch(() => userAuth.value?.uid);

    function changeRoute(route: string) {
      void (async () => {
        await $router.push(route);
      })();
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
