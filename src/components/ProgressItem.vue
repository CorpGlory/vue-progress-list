<template>
  <div class="list-item progress-item">
    <div class="list-item-title"> {{ item.title }} </div>
    <div class="list-item-content">
      <div
        v-bind:style="{
          width: barWidth,
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
import { ValueFormat, Item, Stops, StopValues, StopColors } from './types';

import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

const DEFAULT_STOP_COLORS = {
  low: 'green',
  medium: 'orange',
  high: 'red'
};

@Component
export default class ProgressItem extends Vue {

  @Prop({ required: true })
  item!: Item;

  @Prop({ required: false })
  maxValue!: number;

  @Prop({ required: false, default: () => {} })
  stops!: Stops;

  @Prop({ required: false })
  opacity!: number;

  @Prop({ required: false, default: ValueFormat.PERCENTAGE })
  valueFormat!: ValueFormat;

  get progress(): string {
    if(this.valueFormat === ValueFormat.PERCENTAGE) {
      return this.barWidth;
    }
    return this.item.value.toString();
  }

  get barWidth(): string {
    return 100 * this.item.value / this.itemMaxValue + '%';
  }

  get itemMaxValue(): number {
    return this.maxValue
  }

  get barOpacity(): number {
    return this.opacity
  }

  get stopValues(): StopValues {
    return this.stops.values;
  }

  get stopItemColors(): StopColors {
    if(this.stops !== undefined && this.stops.colors !== undefined) {
      return this.stops.colors;
    } else {
      return DEFAULT_STOP_COLORS
    }
  }

  getItemColor(item: Item): string {
    if(this.stopValues === undefined) {
      return item.backgroundColor;
    } else {
      if(item.value < this.stopValues.lowerValue){
        return this.stopItemColors.low;
      } else if(item.value >= this.stopValues.lowerValue && item.value <= this.stopValues.upperValue) {
        return this.stopItemColors.medium;
      } else if(item.value > this.stopValues.upperValue) {
        return this.stopItemColors.high;
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
