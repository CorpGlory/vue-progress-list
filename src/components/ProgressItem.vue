<template>
  <div class="list-item progress-item">
    <div class="list-item-title"> {{ item.title }} </div>
    <div class="list-item-content">
      <div
        v-bind:style="{
          width: progress + '%',
          backgroundColor: getItemColor(item),
          opacity: config.opacity
        }"
        class="progress-bar-line"
      />
      <span class="list-item-value progress-bar-value">
        {{ progress }}%
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Item, Config, Thresholds, ThresholdConfig } from './types';

import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component
export default class ProgressItem extends Vue {

  @Prop({ required: true })
  item!: Item;

  @Prop({ required: true })
  config!: Config;

  @Prop({required: false})
  thresholds!: Thresholds;

  @Prop({required: false})
  thresholdConfig!: ThresholdConfig;

  get progress(): number {
    return 100 * this.item.value / this.config.maxValue;
  }

  getItemColor(item: Item): string {
    if(this.thresholds === undefined) {
      return item.backgroundColor;
    } else {
      if(item.value < this.thresholds.lowerValue){
        return this.thresholdConfig.lowerColor;
      } else if(item.value >= this.thresholds.lowerValue && item.value <= this.thresholds.upperValue) {
        return this.thresholdConfig.middleColor;
      } else if(item.value > this.thresholds.upperValue) {
        return this.thresholdConfig.upperColor;
      } else {
        throw new Error('Cant get item color');
      }
    }
  }

}
</script>

<style>
.progress-bar-line {
  height: 10px;
}
.list-item {
  position: relative;
  height: 30px;
}

.list-item-content {
  display: block;
  width: 99%;
}

.list-item-content .list-item-value {
  position: absolute;
  z-index: 3;
  right: 0;
}

.list-item-content .progress-item {
  position: relative;
}

.list-item-content .progress-bar-line {
  z-index: 2;
  top: 0px;
  background: darkgreen;
}

.list-item .progress-bar-value {
  margin-top: -15px;
}

.list-item .list-item-title {
  text-align: left;
  z-index: 1;
}
</style>
