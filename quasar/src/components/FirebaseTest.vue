<template>
  <div>
    <q-btn @click="createProject"> CREATE OPENSCREEN PROJECT</q-btn>
  </div>
</template>

<script lang="ts">
import {
  useFirestoreCollection,
  useFirestoreDoc,
} from '@gcto/firebase-hooks/lib';
import { defineComponent } from '@vue/runtime-core';

import firebase from 'firebase';
import { openScreen } from 'src/lib/openscreen';

export default defineComponent({
  setup() {
    const { data } = useFirestoreCollection('test');

    //
    const createProject = async () => {
      const osProject = (
        await firebase.firestore().collection('projects').add({ owner: 'me' })
      ).id;
      // os.assetGroup
      openScreen.assets().create({
        groupId: 'projects',
        customAttributes: {},
        description: 'sample project',
        name: osProject,
      });
    };

    const t = useFirestoreDoc('T', () => 'vfdhmJ7Zu5hK4QB9ro0O');
    // axios.post(`https://kbdgsb6g57.execute-api.us-east-1.amazonaws.com/prod/accounts/{accountId}/projects`,{

    // });

    // const t = collection.
    return { data, t, createProject };
  },
});
</script>
