<template>
  <div>
    <q-card
      dark
      class="bg-card border-round"
      :class="`${cardClass} ${imgSrc ? '' : 'bg-blur'}`"
      flat
    >
      <q-img :src="imgSrc" class="fit border-round">
        <q-card-section
          class="fit column q-col-gutter-none border-round"
          :class="imgSrc ? 'bg-blur' : 'bg-transparent'"
        >
          <div class="row-5">
            <h4 v-if="title" class="q-mt-none text-white op-60 q-mb-md">
              {{ title }}
            </h4>
          </div>
          <div class="row col-grow">
            <slot />
          </div>
        </q-card-section>
      </q-img>
    </q-card>
  </div>
</template>

<style lang="scss" scoped>
.bg-card {
  height: 250px;
}
// .img {
//   -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
//   filter: blur(5px);
// }
</style>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  props: { title: String, cardClass: String, imgSrc: String },
  setup() {
    return {};
  },
});
</script>
