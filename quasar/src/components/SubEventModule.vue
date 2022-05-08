<template>
  <div>
    <q-input label="sub event name" v-model="subEvent.name" />
    <q-btn @click="createProject">Create QR Asset</q-btn>
    <q-btn @click="loadQR" label="load qr from db" />
    <q-img :src="`data:image/png;base64,${image}`" />
  </div>
</template>

<script lang="ts">
import {
  useFirestoreCollection,
  useFirestoreDoc,
  useHttpsCallable,
} from '@gcto/firebase-hooks/lib';
import { ResponseAsset } from '@openscreen/sdk';
// import { computed } from '@vue/composition-api';
import { defineComponent, onMounted, reactive, ref } from '@vue/runtime-core';
import firebase from 'firebase';
import { fs } from 'src/lib/firebase';
export default defineComponent({
  setup() {
    const { data } = useFirestoreCollection('test');
    const subEvent = reactive({
      name: 'event' + Math.floor(Math.random() * 1),
      redirect: 'http://localhost:8080/form/',
    });
    onMounted(() => {});
    const createProject = async () => {
      fs.collection('assets').add({
        name: subEvent.name,
        groupId: 'CCXcVuI5ejjcRqkhXxYr',
        clientIntent: 'http://localhost:8080/form/',
      });
    };
    const image = ref('');
    function loadQR() {
      const res = useFirestoreDoc('assets', () => '7vDUfnOG5HkRIpkOmwoj');
      console.log(res.data.value.imgData);
      image.value = res.data.value.imgData;
    }
    return { data, createProject, subEvent, loadQR, image };
  },
});
</script>
