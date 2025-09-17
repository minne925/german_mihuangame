<template>
    <div class="container page">
        <van-nav-bar :title="$t('mine.rechargecenter')" class="nav-bar">
            <template #left>
                <van-icon name="arrow-left" color="#fff" @click="back()" />
            </template>
            <template #right>
                <span
                    class="nav-right"
                    @click="$router.push({ path: '/RechargeRecord' })"
                    >{{ $t('mine.rechargerecord') }}</span
                >
            </template>
        </van-nav-bar>
        <div class="main">
            <div v-if="successisVisible">
                <div class="success">
                    <div role="radiogroup" class="van-radio-group">
                        <div
                            role="radio"
                            tabindex="0"
                            aria-checked="true"
                            class="van-radio van-radio--label-disabled"
                        >
                            <div
                                class="van-radio__icon van-radio__icon--round van-radio__icon--checked"
                            >
                                <i
                                    class="van-badge__wrapper van-icon van-icon-success"
                                ></i>
                            </div>
                        </div>
                    </div>
                    <div class="info">
                        <p>
                            {{ $t('mine.rechargetsuccess') }}
                        </p>
                        <span>{{ $t('mine.Depositamount') }}</span
                        ><span>{{ this.pay_money }}</span>
                    </div>
                </div>
                <button @click="Success" class="btn">
                    {{ $t('common.success') }}
                </button>
            </div>
            <div v-if="recharisVisible">
                <span class="title">{{ $t('mine.transferinformation') }}</span>
                <p class="desc">{{ this.bankinfo.note }}</p>
                <div
                    v-for="(item, index) in bankItems"
                    :key="index"
                    class="item"
                >
                    <span class="label">{{ item.label }} </span>
                    <p>{{ item.value }}</p>
                    <button
                        class="tag-read copy"
                        v-clipboard:copy="item.value"
                        v-clipboard:success="onCopySuccess"
                        v-clipboard:error="onCopyError"
                    >
                        {{ $t('mine.copy') }}
                    </button>
                </div>
                <div class="payType" v-if="this.bankinfo.pic == 'usdt'">
                    <div class="payMoney">
                        <div class="money">
                            {{ $t('mine.Depositamount') }}：
                            <div class="van-cell van-field fieldMoney">
                                <div
                                    class="van-cell__value van-cell__value--alone van-field__value"
                                >
                                    <van-field
                                        v-model="pay_money"
                                        type="number"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="payType" v-if="this.bankinfo.pic == 'bank'">
                    <div class="payMoney">
                        <div class="money">
                            {{ $t('mine.Depositamount') }}：
                            <div class="van-cell van-field fieldMoney">
                                <div
                                    class="van-cell__value van-cell__value--alone van-field__value"
                                >
                                    <van-field
                                        v-model="pay_money"
                                        type="number"
                                    />
                                </div>
                            </div>
                            <span>{{ $t('common.currency') }}</span>
                        </div>
                        <div class="remark">
                            <span
                                >{{ $t('mine.depositamount') }}
                                {{ this.bankinfo.max }}
                                {{ $t('common.currency') }}</span
                            ><span
                                >{{ $t('mine.minimumdepositamount') }}
                                {{ this.bankinfo.min }}
                                {{ $t('common.currency') }}</span
                            >
                        </div>
                        <div class="moneyNumber">
                            <button @click="changePayMoney(1000)">
                                1000 {{ $t('common.currency') }}
                            </button>
                            <button @click="changePayMoney(5000)">
                                5000 {{ $t('common.currency') }}
                            </button>
                            <button @click="changePayMoney(1000000000)">
                                1000000000 {{ $t('common.currency') }}
                            </button>
                        </div>
                        <div class="balance" style="display: none">
                            <span>{{ $t('mine.balance') }}：</span>
                            <p>{{ this.userInfo.money }}</p>
                            <span> {{ $t('common.currency') }}</span>
                        </div>
                    </div>
                </div>
                <div class="payType">
                    <div class="payMoney">
                        <div class="label up span-icon-div">
                            <span> {{ $t('mine.uprechargeimg') }}：</span
                            ><i
                                class="van-badge__wrapper zhIcon zhIcon-ashbin ashbin-icon"
                            ></i>
                        </div>
                        <div class="van-uploader" style="margin: 0px auto">
                            <div class="van-uploader__wrapper">
                                <div class="van-uploader__input-wrapper">
                                    <img
                                        :src="imagePreview"
                                        style="width: 280px; height: 200px"
                                    /><input
                                        type="file"
                                        accept="image/*"
                                        class="van-uploader__input"
                                        @change="selectFile"
                                        ref="fileInput"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="service">
                            <span>{{ $t('mine.pleasecontact') }}</span
                            ><a>{{ $t('mine.onlineservice') }}</a>
                        </div>
                        <button
                            type="button"
                            class="van-button van-button--default van-button--normal sub-btn active"
                            @click="uploadFile"
                        >
                            <div class="van-button__content">
                                <span class="van-button__text">{{
                                    $t('common.submit')
                                }}</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showPopover: false,
            pay_money: null,
            userInfo: {},
            withdrawRole: {},
            bankinfo: {},
            bankItems: [],
            imagePreview: '/img/img.8027d41b.png',
            selectedFile: null,
            successisVisible: false,
            recharisVisible: true
        }
    },
    methods: {
        Success() {
            this.$router.push('/mine')
        },
        onCopySuccess() {
            this.$toast(this.$t('mine.copysuccessfully')) // 确保您有一个方法来显示通知
        },
        onCopyError() {
            this.$toast(this.$t('mine.copyerr')) // 显示错误通知
        },
        changePayMoney(amount) {
            this.pay_money = amount
        },
        back() {
            return window.history.back()
        },
        selectFile(event) {
            const file = event.target.files[0]
            if (!file) {
                return
            }

            this.selectedFile = file

            const reader = new FileReader()
            reader.onload = (e) => {
                this.imagePreview = e.target.result
            }
            reader.readAsDataURL(file)
        },
        uploadFile() {
            if (!this.selectedFile) {
                this.$toast(this.$t('mine.selectfileimg'))
                return
            }
            if (
                this.pay_money < this.bankinfo.min ||
                this.pay_money > this.bankinfo.max
            ) {
                this.$toast(this.$t('mine.pleaseinpmoney'))
                return
            }

            let formData = new FormData()
            formData.append('file', this.selectedFile)
            formData.append('money', this.pay_money)
            this.$http({
                method: 'post',
                url: 'pay-upload',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((res) => {
                    if (res.code === 200) {
                        // 处理上传成功
                        this.recharisVisible = false
                        this.successisVisible = true
                        // 清空文件选择
                        this.selectedFile = null
                        this.$refs.fileInput.value = null
                    } else {
                        // 处理错误情况
                        this.$toast(res.msg)
                    }
                })
                .catch(() => {
                    // 处理网络或其他错误
                    this.$toast(this.$t('mine.submiterr'))
                })
        },
        getUserInfo() {
            this.$http({
                method: 'get',
                url: 'user_info'
            }).then((res) => {
                if (res.code === 200) {
                    this.userInfo = res.data
                } else if (res.code === 401) {
                    this.$toast(res.msg)
                }
            })
        },
        getBankInfo() {
            return new Promise((resolve, reject) => {
                this.$http({
                    method: 'get',
                    data: { id: this.$route.query.id },
                    url: 'sys_get_BeneficiaryBankInfo'
                }).then((res) => {
                    if (res.code === 200) {
                        this.bankinfo = res.data
                        resolve() // Resolve the promise when bankinfo is set
                    } else if (res.code === 401) {
                        this.$toast(res.msg)
                        reject() // Reject the promise if there's an error
                    }
                })
            })
        },
        updateBankItems() {
            if (this.bankinfo.pic == 'usdt') {
                this.bankItems = [
                    {
                        label: '',
                        value: this.bankinfo.cardnum
                    }
                ]
            } else {
                this.bankItems = [
                    {
                        label: this.$t('mine.inp_bank'),
                        value: this.bankinfo.bank_name
                    },
                    {
                        label: this.$t('mine.Name'),
                        value: this.bankinfo.realname
                    },
                    {
                        label: this.$t('mine.lab_bankid'),
                        value: this.bankinfo.cardnum
                    }
                ]
            }
        }
    },
    created() {
        if (!localStorage.getItem('token')) {
            this.$router.push({ path: '/Login' })
        } else {
            //    this.getUserInfo()
            this.getBankInfo().then(() => {
                this.updateBankItems()
            })
        }
    }
}
</script>

<style lang='less' scoped>
@import '../../assets/css/base.css';

.main {
    padding: 4vw;
    color: #c24491;
    height: calc(100% - 6.667vw);
    overflow-y: auto;
    background-color: #fff;
}

.main .btn {
    width: 100%;
    margin-top: 5.333vw;
    height: 13.333vw;
    border-radius: 10.667vw;
    outline: 0;
    border: 0;
    color: #fff;
    background: linear-gradient(270deg, #c24491, #775fd9);
}
.main .up {
    margin-bottom: 2.667vw;
}
.van-uploader {
    position: relative;
    display: inline-block;
}
.van-uploader__wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
}
.van-uploader__input-wrapper {
    position: relative;
}
.main .payTyp {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 2vw;
    border-bottom: 1px solid #f2f2f5;
}
.main .success {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 0.267vw solid #cacaca;
    padding-bottom: 4vw;
}
.main .wrapper {
    padding: 4.267vw 4.267vw;
    display: flex;
    flex-direction: column;
}
.main .item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #000;
}
.main .copy {
    border: 1px solid #c24491;
    border-radius: 1.067vw;
    color: #000;
    background-color: #f2f2f5;
    outline: none;
}

.main .inputMoney {
    padding: 2.667vw 0;
    color: #c24491;
    border-top: 0.267vw solid #cacaca;
}
.title {
    font-size: 1.225rem;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.main .payType .payname {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.main .payType .payname img {
    width: 5.6vw;
    margin-right: 1.867vw;
}
.main .payType .description {
    margin-top: 2.8vw;
    color: #c24491;
}
.main .payMoney {
    display: flex;
    flex-direction: column;
}
.main .payMoney .label {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2vw 0;
    font-size: 1.867vw;
    color: #c24491;
}
.main .payMoney .money {
    font-size: 5.333vw;
    width: 100%;
    color: #000;
    border-bottom: 1px solid #f2f2f5;
    padding-bottom: 2.933vw;
    display: flex;
    align-items: center;
}
.main .payMoney .money .fieldMoney {
    width: 36.667vw !important;
    margin-left: 0.267vw;
}
.van-cell {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 16px;
    overflow: hidden;
    color: #323233;
    font-size: 3.933vw;

    background-color: #e6c3a1;
}
.main .payMoney .remark {
    padding: 4vw 0;
    display: flex;
    flex-direction: column;
    color: #c24491;
}
.main .payMoney .moneyNumber {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
}
.main .payMoney .moneyNumber button {
    margin-left: 1.333vw;
    margin-bottom: 2.667vw;
    min-width: 21.333vw;
    height: 10.667vw;
    outline: 0;
    border: 1px solid #c24491;
    border-radius: 1.333vw;
    color: #000;
    background: #fff;
}
.main .payMoney .balance {
    font-size: 4.8vw;
    color: #000;
    margin: 2.933vw 0;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.main .payMoney .service {
    text-align: center;
    margin-top: 2.933vw;
    font-size: 3.467vw;
    color: #000;
}
.main .payMoney .sub-btn {
    margin-top: 2.133vw;
    width: 100%;
    height: 13.333vw;
    line-height: 6.667vw;
    border-radius: 8vw;
    background-color: #cacacc;
    font-size: 4.8vw;
    font-weight: bolder;
    border: none;
    color: #fff;
    background: linear-gradient(270deg, #c24491, #775fd9);
}
</style>
