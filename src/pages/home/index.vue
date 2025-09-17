<template>
  <div class="home-container">
    <!-- 顶部导航 -->
    <div class="van-nav-bar__content" style="background-color: #000; height: 50px;">
      <div class="van-nav-bar__title van-ellipsis">
        <div class="menu-item-icon van-image" style="height: 40px; margin: 10px 0 0;">
          <img src="https://admin.xianyuxx.motorcycles/upload/80dc096a3a8977cd/0cf63ef072b934bc.png"
            class="van-image__img" />
        </div>
      </div>
      <div class="van-nav-bar__right">
        <i class="van-icon van-icon-chat-o" style="color:#fff; font-size:24px;"></i>
      </div>
    </div>

    <!-- 轮播图 -->
    <div class="banner">
      <van-swipe :autoplay="3000" indicator-color="white" style="height: 200px;">
        <van-swipe-item v-for="(item, index) in banners" :key="index">
          <van-image :src="item.imgUrl" width="100%" height="200px" fit="cover" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 公告栏滚动 -->
    <div class="notice-bar">
      <van-notice-bar scrollable speed="50" left-icon="volume-o" :text="currentNotice" color="#000" background="#fff"
        class="notice-swipe" />
      <div class="linear-gradient"></div>
    </div>

    <!-- 中部图片 -->
    <div data-v-01dafdc2="" style="display: flex; width: 100%; overflow-y: auto; flex-wrap: nowrap;">
      <div data-v-01dafdc2="" class="gdgride" style="margin-right: 5px;">
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/0f485c7eea7832fc/98efdaf7aa23d8b9.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Geheim</div>
        </div>
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/bbf954f16099e9c4/7b00b149fa4d94c6.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Geheim</div>
        </div>
      </div>
      <div data-v-01dafdc2="" class="gdgride" style="margin-right: 5px;">
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/113f54be00babfae/581e3b40356f833b.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Geheimhaltung</div>
        </div>
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/a43c5d319ba2e1c7/bc9a259b81707d0a.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Anneliese</div>
        </div>
      </div>
      <div data-v-01dafdc2="" class="gdgride" style="margin-right: 5px;">
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/b77acbf71bc05884/9e689c3df78e47d0.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Clara</div>
        </div>
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/1464286b8224e9cc/47e133b2c0e7cb3d.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Emilia</div>
        </div>
      </div>
      <div data-v-01dafdc2="" class="gdgride" style="margin-right: 5px;">
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/bc2d49f5cac5cb9d/040127257cc1739d.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Greta</div>
        </div>
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/5b789cbc5e770ee3/e46b91e57db20c7f.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Kuschel</div>
        </div>
      </div>
      <div data-v-01dafdc2="" class="gdgride" style="margin-right: 5px;">
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/07190af3a3c5d0ec/f265cd09725c0733.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Alina</div>
        </div>
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/1464286b8224e9cc/47e133b2c0e7cb3d.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Emilia</div>
        </div>
      </div>
      <div data-v-01dafdc2="" class="gdgride" style="margin-right: 5px;">
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/91bccb9999f5442c/ce3c5a7782a659f9.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Freya</div>
        </div>
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/77c0b5850c8bcdc1/59ada6aedef792be.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Freya</div>
        </div>
      </div>
      <div data-v-01dafdc2="" class="gdgride" style="margin-right: 5px;">
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/bc2d49f5cac5cb9d/040127257cc1739d.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Greta</div>
        </div>
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/b129fac7f4340211/dee6905cfc2bef49.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Ilse</div>
        </div>
      </div>
      <div data-v-01dafdc2="" class="gdgride" style="margin-right: 5px;">
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/56f6ba373695dbc9/ca2ac94268bb9f71.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Johanna</div>
        </div>
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/8394e10da13b4d57/da1ff0d0430103b7.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Katrin</div>
        </div>
      </div>
      <div data-v-01dafdc2="" class="gdgride" style="margin-right: 5px;">
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/c069f26a8786bdf7/63bb5786803865cc.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Leona</div>
        </div>
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/51399d88d3119605/632aa2df08a8615c.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Lotte</div>
        </div>
      </div>
      <div data-v-01dafdc2="" class="gdgride" style="margin-right: 5px;">
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/412c07aad6fde54c/2992b21458adf556.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Maja</div>
        </div>
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/97bb08fe751674e4/adc3bf204f798662.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Pauline</div>
        </div>
      </div>
      <div data-v-01dafdc2="" class="gdgride" style="margin-right: 5px;">
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/54eac300b1a521e7/ba7fcaa554991a43.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Renate</div>
        </div>
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/6335dd7a32448af3/f3caacbe259a309a.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Rosalie</div>
        </div>
      </div>
      <div data-v-01dafdc2="" class="gdgride" style="margin-right: 5px;">
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/a8de9727e433479d/bdab976e173d9804.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Geheim</div>
        </div>
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/a8893b1fa3523e3a/28504deb5da6a0fb.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Sophia</div>
        </div>
      </div>
      <div data-v-01dafdc2="" class="gdgride" style="margin-right: 5px;">
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/2460174bcb43c6d3/6679bc22f0cacecd.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Stefanie</div>
        </div>
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/7372670d41451d00/4c55ca1a88a6c6bb.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Valeria</div>
        </div>
      </div>
      <div data-v-01dafdc2="" class="gdgride" style="margin-right: 5px;">
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/bac7befca0049212/51a664e2155302dc.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Yasmin</div>
        </div>
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/779c77b1124010e2/40b2f830e6d7f107.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Evelyn</div>
        </div>
      </div>
      <div data-v-01dafdc2="" class="gdgride" style="margin-right: 5px;">
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/98307e752e0ee3ff/89a8f1b73b3d771a.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Helena</div>
        </div>
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/fd9eda9d8575f445/48a3cc2b7ebfc282.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Susanne</div>
        </div>
      </div>
      <div data-v-01dafdc2="" class="gdgride" style="margin-right: 5px;">
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/be0913bd60961e78/c808c05cce609c12.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Geheim</div>
        </div>
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/3abd457a8d0267dd/9746ddc340520741.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Geheim</div>
        </div>
      </div>
      <div data-v-01dafdc2="" class="gdgride" style="margin-right: 5px;">
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/cb685582154dcb00/9ecf271bb1921730.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Geheim</div>
        </div>
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/5e6f7cb4665a5f64/e6c4769db7bf54f1.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Geheim</div>
        </div>
      </div>
      <div data-v-01dafdc2="" class="gdgride" style="margin-right: 5px;">
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/665cb538391d38ef/39a118b35a82d834.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Geheim</div>
        </div>
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/7ac4ca53254bd306/7c5daf10624c8631.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Geheim</div>
        </div>
      </div>
      <div data-v-01dafdc2="" class="gdgride" style="margin-right: 5px;">
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/51a4631ddf457554/de25b5257a365fdd.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Geheim</div>
        </div>
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/a8de9727e433479d/bdab976e173d9804.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Geheim</div>
        </div>
      </div>
      <div data-v-01dafdc2="" class="gdgride" style="margin-right: 5px;">
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/1c742b83f731a4b4/090fc4ec27e5ecf8.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Geheim</div>
        </div>
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/9757537b29d0ea25/d626d3db1b268816.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Geheim</div>
        </div>
      </div>
      <div data-v-01dafdc2="" class="gdgride" style="margin-right: 5px;">
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/7fae9460a526a23f/505083c881c0c21f.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Geheim</div>
        </div>
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/df118f247b880cdc/a44d6ed774c17261.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Geheim</div>
        </div>
      </div>
      <div data-v-01dafdc2="" class="gdgride" style="margin-right: 5px;">
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/6f9b64291ac5c9b3/41d80f14d790f28a.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Geheim</div>
        </div>
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/28960d0e87337e4c/62693f250d50542a.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Geheim</div>
        </div>
      </div>
      <div data-v-01dafdc2="" class="gdgride" style="margin-right: 5px;">
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/dc8e7a199e38aa4e/d40fb1eb1b0b5351.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Geheim</div>
        </div>
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/a78193ed5a6bf55a/cdfe4794aab800c6.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Geheim</div>
        </div>
      </div>
      <div data-v-01dafdc2="" class="gdgride" style="margin-right: 5px;">
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/30966c540adf5548/66dc2ce3d3437289.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Geheim</div>
        </div>
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/6311394c8c61b755/dba7dfc08f3d440e.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Geheim</div>
        </div>
      </div>
      <div data-v-01dafdc2="" class="gdgride" style="margin-right: 5px;">
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/3a131f5e3e7cada5/2c49e5dfb0988d27.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Geheim</div>
        </div>
        <div data-v-01dafdc2="">
          <div data-v-01dafdc2="" class="van-image"
            style="width: 100px; height: 100px; overflow: hidden; border-radius: 8px;"><img
              src="https://admin.xianyuxx.motorcycles/upload/c9cc2f61a72716e5/54f65d57f8014f1a.jpg"
              class="van-image__img" style="object-fit: cover;"></div><span data-v-01dafdc2=""><i
              data-v-01dafdc2="">Ja</i></span>
          <div data-v-01dafdc2=""
            style="position: absolute; bottom: 10px; text-align: center; color: rgb(255, 255, 255); width: 100%; font-size: 12px;">
            Geheim</div>
        </div>
      </div>
      <div data-v-01dafdc2=""
        style="width: 23px; padding: 20px 5px 10px; height: 145px; margin-top: 30px; background: rgb(249, 249, 249); color: rgb(153, 153, 153); font-size: 12px;">
        Mehr</div>
    </div>

    <!-- 底部女孩照片 -->
    <div data-v-01dafdc2="" style="padding: 10px;">
      <div data-v-01dafdc2="" style="font-size: 16px;">Empfohlene Verbindungen</div>
      <div data-v-01dafdc2="">
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/0f485c7eea7832fc/98efdaf7aa23d8b9.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Geheim </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default"></span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              Geheimcm Brustumfang：C Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta" >Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/bbf954f16099e9c4/7b00b149fa4d94c6.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Geheim </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default"></span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              Geheimcm Brustumfang：B Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/113f54be00babfae/581e3b40356f833b.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Geheimhaltung
              </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default"></span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              Geheimhaltungcm Brustumfang：B Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/a43c5d319ba2e1c7/bc9a259b81707d0a.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Anneliese </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default">Schwimmen，lebt alleine</span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              166cm Brustumfang：58 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/b77acbf71bc05884/9e689c3df78e47d0.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Clara </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default">Bergsteigen und Skifahren.</span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              172cm Brustumfang：61 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/855fac28409f8310/3ace6b4af9a7de01.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Diana </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default">Haustiere</span><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default"> Sicherheit</span><span
                data-v-1b1d8c52="" class="van-tag van-tag--plain van-tag--large van-tag--default"> Ehrlichkeit.</span>
            </div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              168cm Brustumfang：59 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/b67f629a3b1eff6d/e6b18bb512c9be83.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Edith </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default">Lesen</span><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default"> gemeinnützige Aktivitäten</span><span
                data-v-1b1d8c52="" class="van-tag van-tag--plain van-tag--large van-tag--default"> Ölmalerei.</span>
            </div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              166cm Brustumfang：57 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/5b789cbc5e770ee3/e46b91e57db20c7f.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Kuschel </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default">Kuschel</span><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default">Liebreizend</span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              172cm Brustumfang：c65 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/07190af3a3c5d0ec/f265cd09725c0733.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Alina </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default">hjkk</span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              162cm Brustumfang：58 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/1464286b8224e9cc/47e133b2c0e7cb3d.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Emilia </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default">Ehrlichkeit</span><span
                data-v-1b1d8c52="" class="van-tag van-tag--plain van-tag--large van-tag--default"> Ablehnung von
                Gewalt</span><span data-v-1b1d8c52="" class="van-tag van-tag--plain van-tag--large van-tag--default">
                Liebe zu gutem Essen.</span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              167cm Brustumfang：57 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/91bccb9999f5442c/ce3c5a7782a659f9.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Freya </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default">Laufen</span><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default"> Schwimmen hören</span><span
                data-v-1b1d8c52="" class="van-tag van-tag--plain van-tag--large van-tag--default"> Yoga.</span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              162cm Brustumfang：58 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/77c0b5850c8bcdc1/59ada6aedef792be.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Freya </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default">Zusammen versuchen</span><span
                data-v-1b1d8c52="" class="van-tag van-tag--plain van-tag--large van-tag--default"> deutsche Schokolade
                herzustellen. ~ Zu Hause gemeinsam romantische Romane lesen.</span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              166cm Brustumfang：58 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/bc2d49f5cac5cb9d/040127257cc1739d.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Greta </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default">Knobelspiele spielen</span><span
                data-v-1b1d8c52="" class="van-tag van-tag--plain van-tag--large van-tag--default"> um einander besser
                kennenzulernen. ~ Wanderungen in den Bergen unternehmen und die gemeinsame Zeit genießen.</span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              166cm Brustumfang：58 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/b129fac7f4340211/dee6905cfc2bef49.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Ilse </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default">Schlösser oder Burgen besichtigen und von
                einer märchenhaften Liebesgeschichte träumen. ~ Gemeinsam das zukünftige Haus oder die Hochzeit
                planen.</span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              165cm Brustumfang：56 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/56f6ba373695dbc9/ca2ac94268bb9f71.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Johanna </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default">Gemeinsam den Sonnenuntergang ansehen und
                die Zeit stillstehen fühlen. ~ Den Dachboden aufräumen und Geschichten aus der Vergangenheit
                entdecken.</span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              172cm Brustumfang：59 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/8394e10da13b4d57/da1ff0d0430103b7.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Katrin </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default">Während eines Festes traditionelle
                Kleidung tragen und Fotos machen. ~ Ein Paar-Vlog drehen und das glückliche Leben teilen.</span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              170cm Brustumfang：61 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/c069f26a8786bdf7/63bb5786803865cc.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Leona </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default">Sie liebt das Designen und möchte für
                ihren Liebsten ein besonderes Andenken anfertigen. ~ Sie liebt es</span><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default"> Filme zu schauen</span><span
                data-v-1b1d8c52="" class="van-tag van-tag--plain van-tag--large van-tag--default"> und träumt
                davon</span><span data-v-1b1d8c52="" class="van-tag van-tag--plain van-tag--large van-tag--default"> mit
                ihrem Partner unzählige gemütliche Filmabende zu verbringen.</span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              171cm Brustumfang：62 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/51399d88d3119605/632aa2df08a8615c.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Lotte </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default">Gemeinsam Radiosendungen mit
                Liebesgeschichten hören. ~ Zu Hause ein romantisches Candle-Light-Dinner füreinander vorbereiten.</span>
            </div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              162cm Brustumfang：56 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/412c07aad6fde54c/2992b21458adf556.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Maja </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default">Brettspiele oder Kartenspiele
                spielen</span><span data-v-1b1d8c52="" class="van-tag van-tag--plain van-tag--large van-tag--default">
                um die Harmonie zu stärken. ~ Für einander individuelle Schmuckstücke oder kleine Gegenstände
                entwerfen.</span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              172cm Brustumfang：63 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/97bb08fe751674e4/adc3bf204f798662.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Pauline </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default">Gemeinsam Tanzen lernen</span><span
                data-v-1b1d8c52="" class="van-tag van-tag--plain van-tag--large van-tag--default"> insbesondere Walzer.
                ~ Im Schnee Schneemänner bauen und die kindliche Freude genießen.</span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              172cm Brustumfang：57 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/54eac300b1a521e7/ba7fcaa554991a43.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Renate </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default">Einen Nachmittag in einem romantischen
                Café verbringen. ~ Hand in Hand im Park spazieren gehen.</span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              175cm Brustumfang：59 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/6335dd7a32448af3/f3caacbe259a309a.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Rosalie </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default">Gemeinsam die Erwartungen an die Zukunft
                aufschreiben. ~ Zusammen Extremsportarten ausprobieren und den Herzschlag spüren.</span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              170cm Brustumfang：63 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/a8de9727e433479d/bdab976e173d9804.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Geheim </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default"></span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              Geheimcm Brustumfang：B Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/a8893b1fa3523e3a/28504deb5da6a0fb.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Sophia </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default">Briefe schreiben</span><span
                data-v-1b1d8c52="" class="van-tag van-tag--plain van-tag--large van-tag--default"> um die Gefühle
                füreinander auszudrücken. ~ Gemeinsam versuchen</span><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default"> deutsche Schokolade herzustellen.</span>
            </div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              169cm Brustumfang：59 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/2460174bcb43c6d3/6679bc22f0cacecd.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Stefanie </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default">An einem Outdoor-Camping teilnehmen und
                am Lagerfeuer seine Gedanken teilen. ~ Kurze Videos drehen</span><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default"> um die kleinen Momente der Liebe
                festzuhalten.</span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              162cm Brustumfang：58 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/7372670d41451d00/4c55ca1a88a6c6bb.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Valeria </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default">Kochen und Backen~Wandern im
                Freien</span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              166cm Brustumfang：58 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/bac7befca0049212/51a664e2155302dc.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Yasmin </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default">Klassische Musik hören~Töpfern
                lernen</span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              166cm Brustumfang：59 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/779c77b1124010e2/40b2f830e6d7f107.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Evelyn </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default">Gedichte oder Tagebücher
                schreiben~Gartenarbeit</span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              162cm Brustumfang：59 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/98307e752e0ee3ff/89a8f1b73b3d771a.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Helena </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default">Fotografie~Fremdsprachen lernen</span>
            </div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              162cm Brustumfang：57 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/fd9eda9d8575f445/48a3cc2b7ebfc282.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Susanne </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default">Weinverkostung~Yoga oder Pilates</span>
            </div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              171cm Brustumfang：59 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/be0913bd60961e78/c808c05cce609c12.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Geheim </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default"></span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              Geheimcm Brustumfang：58 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/3abd457a8d0267dd/9746ddc340520741.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Geheim </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default"></span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              Geheimcm Brustumfang：57 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/cb685582154dcb00/9ecf271bb1921730.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Geheim </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default"></span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              Geheimcm Brustumfang：60 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/5e6f7cb4665a5f64/e6c4769db7bf54f1.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Geheim </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default"></span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              Geheimcm Brustumfang：62 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/665cb538391d38ef/39a118b35a82d834.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Geheim </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default"></span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              Geheimcm Brustumfang：60 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/7ac4ca53254bd306/7c5daf10624c8631.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Geheim </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default"></span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              Geheimcm Brustumfang：57 Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/51a4631ddf457554/de25b5257a365fdd.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Geheim </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default"></span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              Geheimcm Brustumfang：A Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/a8de9727e433479d/bdab976e173d9804.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Geheim </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default"></span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              Geheimcm Brustumfang：B Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/1c742b83f731a4b4/090fc4ec27e5ecf8.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Geheim </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default"></span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              Geheimcm Brustumfang：B Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/9757537b29d0ea25/d626d3db1b268816.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Geheim </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default"></span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              Geheimcm Brustumfang：B Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/7fae9460a526a23f/505083c881c0c21f.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Geheim </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default"></span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              Geheimcm Brustumfang：C Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/df118f247b880cdc/a44d6ed774c17261.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Geheim </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default"></span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              Geheimcm Brustumfang：C Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/6f9b64291ac5c9b3/41d80f14d790f28a.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Geheim </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default"></span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              Geheimcm Brustumfang：C Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/28960d0e87337e4c/62693f250d50542a.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Geheim </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default"></span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              Geheimcm Brustumfang：B Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/dc8e7a199e38aa4e/d40fb1eb1b0b5351.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Geheim </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default"></span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              Geheimcm Brustumfang：B Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/a78193ed5a6bf55a/cdfe4794aab800c6.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Geheim </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default"></span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              Geheimcm Brustumfang：B Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/30966c540adf5548/66dc2ce3d3437289.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Geheim </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default"></span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              Geheimcm Brustumfang：C Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/6311394c8c61b755/dba7dfc08f3d440e.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Geheim </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default"></span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              Geheimcm Brustumfang：B Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/3a131f5e3e7cada5/2c49e5dfb0988d27.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Geheim </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default"></span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              Geheimcm Brustumfang：C Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div data-v-1b1d8c52="" data-v-01dafdc2="" class="horizontalItem">
          <div data-v-1b1d8c52="" class="imgBox">
            <div data-v-1b1d8c52="" class="van-image"
              style="width: 120px; height: 120px; overflow: hidden; border-radius: 8px;"><img
                src="https://admin.xianyuxx.motorcycles/upload/c9cc2f61a72716e5/54f65d57f8014f1a.jpg"
                class="van-image__img" style="object-fit: cover;"></div><span data-v-1b1d8c52=""><i
                data-v-1b1d8c52="">Wie</i></span>
          </div>
          <div data-v-1b1d8c52="" style="width: calc(100% - 140px);">
            <div data-v-1b1d8c52="" class="top">
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Zertifiziert</span>
              </div>
              <div data-v-1b1d8c52="">
                <div data-v-1b1d8c52="" class="van-image" style="width: 13px;"><img src="https://xianyuxx.motorcycles/mobile/img/vip.png"
                    class="van-image__img"></div><span data-v-1b1d8c52="">Video</span>
              </div>
              <div data-v-1b1d8c52=""
                style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> Geheim </div>
            </div>
            <div data-v-1b1d8c52="" class="tags"><span data-v-1b1d8c52=""
                class="van-tag van-tag--plain van-tag--large van-tag--default"></span></div>
            <div data-v-1b1d8c52="" style="display: flex; align-items: center;"><span data-v-1b1d8c52=""
                style="font-size: 14px; color: rgb(0, 0, 0);">Punktzahl：</span>
              <div data-v-1b1d8c52="" tabindex="0" role="radiogroup" class="van-rate">
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true"
                  class="van-rate__item"><i data-score="1"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true"
                  class="van-rate__item"><i data-score="2"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true"
                  class="van-rate__item"><i data-score="3"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true"
                  class="van-rate__item"><i data-score="4"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
                <div role="radio" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true"
                  class="van-rate__item"><i data-score="5"
                    class="van-icon van-icon-star van-rate__icon van-rate__icon--full"
                    style="color: rgb(121, 85, 72); font-size: 18px;"><!----></i></div>
              </div>
            </div>
            <div data-v-1b1d8c52="" style="color: rgb(50, 50, 51); font-size: 12px; margin: 5px 0px;"> Körpergröße:
              Geheimcm Brustumfang：B Servicestadt：Deutsch Nationale Luftfracht：Ja </div>
            <div data-v-1b1d8c52="" class="yueta">Lade sie ein</div>
          </div>
        </div>
        <div style="height:60px;"></div>
      </div>
    </div>
    <!-- 悬浮客服按钮 -->
    <!-- <div class="floating-customer-service" @click="openCustomerService">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKsAAACUCAMAAADbGilTAAABGlBMVEX///8mb7fywrLzqgD6zr/99vTyvq3zpgD87MfzqAD3w132xLL0y70ebbf5xbIUabXat7MzdLfaXTS3zOXtooxwmsv/1L/70sUAZ7aNm7vcZD7/rgBCe7inoLT2yLjGrrO1p7S1llHovrLR3/AAYbLF1ur//PVfg7acnLP99OP1uEf0sTT0riP5yKH1tEv5yqzVoS0+dKrgclDzt6Rzi7X3x2j62qD74bb4zYP636v3yHX97tL2umH3vnr2vGz6xpX3v4bn8PrY1sTUnRfaqErhsm/VtWuJkapViMKkwN7ifFvqlnzkhGfYUiG4wsHHo2KoklZReZ93goS1p3mlkGRmfpLBp4W+mUhmf4iJiXKXiGSEqtbu1M765+EguATBAAAIdklEQVR4nO3cC1fbNhQAYOykCcaRZfNIHHCc1NAkkBcQ09cSICvbKLAOWBlb2f7/35hk5+GHZMcMWe45u+f0nNbEzcfNlXwlG1ZWXiKaqye5opTzh1TsvN1/kf/+BaP5bq0Ykrrabsa0+yinBOhUe/COt88T7+hSV3uSldQ230ukT98bxYNV3konmifEQg1gu1nA7q9Ffv7zOsgAdklqJrAfl6QibOcHvtQPS1PxAONKXe3GDysP9j1HanPZYp1WAc+STVIBbhU0eVGbuSQV4GA/8LK+TZhWXAWcqPsHSdOKEsupjfmQnJqT1rhUbHP5y4DHyueCsN95Rl5zEpfRtbpEWsPfTfEjjyJ4H2uVOqPwsS4P60GcVer0KuPwUQ5LhNgLgdQZVPL50+CreMxazei0St0xkubD2OLb9K37UVYp1++51BC2+DF9a8Q0IEn9XnlGzedHPmzxJDtWKddd5NSNsbe0i2sZsUpStz8eVPzUfOXM05JnwioVi7n+2PvhL7C9xTWOs1Vy9jI6o7NBngB1onw6qwN+Vszsdvr9MXbSoG5q+66Wn7UzGp+fDcrIGQV1sOVzp2o5WdGVqZynfuzhGIw45rVTXtrp5vaUi3Xy46fDw4uE1vxPh4eHP+9OUpXubl0aR0dHd6onZxVCzQYOln5BJx1pl5/TtBoQ4BDq88QWrq+Or66Hpo8qb94cX90sDpZs5zy49yY96hthGjOreb29vr2N/tx4sZvH6+v44NVwZm0B5zS4lZ51A0ytDddauV6fxq/XC+pwe3bwuOAesThaQWNWAZuzGC6s8jB4UDU4Wmu+QRQaXcGDXK1t/1iKi7rG0VotJbQK/Kx2Qiv4fqw1ntZWQivkaDWsRNY2V6saD/REladVS2a1OVoFUE9kNTiOLXThStLBlmYtT5rWiTb7MO0E1nJdn1r3NtKzrmwIEEIdhZAgreU2tgJ05mWKVJTZN18eX+PoJbD+dnsHwP3vG7upUlfw2nAHx+nyy9hernsHwS2HO8jTvQz/Utb0ySt5bxtWGecujoDwmuMe0bmHZ157FldmYfPK03nny33pKwRHh/ysUt+bWLRsudkcFmQZrQlujtc9C5p85TyXQyXwIPHcezvzfu5DvEQ8vrq6OkaLwhtfuXZ2vuqC/prnPqHU8ZXoECGnce37wrn0iObjhx2ue5rS2DegCteO9vjGW6v5/KD7VQPg6IKztTvwz1sFtH4dDs1K2RP5P+4FAMAt771i//BaRKM6D9sQoEvlva+dI14QGvoiIEDWu8edDFh9k+wsajqYB9Leffu0k4H7Bahke2GsahuzuPvzr8dONu5t4Jta5+HEzsZVr4P6hgzdM5KIZeDOVv5nIvhb0WRAWX6XzvwvzITVIu5tmeKZlDnryBLFkNYURbGXPespsga0JqaKg+zVwJnohml6cuocyGXMKnUVcRGmaXr+NcraPDAWqdHzPSTL3Sr1B3Sr6HuYiLdV6vQiqKI8ymXlWQcpF5lVjPU8RcLPiq/0B2dyNBXX7Ai/lGNP2D18vL2/a5ixUhzW3cO3x4tON33rZPfLt/uHI9SY6nZ8VlEoddxya6g7/CPV+9yTja1LA2+iuVub1jJYxdknBgCdoxlbn1Pa0po8AbQmme3ACoJeU+KpsjV/PV4jQv0yDe2GoS+c7k0DMT6xSs1/kgDhE/NS2BACb4qiHptYeXaH26tlvbm9AcJUYFux1kb4NEFni50YhPdEiY0rAkJacWaZPkvyBElUGDdtKXXitwgMhiU7IRSrg42uWFm+pJzHMLFPe8S3FEArOq01nXweNNhZL4klgLGNiCqQVWK14tDZFQHtLVFiIy5ecpt6HrsbXRPKR4mxbapVVjWqVWdWsFFWTaVhlRatcpD1iZmVMrRwwJZCxip1OlXYY2Zt2pD6aQqgRrTKKvny4Z5j/M3K+qrQpkyw+H010tULNQL0tIKWmmdnFWuEfmCeJMJcoFTpWdVtSxEZWlETQn1zdKkNYpUGPavQxr3kK3ZWNFTo9afbgU5WblClQGg7L/6HoRVjqbkKzLIR4wqAmvt9sRpcjhVhNeqlFnjXM4pFp8LatF4qTK3IYNPLYDFzoaxSvydt3piVGBXs1IomIpt2BQPCDCvTCxsuqKLJ2BqNbTsXMIVeq9DwtruMBtfcioZFm1YFeNqUZblBbVhgy9s6FBgNroUVYYOLaE9qbVWmX+Cgv31MwSrKSpU+dbVsKhUY/oaswGgi8FpxzdIzm6BrYDS4fFY00DWaiB6wGlxFFtKwirId0ZlSQgv1NwU2E0HAqtTp6wRKgFZocc5ocAXzKlOLgLpubYQ3Eti0sAGrqFCmewC0BJseZjpW2rq/rdbJXwKkFSSTwRWykgcXqMqyopLqAwhWmMpmIljWitoXWSTVByDt17OZCBJYyfVBtLJptxNZSV8DAqleS9ytbcLkS7GyKNiQldy+uFbShYJsZdLCJrHK1qKBnT9SBiHJKqdjDeQOP+OOwlnGyG38V/zDnppmGEarZdvVdtsipJXJ4IqzAs12nnR02z6rjXTVWqNRr6uqaqFpDE27JCqTjiDGitpo/9ct3DPMg8R0g8XgirPG35Mjh5yG1TcvAc16HpXJVTbaSm5MlrIymAhirLD9zBpgsT6My2u46V8yGLSwMdb/UAQpWAP3A+EyTz0QrS8/uOKswH4elcWkFWs1nlcEqYytRrAfCNyWlUNBpLLYeom1Qk8RIJdlWWogSoRIZw0TyuuiCBSrZrdaLcPQvCHsvgoHC2q8FRWBOxMoitrCz2IFYy+1HzVcwgobFo66Td4q1DNkRUsAw7ZbBqDsymUpr05qIX37lac16aamntovofmurVGPMRAjvV/uE7bSb7j/b00Q35O1FLxhkLr1X0fZGZphwQT7AAAAAElFTkSuQmCC" alt="客服" />
    </div> -->
  </div>
  
</template>

<script>
import { Swipe, SwipeItem, Image } from 'vant';
import TradeList from '@/pages/contract/TradeList.vue';
import * as echarts from 'echarts';

let currentNumber = 2000;

export default {
  data() {
    return {
      banners: [
        { imgUrl: "https://admin.xianyuxx.motorcycles/upload/e134baf684543f36/ca40561eb9109659.jpg" },
        { imgUrl: "https://admin.xianyuxx.motorcycles/upload/942fd816c80ca783/f1d4aa380230ca67.jpg" }
      ],
      notices: [
        "Systeminformationen: Danke famp;uuml;r Ihren Beitritt. Schnallen Sie sich an, denn wir sind gleich dabei, in den Orgasmusmodus zuwechseln. Die Terminzeit ist tamp;auml;glich [11:00-23:00]. ",
        "Sollten Sie nach der vereinbarten Zeitanreisen, melden Sie sich bitte am namp;auml;chsten Tag an der Rezeption. Das Personal ist bereit! Verbindungsschritt: Kontaktieren Sie die Rezeption, wamp;auml;hlen Sie eine Frau aus undgenieamp;szlig;en Sie nach Abschluss der Aktivitamp;auml;t ein kostenloses Date in derselben Stadt",
      ],
      currentIndex: 0,
      currentNotice: "",

      male: [
        { value: 13, name: "Firmenmitarbeiter", itemStyle: { color: '#0a0a64' } },
        { value: 3, name: "Beamte", itemStyle: { color: '#3b3b83' } },
        { value: 36, name: "Unternehmensleitung", itemStyle: { color: '#6c6ca2' } },
        { value: 14, name: "Firmenoffizier", itemStyle: { color: '#b5b5d0' } },
        { value: 21, name: "Eigentümer", itemStyle: { color: '#dcdcdc' } },
        { value: 6, name: "Arzt", itemStyle: { color: '#a0a0aa' } },
        { value: 1, name: "Rechtsanwalt", itemStyle: { color: '#6e6e78' } },
        { value: 6, name: "Andere", itemStyle: { color: '#32323c' } }
      ],
      male1: [
        { value: 9, name: "20-29 Jahre", itemStyle: { color: '#0a0a64' } },
        { value: 31, name: "30-39 Jahre", itemStyle: { color: '#3b3b83' } },
        { value: 37, name: "40-49 Jahre", itemStyle: { color: '#6c6ca2' } },
        { value: 17, name: "50-59 Jahre", itemStyle: { color: '#b5b5d0' } },
        { value: 5, name: "60-69 Jahre", itemStyle: { color: '#a0a0aa' } },
        { value: 1, name: "≥70 Jahre", itemStyle: { color: '#a0a0aa' } }
      ]
    };
  },
  mounted() {
    this.currentNotice = this.notices[0];
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.notices.length;
      this.currentNotice = this.notices[this.currentIndex];
    }, 5000);

    this.$nextTick(() => {
      this.initChart();
    });
  },
};
</script>

<style lang="less" scoped>
.home-container {
  position: relative;
  min-height: 100vh;
  background-color: #fff;
  font-family: Yu Gothic, Meiryo, sans-serif;

  :deep(.van-nav-bar__title) {
    max-width: 90%;
  }
}

.floating-customer-service {
  position: fixed;        // 固定在页面
  bottom: 150px;           // 距离底部 150px
  right: 20px;            // 距离右边 20px
  width: 60px;            // 按钮大小
  height: 60px;
  z-index: 999;           // 保证在最上层
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;   // 圆形按钮
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  }

  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1); // 鼠标悬浮放大效果
  }
}
.horizontalItem[data-v-1b1d8c52] {
    display: flex;
    border-bottom: 1px solid #c8c9cc;
    padding: 20px 0 4vw
}


.horizontalItem .imgBox[data-v-1b1d8c52] {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    margin-right: 20px
}

.horizontalItem .imgBox>span[data-v-1b1d8c52] {
    position: absolute;
    z-index: 9;
    background-color: #000;
    color: #fff;
    transform: rotate(45deg);
    width: 20vw;
    height: 20vw;
    top: -11vw;
    right: -11vw
}

.horizontalItem .imgBox>span>i[data-v-1b1d8c52] {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 700;
    font-size: 4vw
}

.horizontalItem .top[data-v-1b1d8c52] {
    display: flex;
    flex-wrap: wrap
}

.horizontalItem .top>div[data-v-1b1d8c52]:first-child,.horizontalItem .top>div[data-v-1b1d8c52]:nth-child(2) {
    background: linear-gradient(90deg,#000,#323233);
    color: #e8b891;
    font-weight: 600;
    font-size: 3vw;
    padding: 3px;
    margin-right: 10px
}

.horizontalItem .top>div[data-v-1b1d8c52]:last-child {
    font-size: 4vw
}

.horizontalItem .tags[data-v-1b1d8c52] {
    display: flex;
    margin: 5px 0 5px;
    flex-wrap: wrap
}

.horizontalItem .tags>.van-tag[data-v-1b1d8c52] {
    padding: 5px;
    font-size: 3vw;
    margin: 0 5px 5px 0;
    border-radius: 8px;
    color: #000;
    font-weight: 700
}

.horizontalItem .yueta[data-v-1b1d8c52] {
    background: linear-gradient(90deg,#323233,#000);
    color: #fff;
    border-radius: 8px;
    padding: 10px 0;
    text-align: center;
    font-size: 3vw
}

// .horizontalItem[data-v-1b1d8c52] {
//     display: flex;
//     border-bottom: 1px solid #c8c9cc;
//     padding: 20px 0 4vw
// }
/* 横向滚动容器 */
.scroll-container {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;            /* 横向滚动 */
  overflow-y: hidden;          /* 禁止纵向滚动 */
  -webkit-overflow-scrolling: touch; /* iOS 平滑滚动 */
  overscroll-behavior-x: contain;    /* 阻止弹性回弹 */
  padding: 10px;               /* 左右内边距，防止贴边 */
  gap: 10px;                    /* 元素间距 */
  scrollbar-width: none;        /* Firefox 隐藏滚动条 */
  &::-webkit-scrollbar {
    display: none;              /* Chrome/移动端隐藏滚动条 */
  }
}

/* 图片格子 */
.gdgride {
  flex: 0 0 auto;              /* 固定宽度，不压缩 */
  width: 200px;                 
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

/* 图片内部样式 */
.gdgride img {
  width: 100%;                  /* 占满容器宽度 */
  height: auto;                 /* 高度自适应，保持比例 */
  max-height: 100%;            /* 限制最大高度，防止太高 */
  object-fit: cover;            /* 保持内容覆盖容器 */
  display: block;
  border-radius: 12px;          /* 圆角更柔和 */
}

/* 图片底部文字 */
.gdgride span {
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: #fff;
}

/* “Mehr” 按钮样式 */
.mehr {
  flex: 0 0 auto;
  width: 60px;
  height: 145px;
  padding: 20px 5px 10px;
  background: #f9f9f9;
  color: #999;
  font-size: 12px;
  text-align: center;
  line-height: 1.2;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 提示条样式 */
.notice-bar {
  position: relative;
  padding: 30px;
  background: #f3f3f5;
}

.notice-swipe {
  background: #fff;
  color: #000;
  font-weight: 500;
}

/* 控制文字部分 */
:deep(.van-notice-bar__wrap) {
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 28px;
  line-height: 26px;
}

/* 左侧图标大小 */
:deep(.van-notice-bar__left-icon .van-icon) {
  font-size: 32px;
  color: #000;
  margin-right: 16px;
}

:deep(.van-notice-bar__left-icon img) {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}

/* 渐变遮罩，可选 */
.linear-gradient {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: calc(100% - 20px);
  background: linear-gradient(to right, rgba(255, 255, 255, 0), #fff);
}

.banner {
  margin-top: 0px;
}
</style>

