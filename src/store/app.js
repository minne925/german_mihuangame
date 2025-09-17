import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { obtain_data, getallcoin } from "@/api/trade";
import { isEmpty } from "@/utils/tools";
import emitter from "@/utils/emitter";
import { Socket } from "@/utils/socket";
export const useAppStore = defineStore("app", () => {
  const markets = ref({});
  let coinInterval = null;
  let socketK = null;
  const hburl = "wss://api.huobi.pro/ws"; // 实时币种价格
  let sublist = []
  let options = {
   url:hburl,
   openCb:(data)=>{
    onOpen(data);
   },
   messageCb:(data)=>{
      handleData(data)
    }
  }
  const startCheckMarket = async () => {
    if (!isEmpty(markets.value)) {
      getMarket();
      return;
    }
    try {
      await getAllCoin();
      getMarket();
    } catch (error) {
      console.log(error, "获取市场出错");
    }
  };
  const stopCheckMarket = () => {
    if (coinInterval) {
      clearInterval(coinInterval);
    }
    if (socketK) {
      socketK.destroy();
    }
  };
  const getCoinData = (coin) => {
    return markets.value[coin].data;
  };

  const getAllCoin = async () => {
    if(!isEmpty(markets.value)){
        return markets.value;
    }
    let result = await getallcoin();

    // 使用 reduce() 方法将数组转换为对象
    markets.value = result.data.reduce((acc, curr, index) => {
      let obj = { ...curr };
      // 新增键值对
      obj.coinname = curr.symbol;
      obj.index = index;
      obj.data = {};
      // 将新对象合并到结果对象中
      acc[curr.symbol] = obj;
      return acc;
    }, {});
    console.log(markets.value, "market");
    return markets.value;
  };

  const mbnMarket = async () => {
    const result = await obtain_data({ coin: "mbn" });
    let data = {
      tick: {
        open: 0,
        close: 0,
      },
    };
    data.tick.open = result.data.open;
    data.tick.close = result.data.close;
    markets.value["mbn"]["data"] = data;
    emitter.emit('market.usdt.kline.1day',markets.value)
  };
  const getMarket = async () => {
    sublist = [];
    let mbn = false;
    for (let index in markets.value) {
    //   console.log("bianl==========>", index);
      if (index == "mbn") {
        mbn = true;
      } else {
        let sub = "market." + index + "usdt.kline.1day";
        sublist.push({
          sub: sub,
        });
      }
    }
    if (markets.value["mbn"]) {
      mbnMarket();
      if (coinInterval) {
        clearInterval(coinInterval);
      }
      coinInterval = setInterval(function () {
        mbnMarket();
      }, 2000);
    }

    socketK = new Socket(options)
  };
  const onOpen = (data)=>{
    for (let index in sublist) {
      sendMessage(JSON.stringify(sublist[index]))
    }
  }
  const  sendMessage = (msg)=>{
    if(!socketK){
      console.error('socket 为空')
      return;
    }
    socketK.send(msg)
  }
  const handleData = (data) => {
  if (data.ch && data.ch.includes("market")) {
      let pattern = /market\.(.+?)usdt\.kline\.1day/;
      let match = data.ch.match(pattern);
      let currencyType = match[1];
      markets.value[currencyType].data = data;
      emitter.emit('market.usdt.kline.1day',markets.value)
    }
  };

  return {
    markets,
    getAllCoin,
    startCheckMarket,
    stopCheckMarket,
  };
});
