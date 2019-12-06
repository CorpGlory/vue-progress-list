<template>
  <div id="progress-list-panel">
    <div class="table-panel-scroll">
      <div class="center" v-for="(item) in items" :key="item.title">
        <progress-item
          :item="item"
          :maxValue=maxValue
          :stops=stops
          :opacity=opacity
          :valueFormat=valueFormat
        ></progress-item>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ProgressItem from './ProgressItem.vue';

import { ValueFormat, Item, Stops } from './types';

import { Component, Vue, Prop, Watch } from 'vue-property-decorator';


@Component({ components: { ProgressItem } })
export default class ProgressListPanel extends Vue {

  @Prop({ required: true })
  items!: Item[];

  @Prop({ required: true })
  maxValue!: number;

  @Prop({ required: false })
  opacity!: number;

  @Prop({ required: false })
  stops!: Stops;

  @Prop({ required: false })
  valueFormat!: ValueFormat;

}
</script>
