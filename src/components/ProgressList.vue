<template>
  <div id="progress-list-panel">
    <div class="table-panel-scroll">
      <div class="center" v-for="(item) in items" :key="item.title">
        <progress-item
          :item="item"
          :maxValue=config.maxValue
        ></progress-item>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ProgressItem from './ProgressItem.vue';
import { Component, Vue, Prop } from 'vue-property-decorator';

// TODO: move types to a separate file
export type ProgressItemType = {
  title: string,
  value: number
}

@Component({ components: { ProgressItem } })
export default class ProgressListPanel extends Vue {

  @Prop({ required: true })
  items!: ProgressItemType[];

  @Prop({ required: true })
  config!: number;

}
</script>


