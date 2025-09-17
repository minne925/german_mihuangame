<template>
  <div class="convention-hall">
    <div class="wrap">
      <section id="story">
        <h2 class="h2-4">
          <span>Passende Geschichten</span>
        </h2>
        <!-- <div>{{ data.txt }}</div> -->
        <div class="story mb30" v-for="(data,index) in list" :key="index">
          <div class="story-header">
            <img :src="data.head">
          </div>
          <div class="box">
            <div>
              <p>{{data.txt}}</p>
            </div>
            <div class="story-footer" v-if="data.pic !=''">
              <p class="mb30">
                <img :src="data.pic" alt="Unbearbeitete Fotos der registrierten Frauen">
              </p>
            </div>
          </div>
        </div>
        <div>
          <span class="text-center">Die Liebe in deiner Nähe ist in deiner Nähe</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  // components: {
  //   Footer
  // },
  data() {
    return {
      datalist: [],
      addlist: [],
      list: [] // 初
    };
  },
  methods: {

    toPage(item) {
      console.log(item);
      this.$router.push({
        name: 'Details',
        query: {
          name: item.xuanfei_name,
          id: item.id
        }
      })
    },
    addgo(data) {
      if (!localStorage.getItem("token")) {
        this.$router.push({ path: "/Login" });
      } else {
        this.$router.push({
          path: "/list?id=" + data.id + "&name=" + data.name,
        });
      }
    },
    getAddress() {
      this.$http({
        method: "get",
        url: "address_list",
      }).then((res) => {
        this.addlist = res.data;
        this.getxuanfeilist(this.addlist[0].id);
      });
    },
    // 改变
    change(e) {
      console.log(this.addlist[e], e, "e");
      this.getxuanfeilist(this.addlist[e].id);
    },
    getxuanfeilist(id) {
      this.$http({
        method: "get",
        url: "xuanfeilist",
        data: { id: id },
      }).then((res) => {
        this.datalist = res.data;
      });
    },
  },
  created() {
    // this.getAddress();
    this.list = window.comments;
  },
};
</script>
<style lang="less" scoped>

.page {
  position: absolute !important;
  top: 0;
  left: 0;
  right: 0;
  background-color: #f2f2f5;
}

.convention-hall {
  // display: flex;
  // flex-direction: column;
  //   bottom: 20px;
  // background: #f2f2f5;
  // padding-bottom:100px;

  font-family: YuGothic, 'Yu Gothic', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', sans-serif;
  font-size: 1.5rem;
  line-height: 1.6;
  color: #111;
  background: #f3f3f3;
  font-size: 62.5%;
  padding-bottom: 40px;
}
p{
  font-family: YuGothic, 'Yu Gothic', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', sans-serif !important;
}

.wrap {
  margin: 0 15px 80px;
}

h2 {
  text-align: center;
  font-family: 'ヒラギノ角ゴ StdN', 'Hiragino Kaku Gothic StdN', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', YuGothic, 'Yu Gothic', sans-serif;
  font-weight: bold;
  font-size: 2.2rem;
  margin: 0 0 40px;
}

h2.h2-4 {
  font-size: 2rem;
  line-height: 1.3;
  border-bottom: 12px solid #d0b67d;
  padding: 10px 0 10px;

  // font-size: 62.5%;
  span {
    font-size: 1.875rem;
    color: #d0b67d;

  }
}
 section {
    display: block;
}
.story {
  display: grid;
  grid-template-columns: 20% 70%;
  grid-gap: 20px;
  // background-color: orange;
}

.mb30 {
  margin: 0 0 30px 0;
}

.story-header {
  padding: 0 0.7rem;
  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }
}
.story-footer{
  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }
}

.box {
  // margin: 0 0 10px;
  padding-bottom:1rem;
}

.text-center {
  color: #EE822F;
  font-size: 36px;
  text-shadow: 1px 1px 0px #FECC9F, -1px -1px 0px #FECC9F, 1px -1px 0px #FECC9F, -1px 1px 0px #FECC9F;
}
</style>
