<template>
    <div class="bg-container page">
        <div class="bg-img"></div>
        <div class="bg-wrapper">
            <div class="register">
                <van-nav-bar class="nav-bar" :border="false">
                    <template #left>
                        <van-icon
                            name="arrow-left"
                            color="#fff"
                            @click="back()"
                        />
                    </template>
                </van-nav-bar>
                <div class="wrapper">
                    <!-- <div class="logo-container">
                        <div class="logo-wrapper">
                            <img
                                class="logo-img"
                                :src="
                                    this.$store.getters.getBaseInfo.ico !==
                                    undefined
                                        ? this.$store.getters.getBaseInfo.ico
                                        : ''
                                "
                            />
                        </div>
                    </div> -->
                    <div class="title">{{ $t('register.title') }}</div>
                    <div class="loginForm">
                        <van-field
                            v-model="username"
                            clearable
                            input-align="left"
                            class="input"
                            :placeholder="$t('register.inp_user')"
                        />
                        <van-field
                            v-model="password"
                            :type="passwordType"
                            input-align="left"
                            class="input"
                            :placeholder="$t('register.inp_pass')"
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
                        <van-field
                            v-model="code"
                            clearable
                            input-align="left"
                            class="input"
                            :placeholder="$t('register.inp_code')"
                        />
                        <!-- <div class="agreement">
                            <van-checkbox v-model="checked" />
                            <span class="agreement-text">{{
                                $t('register.agreement')
                            }}</span>
                        </div> -->
                        <van-button
                            class="login-btn"
                            type="primary"
                            size="normal"
                            @click="doRegister()"
                            >{{ $t('register.reg_btn') }}</van-button
                        >
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
    height: 100%;
}
.bg-container .bg-wrapper .register .nav-bar {
    background: 0 0;
}
.bg-img{
    width: 100%;
    min-height: 100vh;
    background: url(/img/login/login-bg.png) no-repeat;
    background-size: 100% 100%;
    position: relative;
}
.register .wrapper {
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
.register .wrapper .title {
    line-height: 100px;
    text-align: center;
    font-size: 49px;
    font-weight: 700;
    color: #fff;
    letter-spacing: 5px;
    // background-color: red;
    margin-top: 60px;
}
.register .wrapper .loginForm {
    padding: 60px 5%;
}
.register .wrapper .loginForm .input {
    // padding: 10px 20px;
    padding: 40px 40px;
    margin-top: 60px;
    border-radius: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 30px;
    color: #4e4e4e;
}
::v-deep .van-field__right-icon .van-icon {
    font-size: 50px;
}
::v-deep .van-icon {
    font-size: 50px;
}
.register .wrapper .loginForm .reset-text {
    margin: 30px 15px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.register .wrapper .loginForm .reset-text span {
    color: #fff;
    font-size: 25px;
    font-weight: 500;
    line-height: 15px;
}
.register .wrapper .loginForm .register-text {
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.register .wrapper .loginForm .register-text span {
    color: #fff;
    font-size: 25px;
    font-weight: 500;
    line-height: 20px;
}
.register .wrapper .loginForm .login-btn {
    margin-top: 85px;
    width: 100%;
    height: 110px;
    border-radius: 50px;
    color: #fff;
    // background-color: #7e5678;
    // background: linear-gradient(90deg,#6529c9,#cc2996);
    background: @primary-bg;
    font-size: 30px;
    font-weight: bolder;
    border: none;
}
.register .wrapper .loginForm .agreement {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.register .wrapper .loginForm .agreement .agreement-text {
    margin-left: 10px;
    font-size: 25px;
    color: #fff;
    font-weight: 500;
    line-height: 30px;
}
::v-deep .agreement .van-icon {
    font-size: 30px;
}
::v-deep .agreement .van-checkbox__icon {
    font-size: 38px;
}
::v-deep .agreement .van-checkbox__icon--checked .van-icon {
    color: #fff;
    border-color: rgb(126, 86, 120);
    background-color: rgb(126, 86, 120);
}
</style>
