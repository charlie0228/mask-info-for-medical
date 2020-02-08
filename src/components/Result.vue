<template>
  <div class="Reslut">
    <div v-if="typeof data === 'string' || !data"  class="Reslut__noContent">{{ data }}</div>
    <div v-else class="Reslut__content">
      <div class="Reslut__geo">
        醫事機構代碼：{{ data.properties.id }}
        <br />
        藥局名稱：{{ data.properties.name }}
        <br />
        電話：{{ data.properties.phone }}
        <br />
        地址：{{ data.properties.address }}
        <br />
      </div>
      <hr />
      <div class="Reslut__mask">
        成人口罩剩餘數量：<span>{{ data.properties.mask_adult }} 個口罩</span>
        <br />
        兒童口罩剩餘數量：<span>{{ data.properties.mask_child }} 個口罩</span>
        <br />
        數量資料最後更新時間：{{ data.properties.updated }}
        <br />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ThisTypedComponentOptionsWithRecordProps } from "vue/types/options";
import { CombinedVueInstance } from "vue/types/vue";
import { Feature } from "../api/api";

export default {
  props: {
    data: {
      type: [Object, String],
      default: undefined
    }
  }
} as ComponentOption;

export type ComponentOption = ThisTypedComponentOptionsWithRecordProps<
  Instance,
  Data,
  Methods,
  Computed,
  Props
>;

export type ComponentInstance = CombinedVueInstance<
  Instance,
  Data,
  Methods,
  Computed,
  Props
>;

export interface Instance extends Vue {}

export interface Data {}

export interface Methods {}

export interface Computed {}

export interface Props {
  data: Feature | undefined;
}
</script>

<style lang="scss" scoped>
.Reslut {
  font-size: 1.5rem;
  padding: 0 15px;

  hr {
    width: 100%;
  }

  &__noContent {
    display: flex;
    justify-content: center;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__mask > span {
    color: red;
    font-weight: bold;
  }
}
</style>
