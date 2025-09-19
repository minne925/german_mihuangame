<template>
    <div class="bg-container page">
        <!-- <div class="bg-img"></div> -->
        <div class="video-background">
            <!-- 视频播放器 -->
            <video ref="videoPlayer" autoplay muted loop playsinline @ended="onVideoEnded" :src="currentVideo"
                class="background-video"></video>
        </div>
        <div class="bg-wrapper">
            <div class="login">
                <van-nav-bar class="nav-bar" :border="false">
                    <template #left>
                    </template>
                </van-nav-bar>
                <div class="wrapper">
                    <div class="logo-container">
                    </div>
                    <div class="title">{{ $t('login.login') }}</div>
                    <div class="loginForm">
                        <van-field v-model="username" clearable input-align="left" class="input"
                            :placeholder="$t('login.inp_username')" />
                        <van-field v-model="password" :type="passwordType" input-align="left" class="input"
                            :placeholder="$t('login.inp_pwd')">
                            <template slot="right-icon">
                                <van-icon :name="passwordType === 'password'
                                    ? 'closed-eye'
                                    : 'eye-o'
                                    " @click="switchPasswordType" />
                            </template>
                        </van-field>
                        <div class="reset-text" @click="toServer()">
                            <span>{{ $t('login.forget_pwd') }}</span>
                        </div>
                        <van-button class="login-btn" type="primary" size="normal" @click="doLogin()">{{
                            $t('login.login')
                            }}</van-button>
                        <van-button type="primary" size="normal" @click="toRegister()" class="register-text">
                            {{ $t('login.to_reg') }}
                        </van-button>
                    </div>
                </div>
                <div class="multibrand-footer__legal-column footer-column">
                    <ul>
                        <li>
                            <a href="/uk/compliance/terms-and-conditions" data-link-event="cta:Terms &amp; conditions"
                                aria-label="Review the terms &amp; conditions about using our UK website, products and/or services."
                                target="_self" class="cta link skip-animation"> <span class="label"><span>Terms &amp;
                                        conditions</span></span>
                                <span class="short label">
                                    <span>Terms &amp; conditions</span>
                                </span>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.blackrock.com/corporate/compliance/privacy-notice" rel="noopener"
                                data-link-event="cta:Privacy Notice"
                                aria-label="Review our Privacy notice about protecting your personal and financial information when visiting BlackRock websites."
                                target="_blank" class="cta link skip-animation"> <span class="label"><span>Privacy
                                        Notice</span></span>
                                <span class="short label">
                                    <span>Privacy Notice</span>
                                </span>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.blackrock.com/corporate/compliance/privacy-notice#cookie-notice"
                                rel="noopener" data-link-event="cta:Cookie Notice"
                                aria-label="Read BlackRock's cookie notice when visiting BlackRock websites."
                                target="_blank" class="cta link skip-animation"> <span class="label"><span>Cookie
                                        Notice</span></span>
                                <span class="short label">
                                    <span>Cookie Notice</span>
                                </span>
                            </a>
                        </li>

                    </ul>
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
            console.log('index', this.currentIndex)
            return this.videos[this.currentIndex];
        }
    },
    methods: {
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
            console.log(this.username, this.password)
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
        this.selectedLanguage = this.$i18n.locale
    },
    mounted() {
        this.$refs.videoPlayer.play();
    }
}
</script>

<style lang="less" scoped>
@import '../../assets/css/base.css';

// .bg-wrapper {
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh; /* 占满屏幕高度 */
// }

.login {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.wrapper {
  flex: 0.6; /* 中间内容撑开 */
}

/* Footer 固定在底部 */
.multibrand-footer__legal-column {
  margin-top: auto;
  padding: 20px;
//   background: rgba(190, 38, 38, 0.6); /* 可选：加背景区分 */
  color: #f10909; /* 字体颜色 */
}


.video-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
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
    height: 100vh;
    /* 占满整个视口 */
    display: flex;
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
    /* 水平居中 */
    background: transparent;
    /* 保持背景视频 */
}

.bg-container .bg-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent !important;
}

.bg-container .bg-wrapper .login .nav-bar {
    background: transparent;
}

.bg-img {
    width: 100%;
    min-height: 100vh;
    background: url(/img/login/login-bg.png) no-repeat;
    background-size: cover;
    position: relative;
}

/* 统一的内容容器：网页端居中显示，大小和安卓端一致 */
.login .wrapper {
    width: 90%;
    max-width: 420px;
    /* 限制最大宽度，保证两边留白 */
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    padding: 1.5rem 1rem;
    background: rgba(0, 0, 0, 0.4);
    /* 半透明背景提升对比度 */
    border-radius: 12px;
    /* 圆角 */
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    /* 阴影 */
}

.logo-container {
    margin: 0 auto;
    max-width: 300px;
    width: 60%;
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
    object-fit: contain;
}

.login .wrapper .title {
    line-height: 2.2rem;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: 2px;
    margin-top: 1rem;
}

.login .wrapper .loginForm {
    padding: 1.5rem 0;
}

.login .wrapper .loginForm .input {
    padding: 0.8rem 1rem;
    margin-top: 1rem;
    border-radius: 50px;
    text-align: center;
    font-size: 1rem;
    color: #000;
}

::v-deep .van-field__right-icon .van-icon,
::v-deep .van-icon {
    font-size: 1.2rem;
}

.login .wrapper .loginForm .reset-text {
    margin: 0.8rem 0.5rem;
    display: flex;
    justify-content: flex-end;
    font-size: 0.85rem;
}

.login .wrapper .loginForm .reset-text span {
    color: #fff;
    font-weight: 500;
}

.login .wrapper .loginForm .register-text,
.login .wrapper .loginForm .login-btn {
    margin-top: 1rem;
    width: 100%;
    height: 2.8rem;
    border-radius: 50px;
    color: #fff;
    background: @primary-bg;
    font-size: 1rem;
    font-weight: bold;
    border: none;
}

.language-selector {
    font-family: Arial, sans-serif;
    position: fixed;
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

/* 移动端和平板统一：保持相同布局，不再区分 */
@media (max-width: 992px) {
    .login .wrapper {
        width: 90%;
        max-width: 420px;
        padding: 1rem;
    }
}
</style>
