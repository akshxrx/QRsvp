<template>
  <div>
    <q-btn @click="createProject"> CREATE OPENSCREEN PROJECT</q-btn>
    {{ asset.data }}
    {{ allAssets.data }}
  </div>
</template>

<script lang="ts">
import {
  useFirestoreCollection,
  useFirestoreDoc,
  useHttpsCallable,
} from '@gcto/firebase-hooks/lib';
import { CreateAssetByProjectIdRequestBody } from '@openscreen/sdk';
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  setup() {
    const { data } = useFirestoreCollection('test');
    const asset = useHttpsCallable(
      'getAsset',
      () => '0ed51c87-80eb-49e9-af5c-e68ec8014fed'
    );
    const allAssets = useHttpsCallable('getAssetsByGroup', () => 'events');
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
    const createProject = async () => {
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
    return { data, asset, allAssets, createProject };
  },
});
</script>
