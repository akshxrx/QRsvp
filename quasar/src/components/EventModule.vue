<template>
  <div>
    <q-card dark class="bg-card bg-blur" flat>
      <q-card-section class="fit column q-col-gutter-none">
        <div class="row-5">
          <h4 v-if="title" class="q-mt-none text-white op-60 q-mb-md">
            {{ title }}
          </h4>
        </div>
        <div class="row col-grow">
          <slot />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<style lang="scss" scoped>
.bg-card {
  height: 250px;
}
.bg-orc {
  background: 'orange';
}
</style>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  props: { title: String },
  setup() {
    return {};
  },
});
</script>
