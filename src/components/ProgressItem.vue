<template>
  <div class="list-item progress-item">
    <div class="list-item-title"> {{ item.title }} </div>
    <div class="list-item-content">
      <div
        v-bind:style="{
          width: progress + '%',
        }"
        class="progress-bar-line"
      />
      <span
        style="margin-top: -15px;"
        class="list-item-value progress-bar-value"
      >
        {{ progress }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { ProgressItemType } from './ProgressList.vue';
import { Component, Vue, Prop } from 'vue-property-decorator';


@Component
export default class ProgressItem extends Vue {

  @Prop({ required: true })
  item!: ProgressItemType;

  @Prop({ required: true })
  maxValue!: number;

  get progress(): number {
    return 100 * this.item.value / this.maxValue;
  }

}
</script>

<style>
.progress-bar-line {
  height: 10px;
}
.list-item {
  position: relative;
  height: 25px;
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

.list-item-content .list-item-title {
  z-index: 1;
}

.options-tab .section {
  margin-right: 1rem
}
</style>
