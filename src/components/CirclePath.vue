<script>
import { ref } from 'vue'
import { echartMixins } from '@mixins/index'
import {getCircleOption} from '@utils/index'

export default {
  name:'circlePath',
  mixins:[echartMixins],
  props:{
    process: Number | String,
  },
  created(){
    this.chartId = 'circleChart'
    this.chartOptions = getCircleOption(this.process)
  },
  watch:{
    process(newPross){
      this.chartObject&&this.chartObject.setOption(getCircleOption(newPross));
    }
  }
}

</script>

<template>
  <div class="circle-path-main">
    <slot></slot>
    <div id="circleChart" :style="{ width: '500px', height: '500px' }"></div>
  </div>
</template>

<style scoped>
.circle-path-main{
  position: relative;
}
</style>
