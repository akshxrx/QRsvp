<template>
  <div>
    <q-btn> </q-btn>
    {{ data }}
    {{ t.data }}
  </div>
</template>

<script lang="ts">
import {
  useFirestoreCollection,
  useFirestoreDoc,
} from '@gcto/firebase-hooks/lib';
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  setup() {
    const { data } = useFirestoreCollection('test');
    const t = useFirestoreDoc('T', () => 'vfdhmJ7Zu5hK4QB9ro0O');

    // const t = collection.
    return { data, t };
  },
});
</script>
