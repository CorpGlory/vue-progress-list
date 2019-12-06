<template>
  <div class="list-item progress-item">
    <div class="list-item-title"> {{ item.title }} </div>
    <div class="list-item-content">
      <div
        v-bind:style="{
          width: percentageProgress,
          backgroundColor: getItemColor(item),
          opacity: barOpacity
        }"
        class="progress-bar-line"
      />
      <span class="list-item-value progress-bar-value">
        {{ progress }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { ValueFormat, Item, Config, Threshold, Thresholds, ThresholdColors } from './types';

import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

const DEFAULT_THRESHOLD_COLORS = {
  low: 'green',
  medium: 'orange',
  high: 'red'
}

@Component
export default class ProgressItem extends Vue {

  @Prop({ required: true })
  item!: Item;

  @Prop({ required: true })
  config!: Config;

  @Prop({ required: false })
  maxValue!: number;

  @Prop({ required: false, default: () => {} })
  threshold!: Threshold;

  @Prop({ required: false })
  thresholds!: Thresholds;

  @Prop({ required: false, default: () => DEFAULT_THRESHOLD_COLORS })
  thresholdColors!: ThresholdColors;

  @Prop({ required: false })
  opacity!: number;

  @Prop({ required: false, default: ValueFormat.PERCENTAGE })
  valueFormat!: ValueFormat;

  get progress(): string {
    if(this.valueFormat === ValueFormat.PERCENTAGE) {
      return this.percentageProgress;
    }
    return this.item.value.toString();
  }

  get percentageProgress(): string {
    return 100 * this.item.value / this.itemMaxValue + '%';
  }

  get itemMaxValue(): number {
    return this.maxValue || this.config.maxValue
  }

  get barOpacity(): number {
    return this.opacity || this.config.opacity;
  }

  get thresholdValues(): Thresholds {
    if(this.threshold !== undefined && this.threshold.values !==undefined) {
      return this.threshold.values;
    }
    return this.thresholds;
  }

  get thresholdItemColors(): ThresholdColors {
    if(this.threshold !== undefined && this.threshold.colors !==undefined) {
      return this.threshold.colors;
    }
    return this.thresholdColors;
  }

  getItemColor(item: Item): string {
    if(this.thresholdValues === undefined) {
      return item.backgroundColor;
    } else {
      if(item.value < this.thresholdValues.lowerValue){
        return this.thresholdItemColors.low;
      } else if(item.value >= this.thresholdValues.lowerValue && item.value <= this.thresholdValues.upperValue) {
        return this.thresholdItemColors.medium;
      } else if(item.value > this.thresholdValues.upperValue) {
        return this.thresholdItemColors.high;
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
