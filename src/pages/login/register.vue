<template>
    <div class="bg-container page">
        <div class="bg-img"></div>
        <div class="bg-wrapper">
            <div class="register">
                <van-nav-bar class="nav-bar" :border="false">
                    <template #left>
                        <van-icon name="arrow-left" color="#fff" @click="back()" />
                    </template>
                </van-nav-bar>
                <div class="wrapper">
                    <div class="title">{{ $t('register.title') }}</div>
                    <div class="loginForm">
                        <van-field v-model="username" clearable input-align="left" class="input"
                            :placeholder="$t('register.inp_user')" />
                        <van-field v-model="password" :type="passwordType" input-align="left" class="input"
                            :placeholder="$t('register.inp_pass')">
                            <template slot="right-icon">
                                <van-icon :name="passwordType === 'password'
                                        ? 'closed-eye'
                                        : 'eye-o'
                                    " @click="switchPasswordType" />
                            </template>
                        </van-field>
                        <van-field v-model="code" clearable input-align="left" class="input"
                            :placeholder="$t('register.inp_code')" />
                        <van-button class="login-btn" type="primary" size="normal" @click="doRegister()">{{
                            $t('register.reg_btn')
                            }}</van-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
            checked: true,
            username: '',
            code: '',
            password: this.inputValue,
            passwordType: 'password'
        }
    },
    methods: {
        switchPasswordType() {
            this.passwordType =
                this.passwordType === 'password' ? 'text' : 'password'
        },
        back() {
            return window.history.back()
        },
        doRegister() {
            if (
                this.username === '' ||
                this.username === null ||
                this.username === undefined
            ) {
                this.$toast(this.$t('register.inp_user'))
                return false
            }
            if (
                this.password === '' ||
                this.password === null ||
                this.password === undefined
            ) {
                this.$toast(this.$t('register.inp_pass'))
                return false
            }
            if (
                this.code === '' ||
                this.code === null ||
                this.code === undefined
            ) {
                this.$toast(this.$t('register.inp_code'))
                return false
            }
            if (!this.checked) {
                this.$toast(this.$t('register.click_agreement'))
                return false
            }
            this.$http({
                method: 'post',
                data: {
                    username: this.username,
                    password: this.password,
                    code: this.code
                },
                url: 'member_register'
            }).then((res) => {
                if (res.code === 200) {
                    this.$toast.success(res.msg)
                    localStorage.setItem('token', res.data)
                    emitter.emit('token-update');
                    this.$router.push('Mine')
                } else {
                    this.$toast.fail(res.msg)
                }
            })
        }
    },
    created() {
        if (localStorage.getItem('token')) {
            return window.history.back()
        }
    }
}
</script>

<style lang='less' scoped>
@import '../../assets/css/base.css';

.register {
    height: 100vh;
    /* 占满视口高度 */
    display: flex;
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
    /* 水平居中 */
    background: transparent;
    /* 保持背景 */
}

.bg-container .bg-wrapper .register .nav-bar {
    background: transparent;
}

.bg-img {
    width: 100%;
    min-height: 100vh;
    background: url(/img/login/login-bg.png) no-repeat;
    background-size: cover;
    position: relative;
}

.register .wrapper {
    width: 90%;
    max-width: 420px;
    /* 控制表单宽度 */
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    padding: 0 1rem;
    background: rgba(0, 0, 0, 0.4);
    /* 可选：半透明背景提升对比度 */
    border-radius: 12px;
    /* 可选：圆角 */
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

.register .wrapper .title {
    line-height: 2.2rem;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: 2px;
    margin-top: 1.5rem;
}

.register .wrapper .loginForm {
    padding: 1.5rem 0;
}

.register .wrapper .loginForm .input {
    padding: 0.8rem 1rem;
    margin-top: 1rem;
    border-radius: 50px;
    text-align: center;
    font-size: 1rem;
    color: #4e4e4e;
}

::v-deep .van-field__right-icon .van-icon,
::v-deep .van-icon {
    font-size: 1.2rem;
}

.register .wrapper .loginForm .reset-text {
    margin: 0.8rem 0.5rem;
    display: flex;
    justify-content: flex-end;
}

.register .wrapper .loginForm .reset-text span {
    color: #fff;
    font-size: 0.85rem;
    font-weight: 500;
}

.register .wrapper .loginForm .register-text {
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.register .wrapper .loginForm .register-text span {
    color: #fff;
    font-size: 0.9rem;
    font-weight: 500;
}

.register .wrapper .loginForm .login-btn {
    margin-top: 1.5rem;
    width: 100%;
    height: 2.8rem;
    border-radius: 50px;
    color: #fff;
    background: @primary-bg;
    font-size: 1rem;
    font-weight: bold;
    border: none;
}

.register .wrapper .loginForm .agreement {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
}

.register .wrapper .loginForm .agreement .agreement-text {
    margin-left: 0.5rem;
    font-size: 0.8rem;
    color: #fff;
    font-weight: 500;
}

::v-deep .agreement .van-icon {
    font-size: 1rem;
}

::v-deep .agreement .van-checkbox__icon {
    font-size: 1.3rem;
}

::v-deep .agreement .van-checkbox__icon--checked .van-icon {
    color: #fff;
    border-color: rgb(126, 86, 120);
    background-color: rgb(126, 86, 120);
}

/* 移动端和平板统一 */
@media (max-width: 992px) {
    .register .wrapper {
        width: 90%;
        max-width: 420px;
        /* 不放大，保持和手机一样 */
    }
}
</style>
