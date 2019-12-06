<template>
  <div id="progress-list-panel">
    <div class="table-panel-scroll">
      <div class="center" v-for="(item) in items" :key="item.title">
        <progress-item
          :item="item"
          :config=config
          :threshold=threshold
          :thresholds=thresholds
          :thresholdColors=thresholdColors
          :opacity=opacity
          :maxValue=maxValue
          :valueFormat=valueFormat
        ></progress-item>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ProgressItem from './ProgressItem.vue';

import { ValueFormat, Item, Threshold, Thresholds, ThresholdColors, Config } from './types';

import { Component, Vue, Prop, Watch } from 'vue-property-decorator';


@Component({ components: { ProgressItem } })
export default class ProgressListPanel extends Vue {

  @Prop({ required: true })
  items!: Item[];

  @Prop({ required: true })
  config!: Config;

  @Prop({ required: false })
  maxValue!: number;

  @Prop({ required: false })
  opacity!: number;

  @Prop({ required: false })
  threshold!: Threshold;

  @Prop({ required: false })
  thresholds!: Thresholds;

  @Prop({ required: false })
  valueFormat!: ValueFormat;

  @Prop({ required: false })
  thresholdColors!: ThresholdColors;

}
</script>
