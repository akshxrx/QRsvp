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
  useFirestoreDoc,
  useHttpsCallable,
} from '@gcto/firebase-hooks/lib';
import {
  CreateAssetByProjectIdRequestBody,
  GetAssetGroupResponseBody,
  GetAssetResponseBody,
  ResponseAsset,
} from '@openscreen/sdk';
import { computed } from '@vue/composition-api';
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  setup() {
    const { data } = useFirestoreCollection('test');
    // const asset = useHttpsCallable(
    //   'getAsset',
    //   () => '0ed51c87-80eb-49e9-af5c-e68ec8014fed'
    // );
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
    const createProject = async () => {
      useHttpsCallable('createEvent', () => ({}));
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
