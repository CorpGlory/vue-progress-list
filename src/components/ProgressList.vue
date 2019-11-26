<template>
  <div id="progress-list-panel">
    <div class="table-panel-scroll">
      <div class="center" v-for="(item) in items" :key="item.title">
        <progress-item
          :item="item"
          :config=config
          :thresholds=thresholds
          :thresholdConfig=thresholdConfig
        ></progress-item>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ProgressItem from './ProgressItem.vue';

import { Item, Thresholds, ThresholdConfig, Config } from './types';

import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

const DEFAULT_THRESHOLD_CONFIG = {
  lowerColor: 'green',
  middleColor: 'orange',
  upperColor: 'red'
}

@Component({ components: { ProgressItem } })
export default class ProgressListPanel extends Vue {

  @Prop({ required: true })
  items!: Item[];

  @Prop({ required: true })
  config!: Config;

  @Prop({ required: false })
  thresholds!: Thresholds;

  @Prop({ required: false, default: () => DEFAULT_THRESHOLD_CONFIG })
  thresholdConfig!: ThresholdConfig;

}
</script>
