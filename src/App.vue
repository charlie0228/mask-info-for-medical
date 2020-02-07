<template>
  <div id="app">
    <div class="header">
      <img src="@/assets/logo.png" alt="中華民國藥師公會全國聯合會" class="logo" />
      <div class="apiInfo">API 資料最後更新日期：{{ lastUpdate }}</div>
    </div>
    <el-container>
      <el-header style="height: auto;">
        <h1>
          口罩供需資訊平台
          <br />社區藥局端使用
        </h1>
        <h3>
          ℹ️ 部分藥局因採發放號碼牌方式，方便民眾購買口罩，系統目前無法顯示已發送號碼牌數量。
          <br />ℹ️ 口罩數量以藥局實際存量為主，線上查詢之數量僅供參考。
        </h3>
      </el-header>
      <el-main>
        <el-row type="flex">
          <div class="input-area">
            <el-input
              v-model="inputText"
              placeholder="請輸入醫事機構代碼"
              @keyup.enter.native="getFilterData"
            ></el-input>
          </div>
          <div class="button-area">
            <el-button
              type="primary"
              icon="el-icon-search"
              :loading="isLoading"
              :disabled="!inputText.length || !isInit"
              @click="getFilterData"
            >搜尋</el-button>
            <el-button type="info" icon="el-icon-delete" @click="resetData" :loading="isLoading">清除</el-button>
          </div>
        </el-row>
      </el-main>
      <Result v-if="inputText" :data="singlePharmacyData" />
    </el-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ThisTypedComponentOptionsWithRecordProps } from "vue/types/options";
import { CombinedVueInstance } from "vue/types/vue";
import { getData, Feature } from "@/api/api";
import Result from "./components/Result.vue";

export default {
  components: {
    Result
  },
  data() {
    return {
      pharmacyData: null,
      isInit: false,
      inputText: "",
      singlePharmacyData: null,
      isLoading: false
    };
  },
  methods: {
    async getPharmacyData() {
      const { features } = await getData();
      this.pharmacyData = features;
    },
    getFilterData() {
      this.isLoading = true;

      const data = this.pharmacyData.find(
        pharmacy => pharmacy.properties.id === this.inputText
      );
      this.isLoading = false;

      this.singlePharmacyData = data ? data : "查無醫事機構資料";
    },
    resetData() {
      this.inputText = "";
      this.singlePharmacyData = null;
    }
  },
  computed: {
    lastUpdate() {
      if (!this.pharmacyData) return "";
      return this.pharmacyData.find(
        pharmacy => pharmacy.properties.updated.length > 0
      )!.properties.updated;
    }
  },
  async created() {
    await this.getPharmacyData();
    this.isInit = true;
  },
  mounted() {
    window.setInterval(() => {
      this.getPharmacyData();
      console.log("reload");
    }, 60000);
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

export interface Data {
  pharmacyData: Feature[];
  isInit: boolean;
  inputText: string;
  singlePharmacyData: Feature | string | null;
  isLoading: boolean;
}

export interface Methods {
  getPharmacyData: () => void;
  getFilterData: () => void;
  resetData: () => void;
}

export interface Computed {}

export interface Props {}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap");

body {
  min-height: 100vh;
}

#app {
  font-family: "Noto Sans TC", sans-serif;
  font-size: 16px;

  .header {
    display: flex;
    justify-content: space-between;

    .logo {
      width: 300px;

      @media (max-width: 767px) {
        width: 150px;
      }
    }

    .apiInfo {
      text-align: right;
    }
  }

  .el-header {
    text-align: center;

    h1 {
      font-size: 2.5rem;

      @media (max-width: 767px) {
        font-size: 2rem;
      }
    }

    h3 {
      color: red;

      @media (max-width: 767px) {
        font-size: 1rem;
      }
    }

    .banner {
      width: 50%;

      @media (max-width: 767px) {
        width: 100%;
      }
    }
  }

  .el-main {
    width: 50%;
    margin: 0 auto;

    @media (max-width: 767px) {
      width: 100%;
    }

    .el-row {
      flex-wrap: wrap;
    }

    .input-area {
      flex: 1 0 auto;
      margin-right: 1rem;
    }

    .button-area {
      @media (max-width: 767px) {
        flex: 1 0 auto;
        margin: 1rem 1rem 0 0;
        text-align: right;
      }
    }
  }
}
</style>
