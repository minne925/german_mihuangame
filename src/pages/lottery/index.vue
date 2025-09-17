<template>
  <div class="container page" v-if="lottery">
    <div id="pop-record-div"></div>
    <div class="container-head" style="z-index: 9999;">
      <van-nav-bar :title="this.lottery.name" class="nav-bar">
        <template #left>
          <van-icon name="arrow-left" color="#fff" @click="back()" />
        </template>
      </van-nav-bar>
      <div class="container-head-box">
        <div class="record">
          <div class="period">
            <div class="left">
              <div class="flex just-center item-center">
                <van-image
                  class="cover van-image van-image--round"
                  :src="this.lottery.ico"
                >
                  <template v-slot:loading>
                    <van-loading type="spinner" />
                  </template>
                </van-image>
                <!-- <div class="name-lottery">{{ this.lottery.name }}</div> -->
              </div>
              <div>
                <div class="number-lottery">
                  {{ lottery && lottery.next_expect }}
                </div>
                <div class="text">
                  {{ $t("game.timeleft") }}
                </div>
              </div>
            </div>
            <div class="right">
              <!--避免翻译影响 HTML（保护不被翻译）-->
              <div translate="no">
                <van-count-down :time="time" @finish="check()" />
              </div>
            </div>
          </div>
          <div class="current-result">
            <div class="current-result-left">
              <div>
                <span>{{ current.expect }}</span>
                <span>Abstimmungsergebnis</span>
              </div>
            </div>
            <div class="current-result-right">
              <div class="current-result-total">
                {{
                  current.status === 0
                    ? 0
                    : current.opencode[0] +
                      current.opencode[1] +
                      current.opencode[2]
                }}
              </div>
              <div class="current-result-result">
                <!-- {{
                    current.opencode[0] +
                      current.opencode[1] +
                      current.opencode[2] >=
                      11 &&
                    current.opencode[0] +
                      current.opencode[1] +
                      current.opencode[2] ==
                      18
                      ? "フェラ"
                      : "アナルセックス"
                  }} -->

                <div class="item">
                  {{
                    current.opencode[0] +
                      current.opencode[1] +
                      current.opencode[2] >
                    9
                      ? "A"
                      : "B"
                  }}
                </div>
                <div class="item">
                  {{
                    (current.opencode[0] +
                      current.opencode[1] +
                      current.opencode[2]) %
                      2 ===
                    0
                      ? "D"
                      : "C"
                  }}
                </div>
              </div>
              <div
                class="current-result-icon"
                @click="showRecord = !showRecord"
              >
                <img src="/img/lottery/row.png" alt="" />
              </div>
            </div>
          </div>
          <div
            class="linear-gradient"
            style="
							background: linear-gradient(
								to right,
								rgba(126, 86, 120, 0),
								rgb(230, 195, 161),
								rgba(126, 86, 120, 0)
							);
						"
          ></div>
        </div>
      </div>
    </div>

    <div class="history_popup"></div>
    <div class="wrapper">
      <div class="options-bar">
        <div class="game">
          <div
            class="linear-gradient"
            style="
							background: linear-gradient(
								to right,
								rgba(126, 86, 120, 0),
								rgb(230, 195, 161),
								rgba(126, 86, 120, 0)
							);
						"
          ></div>
          <div class="sumValueTwoSides">
            <div
              class="rectangle large"
              :class="{ active: choose[v.type] }"
              v-for="(v, key) in lottery_peilv_list"
              :key="key"
              @click="choosePlay(v.type, v.name)"
            >
              <div class="wrapper">
                <div class="content">
                  <p class="name-text large">{{ v.name }}</p>
                  <!-- <p class="odd-text large">
										{{ v.proportion }}
									</p> -->
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="game-list">
						<div class="game-button">
							<div>
								<span class="span-text" @click="$router.push({ path: '/GameRecord' })">{{
									$t("mine.gamerecord")
								}}</span>
							</div>
						</div>
					</div> -->

          <div class="game-detail" style="display: none;">
            <div class="ketqua">
              <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <div class="wrapper">
                  <div class="item header">
                    <div class="left font-weight">
                      {{ $t("game.Issue") }}
                    </div>
                    <div class="right font-weight">
                      {{ $t("game.Winningnumbers") }}
                    </div>
                  </div>
                  <div class="item" v-for="(v, key) in lottery_list" :key="key">
                    <div class="left font-weight">
                      {{ v.expect }}
                    </div>
                    <div class="right font-weight">
                      <div class="kuaisan-ball left">
                        <span v-if="v.opencode" class="res-des middle">{{
                          v.opencode[0] + v.opencode[1] + v.opencode[2] >= 11 &&
                          v.opencode[0] + v.opencode[1] + v.opencode[2] == 18
                            ? "フェラ"
                            : "アナルセックス"
                        }}</span>
                        <!-- <span class="res-des middle">{{
                                                    (v.opencode[0] +
                                                        v.opencode[1] +
                                                        v.opencode[2]) %
                                                        2 ===
                                                    0
                                                        ? 'D'
                                                        : 'C'
                                                }}</span> -->
                      </div>
                    </div>
                  </div>
                </div>
              </van-pull-refresh>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-bar">
        <div class="bar">
          <div class="left">
            <div
              class="item"
              @click="shopping ? (shopping = false) : (shopping = true)"
            >
              <van-icon name="cart-o" class="jixuanico" />
              <!-- <span class="text">{{ $t("game.missionlist") }}</span> -->
            </div>
            <!-- <div class="line"></div> -->
          </div>
          <div class="mid">
            <span class="text">{{ $t("game.AvailableBalance") }}</span>
            <span class="text num">{{ this.userInfo.money }}</span>
            <!-- <span class="text">{{ $t("common.currency") }}</span> -->
          </div>
          <div class="right" @click="jiesuan()">
            {{ $t("common.submit") }}
          </div>
        </div>
        <div class="wrapper" :class="{ active: shopping }">
          <div class="item">
            <span class="label">{{ $t("game.numberselection") }}：</span>
            <div class="bet-number">{{ this.shopchoose }}</div>
            <van-icon
              name="arrow-down"
              :class="{ up: !shopping, down: shopping }"
              @click="shopping ? (shopping = false) : (shopping = true)"
            />
          </div>
          <div class="item">
            <span class="label">{{ $t("game.Amountperbet") }}：</span>
            <div class="amount-wrapper">
              <van-field
                v-model="money"
                type="digit"
                :placeholder="$t('game.Pleaseentertheamount')"
              />
              <span class="label">{{ $t("common.currency") }}</span>
            </div>
          </div>
          <div class="item">
            <div class="part">
              <span>{{ $t("game.total") }}</span>
              <span class="number">{{ this.formData.length }}</span>
              <span>{{ $t("game.note") }}</span>
            </div>
            <div class="part">
              <span>{{ $t("game.total1") }}</span>
              <span class="number">{{
                this.formData.length * this.money
              }}</span>
              <span>{{ $t("common.currency") }}</span>
            </div>
          </div>
        </div>
      </div>
      <van-popup
        v-model="showRecord"
        position="top"
        class="pop-record"
        :get-container="getContainer"
      >
        <div class="game-detail">
          <div class="ketqua">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
              <div class="wrapper">
                <!-- <div class="item header">
										<div class="left font-weight">
											{{ $t("game.Issue") }}
										</div>
										<div class="right font-weight">
											{{ $t("game.Winningnumbers") }}
										</div>
									</div> -->
                <div class="item" v-for="(v, key) in lottery_list" :key="key">
                  <div class="left font-weight">
                    {{ v.expect }}
                  </div>
                  <div class="right font-weight">
                    <!-- <div class="kuaisan-ball left"> -->
                    <!-- <span
													class="res-des middle"
													v-if="v.opencode"
													>{{(v.opencode[0] + v.opencode[1] + v.opencode[2]) >= 11 && (v.opencode[0] + v.opencode[1] + v.opencode[2]) == 18 ? "フェラ" : "アナルセックス"}}</span
												> -->

                    <!-- </div> -->
                    <div class="l">
                      <div class="hm" style="">
                        {{ v.opencode[0] }}
                        {{ v.opencode[1] }}
                        {{ v.opencode[2] }}
                      </div>

                      <span class="count">
                        {{ v.opencode[0] + v.opencode[1] + v.opencode[2] }}
                      </span>
                    </div>

                    <div class="r">
                      <span class="res-des middle">{{
                        v.opencode[0] + v.opencode[1] + v.opencode[2] > 9
                          ? "A"
                          : "B"
                      }}</span>

                      <span class="res-des middle">{{
                        (v.opencode[0] + v.opencode[1] + v.opencode[2]) % 2 ===
                        0
                          ? "D"
                          : "C"
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </van-pull-refresh>
          </div>
        </div>
      </van-popup>
      <van-popup v-model="jiesuanpage" get-container="body">
        <div class="confirm-order-modal">
          <div class="head van-hairline--bottom">
            <p class="text">{{ $t("game.missionlist") }}</p>
          </div>
          <ui class="list">
            <li
              v-for="(v, key) in formData"
              :key="key"
              class="lise-item van-hairline--bottom"
            >
              <div class="main">
                <p class="bet-name">{{ v.name }}</p>
                <p class="detail-text">
                  1{{ $t("game.note") }}X{{ money
                  }}{{ $t("common.currency") }}={{ money
                  }}{{ $t("common.currency") }}
                </p>
              </div>
              <van-icon @click="clearChooes(v.type)" name="close" />
            </li>
          </ui>
          <div class="sub-bar">
            <van-button
              class="item cancel-btn"
              type="default"
              @click="allClear()"
              >{{ $t("game.Clearorder") }}</van-button
            >
            <van-button class="item sub-btn" type="default" @click="doSub">{{
              $t("game.submission")
            }}</van-button>
          </div>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script>
var time;
var count = 0;
export default {
  data() {
    return {
      jiesuanpage: false,
      showRecord: false,
      choose: {
        A: false,
        B: false,
        C: false,
        D: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false,
        16: false,
        17: false,
        18: false,
      },
      playgame: false,
      shopping: false,
      isLoading: false,
      play: {},
      lottery_peilv_list: {},
      lottery_list: {},
      active: false,
      userInfo: {},
      lottery: null,
      shanzi_1: "0",
      shanzi_2: "0",
      shanzi_3: "0",
      sum: 0,
      size: "",
      double: "",
      time: 0,
      shopchoose: this.$t("game.Notselected"),
      gameitem: "",
      formData: [],
      money: "",
      current: { opencode: [] },
    };
  },
  methods: {
    getContainer() {
      return document.querySelector("#pop-record-div");
    },
    back() {
      return window.history.back();
    },
    doSub() {
      if (this.money === "0") {
        this.$toast(this.$t("game.Wrongamount"));
        return false;
      }
      if (this.formData.length === 0) {
        this.$toast(this.$t("game.selectanumber"));
        return false;
      } else if (this.money === "") {
        this.$toast(this.$t("game.Pleasefillintheamount"));
        return false;
      } else {
        if (this.userInfo.money - this.money * this.formData.length < 0) {
          this.$toast(this.$t("game.servicetorecharge"));
          return false;
        } else {
          this.$http({
            method: "post",
            data: {
              item: this.gameitem,
              money: this.money,
              lid: this.lottery.id,
              mid: this.userInfo.id,
              expect: this.lottery.now_expect,
            },
            url: "game_place_order",
          }).then((res) => {
            if (res.code === 200) {
              this.$toast(res.msg);
              this.allClear();
              this.getUserInfo();
            } else if (res.code === 401) {
              this.$toast(res.msg);
            }
          });
          return true;
        }
      }
    },
    allClear() {
      for (var i = 0; i < this.formData.length; i++) {
        this.choose[this.formData[i]["type"]] = false;
      }
      this.formData.length = 0;
      this.money = "";
      this.shopchoose = this.$t("game.Unselected");
      this.gameitem = "";
      this.shopping = false;
      this.jiesuanpage = false;
    },
    jiesuan() {
      if (this.formData.length === 0) {
        this.$toast(this.$t("game.selectanumber"));
        return false;
      } else if (this.money === "") {
        this.$toast(this.$t("game.Pleasefillintheamount"));
        return false;
      } else {
        this.jiesuanpage
          ? (this.jiesuanpage = false)
          : (this.jiesuanpage = true);
      }
    },
    clearChooes(type) {
      for (var i = 0; i < this.formData.length; i++) {
        if (type === this.formData[i]["type"]) {
          this.formData.splice(i, 1);
          this.choose[type] = false;
        }
      }
      if (this.formData.length >= 1) {
        for (var j = 0; j < this.formData.length; j++) {
          if (j === 0) {
            this.shopchoose = this.formData[j]["name"];
            this.gameitem = this.formData[j]["type"];
          } else {
            this.shopchoose += "," + this.formData[j]["name"];
            this.gameitem += "," + this.formData[j]["type"];
          }
        }
      } else {
        this.shopchoose = this.$t("game.Unselected");
        this.gameitem = "";
        this.shopping = false;
      }
      if (this.formData.length === 0) {
        this.jiesuanpage = false;
      }
    },
    choosePlay(type, name) {
      if (this.choose[type] === true) {
        this.choose[type] = false;
        for (var i = 0; i < this.formData.length; i++) {
          if (type === this.formData[i]["type"]) {
            this.formData.splice(i, 1);
          }
        }
      } else if (this.choose[type] === false) {
        this.formData.push({ name: name, type: type });
        this.choose[type] = true;
      }
      if (this.formData.length === 1) {
        this.shopping = true;
      }
      if (this.formData.length >= 1) {
        for (var j = 0; j < this.formData.length; j++) {
          if (j === 0) {
            this.shopchoose = this.formData[j]["name"];
            this.gameitem = this.formData[j]["type"];
          } else {
            this.shopchoose += "," + this.formData[j]["name"];
            this.gameitem += "," + this.formData[j]["type"];
          }
        }
      } else {
        this.shopchoose = this.$t("game.Unselected");
        this.gameitem = "";
        this.shopping = false;
      }
    },
    check() {
      if (!localStorage.getItem("token")) {
        this.$router.push({ path: "/Login" });
      } else {
        time = window.setInterval(() => {
          setTimeout(() => {
            this.getUserInfo();
            this.getLotteryInfo();
            this.getLotteryList();
            count++;
            if (count > 5) {
              clearInterval(time);
              count = 0;
            }
          }, 0);
        }, 300);
      }
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast(this.$t("home.refresh_successful"));
        this.getLotteryList();
        this.isLoading = false;
      }, 200);
    },
    getUserInfo() {
      this.$http({
        method: "get",
        url: "user_info",
      }).then((res) => {
        if (res.code === 200) {
          this.userInfo = res.data;
        } else if (res.code === 401) {
          this.$toast(res.msg);
        }
      });
    },
    getLotteryPeilv() {
      this.$http({
        method: "get",
        data: { id: this.$route.query.id },
        url: "lottery_get_peilv",
      }).then((res) => {
        if (res.code === 200) {
          this.lottery_peilv_list = res.data;
        } else if (res.code === 401) {
          this.$toast(res.msg);
        }
      });
    },
    getLotteryList() {
      this.$http({
        method: "get",
        data: { key: this.$route.query.key },
        url: "lottery_get_one_list",
      }).then((res) => {
        if (res.code === 200) {
          this.lottery_list = res.data;
          if (res.data.length) this.current = res.data[0];
          this.getLotteryPeilv();
        } else if (res.code === 401) {
          this.$toast(res.msg);
        }
      });
    },
    getLotteryInfo() {
      this.$http({
        method: "get",
        data: { key: this.$route.query.key },
        url: "lottery_get_info",
      }).then((res) => {
        if (res.code === 200) {
          if (
            parseFloat(this.userInfo.money) < parseFloat(res.data.condition)
          ) {
            this.$toast(this.$t("game.thistask"));
            this.$router.push({ path: "/Home" });
            return false;
          }
          this.lottery = res.data;
          this.time = res.data.second * 1000;

          if (this.time / 1000 === 59) {
            this.$toast(
              this.$t("game.Thelotterydraw") + this.lottery.now_expect
            );
          }
          //  this.shanzi_1 =
          //       'img/lottery/shaizi/' + res.data?.opencode[0] + '.png'
          //   this.shanzi_2 =
          //      'img/lottery/shaizi/' + res.data?.opencode[1] + '.png'
          //   this.shanzi_3 =
          //       'img/lottery/shaizi/' + res.data?.opencode[2] + '.png'
          /*  this.sum =
                        res.data.opencode[0] +
                        res.data.opencode[1] +
                        res.data.opencode[2]
                    if (this.sum >= 11 && this.sum <= 18) {
                        this.size = 'A'
                    } else if (this.sum >= 3 && this.sum <= 10) {
                        this.size = 'B'
                    }
                    if (this.sum % 2 === 0) {
                        this.double = 'D'
                    } else {
                        this.double = 'C'
                    }*/
        } else if (res.code === 401) {
          this.$toast(res.msg);
        }
      });
    },
  },
  created() {
    if (!localStorage.getItem("token")) {
      this.$router.push({ path: "/Login" });
    } else {
      this.getUserInfo();
      this.getLotteryInfo();
      this.getLotteryList();
      this.check();
    }
  },
  destroyed() {
    clearInterval(time);
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/base.css";
.container-head {
  height: 550px;
  width: 100%;
  background: url(/img/lotterybg.png) no-repeat;
  background-size: 100% 100%;
}
.container-head-box {
  height: calc(100% - 100px);
  background: linear-gradient(
    90deg,
    rgba(223, 53, 173, 0.8),
    rgba(79, 29, 181, 0.8)
  );
}
.nav-bar .right {
  padding-left: 8px;
  padding-right: 8px;
  color: #fff;
  font-size: 28px;
  border-radius: 10px;
  border: 2px solid #fff;
  line-height: 60px;
}

.van-count-down {
  text-align: right;
}

.sumValueTwoSides {
  // background: #fff;
  // margin: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 2vw;
  display: flex;
  padding: 2vw 2vw;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.rectangle.large {
  width: 50%;
}

.rectangle .wrapper {
  position: relative;
  padding: 6.667vw 1.333vw;
  background: #fff;
  height: 160px;
}
.rectangle.large .wrapper {
  margin: 0.3rem;
  border-radius: 2vw;
}

.game-button {
  display: flex;
  justify-content: space-around;
}

.game-button div {
  display: block;
  text-align: center;
  width: 100%;
  background-color: #e6c3a1;
  border: 0.02667rem solid #e6c3a1;
  border-radius: 2vw;
  color: #fff;
  overflow: hidden;
  padding: 0.6rem 0;
  margin: 0 1rem;
}

.game-detail .ketqua {
  margin: 1rem;
  background: #fff;
  border-radius: 3.333vw;
  .wrapper {
    .item {
      .right {
        display: flex;
        .l {
          padding-left: 60px;
          display: flex;
          flex-grow: 1;
          .hm {
            font-size: 36px;
            color: #f47cd5;
          }
          .count {
            margin-left: 20px;
            width: 60px;
            height: 60px;
            color: #fff;
            line-height: 60px;
            background: linear-gradient(90deg, #f560cd, #4f2b8a);
            border-radius: 50%;
            text-align: center;
          }
        }
        .r {
          display: flex;
          width: 160px;
          justify-content: space-between;
          .res-des {
            background: linear-gradient(90deg, #f560cd, #4f2b8a);
            width: 80px;
            height: 60px;
            border-radius: 10px;
			color: #fff;
			text-align: center;
			line-height: 60px;
			margin-left: 20px;
          }
        }
      }
    }
  }
}

.van-pull-refresh {
  overflow: hidden;
  -webkit-user-select: none;
  user-select: none;
}

.van-pull-refresh__track {
  position: relative;
  height: 100%;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
}

.record {
  padding-left: 2.667vw;
  padding-right: 2.667vw;
  // background-color: #fff;
  // box-shadow: 0 0.267vw 0.267vw 0 #cacaca;
  // background: #7e5678;
  border-radius: 2vw;
  margin: 0 0.5rem;
}
.record .period {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.667vw 0;
}

.period .left {
  display: flex;
  width: 50%;
}

.period .right {
  height: 100%;
  // border-left: 0.02667rem dashed #fff;
  padding: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.period .left div {
  justify-content: flex-start;
}

.period .left div.cover {
  margin-right: 1rem;
}
.current-result {
  width: 100%;
  height: 210px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f47cd5;
  border-radius: 8px;
  padding: 10px 2.5%;
}
.current-result-left {
  width: 48%;
}
.current-result-left > div {
  font-size: 30px;
  color: #fff;
  font-weight: 700;
  text-align: center;
  border-right: 7px solid #f9b1e7;
}
.current-result-left > div > span {
  display: block;
}
.current-result-right {
  width: 48%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #fff;
  border-radius: 8px;
  padding: 5px 0;
  .current-result-total {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: linear-gradient(90deg, #8b73e6, #d75db4);
    color: #fff;
    font-size: 30px;
    text-align: center;
    line-height: 60px;
  }
  .current-result-result {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120px;
    .item {
      width: 140px;
      // height: 60px;
      border-radius: 10px;
      background: linear-gradient(90deg, #f560cd, #4f2b8a);
      color: #fff;
      font-size: 30px;
      text-align: center;
      // line-height: 60px;
      margin: 10px 0;
    }
  }
  .current-result-icon {
    img {
      width: 50px;
    }
  }
}
.name-lottery {
  border: 1px solid #fff;
  border-radius: 1.333vw;
  padding: 1.333vw;
  color: #fff;
  font-size: 2.4vw;
}

.number-lottery {
  color: #fff;
  margin-top: 2vw;
  font-size: 4.667vw;
  font-weight: 600;
}

.period .left .text {
  font-size: 3.333vw;
  color: #fff;
  margin-bottom: 2.667vw;
}

.item-center {
  align-items: center;
}

.just-center {
  justify-content: center;
}
.flex {
  display: flex;
}

.van-image--round {
  overflow: hidden;
  border-radius: 50%;
}
.van-image {
  position: relative;
  display: inline-block;
}

.record .period .cover {
  width: 60px;
  height: 60px;
  -o-object-fit: cover;
  object-fit: cover;
}
.record .period .period-number {
  flex: 1;
  margin-left: 20px;
  margin-right: 10px;
  height: 50px;
  line-height: 50px;
  font-size: 35px;
  font-weight: 700;
  color: #000;
}
.van-count-down {
  color: #edff25;
  font-size: 45px;
  margin-top: 10px;
  float: right;
}
.linear-gradient {
  width: 100%;
  height: 2px;
}
.record .recent {
  display: flex;
  align-items: center;
  height: 110px;
}
.kuaisan-ball .left {
  justify-content: flex-start;
}
.kuaisan-ball {
  margin-left: 2.667vw;
  flex: 1;
  display: flex;
  align-items: center;
}

.wrapper .item .kuaisan-ball {
  margin-left: 2.667vw;
  flex: 1;
  display: flex;
  align-items: center;
}

.wrapper .item .kuaisan-ball .res-des.middle {
  width: 100%;
  font-size: 3.333vw;
  border: 1px solid #ebebeb;
  margin: 0 1.333vw;
  padding: 0.4vw 0;
  border-radius: 1.333vw;
  background: #ebebeb;
}

.kuaisan-ball .res-img {
  width: 70px;
  height: 70px;
  line-height: 70px;
  margin-right: 30px;
  color: #fff;
  background: #bd128f;
  border-radius: 50%;
  text-align: center;
}
.kuaisan-ball .res-des {
  font-weight: 700;
  text-align: center;
  color: #000;
}

.van-icon {
  font-size: 40px;
}
.down {
  transition: all 0.5s;
}
.up {
  transform: rotate(180deg);
  transition: all 0.5s;
}
.wrapper {
  position: relative;
  flex: 1;
  overflow: hidden;
}
.options-bar {
  display: flex;
  align-items: center;
  height: calc(100% - 180px);
}
.options-bar .game {
  flex: 1;
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.options-bar .game .tips {
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 20px;
}
.options-bar .game .tips .odds {
  flex: 1;
  font-size: 35px;
  font-weight: 500;
  color: #ff253f;
}
.options-bar .game .tips .play-tip {
  display: flex;
  align-items: center;
  height: 100%;
}
::v-deep .van-icon-more-o {
  color: #ff253f;
  font-size: 50px;
}
.options-bar .game .tips .play-tip .span-text {
  margin-left: 10px;
  font-size: 35px;
  font-weight: bolder;
  color: #ff253f;
}
.linear-gradient {
  width: 100%;
  height: 2px;
}
.sumValueTwoSides {
  display: flex;
  // padding: 30px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 30px;
}
.rectangle {
  overflow: hidden;
}
.rectangle .wrapper .content {
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #fff;
}
.rectangle .wrapper .content .name-text.large {
  font-size: 3.333vw;
  text-align: center;
}
.rectangle .wrapper .content .name-text {
  color: #000; /* 设置文字颜色为白色 */
  // text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff; /* 添加黄色描边效果 */
}
.rectangle .wrapper .content .odd-text.large {
  font-size: 25px;
  margin-top: -30px;
}
.rectangle .wrapper .content .odd-text {
  text-align: center;
  color: #ff253f;
}
.bottom-bar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 160px;
  z-index: 2;
}
.bottom-bar .bar .left,
.bottom-bar .bar {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.bottom-bar .bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 0 20px 0 #cacaca;
  z-index: 2;
}
.bottom-bar .bar .left,
.bottom-bar .bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
}
.bottom-bar .bar .left .item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  font-size: 20px;
}
.bottom-bar .bar .left .item .text {
  font-size: 22px;
  color: #7d7c7c;
}
.jixuanico {
  font-size: 45px;
}
.bottom-bar .bar .left .line {
  width: 2px;
  height: 50px;
  background: #dadada;
}
.bottom-bar .bar .mid {
  flex: 1;
  display: flex;
  align-items: center;
  // justify-content: flex-end;
}
.bottom-bar .bar .mid .text {
  font-size: 32px;
  font-weight: 700;
  color: #000;
}
.bottom-bar .bar .mid .text.num {
  margin: 0 5px;
  color: #ff253f;
}
.bottom-bar .bar .right {
  // padding: 0 30px;
  // margin: 0 30px;
  // color: #fff;
  // background: linear-gradient(270deg, #e6c3a1, #7e5678);
  // font-size: 40px;
  // font-weight: 500;
  // height: 70px;
  // line-height: 70px;
  // border-radius: 50px;

  // height: 92px;
  padding: 30px 60px;
  margin-left: 20px;
  color: #fff;
  background: linear-gradient(20deg, #8673e5, #d958a4);
  font-size: 24px;
  font-weight: 700;
  // border-radius:10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.rectangle.active .wrapper .content {
  // background-color: #ff253f !important;
  background: #d07ac7 !important;
}

.van-pull-refresh__head {
  position: absolute;
  left: 0;
  width: 100%;
  height: 6.667vw;
  overflow: hidden;
  color: #969799;
  font-size: 1.867vw;
  line-height: 6.667vw;
  text-align: center;
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
}

::v-deep .van-popup {
  position: absolute;
}
::v-deep .van-overlay {
  position: absolute;
  background-color: rgb(70 67 67 / 70%);
}
::v-deep .van-popup--top {
  top: -1px;
}

.wrapper {
  position: relative;
  flex: 1;
  overflow: hidden;
}

.wrapper .item.header .left,
.wrapper .item.header .right {
  color: #000 !important;
  font-size: 32px;
}

.wrapper .item .left {
  width: 40%;
  font-size: 4vw;
  text-align: center;
  font-weight: 500;
  color: #2c3e50;
}

.wrapper .item .right {
  flex: 1;
  display: flex;
  font-size: 4vw;
  justify-content: center;
  overflow: hidden;
  color: #2c3e50;
}

.wrapper .item.header {
  // background: #b08b8c !important;
  padding: 1rem;
  font-weight: 700;
  border-top-left-radius: 3.333vw;
  border-top-right-radius: 3.333vw;
}

.wrapper .item {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2.667vw 0;
  border-bottom: 1px solid #ebebeb;
}

.wrapper .item .kuaisan-ball .res-des.middle {
  width: 100%;
  font-size: 4.333vw;
  border: 1px solid #ebebeb;
  margin: 0 1.333vw;
  padding: 0.4vw 0;
  border-radius: 1.333vw;
  // background: #ebebeb;
  background: linear-gradient(90deg, #f560cd, #4f2b8a);
  color: #fff;
}

.font-weight {
  font-weight: 700 !important;
}
.wrapper .item .right {
  flex: 1;
  display: flex;
  font-size: 30px;
  justify-content: center;
  overflow: hidden;
  color: #000;
}
.wrapper .item .kuaisan-ball .left {
  justify-content: flex-start;
}
.wrapper .item .kuaisan-ball {
  margin-left: 20px;
  flex: 1;
  display: flex;
  align-items: center;
}
.wrapper .item .kuaisan-ball .res-img {
  width: 50px;
  height: 50px;
  line-height: 50px;
  margin-right: 20px;
  color: #fff;
  background: #bd128f;
  border-radius: 50%;
}
.wrapper .item .kuaisan-ball .res-des {
  font-weight: 700;
  text-align: center;
  color: #000;
}

.play-type-tip {
  position: unset;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 650px;
  height: 700px;
  max-height: 50%;
  z-index: 10;
  border-radius: 30px;
  overflow: hidden;
  background-color: #fff;
  color: #000;
}
.play-type-tip .title {
  line-height: 90px;
  background: linear-gradient(90deg, #7e5678, #e6c3a1);
  text-align: center;
  color: #fff;
  font-size: 35px;
  font-weight: 500;
}
.mask {
  background-color: rgb(0 0 0 / 0%);
  animation-duration: 0.35s;
}
.play-type-tip .wrapper {
  height: calc(100% - 10px);
  background-color: transparent;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.play-type-tip .wrapper .item {
  padding: 40px 50px;
  display: flex;
  align-items: flex-start;
}
.play-type-tip .wrapper .item .van-icon {
  color: #e6c3a1;
  font-size: 60px;
}
.play-type-tip .wrapper .item .content .content-title {
  margin-top: 22px;
  font-size: 35px;
  font-weight: 500;
  color: #000;
  line-height: 0px;
}
.play-type-tip .wrapper .item .content .content-detail {
  margin-top: 5px;
  font-size: 22px;
  color: #000;
  line-height: 30px;
}
.play-type-tip .wrapper .item .content {
  flex: 1;
  margin-left: 30px;
}
.rectangle.active .wrapper {
  background-color: #ff253f !important;
}
.rectangle.active .wrapper .name-text,
.rectangle.active .wrapper .odd-text {
  // color: #ff253f !important;
  color: #fff !important;
}
.bottom-bar .wrapper {
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  padding: 20px 20px 10px 20px;
  height: 230px;
  background-color: #fff;
  z-index: 1;
  box-shadow: 0 0 10px 0 #cacaca;
  transition: transform 0.3s cubic-bezier(0.21, 1.02, 0.55, 1.01);
}
.bottom-bar .wrapper.active {
  transform: translateY(-100%);
}
.bottom-bar .wrapper .item {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 65px;
}
.bottom-bar .wrapper .item .label {
  font-size: 30px;
  line-height: 30px;
  color: #000;
}
.bottom-bar .wrapper .item .bet-number {
  flex: 1;
  margin: 0 16px;
  overflow: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  color: #ff253f;
  font-size: 30px;
  font-weight: 500;
  height: 40px;
  line-height: 40px;
}
.bottom-bar .wrapper .item .amount-wrapper {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.van-cell {
  font-size: 30px;
  line-height: 50px;
}
.bottom-bar .wrapper .item .part {
  margin-right: 20px;
}
.bottom-bar .wrapper .item .part span {
  font-size: 30px;
  vertical-align: center;
  color: #000;
}
.bottom-bar .wrapper .item .part .number {
  margin: 0 5px;
  color: #ff253f;
  font-weight: 500;
}
::v-deep .van-field__control {
  color: #ff253f;
}
.confirm-order-modal {
  position: unset;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 0 20px 30px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 610px;
  height: 680px;
  max-height: 50%;
  z-index: 10;
  background-color: #fff;
  border-radius: 30px;
}
.confirm-order-modal .head {
  position: relative;
  height: 80px;
}
.confirm-order-modal .head .text {
  padding: 0 20px;
  height: 30px;
  line-height: 10px;
  text-align: center;
  font-size: 35px;
  font-weight: 500;
  color: #7e5678;
}
::v-deep .confirm-order-modal .van-hairline--bottom::after {
  border-bottom-width: 2px;
}
.van-popup--center {
  border-radius: 30px;
}
.confirm-order-modal .list {
  flex: 1;
  padding: 0 10px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.confirm-order-modal .list .lise-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
}
.confirm-order-modal .list .lise-item .main {
  flex: 1;
  overflow: hidden;
}
.confirm-order-modal .list .lise-item .main .bet-name {
  color: #ff253f;
  font-size: 35px;
  font-weight: 500;
  line-height: 0px;
  word-wrap: break-word;
  word-break: break-all;
}
.confirm-order-modal .list .lise-item .main .detail-text {
  line-height: 0px;
  font-size: 25px;
  color: #979799;
}
.confirm-order-modal .list .lise-item {
  color: #ff253f;
}
.confirm-order-modal .sub-bar {
  display: flex;
  align-items: center;
  margin-top: 30px;
  justify-content: space-around;
}
.confirm-order-modal .sub-bar .item {
  min-width: 40%;
  height: 80px;
  text-align: center;
  box-sizing: border-box;
  border-radius: 50px;
  font-size: 35px;
  font-weight: 500;
}
.confirm-order-modal .sub-bar .item.cancel-btn {
  border: 2px solid #979799;
  color: #979799;
  background-color: #fff;
}
.confirm-order-modal .sub-bar .item.sub-btn {
  background: linear-gradient(90deg, #6529c9, #cc2996);
  color: #fff;
  border: 0;
}
.next-number span {
  font-size: 35px;
  font-weight: 700;
  color: #000;
  float: right;
}
.pop-record {
  width: 100%;
  height: 90%;
  padding-top: 70%;
  background: #fff;
  box-shadow: 0 0 10px 0 #cacaca;
  margin-bottom: 10px;
  //position: fixed;
  transition: all 0.5s ease-out;
}
</style>
