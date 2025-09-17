<template>
  <van-tabbar v-model="active" active-color="#775fd9" :border="true" inactive-color="#c54593" :key="tabbarKey">
    <van-tabbar-item v-for="(k, key) in item" replace :to="k.router" :key="key">
      <span>{{ k.title }}</span>
      <template #icon="props">
        <img :src="props.active ? k.icon.active : k.icon.noactive" :alt="k.title" :class="k.class" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import emitter from "@/utils/emitter";
import { getImg } from "@/utils/tools";
export default {
  data() {
    return {
      tabbarKey: 0,
      show: false,
      active: 0,
      item: [
        {
          router: "/Home",
          //   title: '首页',
          title: this.$t("common.tab_bar.tab_home"),
          icon: {
            active: getImg("home_active.png", "footer"),
            noactive: getImg("home_inactive.41093623.png", "footer"),
          },
          class: "small",
        },
        // {
        //     router: '/Game',
        //     //   title: "预约",
        //     title: this.$t('common.tab_bar.tab_reserve'),
        //     icon: {
        //         active: '/img/footer/预约选中.jpg',
        //         noactive: '/img/footer/预约未选中.jpg'
        //     }
        // },
        {
          router: "/guide1",
          //   title: "预约",
          // title: this.$t('认证'),
          title: this.$t("Gemeinschaft"),

          icon: {
            active: getImg("gamecraft_active.8e492d11.png", "footer"),
            noactive: getImg("gamecraft_inactive.6b5fa8e9.png", "footer"),
          },
          class: "small",
        },
        {
          // router: "/Choose",
          router: {
            path: '/Contract/index',
            query: { showBack: false }
          },
          title: "", //this.$t('common.tab_bar.tab_xy')
          icon: {
            active: "/img/footer/beauty.52660ad12.png",
            noactive: "/img/footer/beauty.52660ad12.png",
          },
          class: "tui",
        },
        {
          router: "/guide3",
          //   title: "视频",
          //   title: this.$t("common.tab_bar.tab_video"),
          title: "Hotel",
          icon: {
            active: getImg("hotel_active.91198c7c.png", "footer"),
            noactive: getImg("hotel_inactive.646466ba.png", "footer"),
          },
          class: "small",
        },
        {
          router: "/Mine",
          title: "Mein Konto",
          icon: {
            active: getImg("my_active.ae485b60.png", "footer"),
            noactive: getImg("my_Inactive.1914e00f.png", "footer"),
          },
          class: "small",
        },
      ],
      logined: false,
    };
  },
  methods: {},
  created() {
    this.active = this.item.findIndex(
      (item) => {
        const targetPath = typeof item.router === 'object'
          ? item.router.path
          : item.router;
        return targetPath === this.$route.path;
      }
    );
    emitter.on("token-update", () => { });
  },
};
</script>

<style lang="less" scoped>
@tabbar-height: 110px;
@tabbar-img: 75px;

.van-tabbar {
  height: @tabbar-height;
  z-index: 5;
  background-color: #070404;
}

.van-tabbar-item__icon img {
  height: @tabbar-img;

  &.small {
    height: 60px;
    margin: 7.5px;
  }
}

.van-tabbar-item--active {
  background-color: transparent !important;
}

.van-tabbar-item {
  font-size: 2.933vw;
}

.tui {
  width: 4.3rem;
  height: 4.3rem !important;
  margin-top: -4vw;
  background-color: #9c4646;
  border-radius: 50%;
  border: 1.333vw solid #fff;
  z-index: 10;
}

.van-tabbar-item__text span {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  font-weight: 500;
  text-align: center;
}

[class*="van-hairline"]::after {
  border: none !important;
}
</style>
