<template>
    <div class="bg-container page">
        <!-- <div class="bg-img"></div> -->
        <div class="video-background">
            <!-- 视频播放器 -->
            <video
            ref="videoPlayer"
            autoplay
            muted
            loop
            playsinline
            @ended="onVideoEnded"
            :src="currentVideo"
            class="background-video"
            ></video>
        </div>
        <div class="bg-wrapper">
            <div class="login">
                <van-nav-bar class="nav-bar" :border="false">
                    <template #left>
                        <!-- <van-icon
                            name="arrow-left"
                            color="#fff"
                            @click="navigateToHome"
                        /> -->
                    </template>
                            <!-- <template #right>
                                <div class="language-selector">
                                    <select
                                        v-model="selectedLanguage"
                                        @change="onLanguageChange"
                                    >
                                        <option
                                            v-for="language in languages"
                                            :key="language.value"
                                            :value="language.value"
                                        >
                                            {{ language.text }}
                                        </option>
                                    </select>
                                </div>
                            </template> -->
                </van-nav-bar>
                <div class="wrapper">
                    <div class="logo-container">
                        <!-- <div class="logo-wrapper">
                            <img
                                v-if="this.$store.getters.getBaseInfo.ico"
                                class="logo-img"
                                :src="
                                    this.$store.getters.getBaseInfo.ico !==
                                    undefined
                                        ? this.$store.getters.getBaseInfo.ico
                                        : '/img/null.png'
                                "
                            />
                        </div> -->
                    </div>
                    <div class="title">{{ $t('login.login') }}</div>
                    <div class="loginForm">
                        <van-field
                            v-model="username"
                            clearable
                            input-align="left"
                            class="input"
                            :placeholder="$t('login.inp_username')"
                        />
                        <van-field
                            v-model="password"
                            :type="passwordType"
                            input-align="left"
                            class="input"
                            :placeholder="$t('login.inp_pwd')"
                        >
                            <template slot="right-icon">
                                <van-icon
                                    :name="
                                        passwordType === 'password'
                                            ? 'closed-eye'
                                            : 'eye-o'
                                    "
                                    @click="switchPasswordType"
                                />
                            </template>
                        </van-field>
                        <div class="reset-text" @click="toServer()">
                            <span>{{ $t('login.forget_pwd') }}</span>
                        </div>
                        <van-button
                            class="login-btn"
                            type="primary"
                            size="normal"
                            @click="doLogin()"
                            >{{ $t('login.login') }}</van-button>
                        <van-button type="primary"
                        size="normal" @click="toRegister()" class="register-text">
                            {{ $t('login.to_reg') }}
                        </van-button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { languageList } from '@/lang';
import emitter from '@/utils/emitter'
export default {
    model: {
        prop: 'inputValue',
        event: 'input'
    },
    props: {
        /**
         * 当前输入的值
         */
        inputValue: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            username: '',
            password: this.inputValue,
            passwordType: 'password',
            selectedLanguage: '', // 默认选中的语言
            languages: {},
            videos: [
            '/img/login/video1.mp4',
            '/img/login/video2.mp4',
            '/img/login/video3.mp4',
            '/img/login/video4.mp4'],
            currentIndex: 3,
        }
    },
    computed: {
    // 动态获取当前视频
    currentVideo() {
        console.log('index',this.currentIndex)
      return this.videos[this.currentIndex];
    }
  },
    methods: {
        onVideoEnded() {
            // this.currentIndex = (this.currentIndex + 1) % this.videos.length;
            // this.$refs.videoPlayer.load();
            // // 监听 canplay 事件，确保视频已经可以播放
            // this.$refs.videoPlayer.addEventListener('canplay', () => {
            //     this.$refs.videoPlayer.play().catch(error => {
            //         console.error('视频播放失败:', error);
            //     });
            // }, { once: true });  // 只监听一次

        },
        onLanguageChange() {
            this.$i18n.locale = this.selectedLanguage
            localStorage.setItem('Lang', this.selectedLanguage)
            window.location.reload()
        },
        navigateToHome() {
            this.$router.push('Home')
        },
        switchPasswordType() {
            this.passwordType =
                this.passwordType === 'password' ? 'text' : 'password'
        },
        toServer() {
            this.$toast(this.$t('concubine.Contactanadvisor'))
        },
        back() {
            return window.history.back()
        },
        toRegister() {
            this.$router.push('/Register')
        },
        doLogin() {
            if (
                this.username === '' ||
                this.username === null ||
                this.username === undefined
            ) {
                this.$toast(this.$t('login.inp_username') + '！')
                return false
            }
            if (
                this.password === '' ||
                this.password === null ||
                this.password === undefined
            ) {
                this.$toast(this.$t('login.inp_pwd') + '！')
                return false
            }
            console.log(this.username,this.password)
            this.$http({
                method: 'get',
                data: { username: this.username, password: this.password },
                url: 'member_login'
            }).then((res) => {
                if (res.code === 200) {
                    this.$toast.success(res.msg)
                    localStorage.setItem('token', res.data)
                    emitter.emit('token-update');
                    this.$router.push('Mine')
                } else {
                    this.$toast(res.msg)
                }
            })
        },
        getLang() {
            this.$http({
                method: 'get',
                url: 'sys_get_lang'
            }).then((res) => {
                if (res.code === 200) {
                    this.languages = res.data
                    //  console.log(this.languages)
                } else if (res.code === 401) {
                    this.$toast(res.msg)
                }
            })
        }
    },
    created() {
        // if (localStorage.getItem('token')) {
        //     return window.history.back()
        //  }
        // this.getLang()
        // this.languages =  languageList;
        this.selectedLanguage = this.$i18n.locale
    },
    mounted(){
        this.$refs.videoPlayer.play();
    }
}
</script>

<style lang="less" scoped>
@import '../../assets/css/base.css';

.video-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1; /* 确保背景视频在最底层 */
}

.background-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}


.login {
    height: 100%;
}
.bg-container .bg-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent !important
}
.bg-container .bg-wrapper .login .nav-bar {
    background: 0 0;
   
}
.bg-img{
    width: 100%;
    min-height: 100vh;
    background: url(/img/login/login-bg.png) no-repeat;
    background-size: 100% 100%;
    position: relative;
}

.login .wrapper {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}
.logo-container {
    margin: 0 auto;
    width: 45%;
}
.logo-container .logo-wrapper {
    position: relative;
    padding-bottom: 62.5%;
}
.logo-container .logo-wrapper .logo-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -o-object-fit: contain;
    object-fit: contain;
}
.login .wrapper .title {
    line-height: 100px;
    text-align: center;
    font-size: 49px;
    font-weight: 700;
    color: #fff;
    letter-spacing: 5px;
}
.login .wrapper .loginForm {
    padding: 60px 5%;
}
.login .wrapper .loginForm .input {
    // padding: 10px 20px;
    padding: 40px 40px;
    margin-top: 60px;
    border-radius: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 30px;
    color: #000;
}
::v-deep .van-field__right-icon .van-icon {
    font-size: 50px;
}
::v-deep .van-icon {
    font-size: 50px;
}
.login .wrapper .loginForm .reset-text {
    margin: 30px 25px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 24px;
}
.login .wrapper .loginForm .reset-text span {
    color: #fff;
    font-weight: 500;
}
.login .wrapper .loginForm .register-text {
    // margin: 10px 0;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // font-size: 24px;
    margin-top: 40px;
    width: 100%;
    height: 110px;
    border-radius: 50px;
    color: #fff;
    background: @primary-bg;
    font-size: 30px;
    font-weight: bolder;
    border: none;
}
.login .wrapper .loginForm .register-text span {
    color: #fff;
    font-weight: 400;
}

.login .wrapper .loginForm .login-btn {
    margin-top: 40px;
    width: 100%;
    height: 110px;
    border-radius: 50px;
    color: #fff;
    // background-color: #7e5678;
    background: @primary-bg;
    font-size: 30px;
    font-weight: bolder;
    border: none;
}
.language-selector {
    font-family: Arial, sans-serif;
    position: fixed; /* 或者根据需要调整位置 */
    top: 10px;
    right: 10px;
    z-index: 1000;
}

.language-selector select {
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

.language-selector select:hover {
    border-color: #888;
}

.language-selector select:focus {
    outline: none;
    border-color: #555;
}

.language-selector option {
    padding: 5px 10px;
}
</style>
