<template>
  <div>
    <q-btn @click="createProject"> CREATE OPENSCREEN PROJECT</q-btn>
    <!-- <div>{{ allAssets.data.value }}</div> -->
    <div v-if="allAssets" class="column">
      <div v-for="(asset, i) in allAssets.data?.value" :key="i">
        {{ asset }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  useFirestoreCollection,
  useHttpsCallable,
} from '@gcto/firebase-hooks/lib';
import { ResponseAsset } from '@openscreen/sdk';
// import { computed } from '@vue/composition-api';
import { defineComponent } from '@vue/runtime-core';
// import firebase from 'firebase';

export default defineComponent({
  setup() {
    const { data } = useFirestoreCollection('test');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const allAssets = useHttpsCallable<any, ResponseAsset[]>(
      'getAssets',
      () => ({})
    );

    // const allAssets = useHttpsCallable('getAssetsByGroup', () => 'events');
    // const allEvents = useHttpsCallable('getEvents', () => 'ASD');
    // const t = useHttpsCallable(
    //   'getEvents',
    //   () =>
    //     ({
    //       name: 'Event',
    //       description: 'sample project',
    //     } as CreateAssetByProjectIdRequestBody)
    // );
    //
    // useHttpsCallable(
    //   'deleteAsset',
    //   () => '7c399fdf-35ed-4cac-b3c9-ee8519ba2799'
    // );
    const createProject = async () => {
      useHttpsCallable('test', () => ({}));
      // const fs = firebase.firestore();
      // fs.collection('assets').add({
      //   name: 'test event',
      //   qrCodes: ['http://localhost:8080/#/'],
      // });
      // useHttpsCallable('createEvent', () => ({
      //   name: 'Hello',
      // }));
      // os.assetGroup
      // openScreen.assets().create({
      //   groupId: 'projects',
      //   customAttributes: {},
      //   description: 'sample project',
      //   name: osProject,
      // });
    };

    // const t = useFirestoreDoc('T', () => 'vfdhmJ7Zu5hK4QB9ro0O');
    // axios.post(`https://kbdgsb6g57.execute-api.us-east-1.amazonaws.com/prod/accounts/{accountId}/projects`,{

    // });

    // const t = collection.
    return { data, allAssets, createProject };
  },
});
</script>
