<template>
  <div class="wrap">
    <div class="klinetitle">
      <div id="centerbox" v-if="showCoin">
        <svg t="1710915821951" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="2321" width="22" height="22">
          <path
            d="M128 224c0-17.672 14.328-32 32-32h704c17.672 0 32 14.328 32 32s-14.328 32-32 32H160c-17.672 0-32-14.328-32-32z m41.344 137.344a32 32 0 0 1 45.312 0l128 128a32 32 0 0 1 0 45.312l-128 128c-12.511 12.512-32.8 12.512-45.312 0-12.512-12.511-12.512-32.8 0-45.312L274.754 512l-105.41-105.344a32 32 0 0 1 0-45.312zM448 416c0-17.672 14.328-32 32-32h384c17.672 0 32 14.328 32 32s-14.328 32-32 32H480c-17.672 0-32-14.328-32-32z m0 192c0-17.672 14.328-32 32-32h384c17.672 0 32 14.328 32 32s-14.328 32-32 32H480c-17.672 0-32-14.328-32-32zM128 800c0-17.672 14.328-32 32-32h704c17.672 0 32 14.328 32 32s-14.328 32-32 32H160c-17.672 0-32-14.328-32-32z m0 0"
            p-id="2322" fill="#000"></path>
        </svg>
        <span class="fzmmm fw c_black f18" id="symbolbox">{{ coin.toUpperCase() }}/{{ $t('认证') }}</span>
      </div>
      <div class="klinetitle_l">
        <p class="newpricebox" id="newpricebox" style="font-size: 24px">
          <span class="green" v-if="isUp(nowData)" style="font-size: 22px">{{
            nowData?.close ?? "--"
          }}</span>
          <span class="red" v-else style="font-size: 22px">{{
            nowData?.close ?? "--"
          }}</span>
        </p>
        <p class="changebox" id="changebox">
          <span class="green" v-if="isUp(nowData)" style="font-size: 16px">{{
            fd(nowData)
          }}</span>
          <span class="red" v-else style="font-size: 16px">{{
            fd(nowData)
          }}</span>
        </p>
      </div>
      <div class="klinetitle_r">
        <div class="klr3_box">
          <div class="klr3_box_dl">
            <span class="fzmm c_gray">{{ $t("最低") }}</span>
          </div>
          <div class="klr3_box_dr">
            <span class="fzmm c_black" id="minmoney">{{
              marketDetail?.low ?? "--"
            }}</span>
          </div>
        </div>
        <div class="klr2_box">
          <div class="klr2_box_dl">
            <span class="fzmm c_gray">{{ $t("最高") }}</span>
          </div>
          <div class="klr2_box_dr">
            <span class="fzmm c_black" id="maxmoney">{{
              marketDetail?.high ?? "--"
            }}</span>
          </div>
        </div>
        <div class="klr2_box">
          <div class="klr2_box_dl">
            <span class="fzmm c_gray">24h{{ $t("量") }}</span>
          </div>
          <div class="klr2_box_dr">
            <span class="fzmm c_black" id="allvol">{{
              marketDetail?.volume?.toLocaleString() ?? "--"
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="times">
      <div>{{ $t("时间") }}</div>
      <div v-for="(item, index) in times" :key="item.text" @click="onClickTime(index)">
        <span :class="index == timesIndex ? 'active' : ''">
          {{ item.text }}</span>
      </div>
    </div>
    <div id="chart" style="width: 100%; height: 500px"></div>
    <!-- @confirm="onConfirm"
      @cancel="onCancel"
      @change="onChange" -->

    <!-- <van-picker :columns="market" /> -->
    <!-- <van-popup v-model:show="showPicker" position="bottom">
      <van-picker
        :columns="market"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup> -->
  </div>
</template>
<script>
import axios from "axios";
import { init, dispose } from "klinecharts";
import { onMounted, onUnmounted, ref } from "vue";
import { showToast } from "vant";
import { handleBack } from "@/utils/tools";
import storage from "@/utils/storage";
// import pako from 'pako';
import emitter from "@/utils/emitter";
import { Socket } from "@/utils/socket";
let chart;
const hburl = "wss://api.huobi.pro/ws";

// const timesIndex = ref(0); //时间筛选索引
let webSocket;
const dataNum = 900; // 数据条数
// const nowData = ref({});
// const marketDetail = ref({}); //市场概览数据
// const open = ref(null);


export default {
  name:'Ordinary',
  props: {
    coin: {
      type: String,
      default: "btc",
    },
    showCoin: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: "36px",
    },
    market: {
      type: Array,
      default: function () {
        return {};
      },
    },
  },
  data() {
    return {
       times : [
  {
    text: "1m",
    value: "1min",
    diff: 60,
  },
  {
    text: "5m",
    value: "5min",
    diff: 60 * 5,
  },
  {
    text: "15m",
    value: "15min",
    diff: 60 * 15,
  },
  {
    text: "30m",
    value: "30min",
    diff: 60 * 30,
  },
  {
    text: "1h",
    value: "60min",
    diff: 60 * 60,
  },
  {
    text: "4h",
    value: "4hour",
    diff: 60 * 60 * 4,
  },
  {
    text: "1D",
    value: "1day",
    diff: 60 * 60 * 24,
  },
],
options : {
  url: hburl,
  openCb: (data) => {
    this.onOpen(data);
  },
  messageCb: (data) => {
    this.handleData(data);
  },
},
      timesIndex: 0,
      nowData: {},
      marketDetail: {},
      open: null,
    }
  },
  methods: {
    back(){
            handleBack();
        },
    getData() {
      // 初始化图表
      chart = init("chart");
      chart.createIndicator("MA", false, { id: "candle_pane" });
      chart.createIndicator("VOL");
      // document.getElementById("chart").style.backgroundColor = "#1b1d29";
      document.getElementById("chart").style.backgroundColor = "#fff";
      chart.setPriceVolumePrecision(2, 2);
      chart.setStyles({
        candle: {
          tooltip: {
            showRule: "none",
          },
        },
      });
      this.reqOpen();
      webSocket = new Socket(this.options);

    },
    historyK() {
      let time = this.times[this.timesIndex];
      let from = Math.trunc(Date.now() / 1000) - time.diff * dataNum;
      let str = {
        req: `market.${this.coin}usdt.kline.${time.value}`,
        id: this.coin,
        from: from, // 1min 对应一条数据 最小粒度为 1 min
        to: Math.trunc(Date.now() / 1000),
      };
      return str;
    },
    subK(value) {
      return ({
        // 订阅数据
        sub: `market.${this.coin}usdt.kline.${value}`,
        id: this.coin,
      })
    },

    unsubK(value) {
      return ({
        // 取消订阅数据
        unsub: `market.${this.coin}usdt.kline.${value}`,
        id: this.coin,
      })
    },
    subDetail(value) {
      return ({
        //订阅市场概览
        sub: `market.${this.coin}usdt.detail`,
        id: this.coin,
      });
    },
    onClickTime(index) {
      webSocket.send(JSON.stringify(this.unsubK(this.times[this.timesIndex].value)));
      this.timesIndex = index;
      webSocket.send(JSON.stringify(this.historyK(this.times[this.timesIndex].value)));
    },

    //获取市场开盘价格
    reqOpen() {
      let url = `https://api.huobi.pro/market/history/kline?period=1day&size=1&symbol=${this.coin}usdt`;
      axios
        .get(url)
        .then((response) => {
          // console.log(response, "开盘价格data");
          const data = response.data.data;
          this.open = data[0].open;
        })
        .catch((error) => {
          // 请求失败，处理错误
          console.error("Error fetching data:", error);
          setTimeout(this.reqOpen, 3000);
        });
    },
    isUp(data) {
      return data?.close >= this.open;
    },
    fd(data) {
      if (!data || !data.close || !this.open) {
        return "";
      }
      let fd = data?.close - this.open;
      let fd2 = (fd / this.open) * 100;
      if (fd > 0) {
        return "+" + fd2.toFixed(2) + "%";
      } else {
        return "" + fd2.toFixed(2) + "%";
      }
    },
    handleData(data) {
      // 处理数据
      if (data.status === "ok") {
        // 响应数据 历史数据 | 常规回调
        // 注意倒序
        if (data.data) {
          const historyData = [];
          // console.log(data.data)
          data.data &&
            data.data.forEach((item) => {
              historyData.unshift({
                timestamp: item.id * 1000, // 时间
                open: item.open, // 开
                high: item.high, // 高
                low: item.low, // 低
                close: item.close, // 收
                volume: item.vol, // 交易量
                turnover:
                  ((item.open + item.high + item.low + item.close) / 4) *
                  item.volume,
              });
            });
          // console.log(historyData, '加载历史数据')
          chart.applyNewData(historyData.reverse());
        } else if (data.unsubbed) {
          // 取消订阅成功
          let time = this.times[this.timesIndex];
          webSocket.send(JSON.stringify(this.subK(time.value)));
        }
      } else if (data.ch == `market.${this.coin}usdt.detail`) {
        this.marketDetail = this.tickToData(data.tick);
      } else {
        // 实时数据
        if (data.tick) {
          const perData = this.tickToData(data.tick);
          this.nowData = perData;
          chart.updateData(perData);
          emitter.emit(`${this.coin}usdt`, perData);
        }
      }
    },
    tickToData(perData) {
      return {
        // 开盘价，必要字段
        open: perData.open,
        // 收盘价，必要字段
        close: perData.close,
        // 最高价，必要字段
        high: perData.high,
        // 最低价，必要字段
        low: perData.low,
        // 成交量，非必须字段
        volume: perData.vol,
        // 时间戳，毫秒级别，必要字段
        //   timestamp: perData.id * 1000
        timestamp: perData.id * 1000,
      };
    },
    onOpen(data) {
      let time = this.times[this.timesIndex];
      webSocket.send(JSON.stringify(this.historyK(time.value)));
      webSocket.send(JSON.stringify(this.subK(time.value)));
      webSocket.send(JSON.stringify(this.subDetail()));
    },
  },
  created() {

  },
  mounted() {
    this.getData()
  },
  onUnmounted() {
    // 销毁图表
    dispose("chart")
  }
}

</script>
<style lang="scss" scoped>
.wap {
  // background: #1b1d29;
  height: 100%;
  background: #fff;
}

#centerbox {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 20px;
  // margin-top: 10px;
}

.times {
  // background: #1b1d29;
  display: flex;
  padding: 15px 20px;
  background: #fff;
  .active {
    border-bottom: 3px solid #fcd535;
  }

  div {
    margin-right: 10px;
    color: #000;
    font-size: 24px;
    font-weight: 400;
  }
}

.klinetitle {
  width: 100%;
  height: 240px;
  // background: #1b1d29;
  padding: 10px 10px;
  // box-shadow: 0 2px 10px 0 rgb(0 0 0 / 5%);
  background: #fff;
}

.klinetitle_l {
  width: 45%;
  height: 160px;
  float: left;
}

.klinetitle_r {
  width: 55%;
  height: 160px;
  float: left;
}

.newpricebox {
  height: 60px;
  line-height: 100px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #2ebd85;
  font-size: 40px;
  font-weight: bold;
}

.changebox {
  height: 40px;
  line-height: 40px;
  margin-bottom: 0px;
  color: #2ebd85;
  font-weight: bold;
}

.klr3_box {
  width: 100%;
  height: 30px;
}

.klr2_box {
  width: 100%;
  height: 25px;
}

.klr3_box_dl {
  width: 40%;
  height: 50px;
  line-height: 50px;
  float: left;
  text-align: left;
}

.klr3_box_dr {
  width: 60%;
  height: 50px;
  line-height: 50px;
  float: right;
  text-align: right;
}

.klr2_box_dl {
  width: 40%;
  height: 50px;
  line-height: 50px;
  float: left;
  text-align: left;
}

.klr2_box_dr {
  width: 60%;
  height: 50px;
  line-height: 50px;
  float: right;
  text-align: right;
  // background-color: #0ecb81;
  
  
}

.fcc {
  color: #707a8a;
}

/*灰色*/

.fe6 {
  color: #e6e6e6;
}

.c_black{
  color: #202630;
}
.c_gray{
  color: rgb(112, 122, 138);

}
.green {
  color: #0ecb81;
}

.red {
  color: #f5465c;
}

.fzmmm {
        font-size: 30px;
    }
</style>
