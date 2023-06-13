<script setup>
import CirclePath from './components/CirclePath.vue'
import { ElSlider } from 'element-plus'
import { ref,computed } from 'vue';

import baojingIcon from "~/static/baojing@3x.png";
import weizhiIcon from "~/static/weizhi@3x.png";
import zhengchangIcon from "~/static/zhengchang@3x.png";

const process = ref(50)
const iconUrl = computed(()=>{
  return process.value==0?weizhiIcon:process.value>=50?baojingIcon:zhengchangIcon
})
const iconColor =computed(()=>{
  return process.value==0?'#9191b0':process.value>=50?'#e2605c':'#8acbfa'
}) 
</script>

<template>
  <div class="cricle-out">
    <circle-path :process="process">
      <div class="cricle-center">
        <div class="cricle-center-top">
          <div class="cricle-center-top-num">{{process}}</div>
          <div class="cricle-center-top-unit">%</div>
        </div>
        <div class="cricle-center-btm">异常分数</div>
      </div>
    </circle-path>
    <div class="cricle-tips">
      <div class="cricle-tips-left">
        <img class="cricle-tips-left-img" :src="iconUrl"/>
      </div>
      <div class="cricle-tips-right">
        <div class="cricle-tips-right-top">检测状态</div>
        <div class="cricle-tips-right-main" :style="{color:iconColor}">报警</div>
      </div>
    </div>
    <el-slider v-model="process" />
  </div>

</template>

<style scoped lang="scss">
.cricle{
  &-tips{
    display: flex;
    justify-content: center;
    align-items: center;
    &-left{
      padding-right: 20px;
      &-img{
        width: 100px;
        height: 100px;
      }
    }
    &-right{
      font-size: 20px;
      font-weight: bold;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      &-top{
        color: #9797b4;
      }
    }
  }
  &-center{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    font-size:20px;
    &-top{
      color: #7566f5;
      display: flex;
      align-items: baseline;
      &-num{
        font-size: 80px;
        line-height: 80px;
      }
      &-unit{
          font-size: 35px;
        }
    }
  }
}

</style>
